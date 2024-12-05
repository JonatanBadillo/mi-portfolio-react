import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <ContactInfo
                icon={<Mail />}
                label="Email"
                value="john.doe@example.com"
                href="mailto:john.doe@example.com"
              />
              <ContactInfo
                icon={<Github />}
                label="GitHub"
                value="github.com/johndoe"
                href="https://github.com/johndoe"
              />
              <ContactInfo
                icon={<Linkedin />}
                label="LinkedIn"
                value="linkedin.com/in/johndoe"
                href="https://linkedin.com/in/johndoe"
              />
              <ContactInfo
                icon={<MapPin />}
                label="Location"
                value="San Francisco, CA"
              />
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-center gap-4">
    <span className="text-purple-500">{icon}</span>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-500 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;