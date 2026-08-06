import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import doctors from '../../../data/doctors'
import SafeImage from '../../../components/ui/SafeImage'
import Footer from '../../../components/layout/Footer'
import Navbar from '../../../components/layout/Navbar'

export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const doc = doctors.find((d) => d.id === params.id)
  if (!doc) return {}
  return {
    title: `${doc.name} — Golden Oldie Herbs`,
    description: doc.bio || doc.designation,
  }
}

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doc = doctors.find((d) => d.id === params.id)
  if (!doc) return notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sand py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#specialists" className="text-sm text-primary hover:underline">&larr; Back to Specialists</Link>

          <div className="mt-6 bg-white rounded-2xl border border-charcoal/5 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <SafeImage src={doc.image} alt={doc.name} className="w-32 h-32 rounded-2xl object-cover ring-2 ring-gold/20 shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading text-charcoal">{doc.name}</h1>
                <div className="text-charcoal/80 mt-1">{doc.designation}</div>
                <div className="mt-2 text-sm text-charcoal/70">{doc.experienceYears} years of experience</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doc.specializations.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {doc.bio && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-charcoal mb-1">About</h2>
                <p className="text-sm text-charcoal/80">{doc.bio}</p>
              </div>
            )}

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-charcoal mb-1">Qualifications</h2>
              <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
                {doc.qualifications.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-charcoal mb-2">Availability</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doc.availability.map((a) => (
                  <div key={a.day} className="flex items-center justify-between px-3 py-2 rounded-lg bg-sand text-sm text-charcoal/80">
                    <span className="font-medium">{a.day}</span>
                    <span>{a.from} – {a.to}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link href={`/#specialists`} className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary !text-sand font-medium text-sm hover:opacity-90 transition-opacity">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
