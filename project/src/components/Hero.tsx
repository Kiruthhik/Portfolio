import React from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient bg-[length:400%_400%]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-glow">
              <img
                src="C:\Users\HP\Documents\Portfolio\project\assets\kiruthhik.JPG"
                alt="Kiruthhik"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
                Hi, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kiruthhik
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              Backend Developer | Tech Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through innovative
              web technologies, clean design, and user-centered solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="inline-block w-5 h-5 mr-2" />
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-200">
              <Download className="inline-block w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-medium">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Django', 'Flask', 'JavaScript', 'Python', 'PostgreSQL', 'Java'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:bg-white/80 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;