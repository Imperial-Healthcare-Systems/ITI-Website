import type { Metadata } from "next"
import ItiAboutPage from "@/components/iti-about-page"
import "../iti-home-base.css"
import "../iti-home-sections.css"
import "../iti-about.css"

export const metadata: Metadata = {
  title: "About | Imperial Tech Innovations",
  description:
    "Learn about Imperial Tech Innovations, our precision engineering mindset, global operating model, and technology capabilities.",
}

export default function AboutPage() {
  return <ItiAboutPage />
}
