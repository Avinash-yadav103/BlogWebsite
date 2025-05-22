import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  PlusCircle, ImageIcon, Link as LinkIcon, FileText, 
  Paperclip, MessageSquare, Heart, Share2, Settings, Edit, 
  LogOut, BookOpen, Layout, BarChart2
} from 'lucide-react';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [selectedTab, setSelectedTab] = useState('posts');
  const [stats, setStats] = useState({
    views: 1245,
    likes: 327,
    comments: 89,
    posts: 14
  });

  // Fetch user posts - would connect to your backend in a real app
  useEffect(() => {
    // Mock data for demonstration
    setPosts([
      {
        id: 1,
        content: "Just published a comprehensive guide on React performance optimization. Check it out!",
        image: "/api/placeholder/800/400",
        likes: 45,
        comments: 12,
        createdAt: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: 2,
        content: "Exploring the future of web development with AI integration. What are your thoughts?",
        likes: 32,
        comments: 8,
        createdAt: new Date(Date.now() - 86400000).toISOString()
      }
    ]);
  }, []);

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    
    // In a real app, this would make an API call to save the post
    const newPost = {
      id: Math.floor(Math.random() * 10000),
      content: newPostContent,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString()
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setIsCreatingPost(false);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Banner and Profile Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        {/* Banner Image */}
        <img 
          src="/api/placeholder/1500/500" 
          alt="Cover" 
          className="absolute w-full h-full object-cover opacity-60"
        />
        
        {/* Edit Banner Button */}
        <button className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">
          <Edit size={18} />
        </button>
        
        {/* Profile Section - Positioned to overlap the banner */}
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="relative">
            <img 
              src={currentUser?.photoURL || "/api/placeholder/150/150"} 
              alt={currentUser?.name || "User"} 
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover"
            />
            <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Edit size={16} />
            </button>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
            {currentUser?.name || "Welcome, User!"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {currentUser?.bio || "Web Developer & Content Creator"}
          </p>
        </div>
      </div>
      
      {/* Main Content - with top padding to account for overlapping profile */}
      <div className="max-w-5xl mx-auto px-4 pt-28">
        {/* Dashboard Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
          <div className="flex space-x-4 md:space-x-8">
            <button 
              onClick={() => setSelectedTab('posts')}
              className={`flex items-center ${selectedTab === 'posts' 
                ? 'text-blue-500 font-medium' 
                : 'text-gray-600 dark:text-gray-300'}`}
            >
              <BookOpen size={18} className="mr-1" />
              <span className="hidden sm:inline">My Posts</span>
            </button>
            <button 
              onClick={() => setSelectedTab('stats')}
              className={`flex items-center ${selectedTab === 'stats' 
                ? 'text-blue-500 font-medium' 
                : 'text-gray-600 dark:text-gray-300'}`}
            >
              <BarChart2 size={18} className="mr-1" />
              <span className="hidden sm:inline">Analytics</span>
            </button>
            <button 
              onClick={() => setSelectedTab('settings')}
              className={`flex items-center ${selectedTab === 'settings' 
                ? 'text-blue-500 font-medium' 
                : 'text-gray-600 dark:text-gray-300'}`}
            >
              <Settings size={18} className="mr-1" />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
          <button 
            onClick={logout}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 flex items-center"
          >
            <LogOut size={18} className="mr-1" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
        
        {/* Stats Overview */}
        {selectedTab === 'stats' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-3">
                <BookOpen size={20} className="text-blue-500 dark:text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.posts}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Posts</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mb-3">
                <Layout size={20} className="text-green-500 dark:text-green-400" />
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.views}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Views</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-red-100 dark:bg-red-900 mb-3">
                <Heart size={20} className="text-red-500 dark:text-red-400" />
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.likes}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Likes</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mb-3">
                <MessageSquare size={20} className="text-purple-500 dark:text-purple-400" />
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.comments}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Comments</span>
            </div>
          </div>
        )}
        
        {/* Settings Panel */}
        {selectedTab === 'settings' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Account Settings</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Display Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
                  defaultValue={currentUser?.name || ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bio
                </label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
                  rows={3}
                  defaultValue={currentUser?.bio || ""}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
                  defaultValue={currentUser?.email || ""}
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Create Post Section - only visible in posts tab */}
        {selectedTab === 'posts' && (
          <div className="mb-6">
            <button 
              onClick={() => setIsCreatingPost(!isCreatingPost)}
              className={`w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-left flex items-center ${isCreatingPost ? 'hidden' : ''}`}
            >
              <img 
                src={currentUser?.photoURL || "/api/placeholder/40/40"} 
                alt="User" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-500 dark:text-gray-400">Share your thoughts...</span>
              <PlusCircle className="ml-auto text-blue-500" size={20} />
            </button>
            
            {/* Expanded Create Post UI */}
            {isCreatingPost && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src={currentUser?.photoURL || "/api/placeholder/40/40"}
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-white">{currentUser?.name || "User"}</span>
                  </div>
                </div>
                <textarea
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800 dark:text-white mb-3"
                  placeholder="What would you like to share today?"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={5}
                ></textarea>
                
                {/* Post formatting options */}
                <div className="border-t border-b border-gray-200 dark:border-gray-700 py-3 flex flex-wrap gap-4">
                  <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                    <ImageIcon size={16} className="mr-1" />
                    <span>Image</span>
                  </button>
                  <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                    <LinkIcon size={16} className="mr-1" />
                    <span>Link</span>
                  </button>
                  <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                    <FileText size={16} className="mr-1" />
                    <span>Article</span>
                  </button>
                  <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                    <Paperclip size={16} className="mr-1" />
                    <span>Attachment</span>
                  </button>
                </div>
                
                {/* Post actions */}
                <div className="flex justify-between mt-3">
                  <button 
                    onClick={() => setIsCreatingPost(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                    className={`px-4 py-2 bg-blue-600 text-white rounded-md ${!newPostContent.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} transition-colors`}
                  >
                    Publish
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Posts Feed */}
        {selectedTab === 'posts' && (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={currentUser?.photoURL || "/api/placeholder/40/40"}
                      alt="User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">{currentUser?.name || "User"}</span>
                      <p className="text-xs text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 dark:text-white mb-3">
                    {post.content}
                  </p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-3">
                      <img 
                        src={post.image} 
                        alt="Post attachment" 
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
                    <button className="flex items-center hover:text-red-500">
                      <Heart size={16} className="mr-1" />
                      <span>{post.likes} likes</span>
                    </button>
                    <button className="flex items-center hover:text-blue-500">
                      <MessageSquare size={16} className="mr-1" />
                      <span>{post.comments} comments</span>
                    </button>
                    <button className="flex items-center hover:text-green-500">
                      <Share2 size={16} className="mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;