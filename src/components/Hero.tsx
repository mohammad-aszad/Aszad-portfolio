import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <img 
                src="project/Aszad-img.jpg" 
                alt="Mohammad Aszad - Data Analyst"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Mohammad Aszad
          <span className="block text-cyan-400 text-3xl md:text-4xl font-normal mt-2">
            Data Analyst
          </span>
        </h1>


        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
           Passionate about turning Data into actionable insights to support better decisions.
        </p>
        
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View My Work
          </button>
        </div> */}





<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
  <a
  href="/Aszad_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
>
    <Download size={20} />
    My Resume
  </a>
  <button 
    onClick={scrollToAbout}
    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
  >
    View My Work
  </button></div>







        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;