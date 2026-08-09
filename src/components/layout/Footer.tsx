"use client"
import Link from 'next/link'
import { useState } from 'react'

const ADDRESS = '123 Wellness Lane, Ayurveda City'

export default function Footer() {
  const [showMap, setShowMap] = useState(false)
  const mapQuery = encodeURIComponent(ADDRESS)

  return (
    <footer id="footer" className="mt-10 bg-primary-dark scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#343837] text-charcoal overflow-hidden">
              <img
                src="/goldenoldieherbs_logo.png"
                alt="Golden Oldie Herbs logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-lg text-sand">Golden Oldie Herbs</span>
          </Link>
          <p className="text-sm text-sand/70">Authentic Ayurvedic care, Panchkarma therapies, and trusted herbal formulations.</p>
          <div className="mt-4 text-sm text-sand/60 space-y-1">
            <button type="button" onClick={() => setShowMap(true)} className="flex items-start gap-1.5 text-left text-gold hover:text-gold/80">
              <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="underline underline-offset-2 decoration-gold/60">Address: {ADDRESS}</span>
            </button>
            <div>Hours: Mon–Sat 9:00–18:00</div>
            <div>Phone: +91 98765 43210</div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sand mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-sand/70">
            <li><a href="#consult" className="hover:underline">Book Consultation</a></li>
            <li><a href="#panchkarma" className="hover:underline">Panchkarma</a></li>
            <li><a href="#specialists" className="hover:underline">Specialists</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sand mb-3">Contact &amp; Disclaimer</h4>
          <p className="text-sm text-sand/70 mb-3">For wholesale distribution inquiries, use the Wholesale Inquiry form in the header or Products section.</p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-sand/60">Medical Disclaimer: Ayurvedic treatments vary in outcome. Consult a qualified practitioner before starting any therapy. Information provided for educational purposes only.</div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 text-sm text-sand/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Golden Oldie Herbs</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      {showMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowMap(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-charcoal/10">
              <h4 className="text-sm font-semibold text-charcoal">Our Location</h4>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Open in Google Maps
                </a>
                <button type="button" onClick={() => setShowMap(false)} aria-label="Close" className="text-charcoal/70 hover:text-charcoal">✕</button>
              </div>
            </div>
            <iframe
              title="Golden Oldie Herbs location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </footer>
  )
}

