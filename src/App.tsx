
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
      <footer className="bg-dark-800 text-center py-6">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Jonatan Badillo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;