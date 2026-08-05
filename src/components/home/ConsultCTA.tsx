"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ConsultCTA() {
  const [sent, setSent] = useState(false)

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    console.log('Consultation inquiry', Object.fromEntries(fd))
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section id="consult" className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" aria-hidden />
      <div className="absolute -top-16 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wide mb-4">
            Book a Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-sand leading-tight">
            Start your Ayurvedic care journey today
          </h2>
          <p className="mt-4 text-sand/80 max-w-md">
            Share a few details and our care coordinator will match you with the right specialist and Panchkarma plan.
          </p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl space-y-3"
        >
          <input name="name" placeholder="Your name" required className="w-full px-4 py-2.5 border border-charcoal/15 rounded-lg focus:border-gold focus:outline-none" />
          <input name="phone" placeholder="Phone number" required className="w-full px-4 py-2.5 border border-charcoal/15 rounded-lg focus:border-gold focus:outline-none" />
          <select name="concern" className="w-full px-4 py-2.5 border border-charcoal/15 rounded-lg focus:border-gold focus:outline-none text-charcoal/80">
            <option>General Consultation</option>
            <option>Panchkarma Therapy</option>
            <option>Skin / Dermatology</option>
            <option>Joint & Orthopedic Care</option>
            <option>Digestive Health</option>
          </select>
          <button type="submit" className="w-full px-4 py-3 rounded-lg bg-primary !text-sand font-semibold hover:opacity-90 transition-opacity">
            Request a Callback
          </button>
          {sent && <p className="text-xs text-primary/80 text-center">Thanks — our team will reach out shortly.</p>}
        </motion.form>
      </div>
    </section>
  )
}
