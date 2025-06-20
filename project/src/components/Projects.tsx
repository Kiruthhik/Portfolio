import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'API Integration', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and comprehensive reporting features.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Complete LMS with course creation, student progress tracking, video streaming, and interactive quizzes.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'MongoDB', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and the projects I'm most proud of. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={14} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;