"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="mt-10 bg-primary-dark scroll-mt-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gold text-charcoal overflow-hidden">
              <img
                src="/goldenoldieherbs_logo.jpg"
                alt="Golden Oldie Herbs logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-lg text-sand">Golden Oldie Herbs</span>
          </Link>
          <p className="text-sm text-sand/70">Authentic Ayurvedic care, Panchkarma therapies, and trusted herbal formulations.</p>
          <div className="mt-4 text-sm text-sand/60 space-y-1">
            <div>Address: 123 Wellness Lane, Ayurveda City</div>
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
          <p className="text-sm text-sand/70 mb-3">For B2B inquiries or wholesale distribution, use the B2B contact form on the Products section.</p>
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
    </footer>
  )
}
