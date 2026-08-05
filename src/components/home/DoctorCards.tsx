"use client"
import { useMemo, useState } from 'react'
import doctors, { type Doctor } from '../../data/doctors'
import { motion } from 'framer-motion'
import SafeImage from '../ui/SafeImage'

export default function DoctorCards() {
  const [filter, setFilter] = useState<string>('All')
  const [selected, setSelected] = useState<Doctor | null>(null)

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
  }

  function closeBooking() {
    setSelected(null)
  }

  return (
    <section id="specialists" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading text-charcoal">Our Specialists</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm text-charcoal/80">Filter:</label>
            <select value={filter} onChange={e => setFilter(e.target.value)} className="px-3 py-2 rounded-md border">
              {specializations.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(doc => (
            <motion.article key={doc.id} whileHover={{ y: -6 }} className="rounded-xl p-5 bg-white/60 border hover:border-gold transition-shadow shadow-sm">
              <div className="flex items-start gap-4">
                <SafeImage src={doc.image} alt={doc.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-charcoal">{doc.name}</h3>
                    <div className="text-sm text-charcoal/70">{doc.experienceYears} yrs</div>
                  </div>
                  <div className="text-sm text-charcoal/80">{doc.designation}</div>
                  <div className="mt-3 text-sm text-charcoal/70">{doc.specializations.join(' · ')}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => openBooking(doc)} className="px-4 py-2 rounded-md bg-primary text-sand font-medium">Book Appointment</button>
                <a href={`#${doc.id}`} className="text-sm text-primary hover:underline">View Profile</a>
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

            <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); console.log(Object.fromEntries(fd)); closeBooking(); }} className="space-y-4">
              <input name="name" placeholder="Your name" required className="w-full px-3 py-2 border rounded-md" />
              <input name="phone" placeholder="Phone" required className="w-full px-3 py-2 border rounded-md" />
              <input name="date" type="date" className="w-full px-3 py-2 border rounded-md" />
              <textarea name="message" placeholder="Short message" className="w-full px-3 py-2 border rounded-md" />
              <div className="flex items-center justify-between">
                <button type="submit" className="px-4 py-2 rounded-md bg-primary text-sand font-medium">Request Appointment</button>
                <button type="button" onClick={closeBooking} className="px-4 py-2 rounded-md border">Cancel</button>
              </div>
            </form>
          </motion.aside>
        </div>
      )}
    </section>
  )
}
