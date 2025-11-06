"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Junior ABAP Developer",
      company: "The Working Town",
      duration: "Jan 2025 – Present",
      location: "Islamabad, Pakistan",
      description: [
        "Contributed to end-to-end SAP integration projects with backend development and technical implementations",
        "Developed and enhanced ABAP-based backend solutions for SAP integration projects across MM, PM, SD, and FI modules",
        "Implemented custom reports, interfaces, and enhancements using RICEFW methodology",
        "Collaborated with functional consultants to translate business logic into efficient technical solutions",
        "Supported testing, documentation, and issue resolution throughout development lifecycle",
      ],
    },
    {
      title: "Trainee Backend API Developer",
      company: "The Working Town",
      duration: "Nov 2024 – Jan 2025",
      location: "Islamabad, Pakistan",
      description: [
        "Completed intensive SAP ERP and BTP training with focus on RAP and full-stack application development",
        "Built CDS Views, service definitions, and ODATA services, implemented operations and enhancements",
        "Customized Fiori templates using UI annotations and screen enhancement techniques using ADT",
        "Gained hands-on experience with SAP Business Technology Platform architecture",
      ],
    },
    {
      title: "Web Application Developer",
      company: "Google Developer Student Club (GDSC)",
      duration: "Sep 2022 – Aug 2023",
      location: "Islamabad, Pakistan",
      description: [
        "Collaborated in a team to build and deploy web applications using modern JavaScript frameworks",
        "Conducted 10+ web development workshops, mentoring over 100 students across various technical topics",
        "Participated in code reviews, team problem-solving sessions, and community-driven development initiatives",
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding section-divider bg-slate-50 relative">
      <div className="section-decorator top-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-2">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h3>
        </div>

        <div className="relative pt-12 pb-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 md:left-1/2 md:-ml-px shadow-lg shadow-blue-500/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`flex gap-6 md:gap-0 animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row-reverse md:pr-1/2 md:pl-1/2" : "md:pl-1/2"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center md:w-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 border-4 border-white shadow-md"></div>
                </div>

                <div className="md:w-1/2 bg-white rounded-xl p-8 border border-gray-200 pl-6 md:pl-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-800">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    {exp.duration} • {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-700 text-sm">
                        <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
