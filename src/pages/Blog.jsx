import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, User } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import allBlogs from '../data/blogs'; // Import all blogs

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    // Combine local blog data with mock posts
    const loadPosts = async () => {
      try {
        // Set the newest blog post as featured
        if (allBlogs && allBlogs.length > 0) {
          const sortedBlogs = [...allBlogs].sort((a, b) => 
            new Date(b.publishedAt) - new Date(a.publishedAt)
          );
          
          setFeaturedPost(sortedBlogs[0]);
          setPosts(sortedBlogs);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading posts:', error);
        setIsLoading(false);
      }
    };
    
    loadPosts();
  }, []);
  
  // Get all unique categories across all blog posts
  const allCategories = ['All', ...new Set(
    posts.flatMap(post => post.categories || [])
  )];
  
  // Filter posts based on search term and active category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'All' || 
      post.categories?.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="bg-paper min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <header className="max-w-4xl mx-auto text-center mb-12 border-b-4 border-double border-ink pb-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">THE CHRONICLE ARCHIVES</h1>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <p className="mt-4 font-serif italic text-gray-600 text-lg">
            Exploring the latest developments in technology and programming
          </p>
        </header>
        
        {/* Search and filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full border-2 border-gray-800 bg-aged-paper px-4 py-2 pl-10 font-serif"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
            
            <div className="relative">
              <select 
                className="border-2 border-gray-800 bg-aged-paper px-4 py-2 pl-10 pr-10 font-serif appearance-none cursor-pointer"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>
        </div>
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="border-t-4 border-b-4 border-gray-800 py-2">
              <div className="bg-white p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="border-r border-gray-800">
                    <img 
                      src={featuredPost.coverImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80"} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block bg-aged-paper px-3 py-1 font-serif text-sm border border-gray-400">
                          {featuredPost.categories?.[0] || "Featured"}
                        </span>
                      </div>
                      
                      <h2 className="font-serif text-3xl font-bold mb-4">
                        <Link to={`/blog/${featuredPost.slug}`} className="hover:text-accent">
                          {featuredPost.title}
                        </Link>
                      </h2>
                      
                      <p className="font-serif mb-6 text-gray-700">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {featuredPost.author?.avatar && (
                            <img 
                              src={featuredPost.author.avatar} 
                              alt={featuredPost.author.name}
                              className="w-8 h-8 border border-gray-800 mr-3"
                            />
                          )}
                          <span className="font-serif text-sm">
                            {featuredPost.author?.name || "Editorial Staff"}
                          </span>
                        </div>
                        
                        <div className="font-serif text-sm text-gray-600">
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center bg-ink text-paper hover:bg-transparent hover:text-ink border-2 border-ink px-6 py-2 font-serif transition-colors"
                      >
                        Read Full Article
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Article grid */}
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="bg-aged-paper border-4 border-double border-gray-800 p-8 text-center">
              <h2 className="font-serif text-2xl font-bold mb-4">No Articles Found</h2>
              <p className="font-serif">
                No articles match your search criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.filter(post => post.id !== featuredPost?.id).map(post => (
                <article key={post.id} className="border border-gray-300 bg-white hover:shadow-md transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  
                  <div className="p-6">
                    {post.categories?.[0] && (
                      <div className="mb-2">
                        <span className="bg-aged-paper px-2 py-1 font-serif text-xs border border-gray-400">
                          {post.categories[0]}
                        </span>
                      </div>
                    )}
                    
                    <h3 className="font-serif text-xl font-bold mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="font-serif text-sm text-gray-700 mb-4">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-600 border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;