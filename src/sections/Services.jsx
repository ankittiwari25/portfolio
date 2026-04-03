/**
 * Services Section Component
 *
 * Grid of service cards with hover animations and detailed modal on Learn More
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  ChefHat,
  Sofa,
  Bed,
  Building2,
} from 'lucide-react'
import ServiceModal from '../components/ServiceModal'

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    description:
      'Complete home interior solutions that reflect your personality and lifestyle, crafted with attention to every detail.',
    image: '/images/living-room/living-4.jpg',
    fullDescription:
      'We design complete residential interiors that perfectly blend your personal style with functional living. Every room is thoughtfully planned — from material selection and colour palette to furniture layout and lighting — ensuring a cohesive and luxurious result throughout your home.',
    includes: [
      'Initial consultation & requirement analysis',
      'Concept mood board & style direction',
      'Floor plan & space planning',
      'Material, finish & furniture selection',
      'Custom furniture & joinery design',
      'Lighting design & electrical layout',
      'Project coordination & supervision',
      'Final styling & handover',
    ],
    process: [
      { title: 'Consultation', desc: 'We understand your lifestyle, needs, and vision.' },
      { title: 'Concept Design', desc: 'Mood boards, layouts, and material palettes are presented.' },
      { title: 'Design Development', desc: 'Detailed drawings, 3D visuals, and material finalization.' },
      { title: 'Execution', desc: 'Supervised on-site work with quality checks at every stage.' },
      { title: 'Handover', desc: 'Final styling, walkthrough, and complete handover.' },
    ],
    gallery: [
      '/images/living-room/living-1.jpg',
      '/images/living-room/living-4.jpg',
      '/images/bedroom/master-bedroom-1.png',
      '/images/bedroom/master-bedroom-2.png',
      '/images/kitchen/kitchen-1.jpg',
      '/images/dining/dining-1.jpg',
      '/images/living-room/living-8.jpg',
      '/images/bedroom/bedroom-ambaji-1.jpg',
      '/images/kitchen/kitchen-5.jpg',
      '/images/dining/dining-5.jpg',
      '/images/living-room/living-12.jpg',
      '/images/bedroom/bedroom-site3-1.jpg',
    ],
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen Design',
    description:
      'Smart, efficient, and stylish kitchen designs that make cooking a pleasure while maximizing space and functionality.',
    image: '/images/kitchen/kitchen-1.jpg',
    fullDescription:
      'Our modular kitchen designs combine smart engineering with premium aesthetics. We plan every inch — from cabinet configuration and countertop selection to appliance placement and storage — to give you a kitchen that is as beautiful to look at as it is a joy to cook in.',
    includes: [
      'Site measurement & kitchen analysis',
      'Layout planning (L-shape, U-shape, parallel, island)',
      'Cabinet material & finish selection',
      'Countertop & backsplash design',
      'Appliance integration planning',
      'Plumbing & electrical coordination',
      'Soft-close hardware & smart storage accessories',
      'Installation & quality inspection',
    ],
    process: [
      { title: 'Site Measurement', desc: 'Accurate measurement of your kitchen space.' },
      { title: 'Layout Planning', desc: 'Optimised workflow with the kitchen triangle concept.' },
      { title: 'Material Selection', desc: 'Finish, shutter style, countertop, and hardware.' },
      { title: '3D Visualisation', desc: 'Photo-realistic render for your approval.' },
      { title: 'Installation', desc: 'Professional fitting with quality assurance.' },
    ],
    gallery: [
      '/images/kitchen/kitchen-1.jpg',
      '/images/kitchen/kitchen-2.jpg',
      '/images/kitchen/kitchen-3.jpg',
      '/images/kitchen/kitchen-4.jpg',
      '/images/kitchen/kitchen-5.jpg',
      '/images/kitchen/kitchen-6.jpg',
      '/images/kitchen/kitchen-7.jpg',
      '/images/kitchen/kitchen-8.jpg',
    ],
  },
  {
    icon: Sofa,
    title: 'Living Room Design',
    description:
      'Create the perfect space for relaxation and entertainment with thoughtfully designed living areas.',
    image: '/images/living-room/living-1.jpg',
    fullDescription:
      'The living room is the heart of your home — it is where you relax, entertain, and make memories. We design living spaces that are warm, inviting, and deeply personal, with careful attention to furniture scale, lighting layers, colour harmony, and the little details that make a space feel truly yours.',
    includes: [
      'Space planning & furniture layout',
      'Sofa, seating & coffee table selection',
      'TV unit & wall panel design',
      'Lighting design (ambient, accent, task)',
      'Window treatment & curtain selection',
      'Rug, cushion & décor curation',
      'Custom wall textures or wallpaper',
      'False ceiling & cornice design',
    ],
    process: [
      { title: 'Inspiration Session', desc: 'We explore your style preferences and references.' },
      { title: 'Layout Design', desc: 'Furniture arrangement for flow, function, and aesthetics.' },
      { title: 'Material & Colour', desc: 'Finishes, fabrics, and palettes selected and presented.' },
      { title: 'Execution', desc: 'Coordinated delivery and installation of all elements.' },
      { title: 'Styling', desc: 'Final décor placement and professional styling.' },
    ],
    gallery: [
      '/images/living-room/living-1.jpg',
      '/images/living-room/living-2.jpg',
      '/images/living-room/living-3.jpg',
      '/images/living-room/living-4.jpg',
      '/images/living-room/living-5.jpg',
      '/images/living-room/living-6.jpg',
      '/images/living-room/living-7.jpg',
      '/images/living-room/living-8.jpg',
      '/images/living-room/living-9.jpg',
      '/images/living-room/living-10.jpg',
      '/images/living-room/living-11.jpg',
      '/images/living-room/living-12.jpg',
    ],
  },
  {
    icon: Bed,
    title: 'Bedroom Design',
    description:
      'Serene and luxurious bedroom designs that promote rest and relaxation, tailored to your preferences.',
    image: '/images/bedroom/master-bedroom-1.png',
    fullDescription:
      'Your bedroom is your private retreat — it should feel like a sanctuary. We design bedrooms that balance luxurious comfort with personal style, from master suites and kids rooms to guest bedrooms. Every element — from the bed frame and wardrobe to the lighting and linen — is carefully curated to create a space that helps you unwind and restore.',
    includes: [
      'Bed frame, headboard & upholstery design',
      'Wardrobe planning & interior organisation',
      'Bedside table & storage design',
      'Accent wall, panelling or wallpaper',
      'Lighting design (ambient, reading, accent)',
      'Window treatment & blackout solutions',
      'Dresser, study nook or sitting area (if needed)',
      'Linen, cushion & décor styling',
    ],
    process: [
      { title: 'Lifestyle Brief', desc: 'We understand how you use and experience your bedroom.' },
      { title: 'Design Concept', desc: 'Mood board, colour palette, and material selection.' },
      { title: 'Detailed Design', desc: '3D views of wardrobe, bed wall, and layout.' },
      { title: 'Execution', desc: 'Carpentry, furnishing, and finishing on site.' },
      { title: 'Final Styling', desc: 'Linen, décor, and finishing touches.' },
    ],
    gallery: [
      '/images/bedroom/master-bedroom-1.png',
      '/images/bedroom/master-bedroom-2.png',
      '/images/bedroom/master-bedroom-3.png',
      '/images/bedroom/kids-bedroom-1.png',
      '/images/bedroom/kids-bedroom-2.png',
      '/images/bedroom/kids-bedroom-3.png',
      '/images/bedroom/bedroom-ambaji-1.jpg',
      '/images/bedroom/bedroom-ambaji-2.jpg',
      '/images/bedroom/bedroom-ambaji-3.jpg',
      '/images/bedroom/bedroom-site3-1.jpg',
      '/images/bedroom/bedroom-site3-2.jpg',
      '/images/bedroom/bedroom-img-1.jpg',
    ],
  },
  {
    icon: Building2,
    title: 'Full Home Interior (Turnkey)',
    description:
      'End-to-end interior design solutions from concept to completion. Sit back while we create your dream home.',
    image: '/images/living-room/living-2.jpg',
    fullDescription:
      'Our Turnkey service is the most comprehensive offering — we take full ownership of your entire home interior from the very first sketch to the final handover. You make the decisions; we handle everything else. One point of contact, complete coordination, and a beautiful home delivered on time.',
    includes: [
      'Complete design of all rooms & spaces',
      'Architecture & civil work coordination',
      'Electrical, plumbing & HVAC planning',
      'All furniture, joinery & fixture procurement',
      'Dedicated project manager assigned',
      'Weekly progress updates & site visits',
      'Quality control at every milestone',
      'Move-in ready handover with full styling',
    ],
    process: [
      { title: 'Discovery Meeting', desc: 'Full home brief, budget discussion, and timeline.' },
      { title: 'Concept & Planning', desc: 'Complete floor plan, 3D views for every room.' },
      { title: 'Material Sign-off', desc: 'All finishes, furniture, and fixtures approved by you.' },
      { title: 'Execution & Management', desc: 'End-to-end site management with quality checks.' },
      { title: 'Handover', desc: 'Complete styling and move-in ready handover.' },
    ],
    gallery: [
      '/images/living-room/living-1.jpg',
      '/images/bedroom/master-bedroom-1.png',
      '/images/kitchen/kitchen-1.jpg',
      '/images/dining/dining-1.jpg',
      '/images/living-room/living-5.jpg',
      '/images/bedroom/kids-bedroom-1.png',
      '/images/kitchen/kitchen-5.jpg',
      '/images/dining/dining-5.jpg',
      '/images/living-room/living-14.jpg',
      '/images/bedroom/bedroom-ambaji-4.jpg',
      '/images/kitchen/kitchen-3.jpg',
      '/images/dining/dining-3.jpg',
    ],
  },
]

const ServiceCard = ({ service, index, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
      whileTap={{ scale: 0.99 }}
      className="group relative flex h-full flex-col overflow-hidden card-luxury"
    >
      <div className="luxury-card-glow" aria-hidden />
      <motion.div
        aria-hidden
        className="luxury-card-sheen"
        initial={false}
        animate={{ x: ['-120%', '120%'] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
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

        {/* Learn More Button */}
        <button
          onClick={() => onLearnMore(service)}
          className="mt-auto flex items-center gap-2 text-[#B8962E] cursor-pointer hover:gap-4 transition-all duration-300"
        >
          <span className="font-body text-sm uppercase tracking-wider">Learn More</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  return (
    <>
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
              <ServiceCard key={service.title} service={service} index={index} onLearnMore={setActiveService} />
            ))}
          </div>

          {/* Services Grid — Row 2: 2 cards centered */}
          <div className="grid md:grid-cols-2 auto-rows-fr gap-6 md:gap-8 lg:w-2/3 lg:mx-auto" style={{ marginBottom: '40px' }}>
            {services.slice(3).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 3} onLearnMore={setActiveService} />
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

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Services
