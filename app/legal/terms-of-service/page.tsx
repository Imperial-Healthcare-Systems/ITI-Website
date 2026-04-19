import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
import "@/app/iti-home-sections.css"
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
            <p className="iti-legal-meta">Imperial Tech Innovations — Governing All Service Engagements</p>
            <p className="iti-legal-meta" style={{ marginTop: "0.5rem" }}>Effective Date: April 20, 2026 &nbsp;·&nbsp; Last Updated: April 20, 2026</p>
          </div>
        </section>

        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Acceptance of Terms</h2>
                <p className="iti-legal-text">
                  By accessing our services, engaging in a project, or completing payment, you ("Client") agree to be bound by these Terms of Service ("Terms") in their entirety. These Terms apply to all service engagements, SaaS subscriptions, and IT solution deliverables offered by Imperial Tech Innovations ("Company"), a technology brand of Imperial Healthcare Systems Pvt Ltd.
                </p>
                <p className="iti-legal-text">
                  If you do not agree to these Terms, you must not access or use our services.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Services</h2>
                <p className="iti-legal-text">The Company provides the following categories of services:</p>
                <ul className="iti-legal-list">
                  <li>SaaS platforms and subscription-based software products</li>
                  <li>Custom software development and application engineering</li>
                  <li>Web and mobile application development</li>
                  <li>Brand identity, UI/UX design, and digital presence setup</li>
                  <li>AI, cloud, CRM, and data solutions</li>
                  <li>Business infrastructure setup for newly incorporated entities</li>
                </ul>
                <p className="iti-legal-text">
                  The precise scope of each engagement, including deliverables, timelines, and commercial terms, is defined in a mutually executed Statement of Work (SOW) or formal service agreement. In the event of conflict, the SOW shall prevail over these Terms.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">Client Responsibilities</h2>
                <p className="iti-legal-text">The Client agrees to:</p>
                <ul className="iti-legal-list">
                  <li>Provide accurate, complete, and timely information necessary for project execution</li>
                  <li>Make payments as agreed and within stipulated timelines</li>
                  <li>Cooperate actively in project execution, review cycles, and approvals</li>
                  <li>Use the Company's services and deliverables lawfully, ethically, and within the scope defined</li>
                  <li>Not misuse, reverse-engineer, or redistribute the Company's proprietary tools or frameworks</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Intellectual Property</h2>
                <p className="iti-legal-text"><strong>Client Deliverables:</strong></p>
                <p className="iti-legal-text">
                  Ownership of custom-developed deliverables transfers to the Client upon full and final settlement of all dues under the relevant engagement.
                </p>
                <p className="iti-legal-text"><strong>Company Background IP:</strong></p>
                <p className="iti-legal-text">
                  The Company retains sole and exclusive ownership of all pre-existing intellectual property, including proprietary frameworks, generic code libraries, reusable modules, design systems, SaaS source code, and any tools or methodologies developed independently of the specific client engagement ("Company Background IP"). No transfer, licence, or implied right to Company Background IP arises from any engagement.
                </p>
                <p className="iti-legal-text"><strong>Licence Grant:</strong></p>
                <p className="iti-legal-text">
                  Where Company Background IP is embedded within client deliverables, the Company grants a non-exclusive, non-transferable, royalty-free licence to use such embedded components solely for the Client's internal business purposes.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Payment Terms</h2>
                <ul className="iti-legal-list">
                  <li>A minimum advance payment of fifty percent (50%) is required prior to project commencement</li>
                  <li>Balance payments are due as per defined milestones or upon delivery, as specified in the SOW</li>
                  <li>All invoices are payable within seven (7) days of issuance unless otherwise agreed in writing</li>
                  <li>Late payments shall accrue interest at the rate of two percent (2%) per month on outstanding amounts</li>
                </ul>
                <p className="iti-legal-text">
                  All quoted fees are strictly exclusive of GST and all other applicable government-levied taxes, duties, and statutory charges. These shall be charged separately and are payable in addition to the quoted service fee. No quoted amount shall be construed to include tax unless explicitly stated in writing.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">Cancellation &amp; Refund Governance</h2>
                <ul className="iti-legal-list">
                  <li>Cancellation of services is permitted strictly within twenty-four (24) calendar hours of payment confirmation</li>
                  <li>All cancellation requests must be submitted in writing through authorised channels</li>
                  <li>Refund eligibility is subject to mandatory approval by the Managing Director or Chief Executive Officer (CEO)</li>
                  <li>No refunds shall be processed for requests submitted beyond the 24-hour eligibility window</li>
                  <li>Detailed cancellation and refund procedures are governed by the Company's <a href="/legal/refund-policy" className="iti-legal-link">Payment &amp; Refund Policy</a></li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Service Level &amp; Delivery Disclaimer</h2>
                <p className="iti-legal-text">
                  Services are provided on an "as-is" and "as-available" basis. While the Company strives for continuous, high-quality delivery:
                </p>
                <ul className="iti-legal-list">
                  <li>SaaS platforms target ninety-nine point nine percent (99.9%) uptime but do not guarantee uninterrupted service</li>
                  <li>Delivery timelines are estimates and may be subject to variation based on Client cooperation, scope changes, or third-party dependencies</li>
                  <li>The Company is not liable for delays attributable to Client delays in providing inputs, approvals, or access</li>
                </ul>
                <p className="iti-legal-text">
                  Detailed service levels for specific engagements may be defined in the SOW. Absence of an SLA does not imply any guarantee beyond reasonable professional effort.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Annual Maintenance Contract (AMC)</h2>
                <p className="iti-legal-text">
                  All LaunchPad programme packages (LaunchPad, LaunchPad+, ScaleX and AuthorityX) include one (1) year of Annual Maintenance Contract (AMC) coverage from the Client onboarding date, at no additional cost during the initial term.
                </p>

                <p className="iti-legal-text"><strong>AMC Coverage Includes:</strong></p>
                <ul className="iti-legal-list">
                  <li>Website and platform bug fixes and technical maintenance</li>
                  <li>Minor content updates and enhancements</li>
                  <li>Uptime monitoring and performance checks</li>
                  <li>Maintenance of all included SaaS tools (CRM, HRMS, and other integrated platforms, where applicable to the Client package)</li>
                  <li>Fast-track escalation support for all AMC-covered issues</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>AMC Renewal Rates (post Year 1):</strong></p>
                <ul className="iti-legal-list">
                  <li>India-based clients: INR 10,000 per year (applicable across all package tiers)</li>
                  <li>International clients: USD 200 per year (applicable across all package tiers)</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>Renewal Conditions:</strong></p>
                <ul className="iti-legal-list">
                  <li>Renewal invoices will be issued thirty (30) days prior to the AMC expiry date</li>
                  <li>Failure to renew within fourteen (14) days of expiry will result in suspension of all maintenance services</li>
                  <li>Lapsed AMC coverage may be reinstated subject to a gap-period assessment and applicable reinstatement fee at the Company discretion</li>
                  <li>AMC renewal covers maintenance of the existing scope only — new feature development, design overhauls, and scope expansions are billed separately</li>
                  <li>Renewed AMC covers the same scope of services as defined in the original package</li>
                </ul>

                <p className="iti-legal-text">
                  AMC is non-transferable and tied to the specific engagement and digital assets delivered under the original package. It does not carry forward if the Client migrates to a different platform, hosting environment, or third-party vendor.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Confidentiality</h2>
                <p className="iti-legal-text">
                  Both parties agree to maintain strict confidentiality of all proprietary, sensitive, or non-public information disclosed in connection with any engagement. This obligation survives termination of the service relationship for a period of three (3) years, or such longer period as may be required by law.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">Limitation of Liability</h2>
                <ul className="iti-legal-list">
                  <li>The Company's total aggregate liability for any claim arising out of or related to a specific engagement shall not exceed the total fees paid by the Client for that specific service</li>
                  <li>The Company shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including loss of revenue, loss of data, or loss of business opportunity</li>
                  <li>These limitations apply regardless of the form or basis of the claim</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">11</div>
                <h2 className="iti-legal-section-title">Indemnification</h2>
                <p className="iti-legal-text">
                  The Client agrees to indemnify, defend, and hold harmless the Company and its affiliates, officers, and employees against any third-party claims, losses, damages, or liabilities arising from:
                </p>
                <ul className="iti-legal-list">
                  <li>The Client's misuse or unauthorised use of the Company's services or deliverables</li>
                  <li>Legal claims arising from Client-provided data, content, or instructions</li>
                  <li>Breach of these Terms by the Client</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">12</div>
                <h2 className="iti-legal-section-title">Non-Solicitation</h2>
                <p className="iti-legal-text">
                  The Client agrees not to directly or indirectly solicit, recruit, hire, or engage any employee, contractor, or consultant of the Company during the term of the engagement and for a period of twenty-four (24) months following its termination.
                </p>
                <p className="iti-legal-text">
                  Breach of this clause shall entitle the Company to liquidated damages equal to one hundred percent (100%) of the relevant individual's last drawn annual cost-to-company (CTC), without prejudice to any other legal remedy available.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">13</div>
                <h2 className="iti-legal-section-title">Force Majeure</h2>
                <p className="iti-legal-text">
                  The Company shall not be liable for any delay or failure in performance resulting from causes beyond its reasonable control, including but not limited to acts of God, global pandemics, state-sponsored cyberattacks, third-party infrastructure failures, internet disruptions, natural disasters, war, civil unrest, or government-imposed restrictions. The Company shall notify the Client promptly and resume performance at the earliest practicable opportunity.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">14</div>
                <h2 className="iti-legal-section-title">Termination</h2>
                <ul className="iti-legal-list">
                  <li>Either party may terminate the engagement upon written notice in the event of a material breach that remains uncured for fourteen (14) days following notice</li>
                  <li>The Company may suspend or terminate services immediately for non-payment of dues</li>
                  <li>Upon termination, the Client remains liable for payment of all work completed and expenses incurred up to the date of termination</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">15</div>
                <h2 className="iti-legal-section-title">Governing Law &amp; Dispute Resolution</h2>
                <p className="iti-legal-text"><strong>India:</strong></p>
                <p className="iti-legal-text">
                  These Terms are governed by and construed in accordance with the laws of India. Any dispute shall be subject to the exclusive jurisdiction of courts in Gurugram, Haryana.
                </p>
                <p className="iti-legal-text"><strong>International Clients:</strong></p>
                <p className="iti-legal-text">
                  For clients domiciled outside India, disputes shall be resolved through good-faith negotiation followed, if necessary, by binding arbitration in accordance with internationally recognised arbitration rules.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">16</div>
                <h2 className="iti-legal-section-title">Amendments</h2>
                <p className="iti-legal-text">
                  The Company reserves the right to update or amend these Terms at any time. Material changes will be communicated via website notice or direct communication. Continued use of services following publication of amendments constitutes acceptance of the revised Terms.
                </p>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations</strong><br />
                    Email: <a href="mailto:info@imperialtechinnovations.com">info@imperialtechinnovations.com</a><br />
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
