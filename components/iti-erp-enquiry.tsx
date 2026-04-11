"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Building2, Settings2, Wallet, User, ArrowRight, ArrowLeft,
  CheckCircle2, Cpu, LayoutDashboard, GitBranch, MapPin,
  Layers, Globe, ChevronDown,
} from "lucide-react"

/* ─── Types ─────────────────────────────────────────── */
type FormData = {
  // Step 1
  companyName: string
  industry: string
  companySize: string
  country: string
  // Step 2
  erpType: string
  modules: string[]
  currentSystem: string
  timeline: string
  // Step 3
  budget: string
  teamSize: string
  integrationNeeded: string
  integrationDetails: string
  // Step 4
  name: string
  email: string
  phone: string
  notes: string
}

const INITIAL: FormData = {
  companyName: "", industry: "", companySize: "", country: "",
  erpType: "", modules: [], currentSystem: "", timeline: "",
  budget: "", teamSize: "", integrationNeeded: "", integrationDetails: "",
  name: "", email: "", phone: "", notes: "",
}

const INDUSTRIES = [
  "Healthcare & Life Sciences", "FinTech & Banking", "Manufacturing",
  "Retail & E-Commerce", "Logistics & Supply Chain", "Real Estate",
  "Education & EdTech", "IT & SaaS", "Legal & Compliance", "Other",
]

const COMPANY_SIZES = ["1–10", "10–50", "50–200", "200+"]

const ERP_TYPES = [
  "CRM (Customer Relationship Management)",
  "HRM (Human Resource Management)",
  "Inventory / Supply Chain",
  "Finance / Accounting",
  "Custom ERP",
]

const MODULES = [
  "Lead & Sales Management", "Employee Lifecycle", "Payroll & Attendance",
  "Inventory & Stock", "Purchase & Procurement", "Accounts & Billing",
  "Project Management", "Client Portal", "Reporting & Analytics",
  "Document Management", "Workflow Automation", "Multi-Branch Support",
]

const TIMELINES = ["Immediate", "1–3 months", "3–6 months", "6+ months"]

const BUDGETS = ["₹1L – ₹5L", "₹5L – ₹15L", "₹15L – ₹30L", "₹30L+"]

/* ─── Step config ────────────────────────────────────── */
const STEPS = [
  { label: "Business Profile", icon: Building2 },
  { label: "Requirements",     icon: Settings2 },
  { label: "Budget & Scale",   icon: Wallet },
  { label: "Contact",          icon: User },
]

/* ─── What you get ───────────────────────────────────── */
const BENEFITS = [
  { icon: Cpu,             text: "Custom ERP architecture designed for your ops" },
  { icon: LayoutDashboard, text: "Scalable, modular system tailored to your scale" },
  { icon: GitBranch,       text: "Dedicated consultation & technical roadmap" },
  { icon: Layers,          text: "Full implementation support & onboarding" },
  { icon: Globe,           text: "Global delivery — US & India teams" },
]

const TRUST = [
  { value: "100+", label: "Systems Deployed" },
  { value: "50+",  label: "Automation Workflows" },
  { value: "2",    label: "Global Offices" },
]

/* ─── Inline validation per step ────────────────────── */
function validateStep(step: number, data: FormData): string {
  if (step === 0) {
    if (!data.companyName.trim()) return "Company name is required."
    if (!data.industry)          return "Please select your industry."
    if (!data.companySize)       return "Please select company size."
    if (!data.country.trim())    return "Country / Region is required."
  }
  if (step === 1) {
    if (!data.erpType)           return "Please select an ERP type."
    if (!data.timeline)          return "Please select a project timeline."
  }
  if (step === 2) {
    if (!data.budget)            return "Please select an estimated budget."
    if (!data.teamSize.trim())   return "Expected team size is required."
  }
  if (step === 3) {
    if (!data.name.trim())       return "Your name is required."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Enter a valid work email."
    if (data.phone.replace(/\D/g, "").length < 7)        return "Enter a valid phone number."
  }
  return ""
}

/* ─── Field primitives ───────────────────────────────── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="erp-field">
      <label className="erp-label">{label}</label>
      {children}
    </div>
  )
}

function Input({
  value, onChange, placeholder, type = "text", autoFocus,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string
  type?: string; autoFocus?: boolean
}) {
  return (
    <input
      className="erp-input"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoComplete="off"
    />
  )
}

function Select({
  value, onChange, options, placeholder,
}: {
  value: string; onChange: (v: string) => void
  options: string[]; placeholder?: string
}) {
  return (
    <div className="erp-select-wrap">
      <select
        className="erp-input erp-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder ?? "Select…"}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={13} className="erp-select-chevron" />
    </div>
  )
}

function PillGroup({
  options, selected, onToggle, single,
}: {
  options: string[]; selected: string | string[]
  onToggle: (v: string) => void; single?: boolean
}) {
  return (
    <div className="erp-pill-group">
      {options.map((o) => {
        const active = single
          ? selected === o
          : (selected as string[]).includes(o)
        return (
          <button
            key={o}
            type="button"
            className={`erp-pill${active ? " active" : ""}`}
            onClick={() => onToggle(o)}
          >
            {active && <CheckCircle2 size={10} />}
            {o}
          </button>
        )
      })}
    </div>
  )
}

/* ─── Main component ─────────────────────────────────── */
export default function ItiErpEnquiry() {
  const [step, setStep]       = useState(0)
  const [data, setData]       = useState<FormData>(INITIAL)
  const [error, setError]     = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone]       = useState(false)
  const formRef               = useRef<HTMLDivElement>(null)

  function set<K extends keyof FormData>(key: K, val: FormData[K]) {
    setData((d) => ({ ...d, [key]: val }))
    setError("")
  }

  function toggleModule(m: string) {
    setData((d) => ({
      ...d,
      modules: d.modules.includes(m)
        ? d.modules.filter((x) => x !== m)
        : [...d.modules, m],
    }))
  }

  function next() {
    const err = validateStep(step, data)
    if (err) { setError(err); return }
    setError("")
    setStep((s) => s + 1)
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function back() {
    setError("")
    setStep((s) => s - 1)
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  async function submit() {
    const err = validateStep(3, data)
    if (err) { setError(err); return }
    setSubmitting(true)
    setError("")
    try {
      const message = [
        `ERP Type: ${data.erpType}`,
        `Modules: ${data.modules.join(", ") || "N/A"}`,
        `Current System: ${data.currentSystem || "None"}`,
        `Timeline: ${data.timeline}`,
        `Budget: ${data.budget}`,
        `Team Size: ${data.teamSize}`,
        `Integration: ${data.integrationNeeded}${data.integrationDetails ? " — " + data.integrationDetails : ""}`,
        `Company: ${data.companyName} | ${data.industry} | ${data.companySize} | ${data.country}`,
        data.notes ? `Notes: ${data.notes}` : "",
      ].filter(Boolean).join("\n")

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: `ERP Enquiry — ${data.erpType}`,
          message,
          kind: "erp-enquiry",
          source: "imperia",
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || "Submission failed.")
      }
      setDone(true)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong.")
    } finally {
      setSubmitting(false)
    }
  }

  const progress = ((step + (done ? 1 : 0)) / STEPS.length) * 100

  return (
    <section className="erp-section iti-pad-lg" id="erp-enquiry">
      <div className="erp-bg-grid" aria-hidden />
      <div className="iti-inner erp-inner">

        {/* Header */}
        <div className="erp-header iti-reveal">
          <div className="iti-section-eyebrow" style={{ justifyContent: "center" }}>
            <div className="iti-section-bar" />
            <span className="iti-section-text">Enterprise Solutions</span>
          </div>
          <h2 className="erp-heading">
            Start Your <em>ERP Transformation</em>
          </h2>
          <p className="erp-subheading">
            Tell us about your business and requirements. Our team will design a tailored ERP
            solution aligned with your operations, scale, and growth goals.
          </p>
        </div>

        {/* Body: form + side panel */}
        <div className="erp-body">

          {/* Side panel */}
          <aside className="erp-panel iti-reveal">
            <div className="erp-panel-label">What You Get</div>
            <ul className="erp-benefits">
              {BENEFITS.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="erp-benefit-icon"><Icon size={13} /></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="erp-panel-divider" />
            <div className="erp-trust-label">Trusted by Growing Businesses</div>
            <div className="erp-trust-metrics">
              {TRUST.map(({ value, label }) => (
                <div key={label} className="erp-trust-item">
                  <span className="erp-trust-value">{value}</span>
                  <span className="erp-trust-label-sm">{label}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Form card */}
          <div className="erp-card iti-reveal iti-rd1" ref={formRef}>

            {done ? (
              <motion.div
                className="erp-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="erp-success-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h3>Enquiry Received</h3>
                <p>
                  Thank you, <strong>{data.name}</strong>. Our team will review your requirements
                  and reach out within <strong>24 hours</strong> with a tailored ERP proposal.
                </p>
                <div className="erp-success-ref">
                  Ref: ERP-{Date.now().toString().slice(-6)}
                </div>
              </motion.div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="erp-progress-wrap">
                  <div className="erp-progress-track">
                    <motion.div
                      className="erp-progress-fill"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="erp-step-indicators">
                    {STEPS.map(({ label, icon: Icon }, i) => (
                      <div
                        key={label}
                        className={`erp-step-ind${i === step ? " active" : ""}${i < step ? " done" : ""}`}
                      >
                        <div className="erp-step-dot">
                          {i < step ? <CheckCircle2 size={10} /> : <Icon size={10} />}
                        </div>
                        <span className="erp-step-name">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step content */}
                <div className="erp-step-wrap">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      {/* Step 1 */}
                      {step === 0 && (
                        <div className="erp-step-fields">
                          <div className="erp-step-title">
                            <Building2 size={16} />
                            Business Profile
                          </div>
                          <Field label="Company Name">
                            <Input value={data.companyName} onChange={(v) => set("companyName", v)}
                              placeholder="e.g. Acme Technologies" />
                          </Field>
                          <Field label="Industry">
                            <Select value={data.industry} onChange={(v) => set("industry", v)}
                              options={INDUSTRIES} placeholder="Select industry" />
                          </Field>
                          <Field label="Company Size">
                            <PillGroup options={COMPANY_SIZES} selected={data.companySize}
                              onToggle={(v) => set("companySize", v)} single />
                          </Field>
                          <Field label="Country / Region">
                            <Input value={data.country} onChange={(v) => set("country", v)}
                              placeholder="e.g. India, USA, UAE" />
                          </Field>
                        </div>
                      )}

                      {/* Step 2 */}
                      {step === 1 && (
                        <div className="erp-step-fields">
                          <div className="erp-step-title">
                            <Settings2 size={16} />
                            Project Requirements
                          </div>
                          <Field label="ERP Type Needed">
                            <PillGroup options={ERP_TYPES} selected={data.erpType}
                              onToggle={(v) => set("erpType", v)} single />
                          </Field>
                          <Field label="Key Modules Required (select all that apply)">
                            <PillGroup options={MODULES} selected={data.modules}
                              onToggle={toggleModule} />
                          </Field>
                          <Field label="Current System (if any)">
                            <Input value={data.currentSystem} onChange={(v) => set("currentSystem", v)}
                              placeholder="e.g. Tally, Excel, SAP, None" />
                          </Field>
                          <Field label="Project Timeline">
                            <PillGroup options={TIMELINES} selected={data.timeline}
                              onToggle={(v) => set("timeline", v)} single />
                          </Field>
                        </div>
                      )}

                      {/* Step 3 */}
                      {step === 2 && (
                        <div className="erp-step-fields">
                          <div className="erp-step-title">
                            <Wallet size={16} />
                            Budget &amp; Scale
                          </div>
                          <Field label="Estimated Budget">
                            <PillGroup options={BUDGETS} selected={data.budget}
                              onToggle={(v) => set("budget", v)} single />
                          </Field>
                          <Field label="Expected Users / Team Size">
                            <Input value={data.teamSize} onChange={(v) => set("teamSize", v)}
                              placeholder="e.g. 25 users across 3 departments" autoFocus />
                          </Field>
                          <Field label="Integration Needs">
                            <PillGroup
                              options={["Yes, we need integrations", "No integrations needed"]}
                              selected={data.integrationNeeded}
                              onToggle={(v) => set("integrationNeeded", v)}
                              single
                            />
                          </Field>
                          {data.integrationNeeded === "Yes, we need integrations" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <Field label="Integration Details">
                                <textarea
                                  className="erp-input erp-textarea"
                                  value={data.integrationDetails}
                                  onChange={(e) => set("integrationDetails", e.target.value)}
                                  placeholder="e.g. Integrate with Razorpay, WhatsApp API, Tally"
                                  rows={3}
                                />
                              </Field>
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* Step 4 */}
                      {step === 3 && (
                        <div className="erp-step-fields">
                          <div className="erp-step-title">
                            <User size={16} />
                            Contact Details
                          </div>
                          <div className="erp-field-row">
                            <Field label="Full Name">
                              <Input value={data.name} onChange={(v) => set("name", v)}
                                placeholder="Your name" autoFocus />
                            </Field>
                            <Field label="Phone Number">
                              <Input value={data.phone} onChange={(v) => set("phone", v)}
                                type="tel" placeholder="+91 98765 43210" />
                            </Field>
                          </div>
                          <Field label="Work Email">
                            <Input value={data.email} onChange={(v) => set("email", v)}
                              type="email" placeholder="you@company.com" />
                          </Field>
                          <Field label="Additional Notes (optional)">
                            <textarea
                              className="erp-input erp-textarea"
                              value={data.notes}
                              onChange={(e) => set("notes", e.target.value)}
                              placeholder="Any specific requirements, challenges, or questions…"
                              rows={4}
                            />
                          </Field>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Error */}
                {error && (
                  <motion.p
                    className="erp-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {error}
                  </motion.p>
                )}

                {/* Nav buttons */}
                <div className="erp-nav">
                  {step > 0 && (
                    <button type="button" className="erp-btn-back" onClick={back}>
                      <ArrowLeft size={13} />
                      <span>Back</span>
                    </button>
                  )}
                  <div style={{ flex: 1 }} />
                  {step < STEPS.length - 1 ? (
                    <button type="button" className="erp-btn-next" onClick={next}>
                      <span>Continue</span>
                      <ArrowRight size={13} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="erp-btn-submit"
                      onClick={submit}
                      disabled={submitting}
                    >
                      <span>{submitting ? "Submitting…" : "Request ERP Consultation"}</span>
                      {!submitting && <ArrowRight size={13} />}
                    </button>
                  )}
                </div>

                {step === STEPS.length - 1 && (
                  <p className="erp-microcopy">
                    <MapPin size={10} />
                    Our team will get back within 24 hours
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
