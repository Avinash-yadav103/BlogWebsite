import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, Book, Users, MessageSquare, Settings, LogOut, 
  ChevronDown, Plus, Edit, Trash2, Search, AlignLeft, Eye
} from 'lucide-react';

// Mock data for demo
const mockPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    status: 'published',
    publishedAt: '2025-05-15T10:00:00Z',
    views: 243,
    comments: 8
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    slug: 'mastering-tailwind-css',
    status: 'published',
    publishedAt: '2025-05-10T14:30:00Z',
    views: 188,
    comments: 12
  },
  {
    id: 3,
    title: 'Building a Blog with React and Firebase',
    slug: 'building-blog-react-firebase',
    status: 'published',
    publishedAt: '2025-05-05T09:15:00Z',
    views: 122,
    comments: 4
  },
  {
    id: 4,
    title: 'JavaScript Promises Explained',
    slug: 'javascript-promises-explained',
    status: 'published',
    publishedAt: '2025-04-30T11:20:00Z',
    views: 156,
    comments: 9
  },
  {
    id: 5,
    title: 'Introduction to State Management',
    slug: 'introduction-to-state-management',
    status: 'draft',
    publishedAt: null,
    views: 0,
    comments: 0
  },
  {
    id: 6,
    title: 'CSS Grid Layout: A Complete Guide',
    slug: 'css-grid-layout-guide',
    status: 'draft',
    publishedAt: null,
    views: 0,
    comments: 0
  }
];

const mockComments = [
  {
    id: 1,
    postId: 1,
    postTitle: 'Getting Started with React',
    author: 'Alex Johnson',
    content: 'Great tutorial! This helped me understand React much better.',
    publishedAt: '2025-05-16T14:30:00Z',
    status: 'approved'
  },
  {
    id: 2,
    postId: 1,
    postTitle: 'Getting Started with React',
    author: 'Sarah Parker',
    content: 'I\'ve been using React for a while but I still learned some new things from this article. Thanks for sharing!',
    publishedAt: '2025-05-16T16:45:00Z',
    status: 'approved'
  },
  {
    id: 3,
    postId: 1,
    postTitle: 'Getting Started with React',
    author: 'Michael Brown',
    content: 'Could you explain more about the virtual DOM? I\'m still not quite understanding how it works.',
    publishedAt: '2025-05-17T09:20:00Z',
    status: 'pending'
  },
  {
    id: 4,
    postId: 2,
    postTitle: 'Mastering Tailwind CSS',
    author: 'Jennifer Lee',
    content: 'Tailwind has completely changed how I approach CSS. So much more efficient!',
    publishedAt: '2025-05-12T10:15:00Z',
    status: 'approved'
  },
  {
    id: 5,
    postId: 2,
    postTitle: 'Mastering Tailwind CSS',
    author: 'Anonymous User',
    content: 'This is spam content trying to sell something unrelated.',
    publishedAt: '2025-05-12T23:45:00Z',
    status: 'spam'
  }
];

const mockUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    joinedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'editor',
    joinedAt: '2024-02-10T14:30:00Z'
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john@example.com',
    role: 'writer',
    joinedAt: '2024-03-05T09:15:00Z'
  },
  {
    id: 4,
    name: 'Sarah Parker',
    email: 'sarah@example.com',
    role: 'subscriber',
    joinedAt: '2024-03-30T11:20:00Z'
  }
];

// Dashboard Overview Component
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
              <Book size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Posts</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">6</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Published</span>
              <span className="font-medium text-gray-800 dark:text-white">4</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Drafts</span>
              <span className="font-medium text-gray-800 dark:text-white">2</span>
            </div>
          </div>
        </div>
        
        {/* Other stats cards... */}
        
      </div>
      
      {/* Recent Posts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Published At</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {mockPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  <Link to={`/admin/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {post.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                  <Link to={`/admin/posts/edit/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline mr-4">
                    <Edit size={16} />
                  </Link>
                  <button className="text-red-600 dark:text-red-400 hover:underline">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Recent Comments Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Recent Comments</h2>
        <div className="space-y-4">
          {mockComments.map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-white">{comment.author}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(comment.publishedAt).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{comment.content}</p>
              <div className="flex space-x-2">
                <button className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline">
                  Approve
                </button>
                <button className="text-red-600 dark:text-red-400 text-xs font-medium hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* User Activity Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">User Activity</h2>
        <div className="space-y-4">
          {mockUsers.map((user) => (
            <div key={user.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-white">{user.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(user.joinedAt).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{user.email}</p>
              <div className="flex space-x-2">
                <Link to={`/admin/users/edit/${user.id}`} className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline">
                  Edit
                </Link>
                <button className="text-red-600 dark:text-red-400 text-xs font-medium hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
