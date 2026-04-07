"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import ItiBrandLogo from "@/components/iti-brand-logo"
import ItiGetStartedModal from "@/components/iti-get-started-modal"
import { navLinks } from "@/components/iti-content"

export default function ItiSiteHeader() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [leadModalOpen, setLeadModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setLeadModalOpen(false)
  }, [pathname])

  const openLeadModal = () => {
    setDrawerOpen(false)
    setLeadModalOpen(true)
  }

  return (
    <>
      <nav className={`iti-nav${navScrolled ? " scrolled" : ""}`}>
        <a href="/" className="iti-brand">
          <ItiBrandLogo
            className="iti-brand-logo-shell"
            src="/images/imperial-tech-logo-right.png"
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
            <a
              href="/#contact"
              className="iti-nav-btn"
              onClick={(event) => {
                event.preventDefault()
                openLeadModal()
              }}
            >
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
        <a
          href="/#contact"
          onClick={(event) => {
            event.preventDefault()
            openLeadModal()
          }}
        >
          Get Started
        </a>
      </div>

      <ItiGetStartedModal open={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </>
  )
}
