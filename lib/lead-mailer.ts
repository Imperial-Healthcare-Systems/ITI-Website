import nodemailer from "nodemailer"
import type { LeadData } from "@/types/imperial"

const DEFAULT_LEAD_RECIPIENT = "info@imperialtechinnovations.com"

let cachedTransporter: nodemailer.Transporter | null = null

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (!value) return fallback
  return value.toLowerCase() === "true"
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function getMailConfig() {
  const host = process.env.SMTP_HOST?.trim()
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()
  const fromAddress =
    process.env.SMTP_FROM?.trim() || process.env.MAIL_FROM?.trim() || process.env.SMTP_USER?.trim()
  const toAddress = process.env.LEADS_TO_EMAIL?.trim() || DEFAULT_LEAD_RECIPIENT
  const secure = parseBoolean(process.env.SMTP_SECURE, port === 465)

  if (!host || !user || !pass || !fromAddress) {
    return {
      ok: false as const,
      error:
        "Lead email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM (or MAIL_FROM).",
    }
  }

  return {
    ok: true as const,
    host,
    port,
    user,
    pass,
    secure,
    fromAddress,
    toAddress,
  }
}

function getTransporter(config: Extract<ReturnType<typeof getMailConfig>, { ok: true }>) {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    })
  }

  return cachedTransporter
}

function buildLeadDetails(lead: Partial<LeadData>) {
  const details = [
    { label: "Name", value: lead.name || "Not provided" },
    { label: "Phone", value: lead.phone || "Not provided" },
    { label: "Email", value: lead.email || "Not provided" },
    { label: "Service", value: lead.service || "Not provided" },
    { label: "Message", value: lead.message || "Not provided" },
    { label: "Source", value: lead.source || "imperia" },
    { label: "Captured At", value: lead.capturedAt || new Date().toISOString() },
  ]

  const text = details.map((item) => `${item.label}: ${item.value}`).join("\n")

  const html = details
    .map(
      (item) =>
        `<tr><td style="padding:10px 12px;border:1px solid #1f2937;color:#c9a96e;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">${escapeHtml(
          item.label
        )}</td><td style="padding:10px 12px;border:1px solid #1f2937;color:#d4dce8;font-size:14px;line-height:1.7;">${escapeHtml(
          item.value
        )}</td></tr>`
    )
    .join("")

  return { text, html }
}

export async function sendLeadNotification(lead: Partial<LeadData>) {
  const config = getMailConfig()
  if (!config.ok) {
    return { success: false, error: config.error }
  }

  try {
    const transporter = getTransporter(config)
    const { text, html } = buildLeadDetails(lead)
    const serviceLabel = lead.service?.trim()
    const nameLabel = lead.name?.trim()
    const subjectParts = ["New Imperial Tech Lead"]

    if (serviceLabel) subjectParts.push(serviceLabel)
    if (nameLabel) subjectParts.push(nameLabel)

    await transporter.sendMail({
      from: `Imperial Tech Innovations <${config.fromAddress}>`,
      to: config.toAddress,
      replyTo: lead.email?.trim() || undefined,
      subject: subjectParts.join(" | "),
      text,
      html: `
        <div style="background:#03060d;padding:32px;font-family:Arial,sans-serif;color:#d4dce8;">
          <div style="max-width:720px;margin:0 auto;border:1px solid rgba(201,169,110,0.24);background:#0a1020;">
            <div style="padding:24px 28px;border-bottom:1px solid rgba(201,169,110,0.18);">
              <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#c9a96e;">Get Started Lead</div>
              <h1 style="margin:12px 0 0;font-family:Georgia,serif;font-size:32px;font-weight:400;color:#f2f5f9;">New website inquiry received</h1>
            </div>
            <div style="padding:28px;">
              <table style="width:100%;border-collapse:collapse;background:#060a14;">${html}</table>
            </div>
          </div>
        </div>
      `,
    })

    return { success: true as const }
  } catch (error) {
    console.error("[lead-mailer] Failed to send lead email:", error)
    return {
      success: false as const,
      error: error instanceof Error ? error.message : "Unable to send lead email",
    }
  }
}
