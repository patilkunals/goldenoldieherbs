"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

const badges = [
  { icon: '★', label: '50,000+ Patients', sub: 'Healed & supported' },
  { icon: '✓', label: 'Certified Specialists', sub: 'Board & clinic certified' },
  { icon: '⟳', label: '5 Panchkarma Therapies', sub: 'Classical protocols' },
]

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden pt-[var(--nav-height)]" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/images/background/background_image.jpg')] bg-cover bg-center scale-105"
        aria-hidden
      />

      {/* Layered gradient for legibility + brand tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/70 to-terracotta/40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-sand via-sand/10 to-transparent" aria-hidden />

      {/* Decorative floating orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-terracotta/20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sand text-xs font-semibold tracking-wide uppercase mb-6">
            🍃 Authentic Ayurveda, Modern Care
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-[1.05] text-sand drop-shadow-sm">
            Ancient Ayurvedic Wisdom Meets{' '}
            <span className="text-gold italic font-display">Modern Clinical Excellence</span>
          </h1>

          <p className="mt-6 text-lg text-sand/90 max-w-2xl">
            A curated blend of classical Ayurveda and modern clinical practice&mdash;personalised care, authentic formulations, and trusted Panchkarma therapies.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              href="#panchkarma"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gold text-charcoal font-semibold shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_36px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Panchkarma
            </Link>
            <Link
              href="#consult"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-sand/60 text-sand font-semibold backdrop-blur-sm hover:bg-sand/10 hover:border-sand transition-all duration-300"
            >
              Consult a Specialist
            </Link>
          </div>
        </motion.div>

        {/* Trust badges row — sits below content, never overlaps text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/40"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-gold to-terracotta text-sand flex items-center justify-center font-semibold text-lg">
                {b.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-charcoal truncate">{b.label}</div>
                <div className="text-xs text-charcoal/60 truncate">{b.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
