import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Globe2,
  Hammer,
  LockKeyhole,
  MessageSquareText,
  Palette,
  PencilRuler,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
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

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "AI Assistant", href: "/assistant" },
  { label: "Launch Kit", href: "#startup" },
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
    title: "Startups",
    description:
      "From MVP to scale, we architect the technical foundation that grows with your ambition.",
    icon: Rocket,
  },
  {
    title: "SaaS Companies",
    description:
      "Platform engineering, multi-tenancy, and growth systems for software products at every stage.",
    icon: Cloud,
  },
  {
    title: "Enterprises",
    description:
      "Digital transformation, modernization, and enterprise AI for large organizations with real complexity.",
    icon: Building2,
  },
  {
    title: "Digital Businesses",
    description:
      "Commerce, marketplace, and platform operations that demand speed, reliability, and visibility.",
    icon: Globe2,
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

export const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Applications", href: "#services" },
      { label: "AI and Machine Learning", href: "#services" },
      { label: "Cloud Infrastructure", href: "#services" },
      { label: "Data Analytics", href: "#services" },
      { label: "IT Consulting", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "AI Assistant", href: "/assistant" },
      { label: "Our Process", href: "#process" },
      { label: "Industries", href: "#industries" },
      { label: "Launch Kit", href: "#startup" },
      { label: "Careers", href: "#contact" },
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
      { label: "Request Consultation", href: "#contact" },
      { label: "Partner Program", href: "#contact" },
    ],
  },
]
