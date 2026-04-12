import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
import "@/app/iti-legal.css"

export const metadata: Metadata = {
  title: "Payment & Refund Policy | Imperial Tech Innovations",
  description: "Payment terms, refund eligibility, and cancellation policy for Imperial Tech Innovations services.",
}

export default function RefundPolicyPage() {
  return (
    <div className="iti-page iti-legal-page">
      <ItiSiteHeader />
      <main>
        <section className="iti-legal-hero">
          <div className="iti-inner">
            <div className="iti-legal-eyebrow">Legal</div>
            <h1 className="iti-legal-title">Payment & Refund Policy</h1>
            <p className="iti-legal-meta">Effective Date: April 13, 2025 &nbsp;·&nbsp; Last Updated: April 13, 2025</p>
          </div>
        </section>

        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Overview</h2>
                <p className="iti-legal-text">
                  Imperial Tech Innovations delivers custom technology solutions including software development, ERP systems, branding, web presence, and consulting engagements. Due to the custom, project-based nature of our work, our refund policy is structured to be fair to both parties while reflecting the investment made in project delivery.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Payment Structure</h2>
                <p className="iti-legal-text">All projects follow a structured payment schedule:</p>
                <ul className="iti-legal-list">
                  <li><strong>Advance / Onboarding Payment (50%):</strong> Due before project commencement. This covers discovery, planning, resource allocation, and initial delivery.</li>
                  <li><strong>Milestone Payments:</strong> For larger projects, payments are tied to defined delivery milestones as outlined in the project agreement.</li>
                  <li><strong>Final Payment (remaining balance):</strong> Due upon project completion and delivery of final assets.</li>
                </ul>
                <p className="iti-legal-text">
                  All payments are due within 7 days of invoice unless a different timeline has been mutually agreed in writing.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">Accepted Payment Methods</h2>
                <ul className="iti-legal-list">
                  <li>Bank Transfer (NEFT / RTGS / IMPS) — India</li>
                  <li>UPI — India</li>
                  <li>Wire Transfer / ACH — US & International</li>
                  <li>Online payment via secure payment link (Razorpay / Stripe where applicable)</li>
                </ul>
                <p className="iti-legal-text">
                  All international payments must account for applicable bank transfer fees. Currency for billing is specified in the project agreement (INR for India; USD for US and international clients).
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Refund Eligibility</h2>
                <p className="iti-legal-text">
                  Given the bespoke, service-based nature of our offerings, refunds are evaluated on a case-by-case basis:
                </p>
                <ul className="iti-legal-list">
                  <li><strong>Before Project Commencement:</strong> If you cancel before any work has begun, a full refund of the advance is issued, minus any administrative or payment processing fees.</li>
                  <li><strong>After Commencement — Partial Work Completed:</strong> If you cancel after work has begun, you are entitled to a refund of the advance minus the value of work completed to date, as assessed by Imperial.</li>
                  <li><strong>After Milestone Delivery:</strong> Payments made for completed and approved milestones are non-refundable.</li>
                  <li><strong>After Project Delivery:</strong> No refunds are issued once final deliverables have been delivered and accepted.</li>
                  <li><strong>Non-Performance by Imperial:</strong> If Imperial fails to deliver agreed services within a reasonable extension period due to reasons solely attributable to us, a partial or full refund may be issued at our discretion.</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Non-Refundable Items</h2>
                <p className="iti-legal-text">The following are strictly non-refundable in all circumstances:</p>
                <ul className="iti-legal-list">
                  <li>Domain registration and hosting fees paid to third-party providers</li>
                  <li>Third-party software licences or API subscriptions procured on your behalf</li>
                  <li>Government or filing fees (e.g. Trademark registration)</li>
                  <li>Work already completed, delivered, and approved by the client</li>
                  <li>Rush or expedited delivery charges</li>
                  <li>Consultation fees for completed sessions</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">Cancellation Process</h2>
                <p className="iti-legal-text">
                  To initiate a cancellation or refund request, please contact us in writing at <a href="mailto:info@imperialtechinnovations.com" className="iti-legal-link">info@imperialtechinnovations.com</a> with your project reference number, reason for cancellation, and preferred resolution.
                </p>
                <p className="iti-legal-text">
                  We will acknowledge your request within 2 business days and aim to resolve it within 10 business days. Approved refunds are processed within 7–14 business days depending on the payment method.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Late Payments</h2>
                <p className="iti-legal-text">
                  Invoices not paid within the agreed timeline may result in:
                </p>
                <ul className="iti-legal-list">
                  <li>Suspension of active project work until payment is received</li>
                  <li>Late payment interest of 2% per month on the outstanding balance</li>
                  <li>Withholding of final deliverables until full payment is cleared</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Annual Maintenance Contract (AMC)</h2>
                <p className="iti-legal-text">
                  AMC fees are billed annually and are non-refundable once the contract period has commenced. Early termination of AMC will not entitle the client to a pro-rata refund unless exceptional circumstances exist and are mutually agreed upon in writing.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Dispute Resolution</h2>
                <p className="iti-legal-text">
                  In the event of a billing dispute, clients must raise the issue within 14 days of invoice receipt. We are committed to resolving disputes amicably. Unresolved disputes will be handled per the governing law provisions in our Terms of Service.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">Contact for Payment Queries</h2>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations — Accounts & Billing</strong><br />
                    Email: <a href="mailto:info@imperialtechinnovations.com">info@imperialtechinnovations.com</a><br />
                    India: <a href="tel:+917358013585">+91 7358013585</a> &nbsp;|&nbsp; US: <a href="tel:+18599788780">+1-(859) 978-8780</a><br />
                    Business Hours: Mon–Fri, 9:00 AM – 6:00 PM IST / EST
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
