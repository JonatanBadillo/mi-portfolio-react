import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Sparkles, MessageSquare, User, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-800 relative overflow-hidden py-20">
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
          <MessageSquare className="text-primary-500 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-center group">
            Get In <span className="gradient-text relative inline-block">
              Touch
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <Sparkles className="text-primary-500 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-primary-500"><ArrowRight className="animate-pulse" /></span>
              Let's Connect
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="group-hover:animate-bounce" />}
                label="Email"
                value="jonatanbadillo.19@gmail.com"
                href="mailto:jonatanbadillo.19@gmail.com"
              />
              <ContactInfo
                icon={<Github className="group-hover:animate-spin-slow" />}
                label="GitHub"
                value="github.com/JonatanBadillo"
                href="https://github.com/JonatanBadillo"
              />
              <ContactInfo
                icon={<Linkedin className="group-hover:animate-pulse" />}
                label="LinkedIn"
                value="linkedin.com/in/jonatan-badillo"
                href="https://www.linkedin.com/in/jonatan-badillo-3a12531a8/"
              />
              <ContactInfo
                icon={<MapPin className="group-hover:animate-bounce" />}
                label="Location"
                value="Puebla, Mexico"
              />
            </div>
          </div>

          <form className="glass-card p-8 rounded-2xl space-y-6 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-primary-500" />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-dark-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-dark-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary-500" />
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-dark-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="glass-card p-4 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 border border-primary-500/10 hover:border-primary-500/20 group">
    <div className="flex items-center gap-4">
      <span className="text-primary-500 transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
          >
            {value}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        ) : (
          <p className="text-white group-hover:text-primary-400 transition-colors duration-300">{value}</p>
        )}
      </div>
    </div>
  </div>
);

export default Contact;