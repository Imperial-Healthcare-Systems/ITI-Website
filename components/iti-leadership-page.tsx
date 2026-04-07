"use client"

import { useEffect, useRef } from "react"
import ItiSiteFooter from "@/components/iti-site-footer"
import ItiSiteHeader from "@/components/iti-site-header"
import { leadershipProfiles } from "@/components/iti-content"

export default function ItiLeadershipPage() {
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
    <div ref={pageRef} className="iti-page iti-about-page iti-leadership-page">
      <ItiSiteHeader />

      <main className="iti-about-main">
        <section className="iti-about-hero iti-pad-lg">
          <div className="iti-inner iti-leadership-hero-inner">
            <div className="iti-section-eyebrow">
              <div className="iti-section-bar" />
              <span className="iti-section-text">Leadership</span>
            </div>
            <h1 className="iti-about-title iti-leadership-title">
              Institutional Leadership.
              <br />
              <em>Engineering Depth.</em>
            </h1>
            <p className="iti-leadership-intro">
              Imperial Tech Innovations is led by executives who combine engineering precision,
              governance discipline, and long-range institutional thinking to build a technology
              firm designed for enterprise trust and enduring value creation.
            </p>
          </div>
        </section>

        <section className="iti-leadership-section iti-pad">
          <div className="iti-inner iti-leadership-grid">
            {leadershipProfiles.map((profile, index) => (
              <article
                key={profile.slug}
                id={profile.slug}
                className={`iti-leadership-card iti-reveal${index > 0 ? ` iti-rd${Math.min(
                  index,
                  4
                )}` : ""}`}
              >
                <div className="iti-leadership-card-head">
                  <div className="iti-leadership-role">{profile.role}</div>
                  <h2 className="iti-leadership-name">{profile.name}</h2>
                  <div className="iti-leadership-org">{profile.organization}</div>
                </div>

                <div className="iti-leadership-copy">
                  {profile.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="iti-leadership-subsection">
                  <div className="iti-leadership-label">Areas of Expertise</div>
                  <ul className="iti-leadership-expertise">
                    {profile.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="iti-leadership-subsection iti-leadership-mandate">
                  <div className="iti-leadership-label">Strategic Mandate</div>
                  <p>{profile.mandate}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <ItiSiteFooter />
    </div>
  )
}
