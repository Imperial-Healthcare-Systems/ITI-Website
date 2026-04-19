import ItiSiteHeader from "@/components/iti-site-header"
import ItiSiteFooter from "@/components/iti-site-footer"
import type { Metadata } from "next"
import "@/app/iti-home-base.css"
import "@/app/iti-home-sections.css"
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
            <h1 className="iti-legal-title">Payment &amp; Refund Policy</h1>
            <p className="iti-legal-meta">Imperial Tech Innovations — Governing All Commercial Transactions</p>
            <p className="iti-legal-meta" style={{ marginTop: "0.5rem" }}>Effective Date: April 20, 2026 &nbsp;·&nbsp; Last Updated: April 20, 2026</p>
          </div>
        </section>

        <section className="iti-legal-body">
          <div className="iti-inner">
            <div className="iti-legal-content">

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">01</div>
                <h2 className="iti-legal-section-title">Payment Structure</h2>

                <p className="iti-legal-text"><strong>Standard Payment Model:</strong></p>
                <ul className="iti-legal-list">
                  <li>A mobilisation advance of fifty percent (50%) is required prior to project commencement</li>
                  <li>Subsequent milestone-based payments are defined within the Statement of Work (SOW)</li>
                  <li>Final payment is due upon delivery and client acceptance of the completed scope</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>Accepted Payment Methods:</strong></p>
                <ul className="iti-legal-list">
                  <li>India: Bank transfer, UPI, or authorised payment gateway</li>
                  <li>International: Wire transfer (SWIFT), ACH, or authorised international payment gateway</li>
                  <li>All payments must be received in cleared funds before work commences</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>Taxation:</strong></p>
                <p className="iti-legal-text">
                  All quoted amounts are strictly exclusive of GST and all other applicable government-levied taxes, duties, and statutory charges.
                </p>
                <ul className="iti-legal-list">
                  <li>GST shall be charged at the prevailing statutory rate and is payable separately by the Client in addition to the quoted service fee</li>
                  <li>For international clients, applicable sales tax, withholding tax, or equivalent statutory levies shall apply as per the relevant jurisdiction</li>
                  <li>Tax invoices and GST receipts will be issued in accordance with applicable statutory requirements</li>
                  <li>Under no circumstances shall any quoted price be interpreted as tax-inclusive unless explicitly confirmed in writing by the Company</li>
                </ul>
                <p className="iti-legal-text">
                  Taxes are a statutory obligation and are not negotiable. The Client is solely responsible for payment of all applicable taxes over and above the agreed service fee.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">02</div>
                <h2 className="iti-legal-section-title">Late Payment &amp; Default</h2>
                <ul className="iti-legal-list">
                  <li>Invoices are payable within seven (7) days of issuance unless otherwise agreed in writing</li>
                  <li>Overdue amounts shall accrue interest at the rate of two percent (2%) per month from the due date</li>
                  <li>The Company reserves the right to suspend all active work, withhold deliverables, and revoke access to SaaS platforms upon payment default</li>
                  <li>Persistent non-payment beyond thirty (30) days may result in referral to legal counsel and formal recovery proceedings</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">03</div>
                <h2 className="iti-legal-section-title">Chargeback &amp; Payment Dispute Protection</h2>
                <p className="iti-legal-text">
                  By initiating payment, the Client expressly acknowledges and agrees that:
                </p>
                <ul className="iti-legal-list">
                  <li>All disputes regarding payment must be formally raised with the Company within fourteen (14) days of the invoice date, prior to initiating any chargeback or payment gateway dispute</li>
                  <li>Initiating a chargeback without prior written communication to the Company shall constitute a material breach of these commercial terms</li>
                  <li>In the event of an unjustified chargeback, the Company reserves the right to recover the disputed amount in full, plus applicable legal fees, administrative costs, and interest</li>
                  <li>The Company will cooperate fully with payment processor investigations and may submit all relevant transaction evidence to contest fraudulent or bad-faith chargebacks</li>
                </ul>
                <p className="iti-legal-text">
                  Clients are strongly advised to resolve all payment concerns directly with the Company before escalating to payment processors or banking institutions.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">04</div>
                <h2 className="iti-legal-section-title">Currency &amp; Forex Clause</h2>
                <p className="iti-legal-text">
                  All international contracts shall specify the billing currency at the time of SOW execution. Where services are billed in USD and payments are received in INR or other currencies, the exchange rate applied shall be the prevailing interbank rate on the date of payment confirmation. The Company shall not be liable for losses arising from currency fluctuation after invoice issuance. Clients engaging in multi-currency transactions are advised to settle invoices promptly to minimise forex exposure.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">05</div>
                <h2 className="iti-legal-section-title">Absolute 24-Hour Cancellation Window</h2>
                <p className="iti-legal-text">
                  Clients may request cancellation of services strictly within twenty-four (24) hours from the exact timestamp of payment confirmation. This window is calculated on a calendar-hour basis, irrespective of time zones, business holidays, or weekends.
                </p>
                <p className="iti-legal-text"><strong>Authorised Submission Channels:</strong></p>
                <ul className="iti-legal-list">
                  <li>Through the designated Account Manager assigned to the engagement, AND</li>
                  <li>Carbon-copied (CC) to: <a href="mailto:info@imperialtechinnovations.com" className="iti-legal-link">info@imperialtechinnovations.com</a></li>
                  <li>Verbal, informal, or undocumented requests shall not constitute valid cancellation</li>
                  <li>The responsibility for timely and complete submission rests solely with the Client</li>
                </ul>
                <p className="iti-legal-text">
                  Any cancellation request submitted beyond the 24-hour window shall be automatically deemed ineligible. All such payments are final, binding, and strictly non-refundable without exception.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">06</div>
                <h2 className="iti-legal-section-title">Refund Eligibility &amp; Executive Approval</h2>
                <p className="iti-legal-text">
                  Refunds are not automatic and represent a high-level executive exception to standard commercial terms.
                </p>

                <p className="iti-legal-text"><strong>Eligibility Criteria:</strong></p>
                <ul className="iti-legal-list">
                  <li>The cancellation request must have been formally submitted within the 24-hour eligibility window</li>
                  <li>Complete and verifiable documentation must be submitted as detailed in Section 7</li>
                  <li>No service work, design, development, or platform access shall have been initiated or delivered</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>Executive Authorisation:</strong></p>
                <p className="iti-legal-text">
                  Every refund requires the formal, written approval of the Managing Director or Chief Executive Officer (CEO) of Imperial Tech Innovations. No refund shall be disbursed absent such authorisation, regardless of any prior representations made by any other Company representative.
                </p>

                <p className="iti-legal-text"><strong>Refund Cap:</strong></p>
                <p className="iti-legal-text">
                  Where approved, the maximum refundable amount shall not exceed one hundred percent (100%) of the original payment received. The Company reserves the right to deduct a reasonable administrative and processing fee where applicable.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">07</div>
                <h2 className="iti-legal-section-title">Mandatory Documentation for Refund Processing</h2>
                <p className="iti-legal-text">
                  To initiate a valid refund review, the Client must submit the following to <a href="mailto:info@imperialtechinnovations.com" className="iti-legal-link">info@imperialtechinnovations.com</a> within the 24-hour eligibility window:
                </p>

                <p className="iti-legal-text"><strong>a. Formal Written Cancellation Letter</strong></p>
                <ul className="iti-legal-list">
                  <li>Clearly stating the reason for cancellation</li>
                  <li>Payment reference details (transaction ID, date, and amount)</li>
                  <li>Explicit request for refund</li>
                  <li>Client's full legal name and company name (if applicable)</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>b. Self-Attested Government-Issued Identity Proof</strong></p>
                <p className="iti-legal-text">Any one of the following, signed and self-attested by the Client:</p>
                <ul className="iti-legal-list">
                  <li>Aadhaar Card (for India-based clients)</li>
                  <li>Passport</li>
                  <li>Social Security Number (SSN) documentation (for US-based clients)</li>
                  <li>Any other officially recognised government-issued photo identification</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>c. Bank Account Details for Refund Credit</strong></p>
                <ul className="iti-legal-list">
                  <li>Account holder name (must match the identity document)</li>
                  <li>Bank account number</li>
                  <li>Bank name and branch</li>
                  <li>IFSC code (India) / SWIFT code / ACH Routing number (as applicable)</li>
                </ul>

                <p className="iti-legal-text">
                  Incomplete, inconsistent, or unverifiable documentation shall result in rejection or delay of the refund request at the sole discretion of the Company. The Company reserves the right to conduct internal verification, compliance checks, and anti-fraud procedures prior to approving any refund.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">08</div>
                <h2 className="iti-legal-section-title">Refund Processing Timeline</h2>
                <ul className="iti-legal-list">
                  <li>Approved refunds are processed exclusively to the original payment source account</li>
                  <li>The processing timeline may extend up to fourteen (14) business days from the date of executive approval</li>
                  <li>Timelines are subject to banking system processing, payment gateway settlement cycles, and regulatory verification requirements</li>
                  <li>The Company shall not be liable for delays attributable to external financial institutions, payment processors, or intermediary banking systems</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">09</div>
                <h2 className="iti-legal-section-title">Annual Maintenance Contract (AMC) — Billing</h2>
                <p className="iti-legal-text">
                  All LaunchPad programme packages include a complimentary one (1) year AMC from the Client onboarding date. Upon expiry of this initial period, continued AMC coverage is subject to annual renewal at the following rates:
                </p>
                <ul className="iti-legal-list">
                  <li>India-based clients: INR 10,000 per year</li>
                  <li>International clients: USD 200 per year</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>AMC Renewal Billing Terms:</strong></p>
                <ul className="iti-legal-list">
                  <li>Renewal invoices are issued thirty (30) days prior to the AMC expiry date</li>
                  <li>Payment is due within fourteen (14) days of invoice issuance</li>
                  <li>Non-payment beyond the due date will result in automatic suspension of all maintenance services</li>
                  <li>Reinstatement of lapsed AMC coverage is subject to a gap-period assessment fee determined at the Company discretion</li>
                  <li>AMC fees are non-refundable once the renewal period has commenced</li>
                </ul>

                <p className="iti-legal-text" style={{ marginTop: "1.2rem" }}><strong>What AMC Does Not Cover:</strong></p>
                <ul className="iti-legal-list">
                  <li>New feature development or scope additions</li>
                  <li>Design overhauls or platform migrations</li>
                  <li>Third-party tool subscriptions or licence renewals</li>
                  <li>Services outside the original package delivery scope</li>
                </ul>

                <p className="iti-legal-text">
                  AMC billing is separate from the original one-time package payment and is governed independently. The 24-hour cancellation and refund provisions in this Policy apply to the original package payment only and do not extend to AMC renewal invoices.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">10</div>
                <h2 className="iti-legal-section-title">Non-Refundable Items</h2>
                <p className="iti-legal-text">The following shall be strictly non-refundable under all circumstances:</p>
                <ul className="iti-legal-list">
                  <li>Work already performed, including design, development, or research activities</li>
                  <li>Completed deliverables, whether or not formally accepted by the Client</li>
                  <li>Third-party costs including domain registration, hosting, software licences, and API subscriptions</li>
                  <li>Consultation, discovery, and advisory fees</li>
                  <li>Any amounts paid outside the 24-hour eligibility window</li>
                </ul>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num">11</div>
                <h2 className="iti-legal-section-title">Dispute Resolution</h2>
                <p className="iti-legal-text">
                  All billing disputes must be raised in writing within fourteen (14) days of invoice issuance. Disputes raised beyond this period shall be deemed waived. The Company's billing team shall acknowledge disputes within 48 hours and seek to resolve them within fifteen (15) business days.
                </p>
                <p className="iti-legal-text">
                  Unresolved disputes shall be escalated in accordance with the Governing Law provisions set out in the Company's Terms of Service.
                </p>
              </div>

              <div className="iti-legal-section">
                <div className="iti-legal-section-num" style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}>Final Note</div>
                <h2 className="iti-legal-section-title">Final Governance Statement</h2>
                <p className="iti-legal-text">
                  All financial transactions, cancellations, and refund decisions at Imperial Tech Innovations are governed by strict internal controls, executive oversight, and compliance frameworks. These provisions are designed to ensure operational integrity, financial discipline, and equitable treatment across all client engagements.
                </p>
                <div className="iti-legal-contact-box">
                  <p>
                    <strong>Imperial Tech Innovations — Accounts &amp; Billing</strong><br />
                    For any queries related to this Policy:<br />
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
