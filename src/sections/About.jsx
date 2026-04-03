/**
 * About Section Component
 *
 * Elegant split layout with image and text content
 */

import { motion } from 'framer-motion'
import { Award, Heart, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'Every element is carefully curated to create cohesive, stunning spaces.',
  },
  {
    icon: Award,
    title: 'Modern Luxury Aesthetics',
    description: 'Contemporary designs that blend sophistication with timeless elegance.',
  },
  {
    icon: Heart,
    title: 'Client-Focused Approach',
    description: 'Your vision guides our creative process, ensuring personalized results.',
  },
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <img
                src="/images/bedroom/bedroom-site3-5.jpg"
                alt="Shraddha Pandey - Interior Designer"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Decorative Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4AF37] -z-10"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -left-4 md:left-8 bg-black text-white p-6 md:p-8"
            >
              <span className="block font-heading text-4xl md:text-5xl text-[#D4AF37]">
                50+
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-gray-300">
                Projects Completed
              </span>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block font-body text-xs uppercase tracking-[0.3em] text-[#B8962E] mb-4"
            >
              About Me
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-6"
            >
              Creating Spaces
              <br />
              <span className="text-[#D4AF37]">That Inspire</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-body text-gray-600 leading-relaxed mb-8"
            >
              Shraddha Pandey is a passionate interior designer based in Ahmedabad,
              creating elegant, functional, and personalized spaces for clients
              across India. With a keen eye for aesthetics and deep understanding
              of spatial design, she transforms ordinary spaces into extraordinary
              living experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="font-body text-gray-600 leading-relaxed mb-10"
            >
              Every project begins with understanding your lifestyle, preferences,
              and aspirations. The result? Spaces that are not just beautiful,
              but truly feel like home.
            </motion.p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black">
                    <item.icon size={24} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-black mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
