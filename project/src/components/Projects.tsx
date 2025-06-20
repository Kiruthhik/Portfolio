import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// Import your images (update paths as per your assets folder)
import iplAuctionImg from '/assets/projects/ipl-auction.jpg';
import bipvImg from '/assets/projects/bivpp.jpg';
import odmsImg from '/assets/projects/odms.jpg';
import mailImg from '/assets/projects/mail.jpg';
import commerceImg from '/assets/projects/commerce.jpg';
import networkImg from '/assets/projects/network.jpg';

const featuredProjects = [
  {
    id: 1,
    title: 'Online IPL Auction',
    description:
      'Django-based real time bidding system for cricket players in a time bound round-robin format. Scheduled Auctions for timed events, asynchronous franchise bidding, and dynamic/non-sequential auctions.',
    image: iplAuctionImg,
    tags: ['Django', 'Websockets', 'Scheduling', 'Marketplace'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Kiruthhik/CrickAuction',
    bullets: [
      'Django-based real time bidding system for cricket players in a time bound round-robin format.',
      'Scheduled Auctions: Auctioneers select pool of players and franchises for timed events triggered at scheduled time.',
      'Marketplace System: Franchise asynchronously bid for players who listed themselves in the auction.',
      'Dynamic/non-sequential: Franchises can bid independently at any time before the auction deadline.',
    ],
  },
  {
    id: 2,
    title: 'BIPV - Building Integrated Photo-Voltaic',
    description:
      'Tool for assessing Building Integrated Photovoltaic (BIPV) potential using LOD-1 3D city models. Visualizes solar energy for building surfaces and uses PostGIS for efficient geospatial queries and storage.',
    image: bipvImg,
    tags: ['Django', 'PostGIS', '3D Visualization', 'API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Kiruthhik/BIPV',
    bullets: [
      'Developed a tool for assessing BIPV potential using LOD-1 3D city models.',
      'Visualized solar energy potential for building surfaces, estimating rooftop PV and vertical BIPV energy potential.',
      'Backend: Built a robust API in Django to handle geospatial data and computations.',
      'Database: Utilized PostGIS for efficient geospatial queries and storage.',
    ],
  },
  {
    id: 3,
    title: 'OD-Management System',
    description:
      'OD Management System for 300+ students with role-based workflows, real-time attendance/requests, and dynamic processing tied to class timetables. Built with Django and React.',
    image: odmsImg,
    tags: ['Django', 'React', 'REST API', 'Team Project'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Kiruthhik/OD_management_system',
    bullets: [
      'Developed an OD Management System for 300+ students with role-based workflows: loaded student, faculty, and timetable data via Django commands.',
      'Real-time attendance and request tracking with teammate support.',
      'Led a 4-member team; designed database schema and built RESTful APIs supporting team events and dynamic OD processing tied to class timetables.',
    ],
  },
];

const otherProjects = [
  {
    id: 4,
    title: 'Mail',
    description:
      'Designed a Single Page Application using JavaScript for an email client that makes API calls to backend Django framework to send and receive emails.',
    image: mailImg,
    tags: ['Django', 'JavaScript', 'SPA'],
    liveUrl: 'https://youtu.be/sAuvWnidhLo?si=r78PMCsEY6CBU9R4',
    githubUrl: '#',
    bullets: [
      'Designed a Single Page Application using JavaScript for an email client that makes API calls to backend Django framework to send and receive emails.',
    ],
  },
  {
    id: 5,
    title: 'Commerce',
    description:
      'Designed an eBay-like e-commerce auction site allowing users to post auction listings, place bids, comment, and maintain a watchlist. Built with Django and Django models.',
    image: commerceImg,
    tags: ['Django', 'Auctions', 'Full-stack'],
    liveUrl: 'https://youtu.be/5U8xtQIK8jQ?si=iUKdRYlF0Zac35Th',
    githubUrl: '#',
    bullets: [
      'Designed an eBay-like e-commerce auction site that allows users to post auction listings, place bids on listings, comment on those listings, and add listings to a watchlist.',
      'Built with Django and Django models.',
    ],
  },
  {
    id: 6,
    title: 'Network',
    description:
      'Developed a Twitter-like social network website for making posts and following users. Implemented with Django, JavaScript, and Unit testing.',
    image: networkImg,
    tags: ['Django', 'JavaScript', 'Testing'],
    liveUrl: '#',
    githubUrl: '#',
    bullets: [
      'Developed a Twitter-like social network website for making posts and following users.',
      'Implemented with Django, Django models, JavaScript, and Unit testing.',
    ],
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A showcase of my best work where I solve real-world problems and demonstrate full-stack expertise.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveUrl}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={16} className="text-gray-700" />
                </a>
                <a
                  href={project.githubUrl}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="GitHub Code"
                >
                  <Github size={16} className="text-gray-700" />
                </a>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
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
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200 mt-auto">
                <span>View Project</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Notable Projects */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Other Notable Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    aria-label="GitHub Code"
                  >
                    <Github size={14} className="text-gray-700" />
                  </a>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-3 pl-4">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
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
        <a
          href="https://github.com/kiruthhik" // Replace with your actual GitHub profile or repo link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;