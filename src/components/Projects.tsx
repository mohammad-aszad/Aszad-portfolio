import React from 'react';
import { ExternalLink, Github, BarChart, ShoppingCart, Film, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Water Level Analysis & Flood Prediction System",
      description: [
        <>
          <p>• Used the Open-Meteo API to collect live weather and rainfall data.</p>
          <p>• Collected river and groundwater data from India-WRIS portal.</p>
          <p>• Created interactive dashboards with alerts and visualizations.</p>
          <p>• Built a system to track water levels in real time using rainfall and river data.</p>
        </>
      ],
      tools: [ "API","Excel", "Dataset ", "Data Visualization"],
      icon: <BarChart size={40} />,
      gradient: "from-blue-500 to-purple-600",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    // {
    //   title: "E-commerce Purchase Behavior Analysis",
    //   description: [
    //     "Cleaned and analyzed e-commerce purchase data to uncover customer buying patterns.",
    //     "Identified peak sales periods and high-value segments.",
    //     "Created visual reports for business growth insights."
    //   ],
    //   tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    //   icon: <ShoppingCart size={40} />,
    //   gradient: "from-green-500 to-teal-600",
    //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    // },

    // {
    //   title: "Movie Ratings Prediction Model",
    //   description: [
    //     "Built a machine learning model to predict movie ratings based on genre, director, budget, and cast data.",
    //     "Achieved 85% prediction accuracy using regression techniques."
    //   ],
    //   tools: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    //   icon: <Film size={40} />,
    //   gradient: "from-red-500 to-pink-600",
    //   image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    // },
    {
      title: "Calorie Prediction",
      description: [
        <>
        <p>• Used Jupyter Notebook to code, test, and explain my work clearly.</p>
        <p>• Worked with CSV files to collect, clean, and prepare data for analysis.</p>
        <p>• Cleaned and organized the data with Python, Pandas, and NumPy.</p>
        <p>• Made a simple interface so users can see real-time calorie predictions.</p>
        </>
      ],
      tools: ["Python","Excel", "Power Query", "Data Visualization"],
      icon: <Activity size={40} />,
      gradient: "from-orange-500 to-red-600",
      image: "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world data analytics projects demonstrating impact and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 text-white">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300">
                    <Github size={20} />
                  </button>
                  <button className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"> 
                  {project.title}
                </h3>
                <div className="text-gray-300 mb-4 leading-relaxed">
                  {Array.isArray(project.description)
                    ? project.description.map((desc, i) => <React.Fragment key={i}>{desc}</React.Fragment>)
                    : project.description}
                </div>
                  
                
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default Projects;