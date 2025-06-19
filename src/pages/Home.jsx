import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
// Note: You should download this image and place it in your assets folder
import blogImg from '../assets/blog.jpg'; // Fallback image
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set current date in newspaper format
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
    
    // In a real app, you would fetch from your API
    // For demo purposes, we'll use mock data
    const fetchPosts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Mock data with real images
        const mockPosts = [
          {
            id: 1,
            title: 'Getting Started with React',
            slug: 'getting-started-with-react',
            excerpt: 'Learn the basics of React and how to set up your first project with this comprehensive guide.',
            coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            publishedAt: '2025-05-15T10:00:00Z',
            readingTime: 5,
            commentsCount: 8,
            featured: true,
            categories: ['React', 'Frontend'],
            author: {
              name: 'Jane Doe',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80'
            }
          },
          {
            id: 2,
            title: 'Mastering Tailwind CSS',
            slug: 'mastering-tailwind-css',
            excerpt: 'Discover how to build beautiful UIs quickly with Tailwind CSS utility classes.',
            coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
            publishedAt: '2025-05-10T14:30:00Z',
            readingTime: 7,
            commentsCount: 12,
            featured: true,
            categories: ['CSS', 'Design'],
            author: {
              name: 'John Smith',
              avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80'
            }
          },
          {
            id: 3,
            title: 'Building a Blog with React and Firebase',
            slug: 'building-blog-react-firebase',
            excerpt: 'Follow along as we build a complete blog application using React for the frontend and Firebase for the backend.',
            coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            publishedAt: '2025-05-05T09:15:00Z',
            readingTime: 12,
            commentsCount: 4,
            featured: false,
            categories: ['React', 'Firebase', 'Tutorial'],
            author: {
              name: 'Alex Johnson',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80'
            }
          },
          {
            id: 4,
            title: 'JavaScript Promises Explained',
            slug: 'javascript-promises-explained',
            excerpt: 'Understand how promises work in JavaScript and how they help manage asynchronous operations.',
            coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
            publishedAt: '2025-04-30T11:20:00Z',
            readingTime: 8,
            commentsCount: 9,
            featured: false,
            categories: ['JavaScript', 'Programming'],
            author: {
              name: 'Sarah Parker',
              avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80'
            }
          },
          {
            id: 5,
            title: 'Introduction to State Management',
            slug: 'introduction-to-state-management',
            excerpt: 'Learn about different approaches to managing state in modern web applications.',
            coverImage: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80',
            publishedAt: '2025-04-25T16:45:00Z',
            readingTime: 10,
            commentsCount: 6,
            featured: false,
            categories: ['React', 'Redux', 'State Management'],
            author: {
              name: 'Michael Brown',
              avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&q=80'
            }
          }
        ];
        
        setFeaturedPosts(mockPosts.filter(post => post.featured));
        setRecentPosts(mockPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Success response
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-paper min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  // Format date for featured article
  const formatPublishedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-paper min-h-screen">
      {/* Newspaper Header/Date line */}
      <div className="container mx-auto px-4 py-3 border-b border-gray-300 text-center">
        <p className="text-xs uppercase tracking-widest font-serif text-gray-600">
          {currentDate} • Volume XXIV, Issue 127
        </p>
      </div>
      
      {/* Hero Section - Newspaper Front Page Style */}
      <section className="pt-8 pb-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-7 gap-8 items-start">
            {/* Lead Story - 5 columns */}
            <div className="md:col-span-5 border-r border-gray-300 pr-8">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-4">
                {featuredPosts[0]?.title || "Welcome to The Daily Chronicle"}
              </h1>
              
              <div className="flex items-center mb-4">
                <span className="font-serif text-sm text-gray-600 italic">
                  By {featuredPosts[0]?.author?.name || "Editorial Staff"}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="font-serif text-sm text-gray-600">
                  {featuredPosts[0] 
                    ? formatPublishedDate(featuredPosts[0].publishedAt)
                    : formatPublishedDate(new Date())}
                </span>
              </div>
              
              <div className="mb-6 border-4 border-gray-800">
                <img 
                  src={featuredPosts[0]?.coverImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80"}
                  alt={featuredPosts[0]?.title || "Front page"}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="font-serif text-lg leading-relaxed mb-6">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
                  {featuredPosts[0]?.excerpt || 
                    "The Daily Chronicle brings you the latest insights, tutorials, and stories from the world of technology and web development. Our experienced writers curate content that helps you stay informed and inspired on your development journey."}
                </p>
              </div>
              
              <Link 
                to={featuredPosts[0] ? `/blog/${featuredPosts[0].slug}` : "/blog"}
                className="inline-flex items-center bg-ink text-paper hover:bg-transparent hover:text-ink border-2 border-ink px-6 py-2 font-serif transition-colors"
              >
                Continue Reading
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            {/* Side Column - 2 columns */}
            <div className="md:col-span-2">
              {featuredPosts[1] && (
                <div className="mb-8 pb-6 border-b border-gray-300">
                  <h2 className="font-serif text-xl font-bold mb-2">
                    <Link to={`/blog/${featuredPosts[1].slug}`} className="hover:text-accent">
                      {featuredPosts[1].title}
                    </Link>
                  </h2>
                  
                  <div className="mb-3 border border-gray-300">
                    <img 
                      src={featuredPosts[1].coverImage}
                      alt={featuredPosts[1].title}
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="font-serif text-sm mb-3">
                    {featuredPosts[1].excerpt.substring(0, 100)}...
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPosts[1].slug}`}
                    className="text-sm text-accent font-serif hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              )}
              
              {/* Weather/Index Box - newspaper style */}
              <div className="bg-aged-paper p-4 border border-gray-800 mb-6">
                <h3 className="font-serif text-sm font-bold uppercase border-b border-gray-400 pb-1 mb-3">
                  Today's Highlights
                </h3>
                <ul className="font-serif text-sm divide-y divide-gray-300">
                  <li className="py-2 flex justify-between">
                    <span>Latest Articles</span>
                    <span className="font-medium">{recentPosts.length}</span>
                  </li>
                  <li className="py-2 flex justify-between">
                    <span>Featured Stories</span>
                    <span className="font-medium">{featuredPosts.length}</span>
                  </li>
                  <li className="py-2 flex justify-between">
                    <span>Comments</span>
                    <span className="font-medium">
                      {recentPosts.reduce((total, post) => total + post.commentsCount, 0)}
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Quick Links */}
              <div className="font-serif">
                <h3 className="text-sm font-bold uppercase border-b-2 border-accent pb-1 mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/blog" className="hover:text-accent">Browse All Articles</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-accent">About the Editor</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-accent">Contact The Chronicle</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Stories Section - Newspaper Column Style */}
      <section className="py-12 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="inline-block font-serif text-2xl font-bold px-4 pb-1 border-b-4 border-accent">
              LATEST STORIES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {recentPosts.map((post, index) => (
              <article key={post.id} className={`${index < 2 ? "md:border-r border-gray-300 pr-6" : ""}`}>
                <div className="mb-3">
                  <img 
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-auto border border-gray-400"
                  />
                </div>
                
                <div className="mb-2 text-xs font-serif uppercase tracking-wide text-gray-600">
                  {post.categories[0]} • {formatPublishedDate(post.publishedAt)}
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="font-serif text-gray-700 mb-4 text-sm">
                  {post.excerpt.substring(0, 120)}...
                </p>
                
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-none border border-gray-800 mr-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/30';
                      }}
                    />
                    <span className="font-serif italic">{post.author.name}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-accent hover:underline font-serif text-xs"
                  >
                    Continue Reading →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/blog"
              className="inline-flex items-center px-5 py-2 bg-aged-paper border border-gray-800 hover:bg-ink hover:text-paper transition-colors font-serif text-sm"
            >
              View All Articles
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - Newspaper Classified Ad Style */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto border-4 border-double border-gray-800 p-8 bg-aged-paper">
            <h2 className="font-serif text-3xl font-bold text-center mb-4">SUBSCRIBE TO OUR NEWSPAPER</h2>
            
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            
            <p className="text-center font-serif mb-6">
              Receive the latest stories delivered directly to your mailbox. No telegraph required.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-white border-2 border-gray-800 p-4 text-center">
                <p className="font-serif text-accent font-bold">Thank you for your subscription!</p>
                <p className="font-serif text-sm mt-2">Please check your correspondence for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border-2 border-gray-800 sm:border-r-0 bg-white font-serif w-full mb-0"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-ink text-paper border-2 border-ink px-6 py-2 font-serif hover:bg-transparent hover:text-ink transition-colors disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
            )}
            
            {subscriptionStatus === 'error' && (
              <div className="text-accent text-center mt-2 font-serif">
                Something went wrong. Please try again.
              </div>
            )}
            
            <p className="text-xs text-center font-serif italic mt-4 text-gray-600">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer Teaser */}
      <section className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider mb-2">CATEGORIES</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs font-serif bg-aged-paper px-2 py-1 border border-gray-400">React</span>
                <span className="text-xs font-serif bg-aged-paper px-2 py-1 border border-gray-400">JavaScript</span>
                <span className="text-xs font-serif bg-aged-paper px-2 py-1 border border-gray-400">CSS</span>
                <span className="text-xs font-serif bg-aged-paper px-2 py-1 border border-gray-400">Tutorial</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider mb-2">PUBLISHING SCHEDULE</h3>
              <p className="text-xs font-serif">New articles published every Monday, Wednesday & Friday</p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider mb-2">FOLLOW US</h3>
              <div className="flex justify-center gap-4">
                <a href="#" aria-label="Twitter" className="hover:text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;