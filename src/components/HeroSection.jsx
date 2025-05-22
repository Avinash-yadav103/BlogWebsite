import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../assets/blog.jpg';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 opacity-20" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="100" strokeOpacity="0.1" />
          <circle cx="250" cy="250" r="300" stroke="white" strokeWidth="50" strokeOpacity="0.05" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent" />
      </div>
      
      {/* Content area with padding for navbar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add top padding to create space between navbar and content */}
        <div className="pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to Your Modern Blog
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Insightful articles, tutorials, and stories that inform and inspire.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md transition duration-150 ease-in-out"
            >
              Start Reading
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img 
              src= {blogImg}
              alt="Blog"
              className="w-full h-auto rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x400?text=Blog+Hero';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;