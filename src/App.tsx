
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="bg-dark-700 min-h-screen text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeDownload />
        <Contact />
      </main>
      
      {/* Footer mejorado */}
      <footer className="bg-dark-800 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo o Nombre */}
            <div className="relative group cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Jonatan Badillo
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* Enlaces sociales */}
            <div className="flex items-center gap-6">
              <SocialLink href="https://github.com/JonatanBadillo" icon="github" />
              <SocialLink href="https://www.linkedin.com/in/jonatan-badillo-3a12531a8/" icon="linkedin" />
              <SocialLink href="mailto:jonatanbadillo.19@gmail.com" icon="mail" />
            </div>

            {/* Línea divisoria con gradiente */}
            <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Jonatan Badillo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente para los enlaces sociales
const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300 group"
  >
    <div className="relative">
      {icon === 'github' && (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )}
      {icon === 'mail' && (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )}
      <div className="absolute -inset-2 bg-primary-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
    </div>
  </a>
);

export default App;