import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="Rao Rafay"
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-primary-foreground shadow-lg mb-8"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            <span className="block">Rao Rafay</span>
            <span className="block text-secondary mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Software Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            Software development enthusiast, specializing in front-end
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center"
          >
            <div className="rounded-md shadow">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary-foreground hover:bg-primary hover:text-white transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                Contact Me
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-accent hover:bg-primary transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}