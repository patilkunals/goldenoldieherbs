"use client"
import { useState } from 'react'
import panchkarma from '../../data/panchkarma'
import type { PanchkarmaTherapy } from '../../data/panchkarma'
import SafeImage from '../ui/SafeImage'

export default function PanchkarmaHub() {
  const [open, setOpen] = useState<string | null>(panchkarma[0]?.id ?? null)

  function toggle(id: string) {
    setOpen(prev => (prev === id ? null : id))
  }

  return (
    <section id="panchkarma" className="py-12 bg-parchment scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-3">Detox &amp; Rejuvenation</span>
          <h2 className="text-2xl md:text-4xl font-heading text-charcoal">Panchkarma Experience Hub</h2>
          <p className="mt-3 text-charcoal/70">Five classical detoxification therapies, guided by certified Panchkarma consultants.</p>
        </div>

        <div className="space-y-4">
          {panchkarma.map((t: PanchkarmaTherapy) => (
            <article key={t.id} className="rounded-2xl overflow-hidden border border-charcoal/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <button
                type="button"
                aria-expanded={open === t.id}
                onClick={() => toggle(t.id)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-sand flex items-center justify-center font-heading text-sm shrink-0 shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-charcoal">{t.name}</div>
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{t.duration}</span>
                    {t.sessionCount && <span className="px-2 py-0.5 rounded-full bg-gold/15 text-charcoal/80 font-medium">{t.sessionCount} sessions</span>}
                  </div>
                </div>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 transition-transform duration-300 ${open === t.id ? 'rotate-180' : ''}`}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {open === t.id && (
                <div className="px-5 pb-6 pt-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <SafeImage src={t.image} alt={t.name} className="w-full h-48 object-cover rounded-md" />
                    {t.notes && <p className="mt-3 text-xs text-charcoal/70">{t.notes}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-sm font-semibold text-charcoal mb-2">Therapy Steps</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-charcoal/80">
                      {t.steps.map(s => (
                        <li key={s.step}>
                          <div className="font-medium">{s.title}</div>
                          <div className="text-sm text-charcoal/70">{s.description}</div>
                        </li>
                      ))}
                    </ol>

                    <h4 className="mt-4 text-sm font-semibold text-charcoal mb-2">Benefits</h4>
                    <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-charcoal/80">
                      {t.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
