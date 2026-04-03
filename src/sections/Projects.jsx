/**
 * Projects Section Component
 *
 * Masonry grid portfolio with category filters and project modal
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Dining Area', 'Commercial']

// Generate one card per image for all categories
const livingRoomImages = Array.from({ length: 18 }, (_, i) => `/images/living-room/living-${i + 1}.jpg`)

const bedroomImages = [
  '/images/bedroom/master-bedroom-1.png',
  '/images/bedroom/master-bedroom-2.png',
  '/images/bedroom/master-bedroom-3.png',
  '/images/bedroom/kids-bedroom-1.png',
  '/images/bedroom/kids-bedroom-2.png',
  '/images/bedroom/kids-bedroom-3.png',
  '/images/bedroom/bedroom-3.jpg',
  ...Array.from({ length: 7 }, (_, i) => `/images/bedroom/bedroom-img-${i + 1}.jpg`),
  ...Array.from({ length: 12 }, (_, i) => `/images/bedroom/bedroom-ambaji-${i + 1}.jpg`),
  '/images/bedroom/bedroom-site1-1.jpg',
  '/images/bedroom/bedroom-site1-2.jpg',
  '/images/bedroom/bedroom-site1-3.jpg',
  ...Array.from({ length: 15 }, (_, i) => `/images/bedroom/bedroom-site3-${i + 1}.jpg`),
]

const kitchenImages = Array.from({ length: 8 }, (_, i) => `/images/kitchen/kitchen-${i + 1}.jpg`)

const diningImages = Array.from({ length: 8 }, (_, i) => `/images/dining/dining-${i + 1}.jpg`)

const commercialImages = Array.from({ length: 48 }, (_, i) => `/images/commercial/commercial-${i + 1}.jpg`)

const projects = [
  ...livingRoomImages.map((img, i) => ({
    id: `lr-${i + 1}`,
    title: `Living Room Design ${i + 1}`,
    category: 'Living Room',
    image: img,
    location: 'Ahmedabad, Gujarat',
    year: '2024',
    area: '450 sq.ft',
    description: 'A contemporary living space featuring clean lines, neutral tones, and carefully curated furniture. The design emphasizes open space and natural light.',
    features: ['Custom furniture design', 'Ambient lighting system', 'Premium flooring', 'Bespoke wall art'],
  })),
  ...bedroomImages.map((img, i) => ({
    id: `br-${i + 1}`,
    title: `Bedroom Design ${i + 1}`,
    category: 'Bedroom',
    image: img,
    location: 'Mumbai, Maharashtra',
    year: '2024',
    area: '320 sq.ft',
    description: 'A luxurious bedroom design combining comfort with sophistication. Premium textiles, thoughtful lighting, and custom elements create a perfect sanctuary for rest.',
    features: ['Custom headboard design', 'Walk-in wardrobe', 'Ambient lighting', 'Premium finishes'],
  })),
  ...kitchenImages.map((img, i) => ({
    id: `kt-${i + 1}`,
    title: `Kitchen Design ${i + 1}`,
    category: 'Kitchen',
    image: img,
    location: 'Bangalore, Karnataka',
    year: '2023',
    area: '200 sq.ft',
    description: 'A state-of-the-art modular kitchen with premium finishes and hardware. Designed for efficiency without compromising on style, with ample storage solutions.',
    features: ['Modular cabinets', 'Quartz countertops', 'Premium appliances', 'Smart storage'],
  })),
  ...diningImages.map((img, i) => ({
    id: `da-${i + 1}`,
    title: `Dining Area Design ${i + 1}`,
    category: 'Dining Area',
    image: img,
    location: 'Delhi, NCR',
    year: '2024',
    area: '180 sq.ft',
    description: 'A refined dining area designed for memorable gatherings. Warm tones, elegant lighting, and premium furniture create the perfect ambiance for dining.',
    features: ['Custom dining table', 'Statement lighting', 'Premium upholstery', 'Ambient lighting'],
  })),
  ...commercialImages.map((img, i) => ({
    id: `cm-${i + 1}`,
    title: `Commercial Design ${i + 1}`,
    category: 'Commercial',
    image: img,
    location: 'Ahmedabad, Gujarat',
    year: '2024',
    area: '1200 sq.ft',
    description: 'A thoughtfully designed commercial space that balances brand identity with functionality. Premium finishes, smart layouts, and striking aesthetics create a lasting impression.',
    features: ['Brand-aligned design', 'Optimised floor plan', 'Premium finishes', 'Statement lighting'],
  })),
]

const Projects = ({ onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-cream">
      <div className="container-luxury">
        {/* Section Title */}
        <SectionTitle
          subtitle="Portfolio"
          title="Our Recent Projects"
          description="Explore our collection of thoughtfully designed spaces that showcase our commitment to excellence."
          align="left"
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-3 md:gap-4"
          style={{ marginTop: '28px' }}
        >
          {categories.map((category) => {
            const active = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`tab-pill ${active ? 'tab-pill--active' : ''}`}
              >
                <span>{category}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="masonry-grid gap-2.5" style={{ marginTop: '40px' }}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
                className="masonry-item"
              >
                <div
                  onClick={() => onProjectClick(project)}
                  className="group relative cursor-pointer overflow-hidden"
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 3 === 0
                        ? 'aspect-[4/5]'
                        : index % 3 === 1
                        ? 'aspect-square'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <span className="font-body text-xs uppercase tracking-wider text-[#D4AF37] mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="font-body text-sm text-gray-300">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] transform rotate-45 translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="font-body text-gray-500 mb-6">
            Want to see more of our work?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-block"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
