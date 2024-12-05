import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import jony from '../assets/images/jony.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-800 to-dark-700">
      <div className="container mx-auto px-6 py-20 text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="space-y-8 relative">
          <div className="relative inline-block mb-8 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
            <img
              src={jony}
              alt="Profile"
              className="relative rounded-full w-48 h-48 object-cover border-4 border-primary-500 shadow-lg shadow-primary-500/20 animate-glow"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
            Jonatan <span className="gradient-text">Badillo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up glass-card inline-block px-6 py-3 rounded-full" style={{ animationDelay: '200ms' }}>
            Computer Science Student & AWS Technical Intern at Ellucian
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <TechBadge>Web Development</TechBadge>
            <TechBadge>Data Science</TechBadge>
            <TechBadge>Machine Learning</TechBadge>
            <TechBadge>AWS</TechBadge>
          </div>

          <div className="flex justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <SocialLink href="https://github.com/yourusername" icon={<Github />} />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} />
            <SocialLink href="mailto:jonatanbadillo.19@gmail.com" icon={<Mail />} />
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 animate-bounce-slow group"
          >
            Explore My Work 
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-6 py-2 glass-card rounded-full text-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20">
    <span className="gradient-text font-medium">{children}</span>
  </span>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
  >
    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
  </a>
);

export default Hero;