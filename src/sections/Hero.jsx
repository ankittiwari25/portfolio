/**
 * Hero Section Component
 *
 * Fullscreen luxury hero with background image, overlay, and CTAs
 */

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 400], [0, 120])
  const auroraY = useTransform(scrollY, [0, 400], [0, 60])
  const sheenX = useSpring(useTransform(scrollY, [0, 500], [-120, 80]), {
    stiffness: 70,
    damping: 18,
  })

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Moving light sweep */}
        <motion.div
          aria-hidden
          className="hero-sheen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          style={{ x: sheenX }}
        />
      </motion.div>

      {/* Ambient aurora glow */}
      <motion.div
        aria-hidden
        className="luxury-aurora"
        style={{ y: auroraY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />

      {/* Floating sparkles */}
      <div className="hero-sparkles" aria-hidden>
        {[...Array(7)].map((_, i) => (
          <motion.span
            key={i}
            className="hero-sparkle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.1, 0.6, 0.3], scale: [0.8, 1.1, 0.9] }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
        >
          Designing Elegant Spaces That Feel Like Home
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Transforming Spaces
          <br />
          <span className="text-gold-gradient">Into Timeless Luxury</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Premium Interior Design Services Across India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-primary min-w-[180px]"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-secondary min-w-[180px]"
          >
            Contact Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs uppercase tracking-widest mb-2">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 left-10 w-32 h-32 border border-[#D4AF37] rotate-45 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-20 right-10 w-48 h-48 border border-[#D4AF37] rotate-12 hidden lg:block"
      />
    </section>
  )
}

export default Hero
