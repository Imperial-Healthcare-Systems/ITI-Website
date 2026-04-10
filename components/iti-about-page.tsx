"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import ItiSiteFooter from "@/components/iti-site-footer"
import ItiSiteHeader from "@/components/iti-site-header"
import {
  aboutCapabilities,
  aboutParagraphs,
  aboutQuote,
  leadershipProfiles,
} from "@/components/iti-content"

export default function ItiAboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.add("iti-home-html")
    document.body.classList.add("iti-home-body")

    return () => {
      document.documentElement.classList.remove("iti-home-html")
      document.body.classList.remove("iti-home-body")
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

  return (
    <div ref={pageRef} className="iti-page iti-about-page">
      <ItiSiteHeader />

      <main className="iti-about-main">
        <section className="iti-about-hero iti-pad-lg">
          <div className="iti-inner">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Who We Are</span>
            </div>
            <h1 className="iti-about-title">
              Precision Engineering.
              <br />
              <em>Global Ambition.</em>
            </h1>
          </div>
        </section>

        <section className="iti-about-section iti-pad">
          <div className="iti-inner iti-about-grid">
            <div className="iti-about-copy">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="iti-about-quote-card">
                <blockquote>{aboutQuote}</blockquote>
              </div>
            </div>

            <div className="iti-about-capabilities">
              {aboutCapabilities.map((item) => (
                <article key={item.number} className="iti-about-capability">
                  <div className="iti-about-capability-num">{item.number}</div>
                  <div>
                    <h2 className="iti-about-capability-title">{item.title}</h2>
                    <p className="iti-about-capability-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="iti-about-leadership iti-pad">
          <div className="iti-inner">
            <div className="iti-about-leadership-head iti-reveal">
              <div>
                <div className="iti-section-eyebrow">
                  <div className="iti-section-bar" />
                  <span className="iti-section-text">Leadership</span>
                </div>
                <h2 className="iti-section-title">
                  The People Behind
                  <br />
                  <em>the Institution</em>
                </h2>
                <p className="iti-section-sub">
                  Leadership at Imperial combines engineering rigor, governance discipline, and
                  long-term institutional thinking across technology and operations.
                </p>
              </div>

              <a href="/about/leadership" className="iti-btn-outline iti-about-leadership-cta">
                <span>View Leadership</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="iti-about-leadership-grid">
              {leadershipProfiles.map((profile, index) => (
                <article
                  key={profile.slug}
                  className={`iti-about-leader-card iti-reveal${index > 0 ? " iti-rd1" : ""}`}
                >
                  {profile.photo && (
                    <div className="iti-about-leader-photo-wrap">
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="iti-about-leader-photo"
                      />
                    </div>
                  )}
                  <div className="iti-about-leader-role">{profile.role}</div>
                  <h3 className="iti-about-leader-name">{profile.name}</h3>
                  <div className="iti-about-leader-org">{profile.organization}</div>
                  <p className="iti-about-leader-preview">{profile.preview}</p>
                  <a href={`/about/leadership#${profile.slug}`} className="iti-about-leader-link">
                    View full profile
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ItiSiteFooter />
    </div>
  )
}
