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

        <div className="overflow-hidden rounded-lg [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex gap-6 items-stretch w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          >
            {items.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-[300px] shrink-0 bg-white p-5 rounded-xl border border-charcoal/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gold text-lg mb-2">★★★★★</div>
                <p className="text-sm text-charcoal/80 mb-3 line-clamp-4">&ldquo;{t.text}&rdquo;</p>
                <div className="text-sm font-semibold text-primary">&mdash; {t.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
