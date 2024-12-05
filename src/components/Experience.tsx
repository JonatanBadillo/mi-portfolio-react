import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <ExperienceCard
            title="Technical AWS Intern"
            company="Ellucian"
            date="Present"
            location="Puebla, Mexico"
            description="Currently working as an AWS Technical Intern, focusing on cloud infrastructure and development."
          />

          <ExperienceCard
            title="Air Quality Analysis Intern"
            company="BUAP"
            date="May 2024 - Present"
            location="Puebla, Mexico"
            description="Conducted city-wide air quality analysis for Puebla to support data-driven urban planning. Utilized R, ggplot2, and Shiny for time series analysis, ARIMA modeling, and data visualization."
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
}

const ExperienceCard = ({ title, company, date, location, description }: ExperienceCardProps) => (
  <div className="bg-dark-600 p-6 rounded-lg shadow-lg card-hover animate-fade-in">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-primary-400 font-medium">{company}</p>
      </div>
      <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
        <div className="flex items-center text-gray-400">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Experience;