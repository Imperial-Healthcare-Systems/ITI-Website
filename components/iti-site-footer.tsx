import { Phone } from "lucide-react"
import ItiBrandLogo from "@/components/iti-brand-logo"
import { footerSections } from "@/components/iti-content"

export default function ItiSiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="iti-footer">
      <div className="iti-footer-grid">
        <div>
          <ItiBrandLogo
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
            <br /><br />
            US: 212 N. 2nd St. STE 100, Richmond, KY 40475
            <br /><br />
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
                  <a href={link.href}>
                    {link.country ? (
                      <span className="iti-footer-phone-row">
                        <Phone size={11} className="iti-footer-phone-icon" />
                        <span className="iti-footer-phone-info">
                          <span className="iti-footer-phone-country">{link.country}</span>
                          {link.label}
                        </span>
                      </span>
                    ) : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="iti-footer-bottom">
        <div className="iti-footer-copy">Copyright {year} Imperial Tech Innovations. All rights reserved.</div>
        <div className="iti-footer-tagline-bottom">Engineer The Future</div>
      </div>

      <div className="iti-footer-legal-bar">
        <a href="/legal/privacy-policy" className="iti-footer-legal-link">Privacy Policy</a>
        <span className="iti-footer-legal-dot">·</span>
        <a href="/legal/terms-of-service" className="iti-footer-legal-link">Terms of Service</a>
        <span className="iti-footer-legal-dot">·</span>
        <a href="/legal/refund-policy" className="iti-footer-legal-link">Payment &amp; Refund Policy</a>
      </div>
    </footer>
  )
}
