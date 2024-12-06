import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Terminal, Cloud } from 'lucide-react';
import jony from '../assets/images/jony.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-800 to-dark-700 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative">
        <div className="space-y-8 relative">
          {/* Contenedor de la imagen con efectos mejorados */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            <div className="relative group">
              <img
                src={jony}
                alt="Profile"
                className="relative rounded-full w-48 h-48 object-cover border-4 border-primary-500/50 shadow-xl shadow-primary-500/20 transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="absolute top-0 right-0 text-primary-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-down">
            Jonatan <span className="gradient-text">Badillo</span>
          </h1>
          
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up glass-card px-8 py-4 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/20">
              <Terminal className="inline-block mr-2 text-primary-400" />
              Computer Science Student & AWS Technical Intern at Ellucian
            </p>
          </div>
          
          {/* Tech badges con nuevos efectos */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <TechBadge icon={<Code />}>Web Development</TechBadge>
            <TechBadge icon={<Terminal />}>Data Science</TechBadge>
            <TechBadge icon={<Sparkles />}>Machine Learning</TechBadge>
            <TechBadge icon={<Cloud />}>AWS</TechBadge>
          </div>

          {/* Social links mejorados */}
          <div className="flex justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <SocialLink href="https://github.com/JonatanBadillo" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/jonatan-badillo-3a12531a8/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:jonatanbadillo.19@gmail.com" icon={<Mail />} label="Email" />
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-3 px-6 py-3 text-primary-400 hover:text-primary-300 transition-all duration-500 animate-bounce-slow group glass-card rounded-xl hover:shadow-lg hover:shadow-primary-500/20 border border-primary-500/20 hover:border-primary-500/40"
          >
            Explore My Work 
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => (
  <span className="px-6 py-3 glass-card rounded-xl text-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20 flex items-center gap-2">
    {React.cloneElement(icon as React.ReactElement, { className: "text-primary-400" })}
    <span className="gradient-text font-medium">{children}</span>
  </span>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
  >
    <div className="flex flex-col items-center gap-2">
      <span className="relative p-3 rounded-lg bg-dark-700/50 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-primary-500/20">
        {React.cloneElement(icon as React.ReactElement, { 
          size: 24,
          className: "text-gray-400 group-hover:text-primary-400 transition-colors duration-300"
        })}
      </span>
      <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-6 w-full text-center">
        {label}
      </span>
    </div>
  </a>
);

export default Hero;