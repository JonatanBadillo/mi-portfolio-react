import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI Image Generator"
            description="A deep learning model that generates artistic images from text descriptions using DALL-E architecture."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
            tags={['Python', 'PyTorch', 'React', 'AWS']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
          
          <ProjectCard
            title="Smart Task Manager"
            description="A productivity app with AI-powered task prioritization and time management features."
            image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400"
            tags={['React', 'Node.js', 'MongoDB', 'ML']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
          
          <ProjectCard
            title="Crypto Portfolio Tracker"
            description="Real-time cryptocurrency portfolio tracking with price alerts and analytics dashboard."
            image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=400"
            tags={['TypeScript', 'Next.js', 'Firebase']}
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
  <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors"
        >
          <Github size={18} /> Code
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors"
        >
          <ExternalLink size={18} /> Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;