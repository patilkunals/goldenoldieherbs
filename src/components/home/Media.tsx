"use client"

import { useEffect, useState } from 'react'

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

export default function Media() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveId(null)
    }
    if (activeId) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeId])

  return (
    <section id="media" className="py-12 scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-heading text-charcoal mb-6">Media</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEO_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              className="group relative aspect-video rounded-lg overflow-hidden bg-charcoal/10 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Play video"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt="Video thumbnail"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              {/* Center play icon */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary ml-0.5" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>

              {/* Enlarge icon, top-right */}
              <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white group-hover:bg-black/70 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

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
