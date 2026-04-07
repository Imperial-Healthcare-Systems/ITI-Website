"use client"

import type { FormEvent } from "react"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { services } from "@/components/iti-content"

type ItiGetStartedModalProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
}

export default function ItiGetStartedModal({ open, onClose }: ItiGetStartedModalProps) {
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    if (!open) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedName = formState.name.trim()
    const normalizedPhone = formState.phone.trim()
    const normalizedEmail = formState.email.trim()
    const normalizedService = formState.service.trim()
    const normalizedMessage = formState.message.trim()

    if (!normalizedName || !normalizedPhone || !normalizedEmail || !normalizedService || !normalizedMessage) {
      setFormError("Please complete all fields before submitting.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setFormError("Please enter a valid email address.")
      return
    }

    const digitCount = normalizedPhone.replace(/\D/g, "").length
    if (digitCount < 7) {
      setFormError("Please enter a valid contact number.")
      return
    }

    setSubmitting(true)
    setFormError("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: normalizedName,
          phone: normalizedPhone,
          email: normalizedEmail,
          service: normalizedService,
          message: normalizedMessage,
          source: "imperia",
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Unable to submit your request right now.")
      }

      setFormSuccess(true)
      setFormState(initialFormState)
    } catch (error: unknown) {
      setFormError(error instanceof Error ? error.message : "Unable to submit your request right now.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="iti-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="iti-get-started-title">
      <div className="iti-modal-shell" onClick={onClose} />
      <div className="iti-modal-card">
        <button type="button" className="iti-modal-close" aria-label="Close form" onClick={onClose}>
          <X size={16} />
        </button>

        <div className="iti-modal-eyebrow">
          <div className="iti-section-bar" />
          <span className="iti-section-text">Get Started</span>
        </div>

        <h2 id="iti-get-started-title" className="iti-modal-title">
          Tell us what you need.
        </h2>
        <p className="iti-modal-subtitle">
          Share your requirement and our team will reach out with the right next step.
        </p>

        {formSuccess ? (
          <div className="iti-modal-success">
            <p>Your request has been submitted successfully. We will contact you shortly.</p>
            <button type="button" className="iti-btn-primary iti-modal-success-btn" onClick={onClose}>
              <span>Close</span>
            </button>
          </div>
        ) : (
          <form className="iti-modal-form" onSubmit={handleSubmit} noValidate>
            <div className="iti-modal-field-grid">
              <label className="iti-modal-field">
                <span>Name</span>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Enter your name"
                  autoComplete="name"
                />
              </label>

              <label className="iti-modal-field">
                <span>Number</span>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="Enter your number"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="iti-modal-field">
              <span>Mail</span>
              <input
                type="email"
                value={formState.email}
                onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                placeholder="Enter your email"
                autoComplete="email"
              />
            </label>

            <label className="iti-modal-field">
              <span>Select Service</span>
              <select
                value={formState.service}
                onChange={(event) => setFormState((current) => ({ ...current, service: event.target.value }))}
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.number} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="iti-modal-field">
              <span>Message</span>
              <textarea
                value={formState.message}
                onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell us about your project or requirement"
                rows={5}
              />
            </label>

            {formError ? <p className="iti-modal-error">{formError}</p> : null}

            <button type="submit" className="iti-btn-primary iti-modal-submit" disabled={submitting}>
              <span>{submitting ? "Submitting..." : "Submit"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
