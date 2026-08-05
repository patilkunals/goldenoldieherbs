"use client"
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 't1',
    name: 'Anjali R.',
    text: 'After Panchkarma therapy I feel renewed — chronic fatigue reduced and digestion improved.'
  },
  {
    id: 't2',
    name: 'Vikram S.',
    text: 'Excellent care and authentic herbal formulations. Highly recommend Goldenoldieherbs.'
  },
  {
    id: 't3',
    name: 'Meera P.',
    text: 'Professional specialists and a compassionate clinic team. My skin cleared up in weeks.'
  },
  {
    id: 't4',
    name: 'Deepak N.',
    text: 'Basti therapy helped my joint pain significantly — knowledgeable practitioners.'
  },
]

export default function Testimonials() {
  // Duplicate content for seamless loop
  const items = [...testimonials, ...testimonials]

  return (
    <section className="py-12 bg-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-heading text-charcoal mb-4">Patient Stories</h3>

        <div className="overflow-hidden rounded-lg">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [ '0%', '-50%' ] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          >
            {items.map((t, i) => (
                <div key={`${t.id}-${i}`} className="min-w-[280px] bg-sand/80 p-4 rounded-md border shadow-sm">
                <div className="text-sm text-charcoal/80 mb-2">“{t.text}”</div>
                <div className="text-sm font-semibold text-primary">— {t.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
