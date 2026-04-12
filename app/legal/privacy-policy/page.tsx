import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
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
        {/* Hero */}
        <section className="iti-legal-hero">
          <div className="iti-inner">
            <div className="iti-legal-eyebrow">Legal</div>
            <h1 className="iti-legal-title">Privacy Policy</h1>
            <p className="iti-legal-meta">Effective Date: April 13, 2025 &nbsp;·&nbsp; Last Updated: April 13, 2025</p>
          </div>
        </section>

        {/* Body */}
        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Introduction</h2>
                <p className="iti-legal-text">
                  Imperial Tech Innovations ("Imperial", "we", "our", or "us"), a technology brand of Imperial Healthcare Systems Pvt Ltd, is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website, use our services, or interact with us.
                </p>
                <p className="iti-legal-text">
                  By using our website or services, you consent to the practices described in this policy. If you do not agree, please discontinue use of our services.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Information We Collect</h2>
                <p className="iti-legal-text">We may collect the following categories of information:</p>
                <ul className="iti-legal-list">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and country provided through enquiry forms or direct communication.</li>
                  <li><strong>Project Information:</strong> Details about your business requirements, ERP needs, budget, and project scope voluntarily submitted through our forms.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, and referring URLs collected automatically via analytics tools.</li>
                  <li><strong>Communication Records:</strong> Emails, chat messages, and call records where applicable and legally permitted.</li>
                  <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors; we do not store raw card data.</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">How We Use Your Information</h2>
                <p className="iti-legal-text">We use collected information to:</p>
                <ul className="iti-legal-list">
                  <li>Respond to enquiries and provide requested services</li>
                  <li>Design, develop, and deliver technology solutions tailored to your requirements</li>
                  <li>Process payments and manage billing</li>
                  <li>Send service updates, proposals, and project communications</li>
                  <li>Improve our website, products, and service quality</li>
                  <li>Comply with legal obligations and enforce agreements</li>
                  <li>Send promotional communications (only with your consent; unsubscribe anytime)</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Data Sharing & Disclosure</h2>
                <p className="iti-legal-text">
                  We do not sell, rent, or trade your personal information. We may share data with:
                </p>
                <ul className="iti-legal-list">
                  <li><strong>Service Providers:</strong> Trusted third parties (hosting, email, analytics, payment processing) under strict confidentiality agreements.</li>
                  <li><strong>Business Partners:</strong> Where necessary to deliver contracted services, with your awareness.</li>
                  <li><strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, subject to confidentiality protections.</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Data Retention</h2>
                <p className="iti-legal-text">
                  We retain personal data only as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Client project data is typically retained for 5 years post-engagement unless otherwise agreed.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">Your Rights</h2>
                <p className="iti-legal-text">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="iti-legal-list">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your data (subject to legal retention requirements)</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability where technically feasible</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                </ul>
                <p className="iti-legal-text">To exercise any of these rights, contact us at the address below.</p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Cookies & Tracking</h2>
                <p className="iti-legal-text">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyse traffic, and understand user behaviour. You may control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Security</h2>
                <p className="iti-legal-text">
                  We implement industry-standard technical and organisational security measures including SSL encryption, access controls, and regular security reviews. However, no transmission over the internet is entirely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Third-Party Links</h2>
                <p className="iti-legal-text">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">Policy Updates</h2>
                <p className="iti-legal-text">
                  We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised policy.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">11</div>
                <h2 className="iti-legal-section-title">Contact Us</h2>
                <p className="iti-legal-text">For privacy-related enquiries or to exercise your rights:</p>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations</strong> — a brand of Imperial Healthcare Systems Pvt Ltd<br />
                    India: M15, Ground Floor, Regus, Welldone Tech Park, Sohna Road, Sector 48, Gurugram – 122018, Haryana<br />
                    US: 212 N. 2nd St. STE 100, Richmond, KY 40475<br />
                    Email: <a href="mailto:info@imperialtechinnovations.com">info@imperialtechinnovations.com</a><br />
                    Phone: <a href="tel:+917358013585">+91 7358013585</a> &nbsp;|&nbsp; <a href="tel:+18599788780">+1-(859) 978-8780</a>
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
