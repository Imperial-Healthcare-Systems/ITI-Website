import type { Metadata } from "next"
import ItiHomePage from "@/components/iti-home-page"
import "./iti-home-base.css"
import "./iti-home-sections.css"

export const metadata: Metadata = {
  title: "Imperial Tech Innovations | Engineer the Future",
  description:
    "Imperial Tech Innovations builds high-performance IT, SaaS, cloud, AI, and custom software systems for modern digital businesses.",
}

export default function HomePage() {
  return <ItiHomePage />
}
