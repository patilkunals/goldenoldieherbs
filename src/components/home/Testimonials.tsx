"use client"
import { useEffect, useRef, useState } from 'react'

type Gender = 'male' | 'female' | 'boy' | 'girl'

const testimonials: { id: string; name: string; text: string; gender: Gender; image?: string }[] = [
  {
    id: 't1',
    name: 'Anjali R.',
    text: 'After Panchkarma therapy I feel renewed — chronic fatigue reduced and digestion improved.',
    gender: 'female',
    image: '/images/testimonials/anjali.jpg',
  },
  {
    id: 't2',
    name: 'Vikram S.',
    text: 'Excellent care and authentic herbal formulations. Highly recommend Golden Oldie Herbs.',
    gender: 'male',
    image: '/images/testimonials/vikram.jpg',
  },
  {
    id: 't3',
    name: 'Meera P.',
    text: 'Professional specialists and a compassionate clinic team. My skin cleared up in weeks.',
    gender: 'female',
  },
  {
    id: 't4',
    name: 'Deepak N.',
    text: 'Basti therapy helped my joint pain significantly — knowledgeable practitioners.',
    gender: 'male',
  },
    {
    id: 't5',
    name: 'Rajesh Kate',
    text: 'Professional specialists and a compassionate clinic team. My skin cleared up in weeks.',
    gender: 'male',
  },
  {
    id: 't6',
    name: 'Manjush Kumar',
    text: 'Basti therapy helped my joint pain significantly — knowledgeable practitioners.',
    gender: 'male',
  },
    {
    id: 't7',
    name: 'Chadrashekhar Patil',
    text: 'Professional specialists and a compassionate clinic team. My skin cleared up in weeks.',
    gender: 'male',
  },
  {
    id: 't8',
    name: 'Anthony Johnson',
    text: 'Basti therapy helped my joint pain significantly — knowledgeable practitioners.',
    gender: 'male',
  },
  {
    id: 't9',
    name: 'Sunita M.',
    text: 'The Shirodhara treatment was incredibly relaxing. My sleep quality has never been better.',
    gender: 'female',
  },
  {
    id: 't10',
    name: 'Arjun Verma',
    text: 'I struggled with acidity for years. Their dietary advice and herbal supplements worked wonders.',
    gender: 'male',
  },
  {
    id: 't11',
    name: 'Kavita Joshi',
    text: 'Amazing holistic approach. The Abhyanga massage relieved my muscle stiffness completely.',
    gender: 'female',
  },
  {
    id: 't12',
    name: 'Rahul T.',
    text: 'I appreciate how the doctors took the time to understand my dosha before prescribing any herbs.',
    gender: 'male',
  },
  {
    id: 't13',
    name: 'Priya Desai',
    text: 'The Nasya treatment really helped clear my chronic sinus issues. Highly grateful to the team.',
    gender: 'female',
  },
  {
    id: 't14',
    name: 'Amit Bhardwaj',
    text: 'Golden Oldie Herbs changed my perspective on natural healing. My energy levels are finally stable.',
    gender: 'male',
  },
  {
    id: 't15',
    name: 'Neha Sharma',
    text: 'Weight management felt impossible until I started their customized Ayurvedic detox program.',
    gender: 'female',
  },
  {
    id: 't16',
    name: 'Sanjay Gupta',
    text: 'Authentic treatments and a very peaceful environment. My migraines have drastically reduced.',
    gender: 'male',
  },
  {
    id: 't17',
    name: 'Aarti K.',
    text: 'The herbal face packs and internal medicines gave me a natural glow that no cosmetic ever did.',
    gender: 'female',
  },
  {
    id: 't18',
    name: 'Rohan Mehta',
    text: 'I was skeptical at first, but the knee pain relief from Janu Basti has been life-changing.',
    gender: 'male',
  },
]

function DefaultAvatar({ gender }: { gender: Gender }) {
  // Simple inline SVG avatars per gender/age-group — no external image requests, easy to restyle.
  const isChild = gender === 'boy' || gender === 'girl'
  const skin = '#E8C39E'
  const hair = gender === 'male' || gender === 'boy' ? '#3B2A20' : '#4A2E1E'

  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" role="img" aria-label={`${gender} avatar`}>
      <circle cx="32" cy="32" r="32" fill="var(--color-primary)" opacity="0.12" />
      <circle cx="32" cy={isChild ? 27 : 26} r={isChild ? 11 : 12} fill={skin} />
      <path
        d={
          gender === 'male'
            ? 'M18 24c0-8 6-14 14-14s14 6 14 14c-3-2-8-4-14-4s-11 2-14 4z'
            : gender === 'female'
            ? 'M16 26c0-9 7-16 16-16s16 7 16 16c0 4-1 7-2 9-1-6-3-9-6-9 1 3 1 6 0 9-2-2-4-3-8-3s-6 1-8 3c-1-3-1-6 0-9-3 0-5 3-6 9-1-2-2-5-2-9z'
            : gender === 'boy'
            ? 'M20 22c0-7 5.5-12 12-12s12 5 12 12c-2.5-1.5-7-3-12-3s-9.5 1.5-12 3z'
            : 'M18 23c0-8 6-14 14-14s14 6 14 14c0 3-.5 5.5-1.5 7.5-1-4-2.5-6-5-6 .5 2 .5 4 0 6-1.5-1.5-3-2-7-2s-5.5.5-7 2c-.5-2-.5-4 0-6-2.5 0-4 2-5 6-1-2-1.5-4.5-1.5-7.5z'
        }
        fill={hair}
      />
      <path
        d="M10 60c2-11 11-18 22-18s20 7 22 18z"
        fill="var(--color-primary)"
      />
    </svg>
  )
}

function TestimonialAvatar({ t }: { t: (typeof testimonials)[number] }) {
  const [failed, setFailed] = useState(false)
  if (t.image && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={t.image} alt={t.name} className="w-full h-full object-cover" onError={() => setFailed(true)} />
    )
  }
  return <DefaultAvatar gender={t.gender} />
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el || paused) return
    const interval = setInterval(() => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 320, behavior: 'smooth' })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [paused])

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-12 bg-white/40 scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-heading text-charcoal">Testimonials</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="w-8 h-8 rounded-full bg-white shadow-sm border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-sand"
            >
              {paused ? (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
              className="w-8 h-8 rounded-full bg-white shadow-sm border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-sand"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
              className="w-8 h-8 rounded-full bg-white shadow-sm border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-sand"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[300px] shrink-0 snap-start bg-white p-5 rounded-xl border border-charcoal/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-sand">
                  <TestimonialAvatar t={t} />
                </div>
                <div className="text-sm font-semibold text-primary">{t.name}</div>
              </div>
              <div className="text-gold text-lg mb-2">★★★★★</div>
              <p className="text-sm text-charcoal/80 line-clamp-4">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


