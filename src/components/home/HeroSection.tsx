"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center" aria-label="Hero">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=1d5ee0b4b8f7b8d2b1f0a3b6f6b9a3c6')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[rgba(244,239,230,0.6)] to-[rgba(30,58,43,0.6)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-heading leading-tight text-charcoal drop-shadow-sm">Ancient Ayurvedic Wisdom Meets Modern Clinical Excellence.</h1>
          <p className="mt-4 text-lg text-charcoal/90 max-w-2xl">A curated blend of classical Ayurveda and modern clinical practice—personalised care, authentic formulations, and trusted Panchkarma therapies.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="#panchkarma" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-sand font-semibold hover:opacity-95">Explore Panchkarma</Link>
            <Link href="#consult" className="inline-flex items-center px-6 py-3 rounded-md border-2 border-gold text-charcoal bg-transparent font-semibold">Consult a Specialist</Link>
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, type: 'spring' }} className="absolute left-6 top-32 bg-white/90 rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center font-semibold">★</div>
          <div>
            <div className="text-sm font-semibold">50,000+ Patients</div>
            <div className="text-xs text-charcoal/70">Healed & Supported</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, type: 'spring' }} className="absolute right-6 top-44 bg-white/90 rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-sand flex items-center justify-center font-semibold">✓</div>
          <div>
            <div className="text-sm font-semibold">Certified Specialists</div>
            <div className="text-xs text-charcoal/70">Board & Clinic Certified</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
