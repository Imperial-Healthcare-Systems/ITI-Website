import { NextResponse } from "next/server"
import { captureLeadDetailed } from "@/lib/supabase"
import type { CallerSource } from "@/types/imperial"

const allowedSources: CallerSource[] = ["imperia", "dashonix", "irrf", "api"]

export async function POST(req: Request) {
  try {
    const { name, email, source } = await req.json()

    const normalizedName = typeof name === "string" ? name.trim() : ""
    const normalizedEmail = typeof email === "string" ? email.trim() : ""
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

    const result = await captureLeadDetailed({
      name: normalizedName || "Website Inquiry",
      email: normalizedEmail,
      source: normalizedSource,
      persona: "general",
      capturedAt: new Date().toISOString(),
    })

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Lead capture failed",
          details: result.error || "Unknown Supabase error",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[leads] Route error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
