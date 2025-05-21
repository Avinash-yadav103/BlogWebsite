import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { Search, Filter } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState('newest');

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
          },
          {
            id: 6,
            title: 'CSS Grid Layout: A Complete Guide',
            slug: 'css-grid-layout-guide',
            excerpt: 'Master CSS Grid Layout with this comprehensive guide covering everything from basic to advanced concepts.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-20T13:10:00Z',
            readingTime: 15,
            commentsCount: 11,
            featured: false,
            categories: ['CSS', 'Frontend', 'Design'],
            author: {
              name: 'Emma Wilson',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 7,
            title: 'TypeScript for React Developers',
            slug: 'typescript-for-react-developers',
            excerpt: 'Learn how to leverage TypeScript to make your React applications more robust and maintainable.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-15T08:30:00Z',
            readingTime: 9,
            commentsCount: 7,
            featured: false,
            categories: ['TypeScript', 'React', 'Frontend'],
            author: {
              name: 'David Lee',
              avatar: '/api/placeholder/100/100'
            }
          },
          {
            id: 8,
            title: 'Responsive Web Design Fundamentals',
            slug: 'responsive-web-design-fundamentals',
            excerpt: 'Learn the core principles of creating websites that look great on any device size.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-10T10:20:00Z',
            readingTime: 6,
            commentsCount: 5,
            featured: false,
            categories: ['CSS', 'Design', 'Frontend'],
            author: {
              name: 'Rachel Green',
              avatar: '/api/placeholder/100/100'
            }
          }
        ];
        
        // Extract all unique categories
        const allCategories = [...new Set(mockPosts.flatMap(post => post.categories))];
        
        setPosts(mockPosts);
        setFilteredPosts(mockPosts);
        setCategories(allCategories);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  // Filter and sort posts when search term, category, or sort option changes
  useEffect(() => {
    let results = [...posts];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.categories.some(cat => cat.toLowerCase().includes(term))
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      results = results.filter(post => 
        post.categories.includes(selectedCategory)
      );
    }
    
    // Sort posts
    if (selectedSort === 'newest') {
      results.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (selectedSort === 'oldest') {  
      results.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    } else if (selectedSort === 'popular') {
      results.sort((a, b) => b.commentsCount - a.commentsCount);
    }
    
    setFilteredPosts(results);
  }, [posts, searchTerm, selectedCategory, selectedSort]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSort('newest');
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
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our latest articles, tutorials, and insights on web development, design, and more.
          </p>
        </header>
        
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center">
                <Filter size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedSort}
                onChange={handleSortChange}
                className="border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
              
              {(searchTerm || selectedCategory || selectedSort !== 'newest') && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            {selectedCategory && <span> in <strong>{selectedCategory}</strong></span>}
            {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No posts found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;