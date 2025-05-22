import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import blogImg from '../assets/blog.jpg';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch from your API
    // For demo purposes, we'll use mock data
    const fetchPosts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Mock data
        const mockPosts = [
          {
            id: 1,
            title: 'Getting Started with React',
            slug: 'getting-started-with-react',
            excerpt: 'Learn the basics of React and how to set up your first project with this comprehensive guide.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-05-15T10:00:00Z',
            readingTime: 5,
            commentsCount: 8,
            featured: true,
            categories: ['React', 'Frontend'],
            author: {
              name: 'Jane Doe',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 2,
            title: 'Mastering Tailwind CSS',
            slug: 'mastering-tailwind-css',
            excerpt: 'Discover how to build beautiful UIs quickly with Tailwind CSS utility classes.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-05-10T14:30:00Z',
            readingTime: 7,
            commentsCount: 12,
            featured: true,
            categories: ['CSS', 'Design'],
            author: {
              name: 'John Smith',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 3,
            title: 'Building a Blog with React and Firebase',
            slug: 'building-blog-react-firebase',
            excerpt: 'Follow along as we build a complete blog application using React for the frontend and Firebase for the backend.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-05-05T09:15:00Z',
            readingTime: 12,
            commentsCount: 4,
            featured: false,
            categories: ['React', 'Firebase', 'Tutorial'],
            author: {
              name: 'Alex Johnson',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 4,
            title: 'JavaScript Promises Explained',
            slug: 'javascript-promises-explained',
            excerpt: 'Understand how promises work in JavaScript and how they help manage asynchronous operations.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-30T11:20:00Z',
            readingTime: 8,
            commentsCount: 9,
            featured: false,
            categories: ['JavaScript', 'Programming'],
            author: {
              name: 'Sarah Parker',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 5,
            title: 'Introduction to State Management',
            slug: 'introduction-to-state-management',
            excerpt: 'Learn about different approaches to managing state in modern web applications.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-25T16:45:00Z',
            readingTime: 10,
            commentsCount: 6,
            featured: false,
            categories: ['React', 'Redux', 'State Management'],
            author: {
              name: 'Michael Brown',
              avatar: '/api/placeholder/100/100'
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome to Your Modern Blog
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Insightful articles, tutorials, and stories that inform and inspire.
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Start Reading
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src={blogImg}
                alt="Blog Hero" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Posts</h2>
            <Link 
              to="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Recent Posts</h2>
            <Link 
              to="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Get the latest posts delivered right to your inbox. No spam, ever.
          </p>
          {subscriptionStatus === 'success' ? (
            <div className="text-green-600 dark:text-green-400 mb-6 p-3 bg-green-100 dark:bg-green-900 rounded-md">
              Thanks for subscribing! Please check your email to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-md sm:rounded-r-none border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2 sm:mb-0"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 font-medium rounded-md sm:rounded-l-none hover:bg-blue-700 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
          {subscriptionStatus === 'error' && (
            <div className="text-red-600 dark:text-red-400 mt-2">
              Something went wrong. Please try again.
            </div>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;