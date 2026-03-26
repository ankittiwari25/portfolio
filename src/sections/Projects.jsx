/**
 * Projects Section Component
 *
 * Masonry grid portfolio with category filters and project modal
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Full Home']

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
    location: 'Ahmedabad, Gujarat',
    year: '2024',
    area: '450 sq.ft',
    description: 'A contemporary living space featuring clean lines, neutral tones, and carefully curated furniture. The design emphasizes open space and natural light, creating a serene atmosphere for relaxation and entertainment.',
    features: ['Custom furniture design', 'Ambient lighting system', 'Premium flooring', 'Bespoke wall art'],
  },
  {
    id: 2,
    title: 'Luxury Master Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2400&auto=format&fit=crop',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    area: '350 sq.ft',
    description: 'An opulent master bedroom that combines comfort with sophistication. Featuring a custom headboard, ambient lighting, and premium textiles that create a sanctuary for rest and rejuvenation.',
    features: ['Custom headboard design', 'Walk-in wardrobe', 'En-suite bathroom', 'Smart home integration'],
  },
  {
    id: 3,
    title: 'Contemporary Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2400&auto=format&fit=crop',
    location: 'Bangalore, Karnataka',
    year: '2023',
    area: '200 sq.ft',
    description: 'A state-of-the-art modular kitchen with Italian finishes and German hardware. Designed for efficiency without compromising on style, featuring ample storage and premium appliances.',
    features: ['Modular cabinets', 'Quartz countertops', 'Premium appliances', 'Smart storage solutions'],
  },
  {
    id: 4,
    title: 'Elegant Penthouse',
    category: 'Full Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
    location: 'Delhi, NCR',
    year: '2024',
    area: '2500 sq.ft',
    description: 'A complete penthouse transformation featuring open-concept living, premium materials throughout, and panoramic city views. Every room tells a story of luxury and refined taste.',
    features: ['Open-concept design', 'Custom millwork', 'Premium materials', 'Panoramic views'],
  },
  {
    id: 5,
    title: 'Serene Bedroom Retreat',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2400&auto=format&fit=crop',
    location: 'Pune, Maharashtra',
    year: '2023',
    area: '280 sq.ft',
    description: 'A tranquil bedroom design focused on creating a peaceful retreat. Soft color palette, natural textures, and thoughtful lighting design ensure restful nights.',
    features: ['Soft color palette', 'Natural textures', 'Blackout curtains', 'Reading nook'],
  },
  {
    id: 6,
    title: 'Open Living Concept',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop',
    location: 'Hyderabad, Telangana',
    year: '2024',
    area: '600 sq.ft',
    description: 'An expansive living and dining area with seamless flow and contemporary design. Floor-to-ceiling windows flood the space with natural light.',
    features: ['Floor-to-ceiling windows', 'Custom dining table', 'Integrated storage', 'Art installation'],
  },
  {
    id: 7,
    title: 'Modern Family Home',
    category: 'Full Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
    location: 'Surat, Gujarat',
    year: '2023',
    area: '1800 sq.ft',
    description: 'A family-friendly home design that balances style with functionality. Child-safe materials, durable finishes, and clever storage solutions throughout.',
    features: ['Child-safe design', 'Durable finishes', 'Play area', 'Home office space'],
  },
  {
    id: 8,
    title: 'Chef\'s Dream Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2400&auto=format&fit=crop',
    location: 'Chennai, Tamil Nadu',
    year: '2024',
    area: '250 sq.ft',
    description: 'A professional-grade kitchen designed for culinary enthusiasts. Features commercial-grade appliances, extensive prep space, and premium ventilation.',
    features: ['Commercial appliances', 'Large island', 'Premium ventilation', 'Wine storage'],
  },
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
