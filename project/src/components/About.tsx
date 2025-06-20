import React from 'react';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '2+' },
    { icon: Award, label: 'Awards Won', value: '5+' },
    //{ icon: Heart, label: 'Hackathon won', value: '3+' },
    { icon: MapPin, label: 'Projects Completed', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                A software enthusiast who is eager to learn and explore new
 domains. To grow and develop my skills in a collaborative
 environment. To learn the growing trends and technologies and to
 contribute for the development of an organization.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I specialize in modern web technologies including React, Django, and cloud
                platforms. I believe in writing clean, maintainable code and creating intuitive
                interfaces that users love to interact with.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community through
                blog posts and mentoring.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                <p className="text-gray-600">Chennai, India</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                <p className="text-gray-600">Computer Science</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">Focus</h4>
                <p className="text-gray-600">Full Stack Development</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">Availability</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;