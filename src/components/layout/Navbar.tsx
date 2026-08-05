"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-md bg-white/40 dark:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gold text-charcoal shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2C12 2 16 4 18 8C20 12 18 16 14 18C10 20 8 18 6 16C4 14 4 10 6 8C8 6 10 4 12 2Z" fill="#1E3A2B" />
                    <path d="M12 6C13.5 8 15 9 16 10.5C17 12 16.5 13.5 15 14.5C13.5 15.5 12 15 10.5 14C9 13 9 11 10.5 9.5C12 8 12 6 12 6Z" fill="#D4AF37" />
                  </svg>
                </span>
                <span className="font-heading text-lg text-charcoal">Goldenoldieherbs</span>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="#pillars" className="text-sm text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-0">Clinics</Link>
              <Link href="#panchkarma" className="text-sm text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-0">Panchkarma</Link>
              <Link href="#specialists" className="text-sm text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-0">Specialists</Link>
              <Link href="#b2b" className="text-sm text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-0">B2B</Link>
              <Link href="#products" className="text-sm text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-0">Products</Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-3">
              <Link href="#consult" className="inline-flex items-center px-4 py-2 rounded-md bg-primary !text-sand text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-0">Book Consultation</Link>
              <a href="https://www.amazon.in" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-gold text-charcoal text-sm font-semibold shadow-sm">Buy on Amazon India</a>
            </div>

            <div className="md:hidden flex items-center">
              <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md text-charcoal hover:bg-white/30">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/60">
              <Link href="#pillars" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-charcoal focus:outline-none focus:ring-0">Clinics</Link>
              <Link href="#panchkarma" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-charcoal focus:outline-none focus:ring-0">Panchkarma</Link>
              <Link href="#specialists" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-charcoal focus:outline-none focus:ring-0">Specialists</Link>
              <Link href="#b2b" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-charcoal focus:outline-none focus:ring-0">B2B</Link>
              <Link href="#products" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-charcoal focus:outline-none focus:ring-0">Products</Link>
              <Link href="#consult" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium !text-white bg-primary focus:outline-none focus:ring-0">Book Consultation</Link>
              <a href="https://www.amazon.in" target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-charcoal bg-gold">Buy on Amazon India</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
