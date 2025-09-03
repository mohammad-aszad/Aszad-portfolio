import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science using Python ",
      provider: "Navriti Technologies",
      date: "2024",
      description: "Comprehensive program covering data analysis, visualization, and insights generation",
      color: "from-blue-500 to-green-500",
      skills: ["Data Analysis", "Data Visualization", "SQL", "Python Libraries"]
    },
    {
      title: "Microsoft Power BI Data Analyst Associate",
      provider: "Microsoft",
      date: "2023",
      description: "Advanced certification in Power BI development and data modeling",
      color: "from-yellow-500 to-orange-500",
      skills: ["Power BI", "DAX", "Data Visualization", "Power Query", "MS Excel"]
    },
    {
      title: "Data Analytics Job Simulation",
      provider: "Deloitte (Forage)",
      date: "2025",
      description: "Advanced SQL techniques for data analysis and database management",
      color: "from-purple-500 to-blue-500",
      skills: ["Data Analysis", "Spreadsheets", "Microsoft Excel", "Tableau"]
    },
    {
      title: "The Ultimate MySQL Crash Course",
      provider: "Udemy",
      date: "2024",
      description: "Comprehensive Python programming specialization for data analysis",
      color: "from-green-500 to-teal-500",
      skills: ["SQL", "Databases", "Query Optimization", "MySQL"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Always working on improving my skills by pursuing training and earning certifications that are valued.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-cyan-400/50">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.color} text-white`}>
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-cyan-400 font-semibold mb-3">{cert.provider}</p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 rounded-xl p-8 inline-block border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full">
                <Award size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Always Learning</h3>
            {/* <p className="text-gray-300">
              Currently pursuing advanced certifications in Machine Learning and Cloud Analytics
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;





