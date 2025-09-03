import React from 'react';
import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 size={24} />,
      title: "Data Visualization",
      description: "Expert in creating compelling visual stories from complex datasets"
    },
    {
      icon: <Database size={24} />,
      title: "Database Management",
      description: "Proficient in SQL optimization and database design principles"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Predictive Analytics",
      description: "Building machine learning models for business forecasting"
    },
    {
      icon: <Users size={24} />,
      title: "Stakeholder Communication",
      description: "Translating technical insights into actionable business recommendations"
    }
  ];

  // ...existing code...

return (
  <section id="about" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Results-driven and detail-oriented B.Tech graduate with internship and academic project experience in data analysis, visualization, 
            and database management. Proficient in Python, SQL, Power BI, Tableau, and Excel for data cleaning, EDA and dashboard creation. 
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Skilled at delivering actionable insights and using generative AI tools for analytics.
          </p>
          
          {/* <div className="flex flex-wrap gap-4">
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">5+ Years Experience</span>
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">50+ Projects Completed</span>
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">Multiple Certifications</span>
          </div> */}

          {/* EDUCATION SECTION */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <div className="bg-gray-900 rounded-xl p-6 mb-4">
              <div className="text-cyan-400 font-semibold text-lg mb-1">B.Tech in Information Technology</div>
              <div className="text-gray-300 text-sm mb-1">IMS Engineering College, Ghaziabad</div>
              <div className="text-gray-400 text-sm">2021 – 2025</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="text-cyan-400 font-semibold text-lg mb-1">12th </div>
              <div className="text-gray-300 text-sm mb-1">Christ The King College, Jhansi</div>
              <div className="text-gray-400 text-sm">2020</div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="text-cyan-400 font-semibold text-lg mb-1">10th </div>
              <div className="text-gray-300 text-sm mb-1">Christ The King College, Jhansi</div>
              <div className="text-gray-400 text-sm">2018</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="text-cyan-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

}

export default About;