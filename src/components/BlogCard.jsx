import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, Calendar } from 'lucide-react';

const BlogCard = ({ post }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className="card animate-on-scroll group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-elegant"
    >
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-video">
        <img 
          src={post.coverImage || '/api/placeholder/800/600'} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full dark:bg-blue-900/30 dark:text-blue-300">
            {post.category}
          </span>
          
          <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          
          {post.readTime && (
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          )}
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 mb-4 line-clamp-3 dark:text-slate-300">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
              {post.author?.avatar ? (
                <img 
                  src={post.author.avatar} 
                  alt={post.author?.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm font-bold">{post.author?.name?.charAt(0) || 'A'}</span>
              )}
            </div>
            <span className="font-medium text-sm text-slate-700 dark:text-slate-300">
              {post.author?.name || 'Anonymous'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            {post.commentCount !== undefined && (
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>{post.commentCount}</span>
              </div>
            )}
            
            <Link 
              to={`/blog/${post.slug}`} 
              className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-3"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;