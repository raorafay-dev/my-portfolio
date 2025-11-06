"use client"

export default function Certifications() {
  const certifications = [
    {
      title: "Introducing SAP ABAP Platform Fundamentals",
      issuer: "SAP",
      link: "https://www.credly.com/badges/6c6030ea-7e7e-453e-a5de-c369d52db27b/linked_in_profile",
    },
    {
      title: "Discovering SAP Business Technology Platform",
      issuer: "SAP",
      link: "https://www.credly.com/badges/a8a12881-ff36-4b9f-b645-1813a096a6c4/linked_in_profile",
    },
    {
      title: "Google Project Management Professional Certification",
      issuer: "Google",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/R3RG9UNH332J?fbclid=PAAaZCLKG7a6WmIMmNfxpdovGk6ZLXGHs-ke6E0V7BfiVMLI0DT4utDLio7JM",
    },
    {
      title: "Top 25% Global Talent Recognition",
      issuer: "Recognition Badge",
      link: "https://award.thetalent.games/#/?id=BQFMEPY_KYRXV1",
    },
  ]

  return (
    <section id="certifications" className="section-padding section-divider bg-blue-50">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-2">Certifications</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Credentials & Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white rounded-xl p-8 border-t-4 border-blue-600 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M9 8H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h4>
              <p className="text-sm text-slate-600 mb-4">Issued by {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
              >
                Verify Credential
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
