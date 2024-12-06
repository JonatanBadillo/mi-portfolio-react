import React from 'react';
import { Code, Coffee, Award, GraduationCap, Brain, Laptop, Sparkles, Star, Trophy, Target, Zap, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/50 relative overflow-hidden py-20">
      {/* Efectos de fondo mejorados con más capas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Partículas flotantes adicionales */}
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
        {/* Título mejorado con efectos */}
        <div className="flex items-center justify-center gap-3 mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 blur-xl"></div>
          <Sparkles className="text-primary-500 animate-pulse transform hover:scale-110 transition-transform" />
          <h2 className="text-4xl md:text-5xl font-bold text-center group">
            About <span className="gradient-text relative inline-block">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse transform hover:scale-110 transition-transform" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Card "Who I Am" mejorada */}
            <div className="glass-card p-8 rounded-2xl animate-fade-in hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-500/10 hover:border-primary-500/20 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Star className="text-primary-500 animate-spin-slow absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                  <Star className="text-primary-500 animate-spin-slow relative group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">Who I Am</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm a passionate Computer Science student in my 8th semester at Benemérita Universidad Autónoma de Puebla, with a strong academic record (GPA 3.88) and a well-rounded skill set in programming, data analysis, and full-stack development.
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="relative">
                  <Trophy className="text-yellow-500 animate-bounce-slow relative group-hover:scale-110 transition-transform duration-300" />
                  <Zap className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">Current Role</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mt-2">
                Currently working as an AWS Technical Intern at Ellucian, I'm constantly exploring new technologies and working on exciting projects that combine cloud computing, machine learning, and software development.
              </p>
            </div>

            {/* Stats grid mejorado */}
            <div className="grid grid-cols-2 gap-6">
              <Stat 
                icon={<GraduationCap className="animate-bounce-slow" />} 
                label="GPA" 
                value="3.88/4.0"
                color="text-blue-400"
                gradient="from-blue-500 to-cyan-500"
              />
              <Stat 
                icon={<Award className="animate-spin-slow" />} 
                label="Certifications" 
                value="15+" 
                color="text-purple-400"
                gradient="from-purple-500 to-pink-500"
              />
              <Stat 
                icon={<Code className="animate-pulse-slow" />} 
                label="Projects" 
                value="5+" 
                color="text-green-400"
                gradient="from-green-500 to-emerald-500"
              />
              <Stat 
                icon={<Coffee className="animate-bounce-slow" />} 
                label="Coffee/day" 
                value="∞" 
                color="text-amber-400"
                gradient="from-amber-500 to-orange-500"
              />
            </div>
          </div>

          <div className="space-y-8">
            {/* Título de competencias mejorado */}
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Target className="text-primary-500 animate-pulse relative group-hover:rotate-180 transition-transform duration-500" />
                <Rocket className="absolute -top-2 -right-2 w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                Core Competencies
              </h3>
            </div>
            
            {/* Competency cards mejoradas */}
            <div className="space-y-6">
              <CompetencyCard
                icon={<Laptop />}
                title="Full-Stack Development"
                description="Creating responsive, dynamic applications with modern frameworks"
                color="from-blue-500 to-purple-500"
                delay="0"
              />
              <CompetencyCard
                icon={<Brain />}
                title="Machine Learning"
                description="Experience with regression, clustering, and NLP solutions"
                color="from-green-500 to-emerald-500"
                delay="100"
              />
              <CompetencyCard
                icon={<Code />}
                title="Problem Solving"
                description="Strong analytical and algorithmic thinking capabilities"
                color="from-purple-500 to-pink-500"
                delay="200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label, value, color, gradient }: { icon: React.ReactNode; label: string; value: string; color: string; gradient: string }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-primary-500/10 hover:border-primary-500/20 group">
    <div className="flex items-center gap-3 mb-3">
      <div className={`${color} group-hover:scale-110 transition-transform duration-300 relative`}>
        {icon}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300`}></div>
      </div>
      <span className="text-gray-400 text-sm font-medium group-hover:text-primary-400 transition-colors duration-300">{label}</span>
    </div>
    <p className="text-white text-2xl font-bold group-hover:text-primary-400 transition-colors duration-300">{value}</p>
  </div>
);

const CompetencyCard = ({ icon, title, description, color, delay }: { icon: React.ReactNode; title: string; description: string; color: string; delay: string }) => (
  <div 
    className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-primary-500/10 hover:border-primary-500/20 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-3">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-white relative">
          {icon}
          <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </span>
      </div>
      <h4 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">{title}</h4>
    </div>
    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
  </div>
);

export default About;