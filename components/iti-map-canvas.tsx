"use client"

import { useEffect, useRef } from "react"

const landMask = [
  [1, 12, 6, 16],
  [8, 14, 3, 9],
  [25, 34, 4, 10],
  [25, 30, 11, 18],
  [27, 32, 14, 21],
  [27, 33, 21, 26],
  [33, 38, 5, 12],
  [37, 45, 4, 9],
  [39, 48, 6, 14],
  [44, 52, 7, 18],
  [50, 57, 7, 12],
  [44, 53, 14, 22],
  [44, 50, 22, 27],
  [53, 58, 10, 16],
  [54, 60, 15, 22],
  [55, 59, 22, 27],
  [56, 58, 25, 28],
]

const offices = [
  { x: 0.22, y: 0.37, label: "Richmond, KY", sub: "United States", color: "gold" as const },
  { x: 0.645, y: 0.455, label: "Gurugram", sub: "India", color: "blue" as const },
]

export default function ItiMapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const cols = 60
    const rows = 30
    const dots: Array<{ col: number; row: number; onLand: boolean }> = []
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        let onLand = false
        for (let index = 0; index < landMask.length; index += 1) {
          const [colMin, colMax, rowMin, rowMax] = landMask[index]
          if (col >= colMin && col <= colMax && row >= rowMin && row <= rowMax) {
            onLand = true
            break
          }
        }
        dots.push({ col, row, onLand })
      }
    }

    let width = 0
    let height = 420
    let time = 0
    let frame = 0

    const resize = () => {
      width = canvas.clientWidth || 1000
      height = 420
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const strokeColor = (color: "gold" | "blue", alpha: number) =>
      color === "gold"
        ? `rgba(201, 169, 110, ${alpha})`
        : `rgba(26, 107, 245, ${alpha})`

    const draw = () => {
      context.clearRect(0, 0, width, height)
      time += 0.008

      dots.forEach((dot) => {
        const x = (dot.col / cols) * width + width / cols / 2
        const y = (dot.row / rows) * height + height / rows / 2
        context.beginPath()
        context.arc(x, y, dot.onLand ? 1.8 : 0.6, 0, Math.PI * 2)
        context.fillStyle = dot.onLand ? "rgba(201, 169, 110, 0.22)" : "rgba(212, 220, 232, 0.05)"
        context.fill()
      })

      offices.forEach((office, index) => {
        const x = office.x * width
        const y = office.y * height
        const pulse = Math.sin(time * 2 + index * Math.PI) * 0.5 + 0.5

        context.beginPath()
        context.arc(x, y, 10 + pulse * 8, 0, Math.PI * 2)
        context.strokeStyle = strokeColor(office.color, 0.25 - pulse * 0.18)
        context.lineWidth = 1
        context.stroke()

        context.beginPath()
        context.arc(x, y, 18 + pulse * 14, 0, Math.PI * 2)
        context.strokeStyle = strokeColor(office.color, 0.1 - pulse * 0.07)
        context.lineWidth = 0.6
        context.stroke()

        context.beginPath()
        context.arc(x, y, 4 + pulse * 1.5, 0, Math.PI * 2)
        context.fillStyle = strokeColor(office.color, 0.95)
        context.fill()

        context.fillStyle = "rgba(212, 220, 232, 0.85)"
        context.font = "600 15px var(--font-iti-sans)"
        context.textAlign = "center"
        context.fillText(office.label, x, y - 22)

        context.fillStyle = "rgba(107, 127, 154, 0.8)"
        context.font = "12px var(--font-iti-sans)"
        context.fillText(office.sub, x, y - 8)
      })

      const origin = offices[0]
      const destination = offices[1]
      const startX = origin.x * width
      const startY = origin.y * height
      const endX = destination.x * width
      const endY = destination.y * height
      const controlPointOneX = startX + (endX - startX) * 0.3
      const controlPointOneY = Math.min(startY, endY) - height * 0.35
      const controlPointTwoX = startX + (endX - startX) * 0.7
      const controlPointTwoY = Math.min(startY, endY) - height * 0.35

      const arcPoints = []
      for (let step = 0; step <= 1; step += 0.005) {
        const inverse = 1 - step
        arcPoints.push({
          x:
            inverse * inverse * inverse * startX +
            3 * inverse * inverse * step * controlPointOneX +
            3 * inverse * step * step * controlPointTwoX +
            step * step * step * endX,
          y:
            inverse * inverse * inverse * startY +
            3 * inverse * inverse * step * controlPointOneY +
            3 * inverse * step * step * controlPointTwoY +
            step * step * step * endY,
        })
      }

      context.beginPath()
      context.moveTo(arcPoints[0].x, arcPoints[0].y)
      arcPoints.forEach((point) => context.lineTo(point.x, point.y))
      context.strokeStyle = "rgba(201, 169, 110, 0.12)"
      context.lineWidth = 1.4
      context.stroke()

      const travel = (time * 0.2) % 1
      const index = Math.min(Math.floor(travel * (arcPoints.length - 1)), arcPoints.length - 2)
      const marker = arcPoints[index]

      context.beginPath()
      context.arc(marker.x, marker.y, 3, 0, Math.PI * 2)
      context.fillStyle = "rgba(201, 169, 110, 0.95)"
      context.fill()

      context.beginPath()
      context.arc(marker.x, marker.y, 7, 0, Math.PI * 2)
      context.strokeStyle = "rgba(201, 169, 110, 0.25)"
      context.lineWidth = 1
      context.stroke()

      frame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="iti-map-canvas iti-reveal iti-rd1" aria-hidden="true" />
}
