import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
import "@/app/iti-home-sections.css"
import "@/app/iti-legal.css"

export const metadata: Metadata = {
  title: "Privacy Policy | Imperial Tech Innovations",
  description: "How Imperial Tech Innovations collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="iti-page iti-legal-page">
      <ItiSiteHeader />
      <main>
        <section className="iti-legal-hero">
          <div className="iti-inner">
            <div className="iti-legal-eyebrow">Legal</div>
            <h1 className="iti-legal-title">Privacy Policy</h1>
            <p className="iti-legal-meta">Imperial Tech Innovations — Governing Data Collection, Processing &amp; Protection</p>
            <p className="iti-legal-meta" style={{ marginTop: "0.5rem" }}>Effective Date: April 20, 2026 &nbsp;·&nbsp; Last Updated: April 20, 2026</p>
          </div>
        </section>

        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Introduction &amp; Scope</h2>
                <p className="iti-legal-text">
                  This Privacy Policy governs the collection, processing, storage, and protection of personal and business data by Imperial Tech Innovations ("Company", "we", "our", or "us"), a technology brand of Imperial Healthcare Systems Pvt Ltd (CIN: U62099HR2025PTC137921), registered in Gurugram, Haryana, India.
                </p>
                <p className="iti-legal-text">
                  By accessing our website, engaging our SaaS platforms, or availing our IT solution services, you acknowledge that you have read, understood, and consent to the practices described in this Policy.
                </p>
                <p className="iti-legal-text">This Policy applies to:</p>
                <ul className="iti-legal-list">
                  <li>Website visitors and prospective clients</li>
                  <li>Existing clients and users of our SaaS platforms</li>
                  <li>Individuals interacting with us through any communication channel</li>
                  <li>Parties submitting data in connection with refund or compliance processes</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Information We Collect</h2>

                <p className="iti-legal-text"><strong>a. Identity &amp; Contact Data</strong></p>
                <ul className="iti-legal-list">
                  <li>Full name, corporate email address, phone number</li>
                  <li>Company name, professional designation, and location</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>b. Business &amp; Project Data</strong></p>
                <ul className="iti-legal-list">
                  <li>Technical requirements, project scope, timelines, and budgets</li>
                  <li>Proprietary business workflows shared for service delivery</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>c. Technical &amp; Usage Data</strong></p>
                <ul className="iti-legal-list">
                  <li>IP address, browser type, device identifiers</li>
                  <li>Pages visited, session duration, and platform usage analytics</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>d. Financial &amp; Transaction Data</strong></p>
                <ul className="iti-legal-list">
                  <li>Billing details processed via secure, certified third-party payment processors and payment gateways</li>
                  <li>We do not store raw card numbers or sensitive payment credentials</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>e. Communication Data</strong></p>
                <ul className="iti-legal-list">
                  <li>Emails, messages, call logs, and support interactions (where permitted by law)</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>f. Refund &amp; Compliance Data</strong></p>
                <p className="iti-legal-text">
                  Where applicable, we may collect government-issued identification documents, self-attested identity verification records, and bank account details submitted for authentication and lawful refund processing.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">Legal Basis for Processing</h2>
                <p className="iti-legal-text">
                  We process personal data under the following lawful bases, in accordance with applicable law including the Digital Personal Data Protection Act, 2023 (India) and relevant international frameworks:
                </p>
                <ul className="iti-legal-list">
                  <li><strong>Contractual Necessity</strong> — to deliver services as defined in the Statement of Work (SOW)</li>
                  <li><strong>Legitimate Business Interests</strong> — for platform security, fraud prevention, and service improvement</li>
                  <li><strong>Legal &amp; Regulatory Obligation</strong> — for taxation, audit, and anti-money laundering (AML) compliance</li>
                  <li><strong>Explicit Consent</strong> — where required under applicable data protection law</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Use of Information</h2>
                <p className="iti-legal-text">Data collected is used exclusively to:</p>
                <ul className="iti-legal-list">
                  <li>Deliver SaaS products and IT services as contractually agreed</li>
                  <li>Manage billing, contracts, client accounts, and operations</li>
                  <li>Enhance platform performance and user experience</li>
                  <li>Communicate service updates, project milestones, and proposals</li>
                  <li>Ensure security, fraud prevention, and regulatory compliance</li>
                  <li>Process and verify refund requests in accordance with our <a href="/legal/refund-policy" className="iti-legal-link">Payment &amp; Refund Policy</a></li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Data Sharing &amp; Disclosure</h2>
                <p className="iti-legal-text">
                  We do not sell, rent, or trade personal data to any third party for commercial gain.
                </p>
                <p className="iti-legal-text">Data may be shared with:</p>
                <ul className="iti-legal-list">
                  <li>Trusted service providers (hosting, analytics, payment processors) bound by confidentiality obligations</li>
                  <li>Business partners strictly to the extent required for service delivery</li>
                  <li>Legal and regulatory authorities where required by applicable law</li>
                  <li>Successors or acquirers in the event of a merger, acquisition, or corporate restructuring</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">International Data Transfers</h2>
                <p className="iti-legal-text">
                  As a dual-jurisdiction organisation operating in India and the United States, data may be processed across borders. All cross-border transfers are conducted with appropriate contractual and technical safeguards to ensure lawful and secure handling of personal data in accordance with applicable law.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Data Retention</h2>
                <ul className="iti-legal-list">
                  <li>For the duration of the client relationship and active engagement</li>
                  <li>Up to five (5) years post-engagement for legal, audit, and compliance purposes</li>
                  <li>For extended periods where required by applicable law or regulatory obligation</li>
                </ul>
                <p className="iti-legal-text">
                  Upon expiry of the retention period, data is securely archived or permanently deleted in accordance with our internal data governance protocols.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Data Security</h2>
                <p className="iti-legal-text">We implement enterprise-grade security controls including:</p>
                <ul className="iti-legal-list">
                  <li>AES-256 encryption for data at rest; SSL/TLS for data in transit</li>
                  <li>Role-based access restrictions and multi-factor authentication</li>
                  <li>Periodic security audits, vulnerability assessments, and penetration testing</li>
                  <li>Controlled processing environments with restricted external access</li>
                </ul>
                <p className="iti-legal-text">
                  While we apply rigorous security standards, no system guarantees absolute protection. We commit to responding promptly and transparently in the event of any security incident.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Cookies, Tracking &amp; User Consent</h2>
                <p className="iti-legal-text">
                  By accessing, browsing, or continuing to use this website, you acknowledge and consent to the use of cookies and similar tracking technologies by Imperial Tech Innovations for the purposes outlined below.
                </p>
                <p className="iti-legal-text">Cookies are used exclusively to:</p>
                <ul className="iti-legal-list">
                  <li>Enable core website functionality and platform performance</li>
                  <li>Analyse user behaviour, traffic patterns, and usage analytics</li>
                  <li>Enhance user experience and optimise service delivery</li>
                </ul>
                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>Explicit Affirmation:</strong></p>
                <ul className="iti-legal-list">
                  <li>Cookies are not used for unsolicited marketing, behavioural advertising, or third-party profiling without explicit user consent</li>
                  <li>Personal data collected via cookies is used strictly for operational, analytical, and security purposes</li>
                </ul>
                <p className="iti-legal-text">
                  Users retain full control over cookie preferences and may disable or restrict tracking technologies through browser settings. Disabling certain cookies may impact the functionality of the website.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">User Rights</h2>
                <p className="iti-legal-text">Subject to applicable law, users and data subjects have the right to:</p>
                <ul className="iti-legal-list">
                  <li>Access, correct, or request deletion of their personal data</li>
                  <li>Restrict or object to specific processing activities</li>
                  <li>Withdraw consent at any time, without affecting the lawfulness of prior processing</li>
                  <li>Request data portability in a structured, machine-readable format</li>
                </ul>
                <p className="iti-legal-text">
                  All rights requests may be directed to: <a href="mailto:info@imperialtechinnovations.com" className="iti-legal-link">info@imperialtechinnovations.com</a>
                </p>
                <p className="iti-legal-text" style={{ marginTop: "1rem" }}><strong>Grievance Officer (DPDP Act 2023 — India)</strong></p>
                <p className="iti-legal-text">
                  In accordance with the Digital Personal Data Protection Act, 2023, the designated Grievance Officer for India-based data subjects is reachable at <a href="mailto:info@imperialtechinnovations.com" className="iti-legal-link">info@imperialtechinnovations.com</a>. Grievances will be acknowledged within 48 hours and resolved within 30 days.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">11</div>
                <h2 className="iti-legal-section-title">Data Breach Response</h2>
                <p className="iti-legal-text">In the event of a personal data breach, we will:</p>
                <ul className="iti-legal-list">
                  <li>Immediately investigate and contain the incident</li>
                  <li>Notify affected users and relevant authorities within timelines required by applicable law</li>
                  <li>Document the nature, scope, and remediation actions taken</li>
                  <li>Implement preventive controls to mitigate recurrence</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">12</div>
                <h2 className="iti-legal-section-title">Children's Data</h2>
                <p className="iti-legal-text">
                  Our services are directed exclusively at businesses and professionals. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that data has been collected from a minor, it will be deleted promptly.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">13</div>
                <h2 className="iti-legal-section-title">Policy Updates &amp; Contact</h2>
                <p className="iti-legal-text">
                  We reserve the right to update this Privacy Policy periodically. Material changes will be communicated via website notice. Continued use of our services following any update constitutes acceptance of the revised Policy.
                </p>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations</strong><br />
                    Email: <a href="mailto:info@imperialtechinnovations.com">info@imperialtechinnovations.com</a><br />
                    Website: imperialtechinnovations.com<br />
                    India: <a href="tel:+917358013585">+91 7358013585</a> &nbsp;|&nbsp; US: <a href="tel:+18599788780">+1-(859) 978-8780</a>
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
