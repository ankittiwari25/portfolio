/**
 * Project Modal Component
 *
 * Full-screen modal for displaying project details
 */

import { motion } from 'framer-motion'
import { X, MapPin, Calendar, Layers } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black text-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Project Image */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-[#D4AF37] text-black text-xs uppercase tracking-wider mb-4"
            >
              {project.category}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-3xl md:text-5xl text-white"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-10">
          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-[#D4AF37]" />
              <span className="font-body text-sm">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} className="text-[#D4AF37]" />
              <span className="font-body text-sm">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Layers size={18} className="text-[#D4AF37]" />
              <span className="font-body text-sm">{project.area}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-heading text-xl text-black mb-4">
              About This Project
            </h3>
            <p className="font-body text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features */}
            <h4 className="font-heading text-lg text-black mb-3">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 font-body text-sm text-gray-600"
                >
                  <span className="w-2 h-2 bg-[#D4AF37]" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                onClose()
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 300)
              }}
              className="btn-primary text-center"
            >
              Start Your Project
            </a>
            <button onClick={onClose} className="btn-secondary">
              View More Projects
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
