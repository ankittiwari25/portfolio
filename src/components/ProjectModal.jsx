/**
 * Project Modal Component
 *
 * Fullscreen image lightbox — no text, image fills the entire screen
 */

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
        aria-label="Close"
      >
        <X size={26} />
      </button>

      {/* Fullscreen Image */}
      <motion.img
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )
}

export default ProjectModal
