/**
 * Testimonials Section Component
 *
 * Luxury card slider with client reviews and star ratings
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner, Ahmedabad',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Working with Shraddha was an absolute delight! She transformed our 3BHK into a stunning modern home that exceeds all our expectations. Her attention to detail and understanding of our lifestyle made the entire process seamless.',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Business Owner, Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Shraddha designed both our home and office space. Her ability to balance aesthetics with functionality is remarkable. The quality of work and materials used was exceptional. Highly recommended for premium interiors!',
  },
  {
    id: 3,
    name: 'Anita Desai',
    role: 'Doctor, Bangalore',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'From concept to execution, everything was perfect. Shraddha listened to our requirements carefully and delivered a home that truly feels like us. The modular kitchen she designed is both beautiful and practical.',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'IT Professional, Delhi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'We approached Shraddha for our penthouse interior, and she created magic! The contemporary design with luxurious touches has made our home the talk of the neighborhood. Professional service throughout.',
  },
  {
    id: 5,
    name: 'Meera Joshi',
    role: 'Fashion Designer, Pune',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'As someone in the creative field, I had high expectations. Shraddha not only met them but exceeded them. Her design sensibility is truly refined, and she understood exactly what I was looking for.',
  },
]

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.95, scale: isActive ? 1 : 0.98 }}
      transition={{ duration: 0.5 }}
      className={`testimonial-card ${isActive ? 'testimonial-card--active' : ''}`}
    >
      <div className="testimonial-quote">
        <Quote size={60} />
      </div>

      <div className="testimonial-header">
        <span className="testimonial-pill">Client Story</span>
        <div className="flex items-center gap-2 text-[#f4d26f]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < testimonial.rating
                  ? 'text-[#f4d26f] fill-[#f4d26f]'
                  : 'text-gray-500'
              }
            />
          ))}
          <span className="text-sm text-gray-300">5.0</span>
        </div>
      </div>

      <p className="testimonial-text">
        “{testimonial.text}”
      </p>

      <div className="testimonial-meta">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-avatar"
        />
        <div>
          <h4 className="font-heading text-lg text-white">
            {testimonial.name}
          </h4>
          <p className="font-body text-sm text-gray-300">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const navigate = (newDirection) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      )
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="section-padding bg-black relative overflow-hidden" style={{ paddingBottom: '0' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '12px' }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}
          >
            What Our Clients Say
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
            style={{ fontFamily: 'var(--font-body)', color: '#D1D5DB', fontSize: '15px', lineHeight: 1.7 }}
          >
            Don't just take our word for it. Here's what our valued clients have to say about their experience.
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <div style={{ maxWidth: '896px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center" style={{ marginTop: '10px', gap: '8px' }}>
            <div className="flex justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#D4AF37]'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
