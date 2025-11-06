"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left animate-fade-in">
            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Rao Rafay
            </p>
            <p className="text-sm text-white/60 mt-1">SAP ABAP Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <a
              href="https://github.com/raorafay-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/raorafay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.42-.103.249-.129.597-.129.946v5.439h-3.554s.047-8.842 0-9.763h3.554v1.381c-.009.015-.021.029-.03.042h.03v-.042c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.619zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.952.77-1.71 1.952-1.71 1.182 0 1.915.758 1.915 1.71 0 .951-.733 1.71-1.952 1.71zm1.581 11.597H3.715V8.689h3.203v11.763zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div
            className="text-center md:text-right text-sm text-white/60 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p>&copy; {new Date().getFullYear()} Rao Rafay. All rights reserved.</p>
            <p className="mt-1">Built with React & Deployed on Vercel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
