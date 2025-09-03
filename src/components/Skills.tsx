import React from 'react';
import { Code, Database, BarChart, FileSpreadsheet, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", icon: <Code size={20} />}, //level: 95 },
        { name: "SQL", icon: <Database size={20} />} //level: 90 }
      ]
    },
    {
      title: "Visualization Tools",
      icon: <BarChart size={24} />,
      skills: [
        { name: "Power BI", icon: <BarChart size={20} />, level: 90 },
        { name: "Tableau", icon: <BarChart size={20} />, level: 85 }
      ]
    },
    {
      title: "Data Tools",
      icon: <FileSpreadsheet size={24} />,
      skills: [
        { name: "Excel", icon: <FileSpreadsheet size={20} />, level: 95 },
        // { name: "Pandas", icon: <Database size={20} />, level: 92 },
        // { name: "NumPy", icon: <Database size={20} />, level: 88 },
        { name: "Power Query", icon: <Zap size={20} />, level: 85 }
      ]
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Tools</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>

          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full data analytics stack
          </p> */}
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="text-cyan-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-cyan-400 mr-2">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      {/* <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span> */}
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level ?? 0}` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;