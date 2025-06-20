import React from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 70 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '🔧' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📡' },
    { name: 'Slack', icon: '💬' },
    { name: 'Notion', icon: '📝' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Tools & Technologies I Use Daily
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
              >
                <span className="text-2xl mr-3">{tool.icon}</span>
                <span className="text-gray-700 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;