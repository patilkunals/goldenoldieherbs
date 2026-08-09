"use client"
import { useMemo, useState } from 'react'
import doctors, { type Doctor } from '../../data/doctors'
import { motion } from 'framer-motion'
import SafeImage from '../ui/SafeImage'

export default function DoctorCards() {
  const [filter, setFilter] = useState<string>('All')
  const [selected, setSelected] = useState<Doctor | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const specializations = useMemo(() => {
    const set = new Set<string>()
    doctors.forEach(d => d.specializations.forEach(s => set.add(s)))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'All') return doctors
    return doctors.filter(d => d.specializations.includes(filter))
  }, [filter])

  function openBooking(doc: Doctor) {
    setSelected(doc)
    setStatus('idle')
  }

  function closeBooking() {
    setSelected(null)
    setStatus('idle')
  }

  async function submitBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: fd.get('name'),
      phone: fd.get('phone'),
      date: fd.get('date'),
      message: fd.get('message'),
      doctorName: selected?.name,
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
      setTimeout(closeBooking, 1200)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="specialists" className="py-12 scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-3">Our Team</span>
            <h2 className="text-2xl md:text-4xl font-heading text-charcoal">Our Specialists</h2>
          </div>
          {false && (
            <div className="flex items-center gap-3">
              <label className="text-sm text-charcoal/80">Filter:</label>
              <select value={filter} onChange={e => setFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-charcoal/15 focus:border-gold focus:outline-none">
                {specializations.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(doc => (
            <motion.article key={doc.id} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden bg-white border border-charcoal/5 hover:border-gold/60 hover:shadow-xl transition-all duration-300">
              <div className="relative h-40">
                <SafeImage src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-sand">
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <div className="text-xs opacity-90">{doc.designation}</div>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-primary text-xs font-semibold">{doc.experienceYears} yrs</div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doc.specializations.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => openBooking(doc)} className="px-4 py-2 rounded-full bg-primary !text-sand font-medium text-sm hover:opacity-90 transition-opacity">Book Appointment</button>
                  <a href={`/doctors/${doc.id}`} className="text-sm text-primary hover:underline">View Profile</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Booking Drawer Modal */}
      {selected && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={closeBooking} />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring' }} className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Book: {selected.name}</h3>
              <button onClick={closeBooking} aria-label="Close" className="text-charcoal/70">✕</button>
            </div>

            <form onSubmit={submitBooking} className="space-y-4">
              <input name="name" placeholder="Your name" required className="w-full px-3 py-2 border rounded-md" />
              <input name="phone" placeholder="Phone" required className="w-full px-3 py-2 border rounded-md" />
              <input name="date" type="date" className="w-full px-3 py-2 border rounded-md" />
              <textarea name="message" placeholder="Short message" className="w-full px-3 py-2 border rounded-md" />
              <div className="flex items-center justify-between">
                <button type="submit" disabled={status === 'sending'} className="px-4 py-2 rounded-md bg-primary !text-sand font-medium disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Request Appointment'}
                </button>
                <button type="button" onClick={closeBooking} className="px-4 py-2 rounded-md border">Cancel</button>
              </div>
              {status === 'sent' && <p className="text-xs text-primary/80">Thanks — our team will reach out shortly.</p>}
              {status === 'error' && <p className="text-xs text-red-600">Something went wrong. Please try again or call us directly.</p>}
            </form>
          </motion.aside>
        </div>
      )}
    </section>
  )
}
