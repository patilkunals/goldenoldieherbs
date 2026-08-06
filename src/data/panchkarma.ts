export type PanchkarmaStep = {
  step: number
  title: string
  description: string
}

export type PanchkarmaTherapy = {
  id: string
  name: string
  duration: string // e.g. '7 days', '14-21 days'
  sessionCount?: number
  steps: PanchkarmaStep[]
  benefits: string[]
  image: string
  notes?: string
}

export const panchkarma: PanchkarmaTherapy[] = [
  {
    id: 'pk-01',
    name: 'Vamana (Therapeutic Emesis)',
    duration: '7-14 days',
    sessionCount: 1,
    steps: [
      { step: 1, title: 'Snehana', description: 'Oleation therapy to prepare the body.' },
      { step: 2, title: 'Swedana', description: 'Fomentation/steam to loosen toxins.' },
      { step: 3, title: 'Vamana', description: 'Supervised therapeutic emesis to expel Kapha-related toxins.' },
      { step: 4, title: 'Samsarjana', description: 'Dietary rehabilitation and follow-up.' },
    ],
    benefits: ['Respiratory disorders', 'Chronic sinusitis', 'Certain skin conditions'],
    image: '/images/panchkarma/panchkarma-1.jpg',
    notes: 'Performed only after thorough assessment and preparatory therapies.'
  },
  {
    id: 'pk-02',
    name: 'Virechana (Purgation Therapy)',
    duration: '7-14 days',
    sessionCount: 1,
    steps: [
      { step: 1, title: 'Snehana', description: 'Internal/external oleation.' },
      { step: 2, title: 'Swedana', description: 'Fomentation and sweating.' },
      { step: 3, title: 'Virechana', description: 'Administration of purgatives to clear Pitta toxins.' },
      { step: 4, title: 'Rehabilitation', description: 'Dietary and lifestyle guidance.' },
    ],
    benefits: ['Liver disorders', 'Digestive imbalances', 'Skin purification'],
    image: '/images/panchkarma/panchkarma-2.jpg',
  },
  {
    id: 'pk-03',
    name: 'Basti (Medicated Enema)',
    duration: '14-21 days',
    sessionCount: 7,
    steps: [
      { step: 1, title: 'Purvakarma', description: 'Preparation: Snehana and Swedana.' },
      { step: 2, title: 'Niruha Basti', description: 'Decoction-based enemas for deep detox.' },
      { step: 3, title: 'Anuvasana Basti', description: 'Oil-based enemas for nourishment.' },
      { step: 4, title: 'Post-care', description: 'Dietary regimen and follow-up.' },
    ],
    benefits: ['Vata disorders', 'Chronic musculoskeletal pain', 'Neurological support'],
    image: '/images/panchkarma/panchkarma-3.jpg',
  },
  {
    id: 'pk-04',
    name: 'Nasya (Nasal Administration)',
    duration: '3-7 days',
    sessionCount: 1,
    steps: [
      { step: 1, title: 'Shirobhyanga', description: 'Head massage and oleation.' },
      { step: 2, title: 'Nasya', description: 'Instillation of medicated oil or decoction.' },
      { step: 3, title: 'Observation', description: 'Monitoring and nasal hygiene guidance.' },
    ],
    benefits: ['Headache', 'Migraine', 'Chronic sinus issues', 'Improved mental clarity'],
    image: '/images/panchkarma/panchkarma-4.jpg',
  },
  {
    id: 'pk-05',
    name: 'Raktamokshana (Bloodletting/Detox)',
    duration: 'Single session (as required)',
    steps: [
      { step: 1, title: 'Assessment', description: 'Determine indication and contraindications.' },
      { step: 2, title: 'Procedure', description: 'Controlled bloodletting using safe classical methods.' },
      { step: 3, title: 'Aftercare', description: 'Bandaging and follow-up detox measures.' },
    ],
    benefits: ['Blood-borne toxins', 'Certain dermatological conditions', 'Specific vascular issues'],
    image: '/images/panchkarma/panchkarma-5.jpg',
  },
]

export default panchkarma
