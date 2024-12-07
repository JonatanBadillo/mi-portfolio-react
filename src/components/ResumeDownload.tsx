import React from 'react';
import { FileDown, Download, Star, Sparkles, File, ArrowRight, Award, Calendar, Rocket } from 'lucide-react';
import resumePDF from '../assets/Jonatan_Badillo_Resume.pdf';

const ResumeDownload = () => {
  return (
    <section className="py-16 bg-dark-800 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Partículas flotantes mejoradas */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/30 rounded-full animate-float"
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

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl border border-primary-500/10 hover:border-primary-500/20 transition-all duration-500 group relative">
          {/* Efecto de brillo en hover para toda la tarjeta */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Lado izquierdo con información mejorada */}
            <div className="space-y-6 flex-1">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <File className="text-primary-500 animate-bounce-slow" />
                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary-400 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Download My <span className="gradient-text">Resume</span>
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Get a detailed overview of my professional journey, skills, and achievements.
                </p>
              </div>

              {/* Features del CV */}
              <div className="grid grid-cols-2 gap-4">
                <Feature 
                  icon={<Award />}
                  title="Experience"
                  description="Detailed work history"
                />
                <Feature 
                  icon={<Star />}
                  title="Skills"
                  description="Technical expertise"
                />
                <Feature 
                  icon={<Calendar />}
                  title="Updated"
                  description="Latest version 2024"
                />
                <Feature 
                  icon={<Rocket />}
                  title="Projects"
                  description="Portfolio highlights"
                />
              </div>
            </div>

            {/* Botón de descarga mejorado */}
            <div className="relative group/button">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover/button:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <a
                href={resumePDF}
                download="Jonatan_Badillo_Resume.pdf"
                className="relative block bg-gradient-to-r from-primary-500 to-purple-500 p-[1px] rounded-xl group-hover/button:shadow-lg group-hover/button:shadow-primary-500/20 transition-all duration-300"
              >
                <div className="relative bg-dark-800 rounded-xl p-1">
                  <button className="relative px-8 py-4 rounded-lg flex items-center gap-4 group-hover/button:-translate-y-0.5 transition-all duration-300">
                    <span className="text-lg font-medium bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                      Download CV
                    </span>
                    <div className="relative">
                      <FileDown className="w-6 h-6 text-primary-400 transform group-hover/button:scale-110 transition-transform duration-300" />
                     
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-400 opacity-0 group-hover/button:opacity-100 transform translate-x-2 group-hover/button:translate-x-0 transition-all duration-300" />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-3 group/feature">
    <div className="relative mt-1">
      <div className="text-primary-400 transform group-hover/feature:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-primary-400 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300" />
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

export default ResumeDownload; 