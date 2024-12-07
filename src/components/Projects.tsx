import React from 'react';
import { Github, ExternalLink, Code, Sparkles, Star, Rocket, ArrowRight, Laptop } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-800 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-center gap-3 mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 blur-xl"></div>
          <Laptop className="text-primary-500 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-center group">
            Featured <span className="gradient-text relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Football League Management System"
            description="A Node.js and MySQL-based system for managing football leagues with roles for admins, captains, and referees. Features include authentication, role management, and secure data handling."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
            tags={['Node.js', 'MySQL', 'Authentication', 'Role Management', 'Secure Data Handling', 'Responsive Design','Bootstrap']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
          
          <ProjectCard
            title="Air Quality Analysis for Puebla"
            description="Using R, this project analyzes air quality data in Puebla, applying ARIMA for forecasting and time series analysis to monitor pollution trends over four years."
            image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400"
            tags={['R', 'ARIMA', 'Data Analysis', 'Air Quality','Time Series Analysis','Shiny','Dashboard','Data Visualization','Ggplot2']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
          
          <ProjectCard
            title="Football Team Website"
            description="A React-based website with database integration, displaying team, player, and match information in a responsive design."
            image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=400"
            tags={['React', 'Responsive Design', 'Database','Frontend','Backend','Full Stack','Tailwind']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
          
          <ProjectCard
            title="Sam Alexander Construction Inc Website"
            description="A React website for a construction company, featuring a custom form for client inquiries and providing detailed service information."
            image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=400"
            tags={['React', 'Form', 'Client Interaction','Frontend','Tailwind','EmailJS']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubLink,
  demoLink
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
    
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 border border-primary-500/10 hover:border-primary-500/20 relative transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-800/90"></div>
      </div>
      
      <div className="p-6 relative">
        <div className="flex items-center gap-2 mb-3">
          <Star className="text-primary-500 animate-spin-slow" />
          <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-700/50 text-primary-400 rounded-full text-sm border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <ProjectLink href={githubLink} icon={<Github size={18} />} label="Code" />
          <ProjectLink href={demoLink} icon={<ExternalLink size={18} />} label="Demo" />
        </div>

        <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          <ArrowRight className="text-primary-400" />
        </div>
      </div>
    </div>
  </div>
);

const ProjectLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-all duration-300 group"
  >
    <span className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
      {icon}
    </span>
    <span className="relative">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
    </span>
  </a>
);

export default Projects;
