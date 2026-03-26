/**
 * Contact Section Component
 */

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, Sun } from 'lucide-react'

const whatsappUrl = `https://wa.me/919712349016?text=${encodeURIComponent(
  'Hello! I would like to discuss an interior design project.'
)}`

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 9712349016',
    href: 'tel:+919712349016',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat for quick response',
    href: whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'shraddhapandey6958@gmail.com',
    href: 'mailto:shraddhapandey6958@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Our Studio',
    value: 'Ahmedabad, Gujarat',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Mon – Saturday',
    value: '10:00 AM – 7:00 PM',
    href: null,
  },
  {
    icon: Sun,
    title: 'Sunday',
    value: 'By Appointment Only',
    href: null,
  },
]

const Contact = () => (
  <section
    id="contact"
    style={{ background: '#000000', padding: '30px 0 80px 0' }}
    className="relative overflow-hidden"
  >
    {/* Ambient gold glow */}
    <div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ top: '-150px', left: '-150px', width: '400px', height: '400px', background: 'rgba(212,175,55,0.08)' }}
    />
    <div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ bottom: '-150px', right: '-150px', width: '400px', height: '400px', background: 'rgba(212,175,55,0.06)' }}
    />

    {/* Outer wrapper */}
    <div className="container-luxury relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ maxWidth: '860px', margin: '0 auto' }}
      >
        {/* ── Contact Items: 2-col grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>
            {contactItems.map((item, i) => {
              const isLastRow  = i >= contactItems.length - 2
              const isLeftCol  = i % 2 === 0

              const inner = (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '12px',
                    padding: '32px 24px',
                    borderBottom: !isLastRow ? '1px solid #f3f4f6' : 'none',
                    borderRight: isLeftCol ? '1px solid #f3f4f6' : 'none',
                    height: '100%',
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="group-hover:bg-yellow-50 transition-colors duration-300"
                    style={{
                      width: '52px',
                      height: '52px',
                      flexShrink: 0,
                      borderRadius: '14px',
                      background: '#FBF6E9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <item.icon size={22} color="#D4AF37" />
                  </div>
                  {/* Text */}
                  <div style={{ minWidth: 0 }}>
                    <p
                      className="font-body group-hover:text-[#B8962E] transition-colors duration-300"
                      style={{ fontWeight: 700, fontSize: '16px', color: '#111', marginBottom: '4px' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-body"
                      style={{ fontSize: '14px', color: '#9ca3af', wordBreak: 'break-all', lineHeight: '1.5' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              )

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{ display: 'block' }}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.title}>{inner}</div>
              )
            })}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Contact
