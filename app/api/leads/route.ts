import { NextResponse } from "next/server"
import { captureLeadDetailed } from "@/lib/supabase"
import { sendLeadNotification } from "@/lib/lead-mailer"
import type { CallerSource } from "@/types/imperial"

const allowedSources: CallerSource[] = ["imperia", "dashonix", "irrf", "api"]

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message, source, kind } = await req.json()

    const normalizedName = typeof name === "string" ? name.trim() : ""
    const normalizedPhone = typeof phone === "string" ? phone.trim() : ""
    const normalizedEmail = typeof email === "string" ? email.trim() : ""
    const normalizedService = typeof service === "string" ? service.trim() : ""
    const normalizedMessage = typeof message === "string" ? message.trim() : ""
    const normalizedKind = typeof kind === "string" ? kind.trim() : ""
    const normalizedSource: CallerSource =
      typeof source === "string" && allowedSources.includes(source as CallerSource)
        ? (source as CallerSource)
        : "imperia"

    if (!normalizedEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (normalizedKind === "get-started") {
      if (!normalizedName || !normalizedPhone || !normalizedService || !normalizedMessage) {
        return NextResponse.json(
          { error: "Name, number, service, and message are required" },
          { status: 400 }
        )
      }
    }

    const leadPayload = {
      name: normalizedName || "Website Inquiry",
      email: normalizedEmail,
      phone: normalizedPhone,
      service: normalizedService,
      message: normalizedMessage,
      source: normalizedSource,
      persona: "general" as const,
      capturedAt: new Date().toISOString(),
    }

    const emailResult = await sendLeadNotification(leadPayload)
    if (!emailResult.success) {
      return NextResponse.json(
        {
          error: emailResult.error || "Lead email delivery failed",
        },
        { status: 500 }
      )
    }

    const result = await captureLeadDetailed(leadPayload)

    if (!result.success) {
      console.warn("[leads] Lead stored email succeeded but db capture failed:", result.error)
    }

    return NextResponse.json({
      success: true,
      emailed: true,
      stored: result.success,
    })
  } catch (error) {
    console.error("[leads] Route error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
