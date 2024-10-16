import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary-foreground">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="lg:text-center mb-12">
          <h2 className="text-lg font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl sm:text-4xl md:text-5xl leading-8 font-extrabold tracking-tight text-accent">
            Let's Connect
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-8">
          <a href="mailto:raorafay.dev@gmail.com" className="flex items-center text-primary hover:text-accent transition-colors duration-300 text-lg">
            <Mail className="h-6 w-6 mr-2" />
            <span>raorafay.dev@gmail.com</span>
          </a>
          <a href="tel:+923103608836" className="flex items-center text-primary hover:text-accent transition-colors duration-300 text-lg">
            <Phone className="h-6 w-6 mr-2" />
            <span>+92 310 3608836</span>
          </a>
          <a href="https://linkedin.com/in/raorafay" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-accent transition-colors duration-300 text-lg">
            <Linkedin className="h-6 w-6 mr-2" />
            <span>linkedin.com/in/raorafay</span>
          </a>
          <a href="https://github.com/raorafay-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-accent transition-colors duration-300 text-lg">
            <Github className="h-6 w-6 mr-2" />
            <span>github.com/raorafay-dev</span>
          
          </a>
        </div>
      </div>
    </section>
  )
}