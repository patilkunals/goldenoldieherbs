export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export type Availability = {
  day: Day
  from: string // 24h HH:MM
  to: string
}

export type Doctor = {
  id: string
  name: string
  designation: string
  specializations: string[]
  qualifications: string[]
  experienceYears: number
  image: string
  availability: Availability[]
  bio?: string
}

export const doctors: Doctor[] = [
  {
    id: 'dr-001',
    name: 'Dr. Aruna Sharma',
    designation: 'Chief Ayurvedic Physician',
    specializations: ['Kayachikitsa', 'Lifestyle Medicine'],
    qualifications: ['BAMS', 'MD(Ayurveda) - Kayachikitsa'],
    experienceYears: 18,
    image: '/images/doctors/doctors-1.jpg',
    availability: [
      { day: 'Monday', from: '09:00', to: '14:00' },
      { day: 'Wednesday', from: '13:00', to: '18:00' },
      { day: 'Friday', from: '09:00', to: '14:00' },
    ],
    bio: 'Specialist in chronic metabolic and lifestyle disorders with a focus on root-cause management.'
  },
  {
    id: 'dr-002',
    name: 'Dr. Ravi Menon',
    designation: 'Panchakarma Consultant',
    specializations: ['Panchakarma', 'Detox Therapies'],
    qualifications: ['BAMS', 'PG Diploma - Panchakarma'],
    experienceYears: 12,
    image: '/images/doctors/doctors-2.jpg',
    availability: [
      { day: 'Tuesday', from: '10:00', to: '17:00' },
      { day: 'Thursday', from: '10:00', to: '17:00' },
      { day: 'Saturday', from: '09:00', to: '13:00' },
    ],
    bio: 'Runs the Panchkarma centre and supervises personalized detox programs.'
  },
  {
    id: 'dr-003',
    name: 'Dr. Meera Kulkarni',
    designation: 'Dermatology (Ayurvedic)',
    specializations: ['Shalakya/Shalya', 'Dermatology', 'Skin Health'],
    qualifications: ['BAMS', 'Certificate in Dermatology (Ayurveda)'],
    experienceYears: 10,
    image: '/images/doctors/doctors-3.jpg',
    availability: [
      { day: 'Monday', from: '15:00', to: '19:00' },
      { day: 'Thursday', from: '15:00', to: '19:00' },
    ],
    bio: 'Focused on integrative approaches for eczema, psoriasis and skin rejuvenation.'
  },
  {
    id: 'dr-004',
    name: 'Dr. Sanjay Patil',
    designation: 'Orthopedics & Joint Care (Ayurveda)',
    specializations: ['Asthi Sandhana', 'Orthopedics', 'Joint Pain'],
    qualifications: ['BAMS', 'MS Equivalent - Shalya Tantra'],
    experienceYears: 16,
    image: '/images/doctors/doctors-4.jpg',
    availability: [
      { day: 'Wednesday', from: '09:00', to: '14:00' },
      { day: 'Saturday', from: '14:00', to: '18:00' },
    ],
    bio: 'Expert in joint preservation, post-surgical rehabilitation and chronic pain management.'
  },
  {
    id: 'dr-005',
    name: 'Dr. Kavita Rao',
    designation: 'Digestive Health Specialist',
    specializations: ['Gastroenterology (Ayurveda)', 'Nutrition'],
    qualifications: ['BAMS', 'Diploma in Nutrition & Dietetics'],
    experienceYears: 8,
    image: '/images/doctors/doctors-5.jpg',
    availability: [
      { day: 'Tuesday', from: '09:00', to: '13:00' },
      { day: 'Friday', from: '15:00', to: '19:00' },
    ],
    bio: 'Treats digestive and metabolic imbalances using individualized dietary therapeutics.'
  }
]

export default doctors
