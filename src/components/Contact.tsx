"use client"

export default function Contact() {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "raorafay.dev@gmail.com",
      href: "mailto:raorafay.dev@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+92 310 3608836",
      href: "tel:+923103608836",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.42-.103.249-.129.597-.129.946v5.439h-3.554s.047-8.842 0-9.763h3.554v1.381c-.009.015-.021.029-.03.042h.03v-.042c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.619zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.952.77-1.71 1.952-1.71 1.182 0 1.915.758 1.915 1.71 0 .951-.733 1.71-1.952 1.71zm1.581 11.597H3.715V8.689h3.203v11.763zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/raorafay",
      href: "https://linkedin.com/in/raorafay",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/raorafay-dev",
      href: "https://github.com/raorafay-dev",
    },
  ]

  return (
    <section
      id="contact"
      className="section-padding section-divider bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-2">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">{"Let's Connect"}</h3>
          <p className="text-lg text-white/80">
            Open to SAP development opportunities and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {contactItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:shadow-lg hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/15 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">{item.icon}</div>
                <div>
                  <p className="text-sm text-white/70">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
