import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';  // Install this: npm install react-markdown
import allBlogs from '../data/blogs';  // Import your blog data
import axios from 'axios';
import { Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // First try to find the post in our local data
    const foundPost = allBlogs.find(blog => blog.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
      return;
    }
    
    // If not found locally, try the API (your existing code)
    const fetchPost = async () => {
      try {
        // Replace with your actual API endpoint
        const res = await axios.get(`/api/posts/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="text-xl font-serif text-gray-800">{error}</div>
      </div>
    );
  }
  
  return (
    <div className="bg-paper min-h-screen pb-16">
      <article className="max-w-4xl mx-auto px-4 pt-12">
        {/* Article header */}
        <header className="mb-8 text-center">
          <div className="text-xs uppercase tracking-wide text-gray-600 font-serif mb-2">
            {post.category} • {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="font-serif italic text-lg text-gray-600 mb-6">
            {post.excerpt}
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src={post.author.avatar || 'https://via.placeholder.com/40'} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full border border-gray-800 mr-3"
            />
            <div className="text-left">
              <div className="font-serif font-medium">{post.author.name}</div>
              <div className="text-xs text-gray-600">Editor at Daily Chronicle</div>
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        {post.coverImage && (
          <figure className="mb-12 border-t-4 border-b-4 border-gray-800 py-2">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-auto"
            />
          </figure>
        )}
        
        {/* Article content with markdown support */}
        <div className="prose prose-lg max-w-none font-serif prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-p:leading-relaxed prose-p:my-6 prose-a:text-accent prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic">
          {post.content ? (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          ) : (
            /* Your existing content rendering */
            <>
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                {post.content?.split('\n\n')[0] || "Content not available"}
              </p>
              
              {post.content?.split('\n\n').slice(1).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </>
          )}
        </div>
        
        {/* Article footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8 text-gray-600">
              <button className="flex items-center hover:text-accent">
                <Heart size={20} className="mr-2" />
                <span>{post.likes || 0}</span>
              </button>
              <button className="flex items-center hover:text-accent">
                <MessageSquare size={20} className="mr-2" />
                <span>{post.comments?.length || 0} Comments</span>
              </button>
              <button className="flex items-center hover:text-accent">
                <Share2 size={20} className="mr-2" />
                <span>Share</span>
              </button>
            </div>
            <button className="flex items-center hover:text-accent">
              <Bookmark size={20} className="mr-2" />
              <span>Save</span>
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-aged-paper border border-gray-300 font-serif">
            <h3 className="text-xl font-bold mb-2">About the Author</h3>
            <div className="flex items-start">
              <img 
                src={post.author.avatar || 'https://via.placeholder.com/80'} 
                alt={post.author.name}
                className="w-16 h-16 rounded-full border border-gray-800 mr-4"
              />
              <div>
                <h4 className="font-bold">{post.author.name}</h4>
                <p className="text-gray-600 mt-1">
                  {post.author.bio || 'Writer and editor with a passion for storytelling and exploring new ideas.'}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;