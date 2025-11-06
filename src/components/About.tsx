"use client"

export default function About() {
  const aboutItems = [
    {
      name: "Education",
      description: "Bachelor of Computer Science from FAST NUCES, Islamabad (Sep 2020 - June 2024)",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L0 6v2h24V6L12 0zm0 2.707l9 4.5v6.793H3V7.207l9-4.5zM3 17h18v1H3z" />
        </svg>
      ),
      gradient: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Experience",
      description: "Junior ABAP Developer at The Working Town (Jan 2025 - Present)",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.15a2 2 0 00-3.72 0H9.87a2 2 0 00-3.72 0H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-10 0a1 1 0 110-2 1 1 0 010 2zm10 14H4V8h16v12z" />
        </svg>
      ),
      gradient: "from-emerald-50 to-emerald-100/50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      name: "Certifications",
      description: "SAP ABAP Platform, SAP BTP, Google PM Professional, Top 25% Global Talent",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-amber-50 to-amber-100/50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ]

  return (
    <section id="about" className="section-padding section-divider bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="section-decorator top-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-6">
            SAP ABAP Backend Developer
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Junior SAP ABAP Developer specializing in backend solutions for SAP Enterprise Systems. Experienced in
            end-to-end SAP integration projects, building RICEFW objects, and developing ODATA services and REST APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={item.name}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-gray-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.icon && (
                <div className="flex justify-center mb-6">
                  <div className={`${item.iconBg} p-4 rounded-full ${item.textColor}`}>{item.icon}</div>
                </div>
              )}
              <h4 className="text-xl font-bold text-slate-800 text-center mb-3">{item.name}</h4>
              <p className="text-center text-slate-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-decorator bottom-0 opacity-60"></div>
    </section>
  )
}
