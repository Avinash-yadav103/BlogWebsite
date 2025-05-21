import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Eye } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch the post from your API
    // For demo purposes, we'll use mock data
    const fetchPost = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Mock post data
        const mockPost = {
          id: 1,
          title: 'Getting Started with React',
          slug: 'getting-started-with-react',
          content: `
# Getting Started with React

React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## Why React?

React allows developers to create large web applications that can change data without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.

### Component-Based Architecture

React uses a component-based approach to building user interfaces. Components are reusable pieces of code that return a React element describing how a section of the UI should appear.

\`\`\`jsx
// A simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Virtual DOM

One of React's most significant features is the Virtual DOM. React creates an in-memory data structure cache, computes the differences, and then updates the browser's displayed DOM efficiently. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render components that actually change.

## Setting Up Your First React Project

The easiest way to start with React is to use Create React App, a tool that sets up a modern web app by running one command.

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This will create a new React application named "my-app" and start the development server. You can now open your browser and navigate to http://localhost:3000 to see your app.

## JSX: JavaScript Extension Syntax

React uses JSX, which is a syntax extension to JavaScript. JSX allows you to write HTML-like code in your JavaScript files.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

JSX produces React "elements" that are rendered to the DOM. It makes React code more readable and easier to write.

## State and Props

In React, component data is managed through two concepts: state and props.

### State

State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Props

Props (short for "properties") are a way of passing data from parent to child components. They are immutable and cannot be modified from inside the component.

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Sara" />;
}
\`\`\`

## Conclusion

React is a powerful library that makes it easy to build interactive UIs. By understanding its core concepts like components, JSX, state, and props, you can start building your own React applications.

The best way to learn React is to start building something with it. Try creating a small app and expanding it as you learn more about React's features and ecosystem.
          `,
          coverImage: '/api/placeholder/1200/600',
          publishedAt: '2025-05-15T10:00:00Z',
          readingTime: 5,
          commentsCount: 8,
          viewCount: 124,
          categories: ['React', 'Frontend'],
          tags: ['react', 'javascript', 'web development', 'frontend'],
          author: {
            name: 'Jane Doe',
            avatar: '/api/placeholder/100/100',
            bio: 'Frontend Developer and React enthusiast'
          }
        };

        // Mock related posts
        const mockRelatedPosts = [
          {
            id: 3,
            title: 'Building a Blog with React and Firebase',
            slug: 'building-blog-react-firebase',
            excerpt: 'Follow along as we build a complete blog application using React and Firebase.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-05-05T09:15:00Z',
            readingTime: 12,
          },
          {
            id: 5,
            title: 'Introduction to State Management',
            slug: 'introduction-to-state-management',
            excerpt: 'Learn about different approaches to managing state in modern web applications.',
            coverImage: '/api/placeholder/800/600',
            publishedAt: '2025-04-25T16:45:00Z',
            readingTime: 10,
          }
        ];

        // Mock comments
        const mockComments = [
          {
            id: 1,
            author: 'Alex Johnson',
            avatar: '/api/placeholder/100/100',
            content: 'Great tutorial! This helped me understand React much better.',
            publishedAt: '2025-05-16T14:30:00Z',
            likes: 5
          },
          {
            id: 2,
            author: 'Sarah Parker',
            avatar: '/api/placeholder/100/100',
            content: 'I\'ve been using React for a while but I still learned some new things from this article. Thanks for sharing!',
            publishedAt: '2025-05-16T16:45:00Z',
            likes: 3
          },
          {
            id: 3,
            author: 'Michael Brown',
            avatar: '/api/placeholder/100/100',
            content: 'Could you explain more about the virtual DOM? I\'m still not quite understanding how it works.',
            publishedAt: '2025-05-17T09:20:00Z',
            likes: 2
          }
        ];
        
        setPost(mockPost);
        setRelatedPosts(mockRelatedPosts);
        setComments(mockComments);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchPost();
      // Reset scroll position to top when slug changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Post not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/blog" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-flex items-center"
        >
          <ChevronLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Function to render markdown content
  const renderMarkdown = (markdown) => {
    // In a real app, you would use a markdown parser like Remark or Marked
    // For this demo, we'll just split by newlines and apply basic styling
    
    const lines = markdown.split('\n');
    
    return (
      <div className="prose dark:prose-invert max-w-none">
        {lines.map((line, index) => {
          if (line.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
          } else if (line.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
          } else if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.slice(4)}</h3>;
          } else if (line.startsWith('```')) {
            // Skip code block markers, we'll handle them separately
            return null;
          } else if (line.trim() === '') {
            return <br key={index} />;
          } else {
            return <p key={index} className="my-4 text-gray-800 dark:text-gray-300">{line}</p>;
          }
        })}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <article className="max-w-4xl mx-auto px-4">
        {/* Back to Blog Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Blog
        </Link>
        
        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.map((category, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {post.author.name}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} className="mr-1" />
                <span className="mr-3">{new Date(post.publishedAt).toLocaleDateString()}</span>
                <Clock size={14} className="mr-1" />
                <span className="mr-3">{post.readingTime} min read</span>
                <Eye size={14} className="mr-1" />
                <span>{post.viewCount} views</span>
              </div>
            </div>
          </div>
          
          {/* Cover Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
        </header>
        
        {/* Post Content */}
        <div className="post-content mb-10">
          {renderMarkdown(post.content)}
        </div>
        
        {/* Post Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index}
                  to={`/tag/${tag}`}
                  className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Share Section */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
          <div className="flex items-center">
            <span className="font-medium mr-4 text-gray-800 dark:text-white">Share this post:</span>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Facebook size={18} />
              </button>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-400 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Twitter size={18} />
              </button>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Linkedin size={18} />
              </button>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{post.author.bio}</p>
            </div>
          </div>
        </div>
        
        {/* Comments Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Comments ({comments.length})
          </h2>
          
          {comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map(comment => (
                <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={comment.avatar} 
                        alt={comment.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {comment.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(comment.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-300">{comment.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No comments yet. Be the first to comment!</p>
          )}
          
          <button 
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            {showCommentForm ? 'Cancel' : 'Add Comment'}
          </button>
          
          {showCommentForm && (
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          )}
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar size={12} className="mr-1" />
                        <span className="mr-3">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <Clock size={12} className="mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogPost;