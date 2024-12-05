import React from 'react';
import { Code, Database, Brain, Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-700">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SkillCategory
            icon={<Code />}
            title="Programming Languages"
            skills={['JavaScript', 'TypeScript', 'Java', 'Python', 'C/C++', 'SQL', 'R']}
          />

          <SkillCategory
            icon={<Terminal />}
            title="Frameworks & Libraries"
            skills={['Node.js', 'React', 'NextJS', 'Angular', 'Bootstrap', 'MUI', 'Tailwind CSS']}
          />

          <SkillCategory
            icon={<Database />}
            title="Data Science Tools"
            skills={['Jupyter', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'ggplot2', 'Shiny']}
          />

          <SkillCategory
            icon={<Brain />}
            title="Other Technologies"
            skills={['Git', 'AWS', 'RESTful APIs', 'Machine Learning', 'NLP', 'Docker']}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Supervised Machine Learning: Regression and Classification – Stanford University (2024)',
              'Distributed Programming in Java – BUAP (2024)',
              'Data Analytics – IBM (2024)',
              "CS50's Introduction to Computer Science – Harvard University",
              'Introduction to Computer Programming – University of London (2020)',
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-dark-600 p-4 rounded-lg text-gray-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cert}
              </div>
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
  <div className="bg-dark-600 p-6 rounded-lg shadow-lg card-hover animate-fade-in">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-primary-500">{icon}</span>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;