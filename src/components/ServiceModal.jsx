/**
 * Service Modal Component — Luxury Redesign
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react'

const ServiceModal = ({ service, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') lightboxIndex !== null ? setLightboxIndex(null) : onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, onClose])

  if (!service) return null

  const images = service.gallery || []
  const hasLightbox = lightboxIndex !== null
  const prevImage = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-6 lg:p-10"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto"
          style={{ background: '#0d0d0d', boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,175,55,0.12)' }}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 flex items-center justify-center w-9 h-9 text-white/60 hover:text-white transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* ── Hero Image ── */}
          <div className="relative overflow-hidden" style={{ height: 'clamp(220px, 42vh, 420px)' }}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* Layered gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.15) 100%)' }} />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 md:px-12 md:pb-10">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="flex items-center gap-3 mb-4"
              >
                <span style={{ width: '28px', height: '1px', background: '#D4AF37' }} />
                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  Our Service
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="font-heading text-white"
                style={{ fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, fontWeight: 500 }}
              >
                {service.title}
              </motion.h2>
            </div>
          </div>

          {/* Gold accent line below hero */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37 30%, #B8962E 70%, transparent)' }} />

          {/* ── Body ── */}
          <div className="px-8 py-12 md:px-12 md:py-14">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p
                className="font-body"
                style={{ color: '#c8c0b4', fontSize: '15px', lineHeight: 1.9, maxWidth: '700px' }}
              >
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Separator */}
            <div style={{ margin: '40px 0', height: '1px', background: 'rgba(212,175,55,0.12)' }} />

            {/* ── Process + Included — two columns ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="grid md:grid-cols-2 gap-12 md:gap-16"
            >
              {/* Left — Process */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span className="font-heading text-white" style={{ fontSize: '18px', fontWeight: 500 }}>Our Process</span>
                  <span style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.2)' }} />
                </div>
                <div className="flex flex-col" style={{ gap: '20px' }}>
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start" style={{ gap: '16px' }}>
                      <span
                        className="font-heading flex-shrink-0"
                        style={{ fontSize: '30px', lineHeight: 1, color: 'rgba(212,175,55,0.22)', fontWeight: 700, width: '40px', paddingTop: '2px' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div style={{ paddingTop: '2px', borderLeft: '1px solid rgba(212,175,55,0.12)', paddingLeft: '16px' }}>
                        <p className="font-body text-white" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '5px' }}>{step.title}</p>
                        <p className="font-body" style={{ fontSize: '13px', color: '#6e6760', lineHeight: 1.65 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — What's Included */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span className="font-heading text-white" style={{ fontSize: '18px', fontWeight: 500 }}>What's Included</span>
                  <span style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.2)' }} />
                </div>
                <ul className="flex flex-col" style={{ gap: '14px' }}>
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start" style={{ gap: '12px' }}>
                      <span
                        className="flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ width: '18px', height: '18px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
                      >
                        <Check size={10} color="#D4AF37" />
                      </span>
                      <span className="font-body" style={{ fontSize: '13px', color: '#b0a89e', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ── Gallery ── */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                style={{ marginTop: '56px' }}
              >
                {/* Separator + Gallery heading */}
                <div style={{ height: '1px', background: 'rgba(212,175,55,0.12)', marginBottom: '40px' }} />
                <div className="flex items-center gap-4 mb-8">
                  <span style={{ width: '24px', height: '1px', background: '#D4AF37', flexShrink: 0 }} />
                  <span className="font-heading text-white" style={{ fontSize: '20px', fontWeight: 500, flexShrink: 0 }}>Our Work</span>
                  <span style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.15)' }} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className="group relative cursor-pointer overflow-hidden"
                      style={{ aspectRatio: '4/3' }}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        style={{ background: 'rgba(13,13,13,0.55)' }}
                      >
                        <div
                          style={{
                            width: '36px', height: '36px',
                            border: '1px solid rgba(212,175,55,0.8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <span style={{ color: '#D4AF37', fontSize: '18px', lineHeight: 1 }}>+</span>
                        </div>
                      </div>
                      {/* Bottom gold line on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                        style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="flex flex-col sm:flex-row gap-4"
              style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(212,175,55,0.12)' }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
                }}
                className="btn-primary text-center"
              >
                Get Free Consultation
              </a>
              <button
                onClick={onClose}
                className="font-body text-sm uppercase tracking-wider transition-colors duration-200 px-8 py-4"
                style={{ border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                View Other Services
              </button>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {hasLightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-20 flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.96)' }}
              onClick={() => setLightboxIndex(null)}
            >
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="font-body text-xs uppercase tracking-widest" style={{ color: '#D4AF37' }}>
                  {service.title}
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-body text-xs" style={{ color: '#6b6b6b' }}>
                    {lightboxIndex + 1} / {images.length}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(null) }}
                    className="flex items-center justify-center w-8 h-8 text-white/50 hover:text-white transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                className="absolute left-4 md:left-8 flex items-center justify-center w-11 h-11 text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={images[lightboxIndex]}
                alt=""
                className="max-h-[78vh] max-w-[80vw] object-contain"
                onClick={(e) => e.stopPropagation()}
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}
              />

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-4 md:right-8 flex items-center justify-center w-11 h-11 text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
              >
                <ChevronRight size={22} />
              </button>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37 40%, #B8962E 60%, transparent)' }} />
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceModal
