import React from 'react';
import { Code, Coffee, Award, GraduationCap, Brain, Laptop, Sparkles, Star, Trophy, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/50 relative overflow-hidden py-20">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Sparkles className="text-primary-500 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl animate-fade-in hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-500/10 hover:border-primary-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-primary-500 animate-spin-slow" />
                <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm a passionate Computer Science student in my 8th semester at Benemérita Universidad Autónoma de Puebla, with a strong academic record (GPA 3.88) and a well-rounded skill set in programming, data analysis, and full-stack development.
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <Trophy className="text-yellow-500 animate-bounce-slow" />
                <h3 className="text-xl font-semibold text-white">Current Role</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mt-2">
                Currently working as an AWS Technical Intern at Ellucian, I'm constantly exploring new technologies and working on exciting projects that combine cloud computing, machine learning, and software development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Stat 
                icon={<GraduationCap className="animate-bounce-slow" />} 
                label="GPA" 
                value="3.88/4.0"
                color="text-blue-400" 
              />
              <Stat 
                icon={<Award className="animate-spin-slow" />} 
                label="Certifications" 
                value="15+" 
                color="text-purple-400"
              />
              <Stat 
                icon={<Code className="animate-pulse-slow" />} 
                label="Projects" 
                value="5+" 
                color="text-green-400"
              />
              <Stat 
                icon={<Coffee className="animate-bounce-slow" />} 
                label="Coffee/day" 
                value="∞" 
                color="text-amber-400"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-primary-500 animate-pulse" />
              <h3 className="text-3xl font-bold text-white">Core Competencies</h3>
            </div>
            
            <div className="space-y-6">
              <CompetencyCard
                icon={<Laptop />}
                title="Full-Stack Development"
                description="Creating responsive, dynamic applications with modern frameworks"
                color="from-blue-500 to-purple-500"
              />
              <CompetencyCard
                icon={<Brain />}
                title="Machine Learning"
                description="Experience with regression, clustering, and NLP solutions"
                color="from-green-500 to-emerald-500"
              />
              <CompetencyCard
                icon={<Code />}
                title="Problem Solving"
                description="Strong analytical and algorithmic thinking capabilities"
                color="from-purple-500 to-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-primary-500/10 hover:border-primary-500/20">
    <div className="flex items-center gap-3 mb-3">
      <span className={`${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</span>
      <span className="text-gray-400 text-sm font-medium">{label}</span>
    </div>
    <p className="text-white text-2xl font-bold">{value}</p>
  </div>
);

const CompetencyCard = ({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-primary-500/10 hover:border-primary-500/20">
    <div className="flex items-center gap-4 mb-3">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${color} bg-opacity-10`}>
        <span className="text-white">{icon}</span>
      </div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
    </div>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

export default About;