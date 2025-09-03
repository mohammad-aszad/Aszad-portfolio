import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Data Science Intern",
    company: "Navriti Technologies",
    period: "July 2024",
    location: "On-Site",
    description: "Worked on data cleaning, visualization, and dashboard creation for client projects using SQL, Power BI and Python.",
    skills: ["Power BI", "Python", "SQL", "Data Visualization", "Data Analysis"]
  },
//   {
//     role: "Junior Data Analyst",
//     company: "XYZ Solutions",
//     period: "Jul 2023 – Dec 2023",
//     location: "Ghaziabad, India",
//     description: "Assisted in EDA, report automation, and business insights generation for retail analytics.",
//     skills: ["Excel", "Tableau", "Business Intelligence", "Reporting"]
//   }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           Internship and Academic project experience in data analysis, visualization, and business intelligence across diverse projects .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg text-white mr-3">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Calendar size={16} className="mr-1" />
                    {exp.period} &nbsp;|&nbsp; {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;