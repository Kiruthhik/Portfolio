import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

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
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-bg.JPG')" }}
        aria-hidden="true"
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-black/30" aria-hidden="true" />

      {/* Floating Elements (optional, can remove for simplicity) */}
      {/* <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float z-20"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float z-20"
        style={{ animationDelay: '1s' }}
      ></div> */}

      <div className="container mx-auto px-6 relative z-30">
        <div className="flex justify-end">
          <div className="text-center max-w-4xl mx-0 md:mx-auto md:text-left md:pl-32 lg:pl-64 flex flex-col items-center md:items-start">
            {/* Main Content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
                  Kiruthhik
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
                Backend Developer | Tech Enthusiast
              </p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Passionate about creating exceptional digital experiences through innovative
                web technologies, clean design, and user-centered solutions.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <a
                href="/assets/kiruthhik_resume.pdf"
                download="Kiruthhik_Resume.pdf"
                className="px-8 py-4 border-2 border-gray-200 text-white font-semibold rounded-full hover:bg-gray-50/10 hover:border-gray-300 transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center text-lg"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>

            {/* Tech Stack */}
            <div className="text-center md:text-left w-full">
              <p className="text-sm text-gray-300 mb-4 uppercase tracking-wider font-medium">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {['Django', 'Flask', 'JavaScript', 'Python', 'PostgreSQL', 'Java'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-gray-200 hover:bg-white/50 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-white transition-colors duration-200 animate-bounce z-40"
        aria-label="Scroll Down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;