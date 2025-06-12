import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../assets/blog.jpg';

const HeroSection = () => {
  return (
    <div className="bg-aged-paper border-b border-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {/* Newspaper style headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Welcome to Our Modern Newspaper Blog
            </h1>
            
            {/* Subhead in newspaper style */}
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-serif italic">
              Insightful articles, tutorials, and stories that inform and inspire.
            </p>
            
            <Link 
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink transition-colors font-serif"
            >
              Read Today's Stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Image with newspaper-style frame */}
              <img 
                src={blogImg}
                alt="Blog"
                className="w-full h-auto border-4 border-gray-800 shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Blog+Hero';
                }}
              />
              
              {/* Optional: Decorative vintage corner elements */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-accent"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;