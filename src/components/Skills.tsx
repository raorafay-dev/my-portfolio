export default function Skills() {
  const skillCategories = [
    {
      title: "SAP Development & Integration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 10v10l8 4m0-10l8 4"
          />
        </svg>
      ),
      skills: [
        { name: "ABAP", icon: "/abap.jpg" },
        { name: "RAP", icon: "/rap.png" },
        { name: "RICEFW", icon: "/ricefw.png" },
        { name: "BAPIs", icon: "/bapi.png" },
        { name: "RFCs", icon: "/rfc.png" },
        { name: "ODATA Services", icon: "/odata.png" },
        { name: "REST APIs", icon: "/rest.png" },
      ],
    },
    {
      title: "SAP Modules & Tools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 0v10a1 1 0 001 1h10a1 1 0 001-1v-10m-9 0h9m-9 0V7a1 1 0 011-1h8a1 1 0 011 1v5m-6 6h4"
          />
        </svg>
      ),
      skills: [
        { name: "MM", icon: "/mm.png" },
        { name: "EAM", icon: "/eam.png" },
        { name: "SD", icon: "/sd.png" },
        { name: "FI", icon: "/fi.png" },
        { name: "SAP GUI", icon: "/gui.png" },
        { name: "Eclipse ADT", icon: "/adt.png" },
        { name: "SAP BTP", icon: "/btp.png" },
        { name: "ABAP Workbench", icon: "/workbench.png" },
        { name: "Git", icon: "/git.png" },
        { name: "Postman", icon: "/postman.png" },
      ],
    },
    {
      title: "Professional Skills",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM15 20h-8a4 4 0 014-4h4a4 4 0 014 4z"
          />
        </svg>
      ),
      skills: [
        { name: "Agile/Scrum", icon: "/agile.png" },
        { name: "Technical Documentation", icon: "/techdoc.png" },
        { name: "Team Collaboration", icon: "/collaboration.png" },
        { name: "Problem Solving", icon: "/problem.png" },
        { name: "Critical Thinking", icon: "/critical.png" },
        { name: "Analytical Skills", icon: "/analytical.png" },
        { name: "Communication", icon: "/communication.png" },
        { name: "Cross-functional Teamwork", icon: "/agile.png" },
        { name: "Requirement Analysis", icon: "/reqanalysis.png" },
        { name: "Adaptability", icon: "/adaptability.png" },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding section-divider bg-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-4/5 max-w-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-lg shadow-blue-500/20"></div>

      <div className="section-decorator top-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-gray-700 mb-4">Skills</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            My Technical Expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="rounded-2xl p-8 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 transition-colors">{category.icon}</div>
                <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="relative w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                      <img
                        src={skill.icon || "/placeholder.svg?height=64&width=64&query=tech+icon"}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="opacity-85 hover:opacity-100 transition-opacity object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-800 text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-decorator bottom-0 opacity-60"></div>
    </section>
  )
}