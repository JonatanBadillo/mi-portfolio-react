import React from 'react';
import { Code, Database, Brain, Terminal, Sparkles, Star, Rocket, Award, GraduationCap } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-700 relative overflow-hidden py-20">
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
          <Brain className="text-primary-500 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-center group">
            Technical <span className="gradient-text relative inline-block">
              Skills
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SkillCategory
            icon={<Code />}
            title="Programming Languages"
            skills={['JavaScript', 'TypeScript', 'Java', 'Python', 'C/C++', 'SQL', 'R']}
          />

          <SkillCategory
            icon={<Terminal />}
            title="Frameworks & Libraries"
            skills={['Node.js', 'React', 'NextJS', 'Angular', 'Bootstrap', 'MUI', 'Tailwind CSS','Vite','Express']}
          />

          <SkillCategory
            icon={<Database />}
            title="Data Science Tools"
            skills={['Jupyter', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'ggplot2', 'Shiny','RStudio']}
          />

          <SkillCategory
            icon={<Brain />}
            title="Other Technologies"
            skills={['Git', 'AWS', 'RESTful APIs', 'Machine Learning', 'NLP', 'Docker']}
          />
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="text-primary-500 animate-bounce-slow" />
            <h3 className="text-3xl font-bold text-center group">
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            <Award className="text-primary-500 animate-pulse" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} certification={cert} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory = ({ icon, title, skills }: SkillCategoryProps) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-500/10 hover:border-primary-500/20 group animate-fade-in">
    <div className="flex items-center gap-3 mb-4">
      <div className="relative">
        <span className="text-primary-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          {icon}
        </span>
        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-dark-700/50 text-primary-400 rounded-full text-sm border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CertificationCard = ({ certification, delay }: { certification: string; delay: number }) => (
  <div 
    className="glass-card p-6 rounded-xl hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-500/10 hover:border-primary-500/20 group animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-3">
      <div className="relative mt-1">
        <Award className="text-primary-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        <Star className="absolute -top-1 -right-1 w-3 h-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
        {certification}
      </p>
    </div>
  </div>
);

const certifications = [
  'Supervised Machine Learning: Regression and Classification – Stanford University (2024)',
  'Distributed Programming in Java – BUAP (2024)',
  'Data Analytics – IBM (2024)',
  "CS50's Introduction to Computer Science – Harvard University",
  'Introduction to Computer Programming – University of London (2020)',
];

export default Skills;