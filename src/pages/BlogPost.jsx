import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import allBlogs from '../data/blogs';
import { Heart, MessageSquare, Share2, Bookmark, ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // First check if the post exists in our local blogs data
    const currentPost = allBlogs.find(blog => blog.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts with similar categories
      if (currentPost.categories && currentPost.categories.length) {
        const related = allBlogs
          .filter(p => p.slug !== slug) // Exclude current post
          .filter(p => p.categories?.some(cat => currentPost.categories.includes(cat)))
          .slice(0, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
      return;
    }
    
    // If not in local data, try to fetch from mock API (your existing posts from Home.jsx)
    const fetchPost = async () => {
      try {
        // For demo purposes, we'll just show an error 
        // In a real app, you'd make an API call here
        setError('Blog post not found');
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load article');
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="bg-paper min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="bg-paper min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-aged-paper border-4 border-double border-gray-800 p-8 text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="font-serif mb-6">{error || "The requested article could not be found."}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-ink text-paper hover:bg-transparent hover:text-ink border-2 border-ink px-6 py-2 font-serif transition-colors"
            >
              <ArrowLeft className="mr-2" size={18} />
              Return to All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-paper min-h-screen pb-16">
      {/* Return to all articles link */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/blog" className="inline-flex items-center font-serif text-sm text-gray-600 hover:text-accent">
          <ArrowLeft size={16} className="mr-1" />
          Back to All Articles
        </Link>
      </div>
      
      <article className="max-w-4xl mx-auto px-4 pt-6">
        {/* Article header */}
        <header className="mb-8 text-center">
          <div className="mb-4">
            <span className="inline-block bg-aged-paper px-3 py-1 font-serif text-sm border border-gray-400">
              {post.categories && post.categories.join(', ')}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-serif text-gray-600">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
            
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>By {post.author?.name || "Editorial Staff"}</span>
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
        <div className="prose prose-lg max-w-none font-serif prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:my-6 prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-li:marker:text-accent prose-img:border prose-img:border-gray-300">
          {post.content ? (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          ) : (
            <>
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                {post.excerpt || "Content not available"}
              </p>
              <p>Full article content will appear here.</p>
            </>
          )}
        </div>
        
        {/* Article footer */}
        <div className="mt-12 border-t-2 border-gray-300 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            {post.author?.avatar && (
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 border-2 border-gray-800 mr-4"
              />
            )}
            <div>
              <p className="font-serif font-bold">{post.author?.name || "Editorial Staff"}</p>
              <p className="font-serif text-sm text-gray-600">
                {post.author?.role || "Editor"}
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="p-2 hover:text-accent" title="Like">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:text-accent" title="Comment">
              <MessageSquare size={20} />
            </button>
            <button className="p-2 hover:text-accent" title="Share">
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:text-accent" title="Save">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </article>
      
      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="border-t-4 border-double border-gray-800 pt-8">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <div key={post.id} className="bg-aged-paper border border-gray-300">
                  <Link to={`/blog/${post.slug}`}>
                    {post.coverImage && (
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-48 object-cover border-b border-gray-300"
                      />
                    )}
                  </Link>
                  
                  <div className="p-4">
                    <h3 className="font-serif font-bold mb-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="font-serif text-sm mb-3 text-gray-700">
                      {post.excerpt?.substring(0, 100)}...
                    </p>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-sm text-accent font-serif hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;