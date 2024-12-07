import React from 'react';
import { FileDown, Download, Star, Sparkles, File, ArrowRight } from 'lucide-react';
import resumePDF from '../assets/Jonatan_Badillo_Resume.pdf';

const ResumeDownload = () => {
  return (
    <section className="py-16 bg-dark-800 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl border border-primary-500/10 hover:border-primary-500/20 transition-all duration-500 group">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Lado izquierdo con información */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <File className="text-primary-500 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-white">
                  Download My <span className="gradient-text">Resume</span>
                </h3>
                <Sparkles className="text-primary-500 animate-pulse" />
              </div>
              <p className="text-gray-300">
                Get a detailed overview of my skills, experience, and achievements.
              </p>
              <div className="flex items-center gap-2 text-primary-400">
                <Star className="w-4 h-4" />
                <span className="text-sm">Updated 2024</span>
              </div>
            </div>

            {/* Botón de descarga */}
            <a
              href={resumePDF}
              download="Jonatan_Badillo_Resume.pdf"
              className="relative group/button"
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover/button:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <button className="relative bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 group-hover/button:shadow-lg group-hover/button:shadow-primary-500/20 transition-all duration-300 transform group-hover/button:-translate-y-0.5">
                <span className="font-medium">Download CV</span>
                <div className="relative">
                  <FileDown className="w-5 h-5 transform group-hover/button:scale-110 transition-transform duration-300" />
                  
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover/button:opacity-100 transform translate-x-2 group-hover/button:translate-x-0 transition-all duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload; 