"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  industries,
  marqueeItems,
  metrics,
  processSteps,
  services,
  whyItems,
} from "@/components/iti-content"
import ItiIndustriesCarousel from "@/components/iti-industries-carousel"
import ItiSiteFooter from "@/components/iti-site-footer"
import ItiSiteHeader from "@/components/iti-site-header"
import ItiCounter from "@/components/iti-counter"
import ItiHeroCanvas from "@/components/iti-hero-canvas"
import ItiMapCanvas from "@/components/iti-map-canvas"
import ItiPricingSection from "@/components/iti-pricing-section"
import ItiErpEnquiry from "@/components/iti-erp-enquiry"
import ItiGetStartedModal from "@/components/iti-get-started-modal"

export default function ItiHomePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [loaderValue, setLoaderValue] = useState(0)
  const [loaderDone, setLoaderDone] = useState(false)
  const [ctaForm, setCtaForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)
  const [consultModalOpen, setConsultModalOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add("iti-home-html")
    document.body.classList.add("iti-home-body")

    return () => {
      document.documentElement.classList.remove("iti-home-html")
      document.body.classList.remove("iti-home-body")
    }
  }, [])

  useEffect(() => {
    let progress = 0
    let closeTimeout = 0
    const interval = window.setInterval(() => {
      progress = Math.min(100, progress + Math.floor(Math.random() * 7) + 3)
      setLoaderValue(progress)
      if (progress >= 100) {
        window.clearInterval(interval)
        closeTimeout = window.setTimeout(() => setLoaderDone(true), 320)
      }
    }, 48)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(closeTimeout)
    }
  }, [])

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    const nodes = Array.from(page.querySelectorAll<HTMLElement>(".iti-reveal"))
    if (!nodes.length) return

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const page = pageRef.current
    const dot = dotRef.current
    const ring = ringRef.current
    if (!page || !dot || !ring) return
    if (!window.matchMedia("(hover: hover)").matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frame = 0

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      frame = window.requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    const handleInteractiveEnter = () => page.classList.add("iti-ch")
    const handleInteractiveLeave = () => page.classList.remove("iti-ch")

    const interactiveElements = Array.from(page.querySelectorAll<HTMLElement>("a, button, input"))
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleInteractiveEnter)
      element.addEventListener("mouseleave", handleInteractiveLeave)
    })

    animate()
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleInteractiveEnter)
        element.removeEventListener("mouseleave", handleInteractiveLeave)
      })
    }
  }, [])

  function setCtaField(key: keyof typeof ctaForm, value: string) {
    setCtaForm((f) => ({ ...f, [key]: value }))
    if (formError) setFormError("")
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const name    = ctaForm.name.trim()
    const email   = ctaForm.email.trim()
    const phone   = ctaForm.phone.trim()
    const message = ctaForm.message.trim()

    if (!name)    { setFormError("Please enter your name."); return }
    if (!email)   { setFormError("Please enter your email."); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Enter a valid email address."); return
    }
    if (!phone)   { setFormError("Please enter your phone number."); return }
    if (!message) { setFormError("Please add a message."); return }

    setSubmitting(true)
    setFormError("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, source: "imperia", kind: "contact" }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Unable to submit your request right now.")
      }

      setFormSuccess(true)
      setCtaForm({ name: "", email: "", phone: "", message: "" })
    } catch (error: unknown) {
      setFormError(error instanceof Error ? error.message : "Unable to submit your request right now.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div ref={pageRef} className="iti-page">
      <div className={`iti-loader${loaderDone ? " out" : ""}`}>
        <div className="iti-loader-brand">
          Imperial <span>Tech</span> Innovations
        </div>
        <div className="iti-loader-track">
          <div className="iti-loader-fill" style={{ width: `${loaderValue}%` }} />
        </div>
        <div className="iti-loader-pct">{loaderValue}%</div>
      </div>

      <div ref={dotRef} className="iti-cdot" />
      <div ref={ringRef} className="iti-cring" />

      <ItiSiteHeader />

      <section className="iti-hero" id="home">
        <ItiHeroCanvas />
        <div className="iti-hero-overlay" />
        <div className="iti-hero-vignette" />
        <div className="iti-hero-content">
          <div className="iti-hero-tag">Est. 2025 | Richmond, KY, USA | Gurugram, India</div>
          <div className="iti-hero-eyebrow">
            <div className="iti-eyebrow-bar" />
            <span className="iti-eyebrow-text">Global Technology Partner</span>
          </div>
          <h1 className="iti-hero-title">
            <span>High-Performance</span>
            <span>IT and SaaS Built</span>
            <span>for Scale.</span>
          </h1>
          <p className="iti-hero-sub">
            We architect enterprise-grade technology systems that create measurable outcomes, from
            intelligent automation to cloud-native platforms built for what comes next.
          </p>
          <div className="iti-hero-ctas">
            <button type="button" className="iti-btn-primary" onClick={() => setConsultModalOpen(true)}>
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </button>
            <a href="#services" className="iti-btn-outline">
              <span>Explore Services</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
        <div className="iti-hero-scroll">
          <div className="iti-scroll-line" />
          <span className="iti-scroll-text">Scroll</span>
        </div>
        <div className="iti-hero-stats">
          <div>
            <div className="iti-hero-stat-number">
              <ItiCounter target={98} />%
            </div>
            <div className="iti-hero-stat-label">Client Retention</div>
          </div>
          <div>
            <div className="iti-hero-stat-number">
              <ItiCounter target={14} />d
            </div>
            <div className="iti-hero-stat-label">Avg. Delivery</div>
          </div>
          <div>
            <div className="iti-hero-stat-number">
              <ItiCounter target={40} />+
            </div>
            <div className="iti-hero-stat-label">Solutions Built</div>
          </div>
        </div>
        <div className="iti-hero-pins">
          <div className="iti-pin">
            <span className="iti-pin-dot" />
            <span className="iti-pin-text">Richmond, Kentucky</span>
          </div>
          <div className="iti-pin">
            <span className="iti-pin-dot blue" />
            <span className="iti-pin-text">Gurugram, India</span>
          </div>
        </div>
      </section>

      <div className="iti-marquee-wrap" aria-hidden="true">
        <div className="iti-marquee-inner">
          {[0, 1, 2].map((loop) => (
            <div key={loop} className="iti-marquee-group">
              {marqueeItems.map((item) => (
                <div key={`${loop}-${item}`} className="iti-marquee-item">
                  <span className="iti-marquee-sep" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="iti-map-section iti-pad">
        <div className="iti-inner">
          <div className="iti-reveal">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Global Footprint</span>
            </div>
            <h2 className="iti-section-title">
              Two Continents.
              <br />
              <em>One Standard.</em>
            </h2>
            <p className="iti-section-sub">
              US-headquartered leadership with India-based delivery excellence creates a practical
              model for world-class technology at enterprise scale.
            </p>
          </div>
          <ItiMapCanvas />
        </div>
      </section>

      <section className="iti-metrics-section">
        <div className="iti-metrics-grid">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`iti-metric iti-reveal${index > 0 ? ` iti-rd${Math.min(index, 4)}` : ""}`}
            >
              <div className="iti-metric-num">
                <ItiCounter target={metric.target} />
                <span className="iti-metric-suffix">{metric.suffix}</span>
              </div>
              <div className="iti-metric-label">{metric.label}</div>
              <div className="iti-metric-sub">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="iti-pad-lg" id="services">
        <div className="iti-inner">
          <div className="iti-reveal">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Service Architecture</span>
            </div>
            <h2 className="iti-section-title">
              Full-Spectrum
              <br />
              <em>Technology Services</em>
            </h2>
            <p className="iti-section-sub">
              Every capability your business needs to compete at a high level, from idea to
              intelligent system.
            </p>
          </div>
          <div className="iti-services-grid iti-reveal iti-rd1">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.number} className="iti-service-card">
                  <div className="iti-service-num">{service.number}</div>
                  <Icon className="iti-service-icon" strokeWidth={1.5} />
                  <h3 className="iti-service-name">{service.title}</h3>
                  <p className="iti-service-desc">{service.description}</p>
                  <span className="iti-service-arrow">
                    <ArrowRight size={16} />
                  </span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <ItiPricingSection />

      <section className="iti-pad" id="industries">
        <div className="iti-inner iti-center">
          <div className="iti-reveal">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Industries We Serve</span>
            </div>
            <h2 className="iti-section-title">
              Engineered for
              <br />
              <em>High-Value Verticals</em>
            </h2>
            <p className="iti-section-sub">
              We build for sectors where reliability, compliance, operational visibility, and
              execution quality directly shape revenue, trust, and long-term scale.
            </p>
          </div>
          <ItiIndustriesCarousel items={industries} />
        </div>
      </section>

      <section className="iti-process-section iti-pad-lg" id="process">
        <div className="iti-grid-bg" />
        <div className="iti-inner iti-process-inner">
          <div className="iti-reveal iti-center">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">How We Work</span>
            </div>
            <h2 className="iti-section-title">
              From <em>Discover</em>
              <br />
              to Scale
            </h2>
          </div>
          <div className="iti-process-steps iti-reveal iti-rd1">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <article key={step.number} className="iti-process-step">
                  <div className="iti-process-num">{step.number}</div>
                  <div className="iti-process-icon">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <h3 className="iti-process-name">{step.title}</h3>
                  <p className="iti-process-desc">{step.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="iti-pad">
        <div className="iti-inner">
          <div className="iti-reveal">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Why Imperial</span>
            </div>
            <h2 className="iti-section-title">
              The Decision
              <br />
              <em>is Clear.</em>
            </h2>
          </div>
          <div className="iti-why-grid iti-reveal iti-rd1">
            {whyItems.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.number} className="iti-why-card">
                  <div className="iti-why-num">{item.number}</div>
                  <div className="iti-why-icon">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="iti-why-title">{item.title}</h3>
                  <p className="iti-why-body">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="iti-auth-section iti-pad">
        <div className="iti-inner iti-center iti-reveal">
          <div className="iti-section-eyebrow">
            <div className="iti-section-bar" />
            <span className="iti-section-text">Our Philosophy</span>
          </div>
          <div className="iti-auth-quote">
            <blockquote>
              We do not build technology for today&apos;s problem. We architect systems for
              tomorrow&apos;s scale because the companies that win next are building the right
              foundations now.
            </blockquote>
            <div className="iti-auth-cite">Er. Pabitra Ratan Dash | Founder and CEO, Imperial Group</div>
          </div>
        </div>
      </section>

      <ItiErpEnquiry />

      <section className="iti-cta-section iti-pad-lg" id="contact">
        <div className="iti-cta-glow" />
        <div className="iti-inner iti-cta-inner iti-reveal">
          <div className="iti-section-eyebrow">
            <div className="iti-section-bar" />
            <span className="iti-section-text">Start Your Journey</span>
          </div>
          <h2 className="iti-cta-title">
            Ready to <em>Engineer</em>
            <br />
            Your Future?
          </h2>
          <p className="iti-cta-sub">
            Join the companies building their technology advantage with Imperial. Tell us what
            you&apos;re building and we&apos;ll tell you how to scale it.
          </p>

          {formSuccess ? (
            <div className="iti-cta-success">
              Your request has been captured. We&apos;ll be in touch within one business day.
            </div>
          ) : (
            <form className="iti-cta-form-full" onSubmit={handleSubmit} noValidate>
              <div className="iti-cta-row">
                <div className="iti-cta-field">
                  <label className="iti-cta-label">Name</label>
                  <input
                    className="iti-cta-input"
                    type="text"
                    value={ctaForm.name}
                    onChange={(e) => setCtaField("name", e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div className="iti-cta-field">
                  <label className="iti-cta-label">Phone</label>
                  <input
                    className="iti-cta-input"
                    type="tel"
                    value={ctaForm.phone}
                    onChange={(e) => setCtaField("phone", e.target.value)}
                    placeholder="+91 or +1 number"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="iti-cta-field">
                <label className="iti-cta-label">Work Email</label>
                <input
                  className="iti-cta-input"
                  type="email"
                  value={ctaForm.email}
                  onChange={(e) => setCtaField("email", e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
              <div className="iti-cta-field">
                <label className="iti-cta-label">Message</label>
                <textarea
                  className="iti-cta-input iti-cta-textarea"
                  value={ctaForm.message}
                  onChange={(e) => setCtaField("message", e.target.value)}
                  placeholder="Tell us what you're building or what you need…"
                  rows={4}
                />
              </div>
              {formError && <p className="iti-cta-error">{formError}</p>}
              <button className="iti-cta-submit" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          <p className="iti-cta-legal">
            No spam. By submitting, you agree to our{" "}
            <a href="/legal/privacy-policy" className="iti-cta-legal-link">Privacy Policy</a>,{" "}
            <a href="/legal/terms-of-service" className="iti-cta-legal-link">Terms of Service</a>, and{" "}
            <a href="/legal/refund-policy" className="iti-cta-legal-link">Refund Policy</a>.
          </p>
        </div>
      </section>

      <ItiSiteFooter />

      <ItiGetStartedModal open={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  )
}
