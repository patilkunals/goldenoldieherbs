"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 bg-white/30 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gold text-charcoal">🍃</span>
            <span className="font-heading text-lg text-charcoal">Goldenoldieherbs</span>
          </Link>
          <p className="text-sm text-charcoal/80">Authentic Ayurvedic care, Panchkarma therapies, and trusted herbal formulations.</p>
          <div className="mt-4 text-sm text-charcoal/70">
            <div>Address: 123 Wellness Lane, Ayurveda City</div>
            <div>Hours: Mon–Sat 9:00–18:00</div>
            <div>Phone: +91 98765 43210</div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-charcoal mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-charcoal/80">
            <li><a href="#clinics" className="hover:underline">Book Consultation</a></li>
            <li><a href="#panchkarma" className="hover:underline">Panchkarma</a></li>
            <li><a href="#specialists" className="hover:underline">Specialists</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-charcoal mb-3">Contact & Disclaimer</h4>
          <p className="text-sm text-charcoal/80 mb-3">For B2B inquiries or wholesale distribution, use the B2B contact form on the Products section.</p>
          <div className="bg-parchment rounded-md p-3 text-xs text-charcoal/70">Medical Disclaimer: Ayurvedic treatments vary in outcome. Consult a qualified practitioner before starting any therapy. Information provided for educational purposes only.</div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 text-sm text-charcoal/70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Goldenoldieherbs</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
