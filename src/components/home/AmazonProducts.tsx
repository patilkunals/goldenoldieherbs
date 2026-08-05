"use client"
import { useState } from 'react'
import products from '../../data/products'
import { motion } from 'framer-motion'
import SafeImage from '../ui/SafeImage'

export default function AmazonProducts() {
  const [b2bOpen, setB2bOpen] = useState(false)

  function submitB2B(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    console.log('B2B Inquiry', Object.fromEntries(fd))
    setB2bOpen(false)
  }

  return (
    <section id="products" className="py-16 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div id="b2b" className="scroll-mt-[var(--nav-height)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-heading text-charcoal">Featured Formulations</h2>
          <button onClick={() => setB2bOpen(true)} className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-gold text-charcoal font-semibold shadow-soft-gold hover:-translate-y-0.5 transition-transform">B2B Wholesale Inquiry</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="group rounded-2xl p-4 bg-white border border-charcoal/5 shadow-sm hover:shadow-lg transition-all duration-300">
              <SafeImage src={p.image} alt={p.name} className="w-full h-44 object-cover rounded-xl mb-3 group-hover:scale-[1.02] transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-charcoal">{p.name}</h3>
              <p className="text-sm text-charcoal/80 mb-2">{p.shortDescription}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-primary">{p.rating} ★ ({p.reviews})</div>
                {p.priceINR && <div className="text-sm text-charcoal/90">₹{p.priceINR}</div>}
              </div>
              <div className="flex items-center gap-3">
                <a href={p.amazonLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-sand text-sm font-medium hover:opacity-90 transition-opacity">Buy on Amazon India</a>
                {p.b2bAvailable && <span className="text-xs px-2.5 py-1 rounded-full bg-gold text-charcoal font-semibold">B2B</span>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {b2bOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setB2bOpen(false)} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-lg p-6 z-10 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">B2B Wholesale Inquiry</h3>
              <button onClick={() => setB2bOpen(false)} aria-label="Close">✕</button>
            </div>

            <form onSubmit={submitB2B} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="company" placeholder="Company / Pharmacy" required className="px-3 py-2 border rounded-md" />
              <input name="contact" placeholder="Contact Person" required className="px-3 py-2 border rounded-md" />
              <input name="email" type="email" placeholder="Email" required className="px-3 py-2 border rounded-md" />
              <input name="phone" placeholder="Phone" required className="px-3 py-2 border rounded-md" />
              <textarea name="requirements" placeholder="Products / Quantities" className="col-span-1 sm:col-span-2 px-3 py-2 border rounded-md" />
              <div className="col-span-1 sm:col-span-2 flex items-center justify-end gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-primary text-sand font-medium">Submit Inquiry</button>
                <button type="button" onClick={() => setB2bOpen(false)} className="px-4 py-2 rounded-md border">Cancel</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}
