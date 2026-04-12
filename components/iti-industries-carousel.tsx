"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { IndustryCard } from "@/components/iti-content"

type ItiIndustriesCarouselProps = {
  items: IndustryCard[]
}

function getCardsPerPage(width: number) {
  if (width < 640) return 1
  if (width < 1040) return 2
  return 3
}

function chunkItems<T>(items: T[], size: number) {
  const chunks: T[][] = []

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }

  return chunks
}

export default function ItiIndustriesCarousel({ items }: ItiIndustriesCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)

  const [cardsPerPage, setCardsPerPage] = useState(3)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage(window.innerWidth))

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const pages = chunkItems(items, cardsPerPage)
  const totalPages = pages.length

  useEffect(() => {
    const nextPage = Math.min(activePage, Math.max(totalPages - 1, 0))
    const viewport = viewportRef.current

    if (viewport) {
      viewport.scrollTo({
        left: nextPage * viewport.clientWidth,
        behavior: "auto",
      })
    }

    if (nextPage !== activePage) {
      setActivePage(nextPage)
    }
  }, [cardsPerPage, totalPages])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handleScroll = () => {
      const nextPage = Math.round(viewport.scrollLeft / Math.max(viewport.clientWidth, 1))
      setActivePage((currentPage) => (currentPage === nextPage ? currentPage : nextPage))
    }

    viewport.addEventListener("scroll", handleScroll, { passive: true })
    return () => viewport.removeEventListener("scroll", handleScroll)
  }, [totalPages])

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 0), totalPages - 1)
    const viewport = viewportRef.current

    if (viewport) {
      viewport.scrollTo({
        left: nextPage * viewport.clientWidth,
        behavior: "smooth",
      })
    }

    setActivePage(nextPage)
  }

  if (!totalPages) {
    return null
  }

  return (
    <div className="iti-industries-carousel iti-reveal iti-rd1">
      <div className="iti-industries-controls">
        <div className="iti-industries-status">
          {String(activePage + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </div>

        <div className="iti-industries-nav">
          <button
            type="button"
            className="iti-industries-nav-btn"
            onClick={() => goToPage(activePage - 1)}
            disabled={activePage === 0}
            aria-label="Previous industries"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            className="iti-industries-nav-btn"
            onClick={() => goToPage(activePage + 1)}
            disabled={activePage === totalPages - 1}
            aria-label="Next industries"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="iti-industries-viewport">
        <div className="iti-industries-track">
          {pages.map((page, pageIndex) => (
            <div
              key={`industries-page-${pageIndex}`}
              className="iti-industries-page"
              style={{ gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))` }}
            >
              {page.map((industry) => {
                const Icon = industry.icon

                return (
                  <article key={industry.title} className="iti-industry-card">
                    <div className="iti-industry-category">{industry.category}</div>
                    <Icon className="iti-industry-icon" strokeWidth={1.7} />
                    <h3 className="iti-industry-name">{industry.title}</h3>
                    <p className="iti-industry-desc">{industry.description}</p>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="iti-industries-dots" aria-label="Industry carousel pagination">
        {pages.map((_, pageIndex) => (
          <button
            key={`industry-dot-${pageIndex}`}
            type="button"
            className={`iti-industries-dot${pageIndex === activePage ? " active" : ""}`}
            onClick={() => goToPage(pageIndex)}
            aria-label={`Go to industry page ${pageIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
