import type { Metadata } from "next"
import ItiLeadershipPage from "@/components/iti-leadership-page"
import "../../iti-home-base.css"
import "../../iti-home-sections.css"
import "../../iti-about.css"

export const metadata: Metadata = {
  title: "Leadership | Imperial Tech Innovations",
  description:
    "Meet the leadership team guiding Imperial Tech Innovations with engineering precision, governance discipline, and long-term institutional vision.",
}

export default function LeadershipPage() {
  return <ItiLeadershipPage />
}
