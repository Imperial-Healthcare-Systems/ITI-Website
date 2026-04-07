import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Factory,
  Globe2,
  Hammer,
  HeartPulse,
  Landmark,
  LockKeyhole,
  MessageSquareText,
  Palette,
  PencilRuler,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Truck,
  Users,
  Workflow,
} from "lucide-react"

export type NavLink = {
  label: string
  href: string
}

export type ServiceCard = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export type LaunchTier = {
  name: string
  price: string
  featured?: boolean
}

export type IndustryCard = {
  title: string
  description: string
  icon: LucideIcon
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export type WhyItem = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export type FooterSection = {
  title: string
  links: NavLink[]
}

export type AboutCapability = {
  number: string
  title: string
  description: string
}

export type LeadershipProfile = {
  slug: string
  name: string
  role: string
  organization: string
  preview: string
  biography: string[]
  expertise: string[]
  mandate: string
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "AI Assistant", href: "/assistant" },
  { label: "Launch Kit", href: "/#startup" },
]

export const marqueeItems = [
  "Web Development",
  "AI and Machine Learning",
  "Cloud Infrastructure",
  "Mobile Applications",
  "Data Analytics",
  "Conversational AI",
  "CRM Systems",
  "Automation",
  "Custom Software",
  "UI and UX Engineering",
  "IT Consulting",
  "QA and Security",
  "Digital Transformation",
  "SaaS Engineering",
]

export const metrics = [
  {
    target: 98,
    suffix: "%",
    label: "On-Time Delivery",
    sublabel: "Across all engagements",
  },
  {
    target: 14,
    suffix: "d",
    label: "Average Delivery",
    sublabel: "Kickoff to deployment",
  },
  {
    target: 40,
    suffix: "+",
    label: "Solutions Delivered",
    sublabel: "Across sectors globally",
  },
  {
    target: 2,
    suffix: "x",
    label: "Continents. One Standard.",
    sublabel: "USA + India delivery",
  },
]

export const services: ServiceCard[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Enterprise-grade web platforms, portals, and applications engineered for performance and scale.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile experiences that users love and businesses depend on.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "UI and UX Engineering",
    description:
      "Human-centered design systems that turn traffic into trust, adoption, and measurable growth.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Cloud and Infrastructure",
    description:
      "Resilient cloud foundations on AWS, GCP, and Azure built for uptime, speed, and clean operations.",
    icon: Cloud,
  },
  {
    number: "05",
    title: "AI and Machine Learning",
    description:
      "Production AI pipelines that turn operational data into workflows, predictions, and advantage.",
    icon: BrainCircuit,
  },
  {
    number: "06",
    title: "Conversational AI",
    description:
      "Assistants and chat systems that handle real customer journeys, not demo-only conversations.",
    icon: MessageSquareText,
  },
  {
    number: "07",
    title: "CRM and Business Systems",
    description:
      "Operational systems designed around your team, your data, and the way the business actually runs.",
    icon: Users,
  },
  {
    number: "08",
    title: "Data Analytics",
    description:
      "Decision-ready dashboards and reporting layers that move teams from guessing to acting.",
    icon: BarChart3,
  },
  {
    number: "09",
    title: "Automation Solutions",
    description:
      "Workflow automation that removes repetitive effort and increases speed across departments.",
    icon: Workflow,
  },
  {
    number: "10",
    title: "Custom Software",
    description:
      "Bespoke software for complex workflows where off-the-shelf tools create more limits than leverage.",
    icon: Bot,
  },
  {
    number: "11",
    title: "QA and Security",
    description:
      "Quality assurance, hardening, and security reviews that help launches feel stable instead of risky.",
    icon: ShieldCheck,
  },
  {
    number: "12",
    title: "IT Consulting",
    description:
      "Strategic technical advisory from teams that understand delivery, scale, and business outcomes.",
    icon: BriefcaseBusiness,
  },
]

export const launchDeliverables = [
  "Complete brand identity and design system",
  "High-performance marketing website",
  "Mobile-first product interface",
  "CRM, analytics, and automation stack",
  "Cloud infrastructure and CI/CD pipeline",
  "Go-to-market technical playbook",
]

export const launchTiers: LaunchTier[] = [
  { name: "Starter", price: "$4,999" },
  { name: "Growth", price: "$9,999", featured: true },
  { name: "Scale", price: "$19,999" },
]

export const industries: IndustryCard[] = [
  {
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-conscious platforms, patient workflow systems, and operational intelligence for providers, diagnostics, and health-tech innovators.",
    icon: HeartPulse,
  },
  {
    title: "FinTech & Banking",
    description:
      "Secure digital products, compliance-ready workflows, and core integrations that modernize financial operations without compromising control.",
    icon: Landmark,
  },
  {
    title: "Manufacturing & Industry 4.0",
    description:
      "Connected operations, plant-floor visibility, and automation systems that turn fragmented production data into measurable throughput gains.",
    icon: Factory,
  },
  {
    title: "E-commerce & Retail",
    description:
      "High-conversion commerce platforms and omnichannel systems engineered to improve margin, retention, and execution speed.",
    icon: ShoppingBag,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Real-time tracking, warehouse orchestration, and planning systems that reduce delays, improve accuracy, and strengthen delivery performance.",
    icon: Truck,
  },
  {
    title: "AI & Deep Tech Companies",
    description:
      "Scalable AI infrastructure, product engineering, and data pipelines that move advanced technology teams from prototype to production.",
    icon: BrainCircuit,
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map goals, bottlenecks, technical context, and the business outcome that matters most.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, UX, and system decisions are shaped for clarity now and scale later.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile delivery with transparent milestones, steady communication, and production-minded execution.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Secure",
    description:
      "Security reviews, testing, and launch readiness checks are built into the process, not layered on.",
    icon: LockKeyhole,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "After launch we optimize, monitor, and evolve the system with your growth in mind.",
    icon: TrendingUp,
  },
]

export const whyItems: WhyItem[] = [
  {
    number: "01",
    title: "Security-First Engineering",
    description:
      "Every system is designed with enterprise security in mind from the first architecture conversation onward.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Cloud-Native at Core",
    description:
      "We do not retrofit for modern infrastructure. We build for scale, resilience, and clean operations from day one.",
    icon: Cloud,
  },
  {
    number: "03",
    title: "US Entity Advantage",
    description:
      "US-facing accountability paired with India-based delivery gives clients speed, depth, and dependable partnership.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "We do not disappear after launch. The operating model is designed around ongoing value and shared outcomes.",
    icon: Users,
  },
]

export const aboutParagraphs = [
  "Imperial Tech Innovations is the technology division of Imperial Group - built on the conviction that technology, when engineered with discipline, becomes the most powerful strategic asset an organisation can hold.",
  "We specialise in designing, engineering, and deploying scalable, intelligent, and future-ready technology systems for enterprises, corporations, and growth-stage businesses worldwide.",
  "With dual operational presence in the United States and India, we deliver the efficiency of global delivery with the quality standards that premium clients expect.",
]

export const aboutCapabilities: AboutCapability[] = [
  {
    number: "01",
    title: "Technology Consulting",
    description: "Strategic guidance from vision through to enterprise-scale execution.",
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Scalable, resilient blueprints engineered for long-term performance.",
  },
  {
    number: "03",
    title: "Software Engineering",
    description: "Precision-built platforms and services that perform under real-world load.",
  },
  {
    number: "04",
    title: "Automation & AI",
    description: "Intelligent systems that eliminate bottlenecks and enable data-driven decisions.",
  },
]

export const aboutQuote =
  "We don't merely deliver technology. We engineer the systems that power growth."

export const leadershipProfiles: LeadershipProfile[] = [
  {
    slug: "pabitra-ratan-dash",
    name: "Er. Pabitra Ratan Dash",
    role: "Founder & Chief Executive Officer",
    organization: "Imperial Tech Innovations | Imperial Group",
    preview:
      "Systems-minded leadership shaping Imperial's technology vision, enterprise architecture standards, and long-horizon institutional direction.",
    biography: [
      "Er. Pabitra Ratan Dash is the Founder and Chief Executive Officer of Imperial Tech Innovations. A graduate of Computer Science & Engineering, he brings a rare combination of systems-level thinking and enterprise operations leadership that forms the technical and institutional backbone of Imperial Group.",
      "His engineering foundation enables him to architect scalable, performance-driven technology systems and translate complex operational challenges into elegant technical solutions - a capability that defines Imperial's approach to building intelligent, integrated platforms for enterprise clients.",
    ],
    expertise: [
      "Enterprise technology architecture & systems design",
      "CSE-grounded software & platform engineering",
      "Technology strategy & digital transformation",
      "End-to-end enterprise operations leadership",
      "Scalable system integration & performance optimisation",
    ],
    mandate:
      "Er. Dash leads the institutional direction and technical vision of Imperial Tech Innovations - positioning the firm as a technology-first global consulting enterprise defined by engineering precision, proprietary methodology, and long-term institutional value creation.",
  },
  {
    slug: "milan-mala-dash",
    name: "Ms. Milan Mala Dash",
    role: "Co-Founder & Managing Director",
    organization: "Imperial Tech Innovations | Imperial Group",
    preview:
      "Governance-led leadership ensuring financial discipline, compliance readiness, and operational coherence across the institution.",
    biography: [
      "Ms. Milan Mala Dash serves as Co-Founder and Managing Director of Imperial Tech Innovations, with over 13 years of professional experience and an M.Phil. alongside ongoing doctoral research. She provides the administrative and financial governance architecture that enables Imperial to operate with institutional discipline at every level.",
      "Ms. Dash oversees internal organisational structure, financial controls, compliance alignment, and the people framework that defines Imperial's internal culture of precision and accountability. Her leadership ensures that the firm's delivery functions are underpinned by rigorous operational standards.",
    ],
    expertise: [
      "Corporate administration & governance architecture",
      "Internal financial controls & resource planning",
      "Organisational hierarchy & HR structure",
      "Compliance alignment & regulatory readiness",
      "Quality assurance & internal audit frameworks",
    ],
    mandate:
      "Ms. Dash ensures that Imperial operates as a well-governed, financially disciplined, and operationally coherent institution - enabling leadership to focus on client delivery and strategic growth with confidence in the firm's internal foundations.",
  },
]

export const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Mobile Applications", href: "/#services" },
      { label: "AI and Machine Learning", href: "/#services" },
      { label: "Cloud Infrastructure", href: "/#services" },
      { label: "Data Analytics", href: "/#services" },
      { label: "IT Consulting", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "AI Assistant", href: "/assistant" },
      { label: "Our Process", href: "/#process" },
      { label: "Industries", href: "/#industries" },
      { label: "Launch Kit", href: "/#startup" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "info@imperialtechinnovations.com",
        href: "mailto:info@imperialtechinnovations.com",
      },
      { label: "+91 7358013585", href: "tel:+917358013585" },
      { label: "Request Consultation", href: "/#contact" },
      { label: "Partner Program", href: "/#contact" },
    ],
  },
]
