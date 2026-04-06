"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"
import {
  footerSections,
  industries,
  launchDeliverables,
  launchTiers,
  marqueeItems,
  metrics,
  navLinks,
  processSteps,
  services,
  whyItems,
} from "@/components/iti-content"
import ItiCounter from "@/components/iti-counter"
import ItiHeroCanvas from "@/components/iti-hero-canvas"
import ItiMapCanvas from "@/components/iti-map-canvas"

function BrandLogo({
  className,
  src,
  priority = false,
}: {
  className: string
  src: string
  priority?: boolean
}) {
  return (
    <span className={`iti-logo-shell ${className}`}>
      <Image
        src={src}
        alt="Imperial Tech Innovations"
        fill
        priority={priority}
        sizes="(max-width: 640px) 140px, 260px"
        className="iti-logo-image"
      />
    </span>
  )
}

export default function ItiHomePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [loaderValue, setLoaderValue] = useState(0)
  const [loaderDone, setLoaderDone] = useState(false)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

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
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim()

    if (!normalizedEmail) {
      setFormError("Enter your work email.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setFormError("Enter a valid email address.")
      return
    }

    setSubmitting(true)
    setFormError("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Inquiry",
          email: normalizedEmail,
          source: "iti-website",
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Unable to submit your request right now.")
      }

      setFormSuccess(true)
      setEmail("")
    } catch (error: unknown) {
      setFormError(error instanceof Error ? error.message : "Unable to submit your request right now.")
    } finally {
      setSubmitting(false)
    }
  }

  const year = new Date().getFullYear()

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

      <nav className={`iti-nav${navScrolled ? " scrolled" : ""}`}>
        <a href="#home" className="iti-brand">
          <BrandLogo
            className="iti-brand-logo-shell"
            src="/images/imperial-tech-logo-b.png"
            priority
          />
        </a>

        <ul className="iti-nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="iti-nav-btn">
              <span>Get Started</span>
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`iti-nav-toggle${drawerOpen ? " open" : ""}`}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((value) => !value)}
        >
          <Menu size={18} className="iti-nav-toggle-icon iti-nav-toggle-menu" />
          <X size={18} className="iti-nav-toggle-icon iti-nav-toggle-close" />
        </button>
      </nav>

      <div className={`iti-drawer${drawerOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        <button
          type="button"
          className="iti-drawer-close"
          aria-label="Close menu"
          onClick={() => setDrawerOpen(false)}
        >
          Close
        </button>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setDrawerOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setDrawerOpen(false)}>
          Get Started
        </a>
      </div>

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
            <a href="#contact" className="iti-btn-primary">
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </a>
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

      <section className="iti-launch-section iti-pad-lg" id="startup">
        <div className="iti-inner iti-launch-grid">
          <div className="iti-reveal">
            <div className="iti-launch-label">
              <span className="iti-launch-badge" />
              <span className="iti-launch-label-text">Featured Offering</span>
            </div>
            <h2 className="iti-launch-title">
              The <em>Startup</em>
              <br />
              Launch Kit
            </h2>
            <p className="iti-launch-body">
              Everything a modern startup needs to move from idea to market-ready in 14 days.
              Full-stack delivery across brand, product, systems, and launch infrastructure.
            </p>
            <div className="iti-launch-deliverables">
              {launchDeliverables.map((item) => (
                <div key={item} className="iti-launch-deliverable">
                  {item}
                </div>
              ))}
            </div>
            <a href="#contact" className="iti-btn-primary">
              <span>Start Your Launch</span>
              <ArrowRight size={15} />
            </a>
          </div>
          <div className="iti-launch-tiers iti-reveal iti-rd2">
            {launchTiers.map((tier) => (
              <article key={tier.name} className={`iti-tier${tier.featured ? " featured" : ""}`}>
                {tier.featured ? <div className="iti-tier-badge">Most Popular</div> : null}
                <div className="iti-tier-name">{tier.name}</div>
                <div className="iti-tier-price">
                  {tier.price}
                  <span> one-time</span>
                </div>
                <div className="iti-tier-days">14-day delivery</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="iti-pad" id="industries">
        <div className="iti-inner iti-center">
          <div className="iti-reveal">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Industries We Serve</span>
            </div>
            <h2 className="iti-section-title">
              Built for <em>Every</em>
              <br />
              Digital-First Business
            </h2>
          </div>
          <div className="iti-industries-grid iti-reveal iti-rd1">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <article key={industry.title} className="iti-industry-card">
                  <Icon className="iti-industry-icon" strokeWidth={1.7} />
                  <h3 className="iti-industry-name">{industry.title}</h3>
                  <p className="iti-industry-desc">{industry.description}</p>
                </article>
              )
            })}
          </div>
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
            <form className="iti-cta-form" onSubmit={handleSubmit} noValidate>
              <input
                className="iti-cta-input"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (formError) setFormError("")
                }}
                placeholder="Enter your work email"
                autoComplete="email"
              />
              <button className="iti-cta-submit" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Request Access"}
              </button>
            </form>
          )}

          {formError ? <p className="iti-cta-error">{formError}</p> : null}
          <p className="iti-cta-legal">No spam. By submitting, you agree to our privacy policy.</p>
        </div>
      </section>

      <footer className="iti-footer">
        <div className="iti-footer-grid">
          <div>
            <BrandLogo
              className="iti-footer-logo-shell"
              src="/images/imperial-tech-logo-n-transparent.png"
            />
            <div className="iti-footer-brand-sub">A brand of Imperial Healthcare Systems Pvt Ltd</div>
            <p className="iti-footer-tagline">
              High-performance IT and SaaS solutions built for scale, security, and intelligence.
              Serving clients globally from our US and India offices.
            </p>
            <div className="iti-footer-legal">
              Imperial Tech Innovations is a technology brand of Imperial Healthcare Systems Pvt Ltd.
              <br />
              US: 212 N. 2nd St. STE 100, Richmond, KY 40475
              <br />
              India: M15, Ground Floor, Regus,
              <br />
              Welldone Tech Park, Sohna Road,
              <br />
              Sector 48, Gurugram - 122018, Haryana, India
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="iti-footer-col-title">{section.title}</div>
              <ul className="iti-footer-links">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="iti-footer-bottom">
          <div className="iti-footer-copy">
            Copyright {year} Imperial Tech Innovations. All rights reserved.
          </div>
          <div className="iti-footer-tagline-bottom">Built for outcomes. Engineered for scale.</div>
        </div>
      </footer>
    </div>
  )
}
