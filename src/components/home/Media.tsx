"use client"

import { useEffect, useRef, useState } from 'react'

const VIDEO_IDS = [
  'AjkGQca2PQA',
  'hscTvoxOCUY',
  'RpuMWw0_l0w',
  'uf39EzHj2cY',
  'i3aBVLUWZuM',
  'WvE7Fd7mw30',
  '-8-sgg8e_tI',
  'qWX9P5yna90',
  'zeDal8eGGnI',
  'I3ayze5Mv-w',
  '1Hru6D1ZsUs',
  'zPEmQD8bW68',
  'm4sVWNjIIE8',
  'MHSS27gl0XU',
  'wqm9UZOGrfU',
]

function Thumb({ id, onPlay }: { id: string; onPlay: (id: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(id)}
      className="group relative aspect-video w-full block rounded-lg overflow-hidden bg-charcoal/10 focus:outline-none focus:ring-2 focus:ring-primary shrink-0"
      aria-label="Play video"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video thumbnail"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary ml-0.5" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white group-hover:bg-black/70 transition-colors">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6" />
          <path d="M9 21H3v-6" />
          <path d="M21 3l-7 7" />
          <path d="M3 21l7-7" />
        </svg>
      </span>
    </button>
  )
}

export default function Media() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveId(null)
        setShowAll(false)
      }
    }
    if (activeId || showAll) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeId, showAll])

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' })
  }

  function playFromPicker(id: string) {
    setShowAll(false)
    setActiveId(id)
  }

  return (
    <section id="media" className="py-12 scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading text-charcoal">Media</h3>
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-sm font-medium text-primary hover:underline"
          >
            View all videos
          </button>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous videos"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-charcoal hover:bg-sand"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="Next videos"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-charcoal hover:bg-sand"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            className="grid grid-flow-col grid-rows-2 auto-cols-[minmax(220px,1fr)] sm:auto-cols-[minmax(260px,1fr)] gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIDEO_IDS.map((id) => (
              <div key={id} className="snap-start">
                <Thumb id={id} onPlay={setActiveId} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAll && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowAll(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-sand rounded-lg shadow-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-heading text-charcoal">All Videos</h4>
              <button
                type="button"
                onClick={() => setShowAll(false)}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-white hover:bg-charcoal/10 flex items-center justify-center text-charcoal"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {VIDEO_IDS.map((id) => (
                <Thumb key={id} id={id} onPlay={playFromPicker} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              aria-label="Close video"
              className="absolute -top-10 right-0 sm:top-2 sm:right-2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-charcoal z-10"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
