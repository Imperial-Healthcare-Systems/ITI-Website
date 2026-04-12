import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
import "@/app/iti-legal.css"

export const metadata: Metadata = {
  title: "Terms of Service | Imperial Tech Innovations",
  description: "Terms governing the use of Imperial Tech Innovations services and website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="iti-page iti-legal-page">
      <ItiSiteHeader />
      <main>
        <section className="iti-legal-hero">
          <div className="iti-inner">
            <div className="iti-legal-eyebrow">Legal</div>
            <h1 className="iti-legal-title">Terms of Service</h1>
            <p className="iti-legal-meta">Effective Date: April 13, 2025 &nbsp;·&nbsp; Last Updated: April 13, 2025</p>
          </div>
        </section>

        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Acceptance of Terms</h2>
                <p className="iti-legal-text">
                  By accessing our website or engaging our services, you agree to be bound by these Terms of Service ("Terms") and all applicable laws. These Terms form a legally binding agreement between you ("Client") and Imperial Tech Innovations, a technology brand of Imperial Healthcare Systems Pvt Ltd ("Imperial", "we", "us").
                </p>
                <p className="iti-legal-text">
                  If you do not agree to these Terms, you must not use our website or engage our services.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Services</h2>
                <p className="iti-legal-text">
                  Imperial Tech Innovations provides technology consulting, software engineering, ERP/CRM development, web and mobile application development, branding, and related digital services. The specific scope of services for any engagement is defined in the relevant Statement of Work (SOW), project proposal, or service agreement executed between both parties.
                </p>
                <p className="iti-legal-text">
                  We reserve the right to modify, suspend, or discontinue any service offering at any time with reasonable notice.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">Client Responsibilities</h2>
                <p className="iti-legal-text">As a client, you agree to:</p>
                <ul className="iti-legal-list">
                  <li>Provide accurate, complete, and timely information required for project delivery</li>
                  <li>Make timely payments as outlined in the project agreement</li>
                  <li>Designate an authorised point of contact for project communications</li>
                  <li>Review and provide feedback within agreed timelines</li>
                  <li>Not use our services for any unlawful, unethical, or harmful purpose</li>
                  <li>Maintain confidentiality of any proprietary methodologies or systems shared with you</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Intellectual Property</h2>
                <p className="iti-legal-text">
                  Upon full payment, the client receives ownership of the final deliverables as specified in the project agreement. Imperial retains ownership of all pre-existing intellectual property, frameworks, tools, and methodologies used in delivery.
                </p>
                <p className="iti-legal-text">
                  Imperial reserves the right to display completed work in its portfolio unless the client explicitly requests confidentiality in writing prior to project commencement.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Payment Terms</h2>
                <p className="iti-legal-text">
                  Payment terms are as specified in the project agreement or invoice. Standard terms include:
                </p>
                <ul className="iti-legal-list">
                  <li>An advance payment (typically 50%) is required before project commencement</li>
                  <li>Balance payment is due upon project completion or as per milestone schedule</li>
                  <li>Invoices are payable within 7 days of issue unless otherwise agreed</li>
                  <li>Late payments may attract interest at 2% per month on the outstanding amount</li>
                  <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">Confidentiality</h2>
                <p className="iti-legal-text">
                  Both parties agree to maintain confidentiality of any proprietary, business-sensitive, or technical information shared during the engagement. This obligation survives termination of the project or agreement.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Limitation of Liability</h2>
                <p className="iti-legal-text">
                  Imperial's total liability for any claim arising from or related to our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim in the 3 months preceding the claim.
                </p>
                <p className="iti-legal-text">
                  We are not liable for indirect, incidental, consequential, or punitive damages, including loss of revenue, data, or business opportunity, even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Termination</h2>
                <p className="iti-legal-text">
                  Either party may terminate a project engagement with 14 days' written notice. Upon termination, the client is liable for payment of all work completed up to the termination date. Imperial will deliver all completed work product upon receipt of outstanding payment.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Governing Law</h2>
                <p className="iti-legal-text">
                  These Terms are governed by the laws of India. For clients in the United States, disputes shall first be attempted through good-faith negotiation, followed by arbitration if unresolved. For India-based clients, disputes are subject to the jurisdiction of courts in Gurugram, Haryana.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">Amendments</h2>
                <p className="iti-legal-text">
                  We may revise these Terms at any time by updating this page. Continued use of our services following any changes constitutes acceptance. We encourage you to review these Terms periodically.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">11</div>
                <h2 className="iti-legal-section-title">Contact</h2>
                <p className="iti-legal-text">For questions regarding these Terms:</p>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations</strong><br />
                    Email: <a href="mailto:info@imperialtechinnovations.com">info@imperialtechinnovations.com</a><br />
                    India: +91 7358013585 &nbsp;|&nbsp; US: +1-(859) 978-8780
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <ItiSiteFooter />
    </div>
  )
}
