import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Newspaper-style headline */}
        <header className="text-center mb-12 border-b-4 border-double border-ink pb-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">ABOUT THE EDITOR</h1>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <p className="mt-4 font-serif italic text-gray-600 text-lg">
            The man behind the daily chronicle
          </p>
        </header>
        
        {/* Main profile section - newspaper style */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Column 1: Photo and contact */}
          <div className="md:col-span-1">
            <div className="border-4 border-ink mb-6 shadow-md">
              <img 
                src="https://avatars.githubusercontent.com/u/Avinash-yadav103" 
                alt="Avinash Yadav"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x400?text=Avinash+Yadav';
                }}
              />
            </div>
            
            <div className="bg-aged-paper p-6 border border-gray-300">
              <h3 className="font-serif text-xl font-bold mb-3 border-b border-gray-400 pb-2">Contact The Editor</h3>
              <div className="space-y-4 mt-4">
                <a 
                  href="https://github.com/Avinash-yadav103" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-ink hover:text-accent transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  <span className="font-serif">Github</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>
                
                <a 
                  href="mailto:editor@dailychronicle.com" 
                  className="flex items-center text-ink hover:text-accent transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  <span className="font-serif">Email the Editor</span>
                </a>
                
                <a 
                  href="https://twitter.com/AvinashYadav" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-ink hover:text-accent transition-colors"
                >
                  <Twitter size={18} className="mr-2" />
                  <span className="font-serif">Twitter</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2-3: Main content */}
          <div className="md:col-span-2">
            <article className="prose prose-lg max-w-none font-serif prose-headings:font-serif prose-p:text-justify">
              <h2 className="text-3xl font-bold mb-6">Avinash Yadav</h2>
              
              {/* First paragraph with drop cap */}
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                As the founder and chief editor of The Daily Chronicle, Avinash brings a wealth of technical expertise and a passion for sharing knowledge with the developer community. With a background in modern web development and a keen eye for detail, he has built this platform as a space for thoughtful discourse and practical insights into the world of programming.
              </p>
              
              <p>
                Avinash specializes in full-stack development with particular expertise in React, Node.js, and MongoDB. His journey in technology began over five years ago, and since then, he has contributed to numerous open-source projects while maintaining a commitment to educational content that helps developers at all stages of their careers.
              </p>
              
              <blockquote>
                "I believe that knowledge should be accessible to everyone. My goal with The Daily Chronicle is to create a space where developers can learn, share, and grow together in a supportive community."
              </blockquote>
              
              <h3 className="text-2xl font-bold mt-8">Technical Expertise</h3>
              <p>
                When not writing or editing articles for The Daily Chronicle, Avinash can be found experimenting with new technologies, contributing to open-source projects, or mentoring aspiring developers. His GitHub repository showcases a diverse collection of projects that reflect his technical versatility and commitment to clean, maintainable code.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Editorial Philosophy</h3>
              <p>
                The Daily Chronicle's editorial approach reflects Avinash's belief in thorough research, practical examples, and clarity of explanation. Each article undergoes a rigorous review process to ensure accuracy and relevance to our readers' needs. We prioritize content that solves real-world problems and provides actionable insights over theoretical discussions.
              </p>
              
              <div className="bg-aged-paper border border-gray-300 p-6 my-8">
                <h4 className="font-bold text-xl mb-4">Areas of Interest</h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Modern JavaScript frameworks and libraries</li>
                  <li>Server-side development with Node.js</li>
                  <li>Database design and optimization</li>
                  <li>Authentication and security best practices</li>
                  <li>Performance optimization techniques</li>
                  <li>User experience and interface design</li>
                </ul>
              </div>
            </article>
            
            {/* Recent work section */}
            <div className="mt-10 border-t-2 border-gray-300 pt-6">
              <h3 className="font-serif text-2xl font-bold mb-4">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://github.com/Avinash-yadav103/BlogPost-Website" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border border-gray-300 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-serif font-bold text-lg mb-2">Blog Post Website</h4>
                  <p className="text-gray-600 text-sm mb-3">A modern blogging platform with newspaper-inspired design and MongoDB integration.</p>
                  <div className="flex items-center text-accent text-sm">
                    <Github size={14} className="mr-1" />
                    <span>View on GitHub</span>
                    <ExternalLink size={12} className="ml-1" />
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Avinash-yadav103" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border border-gray-300 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-serif font-bold text-lg mb-2">More Projects</h4>
                  <p className="text-gray-600 text-sm mb-3">Explore my full portfolio of projects and contributions on GitHub.</p>
                  <div className="flex items-center text-accent text-sm">
                    <Github size={14} className="mr-1" />
                    <span>Visit GitHub Profile</span>
                    <ExternalLink size={12} className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* "Write for us" section */}
        <section className="border-4 border-double border-gray-800 p-8 bg-aged-paper">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-6">
              <h3 className="font-serif text-3xl font-bold mb-4">Join Our Writers</h3>
              <p className="font-serif mb-6">
                Are you passionate about web development and enjoy sharing your knowledge? 
                The Daily Chronicle is always looking for talented contributors to join our team.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ink text-paper hover:bg-transparent hover:text-ink border-2 border-ink px-6 py-2 font-serif transition-colors"
              >
                Contact the Editor
              </Link>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-white border-2 border-gray-800 p-4">
                <h4 className="font-serif font-bold text-center mb-2">We're Looking For:</h4>
                <ul className="text-sm space-y-2 font-serif">
                  <li>• Technical tutorials</li>
                  <li>• Industry insights</li>
                  <li>• Code reviews</li>
                  <li>• Project walkthroughs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;