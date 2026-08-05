"use client"
import SmoothScroll from '../components/ui/SmoothScroll'
import HeroSection from '../components/home/HeroSection'
import BentoGrid from '../components/home/BentoGrid'
import PanchkarmaHub from '../components/home/PanchkarmaHub'
import DoctorCards from '../components/home/DoctorCards'
import AmazonProducts from '../components/home/AmazonProducts'
import Testimonials from '../components/home/Testimonials'
import ConsultCTA from '../components/home/ConsultCTA'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
}

const sectionVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Page() {
  return (
    <SmoothScroll>
      <motion.main initial="hidden" animate="show" variants={container} className="min-h-screen">
        <motion.section variants={sectionVariant}>
          <HeroSection />
        </motion.section>

        <motion.section variants={sectionVariant} className="py-12">
          <BentoGrid />
        </motion.section>

        <motion.section variants={sectionVariant} className="py-12">
          <PanchkarmaHub />
        </motion.section>

        <motion.section variants={sectionVariant} className="py-12">
          <DoctorCards />
        </motion.section>

        <motion.section variants={sectionVariant} className="py-12">
          <AmazonProducts />
        </motion.section>

        <motion.section variants={sectionVariant} className="py-12">
          <Testimonials />
        </motion.section>

        <motion.section variants={sectionVariant}>
          <ConsultCTA />
        </motion.section>

        <motion.section variants={sectionVariant} className="pt-8">
          <Footer />
        </motion.section>
      </motion.main>
    </SmoothScroll>
  )
}
