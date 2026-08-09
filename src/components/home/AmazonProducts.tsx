"use client"
import { useEffect, useState } from 'react'
import products from '../../data/products'
import { motion } from 'framer-motion'
import SafeImage from '../ui/SafeImage'

export default function AmazonProducts() {
  const [b2bOpen, setB2bOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    function onOpenRequest() {
      setB2bOpen(true)
    }
    window.addEventListener('open-b2b-modal', onOpenRequest)
    return () => window.removeEventListener('open-b2b-modal', onOpenRequest)
  }, [])

  function closeB2B() {
    setB2bOpen(false)
    setStatus('idle')
  }

  async function submitB2B(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      company: fd.get('company'),
      contact: fd.get('contact'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      requirements: fd.get('requirements'),
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/b2b-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
      setTimeout(closeB2B, 1200)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="products" className="py-10 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div id="b2b" className="scroll-mt-[var(--nav-height)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-heading text-charcoal">Products</h2>
          <button onClick={() => setB2bOpen(true)} className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-gold text-charcoal font-semibold shadow-soft-gold hover:-translate-y-0.5 transition-transform">Wholesale Inquiry</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <SafeImage src={p.image} alt={p.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-primary shadow-sm">
                  {p.rating} ★
                </div>
                {false && p.priceINR && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-charcoal/80 text-sand text-sm font-semibold backdrop-blur">
                    ₹{p.priceINR}
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-lg font-semibold text-charcoal">{p.name}</h3>
                <p className="text-sm text-charcoal/80 mb-1">{p.shortDescription}</p>
                <div className="text-xs text-charcoal/60 mb-3">{p.reviews} reviews</div>
                <div className="mt-auto">
                  <a href={p.amazonLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-primary !text-sand text-sm font-medium hover:opacity-90 transition-opacity">Buy on Amazon</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {b2bOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeB2B} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-lg p-6 z-10 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Wholesale Inquiry</h3>
              <button onClick={closeB2B} aria-label="Close">✕</button>
            </div>

            <form onSubmit={submitB2B} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="company" placeholder="Company / Pharmacy" required className="px-3 py-2 border rounded-md" />
              <input name="contact" placeholder="Contact Person" required className="px-3 py-2 border rounded-md" />
              <input name="email" type="email" placeholder="Email" required className="px-3 py-2 border rounded-md" />
              <input name="phone" placeholder="Phone" required className="px-3 py-2 border rounded-md" />
              <textarea name="requirements" placeholder="Products / Quantities" className="col-span-1 sm:col-span-2 px-3 py-2 border rounded-md" />
              <div className="col-span-1 sm:col-span-2 flex items-center justify-end gap-3">
                <button type="submit" disabled={status === 'sending'} className="px-4 py-2 rounded-md bg-primary !text-sand font-medium disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Submit Inquiry'}
                </button>
                <button type="button" onClick={closeB2B} className="px-4 py-2 rounded-md border">Cancel</button>
              </div>
              {status === 'sent' && <p className="col-span-1 sm:col-span-2 text-xs text-primary/80">Thanks — our team will reach out shortly.</p>}
              {status === 'error' && <p className="col-span-1 sm:col-span-2 text-xs text-red-600">Something went wrong. Please try again or call us directly.</p>}
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}
