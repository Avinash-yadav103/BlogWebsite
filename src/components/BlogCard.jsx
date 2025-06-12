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
    <article className="border-b border-gray-300 pb-8 mb-8">
      <div className="grid md:grid-cols-3 gap-6">
        {post.image && (
          <div className="md:col-span-1">
            <Link to={`/blog/${post.slug}`}>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto border border-gray-400 shadow-sm"
              />
            </Link>
          </div>
        )}
        
        <div className={post.image ? "md:col-span-2" : "md:col-span-3"}>
          <div className="mb-2 text-xs text-gray-600 font-serif uppercase tracking-wider">
            {post.category} • {new Date(post.createdAt).toLocaleDateString()}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3">
            <Link to={`/blog/${post.slug}`} className="hover:text-accent">
              {post.title}
            </Link>
          </h2>
          
          <div className="text-gray-700 mb-4">
            {post.excerpt || post.content.substring(0, 150)}...
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <img 
                src={post.author.avatar || 'https://via.placeholder.com/40'} 
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-serif italic">{post.author.name}</span>
            </div>
            
            <Link to={`/blog/${post.slug}`} className="text-accent hover:underline font-serif">
              Continue Reading →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;