/**
 * Loader Component
 *
 * Premium loading animation displayed on initial page load
 */

import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-2">
            Shraddha <span className="text-[#D4AF37]">Pandey</span>
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gray-400">
            Interior Design
          </p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-[2px] bg-gray-800 mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut',
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 font-body text-xs uppercase tracking-[0.2em] text-gray-500"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
