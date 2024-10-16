import { GraduationCap, Briefcase, Award } from 'lucide-react'

export default function About() {
  const aboutItems = [
    {
      name: 'Education',
      description: 'Bachelor of Computer Science from FAST NUCES, Islamabad (Sep 2020 - 2024)',
      icon: GraduationCap,
    },
    {
      name: 'Experience',
      description: 'Front-end Developer at Google Developer Student Club, Technical Team (Oct 2022 - 2023)',
      icon: Briefcase,
    },
    {
      name: 'Certifications',
      description: 'Google Project Management Professional, Meta Front-End Developer Professional (Enrolled)',
      icon: Award,
    },
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"> 
          <h2 className="text-base font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl text-accent leading-8 font-extrabold tracking-tight sm:text-4xl">
            Passionate Software Developer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"> 
            Focused on front-end web development. Proficient in JavaScript, React, and the MERN stack, with a strong foundation in backend technologies and databases. A dedicated continuous learner, adaptable to new technologies in the ever-evolving field of Software Development.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 text-center"> 
            {aboutItems.map((item) => (
              <div key={item.name} className="relative">
                <dt>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-primary/85 text-primary-foreground"> 
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
