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
    <section id="panchkarma" className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-6">Panchkarma Experience Hub</h2>

        <div className="space-y-4">
          {panchkarma.map((t: PanchkarmaTherapy) => (
            <article key={t.id} className="rounded-xl overflow-hidden border bg-white shadow-sm">
              <button
                type="button"
                aria-expanded={open === t.id}
                onClick={() => toggle(t.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div>
                  <div className="text-lg font-semibold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal/70">Duration: {t.duration} {t.sessionCount ? `· Sessions: ${t.sessionCount}` : ''}</div>
                </div>
                <div className="ml-4 text-charcoal/60">{open === t.id ? '−' : '+'}</div>
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
