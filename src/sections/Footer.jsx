/**
 * Footer Section Component
 *
 * Minimal luxury footer with social links and copyright
 */

import { motion } from 'framer-motion'
import { MessageCircle, Heart } from 'lucide-react'

// Custom Instagram Icon since lucide-react may not have it
const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const socialLinks = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/919712349016',
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="container-luxury">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl">
              Shraddha <span className="text-[#D4AF37]">Pandey</span>
            </h2>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gray-500 mt-2">
              Interior Design
            </p>
          </motion.a>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-gray-400 max-w-md mb-8"
          >
            Designing Elegant Spaces That Feel Like Home
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center border border-gray-700 hover:border-[#D4AF37] hover:bg-[#D4AF37] text-gray-400 hover:text-black transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12"
          >
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-body text-sm uppercase tracking-wider text-gray-500 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link}
                </a>
              )
            )}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="font-body text-sm text-gray-600 flex items-center justify-center gap-1">
              &copy; {currentYear} Shraddha Pandey Interior Design. All Rights
              Reserved.
            </p>
            <p className="font-body text-xs text-gray-700 mt-2 flex items-center justify-center gap-1">
              Crafted with <Heart size={12} className="text-[#D4AF37]" /> in
              Ahmedabad
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-[#D4AF37]" />
    </footer>
  )
}

export default Footer
