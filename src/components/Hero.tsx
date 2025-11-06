interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Rao_Rafay_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full blur-2xl scale-110 opacity-50"></div>
              <img
                src="/profile.jpg"
                alt="Rao Rafay"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white shadow-2xl w-[200px] h-[200px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">Rao</h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-blue-400">Rafay</h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">Junior SAP ABAP Developer</p>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
              Developing enterprise backend solutions for SAP systems, specializing in ABAP, integration projects, and
              RICEFW development across MM, PM, SD, and FI modules
            </p>
          </div>

          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </button>
            <button
              onClick={handleDownloadResume}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/20 hover:border-white/80"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}