/**
 * Section Title Component
 *
 * Reusable elegant section title with subtitle and divider
 */

import { motion } from 'framer-motion'

const SectionTitle = ({
  subtitle,
  title,
  description,
  light = false,
  align = 'center',
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-2xl ${alignmentClasses[align]} mb-16 md:mb-20`}>
      {/* Subtitle */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-block font-body text-xs uppercase tracking-[0.3em] mb-4 ${
            light ? 'text-[#D4AF37]' : 'text-[#B8962E]'
          }`}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-heading text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className={`luxury-divider mt-6 ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      >
        <span className="luxury-divider__glow" />
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`font-body mt-6 leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
