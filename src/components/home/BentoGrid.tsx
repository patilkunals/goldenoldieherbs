"use client"
import { motion } from 'framer-motion'

const items = [
  {
    id: 'clinic',
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
    id: 'distribution',
    title: 'Distribution & Retail',
    description: 'B2B medicine distribution, B2C retail and trusted Amazon presence.'
  },
]

export default function BentoGrid() {
  return (
    <section id="pillars" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-6">Our Core Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.id}
              className="relative rounded-xl p-6 bg-white/60 dark:bg-black/40 border border-transparent"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-px rounded-xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300" style={{ boxShadow: '0 10px 30px rgba(184,91,53,0.08)' }} />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary text-sand mb-4 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#FBF9F5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{it.title}</h3>
                  <p className="text-sm text-charcoal/75">{it.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a href={`#${it.id}`} className="text-sm font-medium text-primary hover:underline">Explore</a>
                  <span className="inline-block px-3 py-1 rounded-md text-sm font-semibold bg-white border border-gold text-charcoal shadow-soft-gold">Learn More</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
