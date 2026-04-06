"use client"

import { useEffect, useRef, useState } from "react"

export default function ItiCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1800

        const animate = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) {
            frame = window.requestAnimationFrame(animate)
          }
        }

        frame = window.requestAnimationFrame(animate)
      },
      { threshold: 0.45 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [target])

  return <span ref={ref}>{value}</span>
}
