"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Palette, Globe, Server, Search, Mail, Share2, TrendingUp,
  LayoutDashboard, FileText, MessageSquare, Rocket, Headphones,
  Code2, Zap, Users, Award, Shield, Eye, Smartphone, Star,
  ChevronDown, ArrowRight, Check,
} from "lucide-react"
import { launchTiers } from "@/components/iti-content"
import type { LaunchTier } from "@/components/iti-content"

const ICON_MAP: Record<string, React.ReactNode> = {
  palette: <Palette size={13} />,
  globe: <Globe size={13} />,
  server: <Server size={13} />,
  search: <Search size={13} />,
  mail: <Mail size={13} />,
  share2: <Share2 size={13} />,
  "trending-up": <TrendingUp size={13} />,
  "layout-dashboard": <LayoutDashboard size={13} />,
  "file-text": <FileText size={13} />,
  "message-square": <MessageSquare size={13} />,
  rocket: <Rocket size={13} />,
  headphones: <Headphones size={13} />,
  "code-2": <Code2 size={13} />,
  zap: <Zap size={13} />,
  users: <Users size={13} />,
  award: <Award size={13} />,
  shield: <Shield size={13} />,
  eye: <Eye size={13} />,
  smartphone: <Smartphone size={13} />,
  star: <Star size={13} />,
}

function PricingCard({ tier, index }: { tier: LaunchTier; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`iti-pc-card${tier.featured ? " iti-pc-featured" : ""}`}
    >
      {/* Glow layer */}
      <div className="iti-pc-glow" />

      {/* Badge */}
      {tier.badge && (
        <div className={`iti-pc-badge${tier.featured ? " iti-pc-badge-featured" : ""}`}>
          {tier.badge}
        </div>
      )}

      {/* Header */}
      <div className="iti-pc-header">
        <div className="iti-pc-shortname">{tier.shortName}</div>
        <div>
          <div className="iti-pc-name">{tier.name}</div>
          <div className="iti-pc-microcopy">{tier.microcopy}</div>
        </div>
      </div>

      {/* Price */}
      <div className="iti-pc-price-row">
        <span className="iti-pc-price">{tier.price}</span>
        <span className="iti-pc-price-label">one-time</span>
      </div>

      {/* Tagline */}
      <div className="iti-pc-tagline">{tier.tagline}</div>

      <div className="iti-pc-divider" />

      {/* Highlights */}
      <ul className="iti-pc-highlights">
        {tier.highlights.map((h) => (
          <li key={h}>
            <span className="iti-pc-check"><Check size={10} /></span>
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className={`iti-pc-cta${tier.featured ? " iti-pc-cta-featured" : ""}`}>
        <span>Get Started</span>
        <ArrowRight size={13} />
      </a>

      {/* Expand toggle */}
      <button
        className="iti-pc-expand-btn"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span>{expanded ? "Hide Details" : "View Full Details"}</span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: "flex" }}
        >
          <ChevronDown size={13} />
        </motion.span>
      </button>

      {/* Expanded Details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div className="iti-pc-sections">
              {tier.sections.map((section) => (
                <div key={section.title} className="iti-pc-section">
                  <div className="iti-pc-section-header">
                    <span className="iti-pc-section-icon">
                      {ICON_MAP[section.icon]}
                    </span>
                    <span className="iti-pc-section-title">{section.title}</span>
                  </div>
                  <ul className="iti-pc-section-features">
                    {section.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function ItiPricingSection() {
  return (
    <section className="iti-pc-section-wrap iti-pad-lg" id="startup">
      {/* Section header */}
      <div className="iti-inner">
        <div className="iti-pc-section-top iti-reveal">
          <div className="iti-section-eyebrow">
            <div className="iti-section-bar" />
            <span className="iti-section-text">Launch Programs</span>
          </div>
          <h2 className="iti-pc-heading">
            Choose Your <em>Growth</em> Path
          </h2>
          <p className="iti-pc-subheading">
            From first brand to full-scale enterprise — structured programs built for every stage.
          </p>
        </div>

        {/* Cards grid */}
        <div className="iti-pc-grid">
          {launchTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="iti-pc-footer-note iti-reveal">
          All programs include onboarding support &amp; structured delivery within 14 days.{" "}
          <a href="#contact" className="iti-pc-footer-link">
            Talk to our team →
          </a>
        </div>
      </div>
    </section>
  )
}
