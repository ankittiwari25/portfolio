/**
 * Shraddha Pandey Interior Design
 * Premium Luxury Portfolio Website
 *
 * Main Application Component
 */

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Layout Components
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

// Section Components
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Project Modal Component
import ProjectModal from './components/ProjectModal'

function App() {
  // Loading state for initial page load
  const [isLoading, setIsLoading] = useState(true)

  // Modal state for project details
  const [selectedProject, setSelectedProject] = useState(null)

  // Simulate loading time for premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle project modal
  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Services />
            <Projects onProjectClick={openProjectModal} />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Elements */}
          <WhatsAppButton />
          <ScrollToTop />

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={closeProjectModal}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default App
