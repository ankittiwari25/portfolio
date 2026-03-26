/**
 * Services Section Component
 *
 * Grid of service cards with hover animations
 */

import { motion } from 'framer-motion'
import {
  Home,
  ChefHat,
  Sofa,
  Bed,
  Building2,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    description:
      'Complete home interior solutions that reflect your personality and lifestyle, crafted with attention to every detail.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen Design',
    description:
      'Smart, efficient, and stylish kitchen designs that make cooking a pleasure while maximizing space and functionality.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2400&auto=format&fit=crop',
  },
  {
    icon: Sofa,
    title: 'Living Room Design',
    description:
      'Create the perfect space for relaxation and entertainment with thoughtfully designed living areas.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2400&auto=format&fit=crop',
  },
  {
    icon: Bed,
    title: 'Bedroom Design',
    description:
      'Serene and luxurious bedroom designs that promote rest and relaxation, tailored to your preferences.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2400&auto=format&fit=crop',
  },
  {
    icon: Building2,
    title: 'Full Home Interior (Turnkey)',
    description:
      'End-to-end interior design solutions from concept to completion. Sit back while we create your dream home.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop',
  },
]

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden card-luxury"
    >
      {/* Content */}
      <div className="card-body">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="card-icon"
        >
          <service.icon size={28} className="text-[#D4AF37]" />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xl md:text-2xl text-black leading-snug">
            {service.title}
          </h3>
          <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-auto flex items-center gap-2 text-[#B8962E]">
          <span className="font-body text-sm uppercase tracking-wider">Learn More</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="section-padding bg-warm pb-20">
      <div className="container-luxury">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8962E', marginBottom: '16px' }}
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: '#000', lineHeight: 1.2, marginBottom: '16px' }}
          >
            Our Premium Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '0 auto 16px auto' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', color: '#4B5563', fontSize: '15px', lineHeight: 1.7 }}
          >
            From concept to completion, we offer comprehensive interior design services tailored to your needs.
          </motion.p>
        </div>

        {/* Services Grid — Row 1: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 md:gap-8" style={{ marginBottom: '20px' }}>
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Services Grid — Row 2: 2 cards centered */}
        <div className="grid md:grid-cols-2 auto-rows-fr gap-6 md:gap-8 lg:w-2/3 lg:mx-auto" style={{ marginBottom: '40px' }}>
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '20px' }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-block"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
