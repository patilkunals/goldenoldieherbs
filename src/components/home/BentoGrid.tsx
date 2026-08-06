"use client"
import { motion } from 'framer-motion'

const items = [
  {
    id: 'consult',
    title: 'Ayurvedic Clinic',
    description: 'Root-cause diagnostics, personalized care and lifestyle alignment.'
  },
  {
    id: 'panchkarma',
    title: 'Panchkarma Center',
    description: 'Detox therapies including Vamana, Virechana, Basti, Nasya and Raktamokshana.'
  },
  {
    id: 'specialists',
    title: 'Multi-Specialist Clinic',
    description: 'Dedicated care for skin, joints, digestion and metabolic health.'
  },
  {
    id: 'products',
    title: 'Distribution & Retail',
    description: 'B2B medicine distribution, B2C retail and trusted Amazon presence.'
  },
]

export default function BentoGrid() {
  return (
    <section id="pillars" className="py-12 scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-3">What we do</span>
          <h2 className="text-2xl md:text-4xl font-heading text-charcoal">Our Core Pillars</h2>
          <p className="mt-3 text-charcoal/70">Four integrated arms of care, formulation and distribution&mdash;built around classical Ayurveda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <motion.article
              key={it.id}
              className="group relative rounded-2xl p-6 bg-white border border-charcoal/5 overflow-hidden"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gold/10 via-transparent to-terracotta/10 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-sand mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#FBF9F5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{it.title}</h3>
                  <p className="text-sm text-charcoal/70">{it.description}</p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <a href={`#${it.id}`} className="text-sm font-medium text-primary group-hover:underline underline-offset-4">Explore &rarr;</a>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold border border-gold/60 text-charcoal">Learn More</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
