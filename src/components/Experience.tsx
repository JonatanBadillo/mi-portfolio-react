import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Star, Rocket, ArrowRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-800 relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
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
        <div className="flex items-center justify-center gap-3 mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 blur-xl"></div>
          <Briefcase className="text-primary-500 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-center group">
            Work <span className="gradient-text relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-blue-500/50 transform -translate-x-1/2 hidden md:block"></div>

          <ExperienceCard
            title="Technical AWS Intern"
            company="Ellucian"
            date="January 2025 - May 2025"
            location="Puebla, Mexico"
            description="Currently working as an AWS Technical Intern, focusing on cloud infrastructure and development."
            isLeft={true}
          />

          <ExperienceCard
            title="Air Quality Analysis Social Service "
            company="BUAP"
            date="May 2024 - November 2024"
            location="Puebla, Mexico"
            description="Conducted city-wide air quality analysis for Puebla to support data-driven urban planning. Utilized R, ggplot2, and Shiny for time series analysis, ARIMA modeling, and data visualization."
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  isLeft: boolean;
}

const ExperienceCard = ({ title, company, date, location, description, isLeft }: ExperienceCardProps) => (
  <div className={`relative md:w-1/2 ${isLeft ? 'md:ml-0' : 'md:ml-auto'} animate-fade-in`}>
    <div className={`glass-card p-6 rounded-2xl hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-500/10 hover:border-primary-500/20 group 
      ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
      <div className="absolute top-8 hidden md:block 
        ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}">
        <div className="w-4 h-4 rounded-full bg-primary-500 group-hover:scale-150 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75"></div>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="text-primary-500 animate-spin-slow" />
              <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-primary-400 font-medium flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              {company}
            </p>
          </div>
          <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
            <div className="flex items-center text-gray-400 group-hover:text-primary-400 transition-colors duration-300">
              <Calendar size={16} className="mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-400 group-hover:text-primary-400 transition-colors duration-300">
              <MapPin size={16} className="mr-2" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        
      </div>
    </div>
  </div>
);

export default Experience;