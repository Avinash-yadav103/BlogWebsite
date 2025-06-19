import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import allBlogs from '../data/blogs';  // Import your blog data

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Use the imported blog data instead of API call
    if (allBlogs && allBlogs.length > 0) {
      setFeaturedPost(allBlogs[0]);  // Set newest blog as featured
      setPosts(allBlogs.slice(1));   // Rest of the blogs
    }
    setLoading(false);
    
    // Keep your existing API call as fallback or for additional posts
    // const fetchPosts = async () => { ... }
    // fetchPosts();
  }, []);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-paper pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Decorative newspaper header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-gray-800 relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Latest Stories</h1>
          <div className="absolute w-full bottom-0 left-0 h-0.5 bg-gray-300 -mb-3"></div> {/* Double line effect */}
        </div>
        
        {/* Featured article - large format */}
        {featuredPost && (
          <div className="mb-12 pb-8 border-b border-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-auto border-4 border-gray-800 shadow-lg" 
                />
              </div>
              <div>
                <div className="mb-2 text-xs text-gray-600 font-serif uppercase tracking-wider">
                  FEATURED • {featuredPost.category} • {new Date(featuredPost.createdAt).toLocaleDateString()}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
                  <a href={`/blog/${featuredPost.slug}`} className="hover:text-accent">
                    {featuredPost.title}
                  </a>
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 font-serif">
                  {featuredPost.excerpt || featuredPost.content.substring(0, 250)}...
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={featuredPost.author.avatar || 'https://via.placeholder.com/40'} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-serif font-medium">{featuredPost.author.name}</div>
                      <div className="text-xs text-gray-600">Editor</div>
                    </div>
                  </div>
                  
                  <a href={`/blog/${featuredPost.slug}`} className="px-5 py-2 bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink transition-colors font-serif">
                    Read Full Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Two-column layout for remaining articles */}
        {posts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id || index} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;