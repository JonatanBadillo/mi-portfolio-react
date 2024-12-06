import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Cpu, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-dark-800/80 backdrop-blur-md z-50 border-b border-primary-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold flex items-center gap-3 group relative"
          >
            <div className="relative">
              <Cpu className="text-primary-500 group-hover:rotate-180 transition-transform duration-700" />
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <span className="text-white relative">
              Jonatan
              <span className="gradient-text font-extrabold"> Badillo</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex space-x-6">
            <SocialLink href="https://github.com/JonatanBadillo" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/jonatan-badillo-3a12531a8/" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:jonatanbadillo.19@gmail.com" icon={<Mail size={20} />} />
          </div>

          <button 
            className="md:hidden text-white hover:text-primary-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-slide-down">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-primary-400 transition-all duration-300 relative group px-4 py-2"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-primary-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-dark-600"
    onClick={onClick}
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group p-2 hover:text-primary-400 transition-all duration-300"
  >
    <span className="relative z-10 transform transition-transform group-hover:scale-125 group-hover:-rotate-6 inline-block">
      {icon}
    </span>
    <span className="absolute inset-0 bg-primary-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
  </a>
);

export default Header;