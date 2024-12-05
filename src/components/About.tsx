import React from 'react';
import { BookOpen, Code, Coffee, Award, GraduationCap, Brain, Laptop, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm a passionate Computer Science student in my 8th semester at Benemérita Universidad Autónoma de Puebla, with a strong academic record (GPA 3.88) and a well-rounded skill set in programming, data analysis, and full-stack development.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Currently working as an AWS Technical Intern at Ellucian, I'm constantly exploring new technologies and working on exciting projects that combine cloud computing, machine learning, and software development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Stat 
                icon={<GraduationCap className="animate-bounce-slow" />} 
                label="GPA" 
                value="3.88/4.0" 
              />
              <Stat 
                icon={<Award className="animate-spin-slow" />} 
                label="Certifications" 
                value="5+" 
              />
              <Stat 
                icon={<Code className="animate-pulse-slow" />} 
                label="Projects" 
                value="15+" 
              />
              <Stat 
                icon={<Coffee className="animate-bounce-slow" />} 
                label="Coffee/day" 
                value="∞" 
              />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Brain className="text-primary-500" />
              Core Competencies
            </h3>
            
            <div className="space-y-6">
              <CompetencyCard
                icon={<Laptop />}
                title="Full-Stack Development"
                description="Creating responsive, dynamic applications with modern frameworks"
              />
              <CompetencyCard
                icon={<Server />}
                title="Cloud Computing"
                description="AWS infrastructure and cloud-native development"
              />
              <CompetencyCard
                icon={<Brain />}
                title="Machine Learning"
                description="Experience with regression, clustering, and NLP solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="glass-card p-4 rounded-lg card-hover group">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-primary-500 group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
    <p className="text-white text-xl font-semibold">{value}</p>
  </div>
);

const CompetencyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card p-4 rounded-lg card-hover group">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-primary-500 group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default About;