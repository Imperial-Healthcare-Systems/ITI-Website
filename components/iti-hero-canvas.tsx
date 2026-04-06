"use client"

import { useEffect, useRef } from "react"

type ParticleColor = "gold" | "blue" | "white"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  pulse: number
  pulseSpeed: number
  color: ParticleColor
}

export default function ItiHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let width = 0
    let height = 0
    let frame = 0
    let particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(50, Math.floor((width * height) / 22000))
      particles = Array.from({ length: count }, () => {
        const roll = Math.random()
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() * 2.2 + 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.025 + 0.008,
          color: roll < 0.6 ? "gold" : roll < 0.85 ? "blue" : "white",
        }
      })
    }

    const colorFor = (color: ParticleColor, alpha: number) => {
      if (color === "gold") return `rgba(201, 169, 110, ${alpha})`
      if (color === "blue") return `rgba(26, 107, 245, ${alpha})`
      return `rgba(242, 245, 249, ${alpha})`
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      const glow = context.createRadialGradient(
        width * 0.55,
        height * 0.34,
        40,
        width * 0.55,
        height * 0.34,
        width * 0.55
      )
      glow.addColorStop(0, "rgba(201, 169, 110, 0.12)")
      glow.addColorStop(1, "rgba(3, 6, 13, 0)")
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index]

        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.hypot(dx, dy)
          if (distance > 118) continue
          const alpha = (1 - distance / 118) * 0.08
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(201, 169, 110, ${alpha})`
          context.lineWidth = 0.55
          context.stroke()
        }
      }

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.hypot(dx, dy)
        if (distance < 140 && distance > 0) {
          const force = (140 - distance) / 140
          particle.x += (dx / distance) * force * 1.6
          particle.y += (dy / distance) * force * 1.6
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += particle.pulseSpeed

        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        const opacity = 0.35 + 0.35 * Math.sin(particle.pulse)
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = colorFor(particle.color, opacity)
        context.fill()

        if (particle.size > 1.5) {
          const halo = context.createRadialGradient(
            particle.x,
            particle.y,
            particle.size * 0.2,
            particle.x,
            particle.y,
            particle.size * 4
          )
          halo.addColorStop(0, colorFor(particle.color, opacity * 0.3))
          halo.addColorStop(1, colorFor(particle.color, 0))
          context.beginPath()
          context.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
          context.fillStyle = halo
          context.fill()
        }
      })

      frame = window.requestAnimationFrame(draw)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="iti-hero-canvas" aria-hidden="true" />
}
