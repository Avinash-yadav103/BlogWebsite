import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  PlusCircle, ImageIcon, Link as LinkIcon, FileText, 
  Paperclip, MessageSquare, Heart, Share2
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
    <div className="bg-aged-paper min-h-screen pb-12">
      {/* Banner with vintage newspaper feel */}
      <div className="relative h-48 bg-ink overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper.png')"}}></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-paper text-center px-4">
            {currentUser?.name}'s Newsroom
          </h1>
        </div>
      </div>
      
      {/* Profile section - styled like a newspaper byline */}
      <div className="bg-paper border-b border-gray-300 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={currentUser?.photoURL || "/api/placeholder/80/80"} 
              alt={currentUser?.name || "User"} 
              className="w-16 h-16 rounded-full border-2 border-gray-800 mr-4"
            />
            <div>
              <h2 className="font-serif text-xl font-bold">{currentUser?.name}</h2>
              <p className="text-gray-600 font-serif italic">{currentUser?.bio || "Writer & Content Creator"}</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 border-2 border-gray-800 bg-aged-paper hover:bg-ink hover:text-paper transition-colors font-serif">
              Edit Profile
            </button>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-accent text-paper hover:bg-transparent hover:text-accent border-2 border-accent transition-colors font-serif"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        {/* Tabs - styled like newspaper section headers */}
        <div className="border-b-2 border-gray-800 pb-3 mb-8 flex justify-between">
          <div className="flex space-x-8">
            <button 
              onClick={() => setSelectedTab('posts')}
              className={`font-serif text-lg ${selectedTab === 'posts' 
                ? 'text-ink font-bold border-b-2 border-accent -mb-3.5' 
                : 'text-gray-600 hover:text-ink'}`}
            >
              My Stories
            </button>
            <button 
              onClick={() => setSelectedTab('stats')}
              className={`font-serif text-lg ${selectedTab === 'stats' 
                ? 'text-ink font-bold border-b-2 border-accent -mb-3.5' 
                : 'text-gray-600 hover:text-ink'}`}
            >
              Statistics
            </button>
            <button 
              onClick={() => setSelectedTab('settings')}
              className={`font-serif text-lg ${selectedTab === 'settings' 
                ? 'text-ink font-bold border-b-2 border-accent -mb-3.5' 
                : 'text-gray-600 hover:text-ink'}`}
            >
              Settings
            </button>
          </div>
        </div>
        
        {/* Stats Overview - newspaper style infographics */}
        {selectedTab === 'stats' && (
          <div className="bg-paper border border-gray-300 p-8 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 pb-3 border-b border-gray-300">Readership Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-2">{stats.views}</div>
                <div className="text-sm uppercase tracking-wider text-gray-700 font-serif">Total Views</div>
                <div className="mt-2 text-xs text-gray-500">Last 30 days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-2">{stats.likes}</div>
                <div className="text-sm uppercase tracking-wider text-gray-700 font-serif">Total Likes</div>
                <div className="mt-2 text-xs text-gray-500">All articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-2">{stats.comments}</div>
                <div className="text-sm uppercase tracking-wider text-gray-700 font-serif">Comments</div>
                <div className="mt-2 text-xs text-gray-500">Reader engagement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-2">{stats.posts}</div>
                <div className="text-sm uppercase tracking-wider text-gray-700 font-serif">Published</div>
                <div className="mt-2 text-xs text-gray-500">Your articles</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Settings Panel */}
        {selectedTab === 'settings' && (
          <div className="bg-paper border border-gray-300 p-8 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 pb-3 border-b border-gray-300">Account Settings</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                  Display Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent" 
                  defaultValue={currentUser?.name || ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                  Bio
                </label>
                <textarea 
                  className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent" 
                  rows={3}
                  defaultValue={currentUser?.bio || ""}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent" 
                  defaultValue={currentUser?.email || ""}
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button"
                  className="px-6 py-2 bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink transition-colors font-serif"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Create Post Section - styled like newspaper editor */}
        {selectedTab === 'posts' && (
          <div className="mb-8">
            <button 
              onClick={() => setIsCreatingPost(!isCreatingPost)}
              className={`w-full bg-paper border border-gray-300 p-4 text-left flex items-center ${isCreatingPost ? 'hidden' : ''}`}
            >
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <PlusCircle size={16} />
                </div>
              </div>
              <span className="font-serif">Write a new article...</span>
            </button>
            
            {/* Expanded Create Post UI */}
            {isCreatingPost && (
              <div className="bg-paper border border-gray-300 p-6">
                <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
                  <img 
                    src={currentUser?.photoURL || "/api/placeholder/40/40"}
                    alt="User" 
                    className="w-10 h-10 rounded-full border border-gray-800 mr-3"
                  />
                  <div>
                    <span className="font-serif font-medium">{currentUser?.name || "User"}</span>
                    <div className="text-xs text-gray-600">Draft Article</div>
                  </div>
                </div>
                <textarea
                  className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent mb-3 font-serif"
                  placeholder="Begin your article here..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={5}
                ></textarea>
                
                {/* Post formatting options */}
                <div className="border-t border-b border-gray-300 py-3 flex flex-wrap gap-4 my-4">
                  <button className="flex items-center text-gray-700 hover:text-accent font-serif text-sm">
                    <ImageIcon size={16} className="mr-1" />
                    <span>Add Image</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-accent font-serif text-sm">
                    <LinkIcon size={16} className="mr-1" />
                    <span>Insert Link</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-accent font-serif text-sm">
                    <FileText size={16} className="mr-1" />
                    <span>Format Text</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-accent font-serif text-sm">
                    <Paperclip size={16} className="mr-1" />
                    <span>Attachment</span>
                  </button>
                </div>
                
                {/* Post actions */}
                <div className="flex justify-between mt-3">
                  <button 
                    onClick={() => setIsCreatingPost(false)}
                    className="px-4 py-2 border border-gray-800 bg-paper hover:bg-gray-200 text-gray-800 transition-colors font-serif"
                  >
                    Discard
                  </button>
                  <button 
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                    className={`px-4 py-2 bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink transition-colors font-serif ${!newPostContent.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Publish
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Posts Feed - newspaper style articles */}
        {selectedTab === 'posts' && (
          <div className="space-y-8">
            {posts.map(post => (
              <div key={post.id} className="bg-paper border border-gray-300">
                <div className="p-6">
                  <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
                    <img 
                      src={currentUser?.photoURL || "/api/placeholder/40/40"}
                      alt="User" 
                      className="w-8 h-8 rounded-full border border-gray-800 mr-2"
                    />
                    <div>
                      <span className="font-serif font-medium text-sm">{currentUser?.name || "User"}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-xs text-gray-500 font-serif italic">
                        {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                  </div>
                  
                  <p className="font-serif mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  
                  {post.image && (
                    <div className="border border-gray-300 mb-4">
                      <img 
                        src={post.image} 
                        alt="Post attachment" 
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm text-gray-600 border-t border-gray-200 pt-3">
                    <button className="flex items-center hover:text-accent">
                      <Heart size={16} className="mr-1" />
                      <span className="font-serif">{post.likes} likes</span>
                    </button>
                    <button className="flex items-center hover:text-accent">
                      <MessageSquare size={16} className="mr-1" />
                      <span className="font-serif">{post.comments} comments</span>
                    </button>
                    <button className="flex items-center hover:text-accent">
                      <Share2 size={16} className="mr-1" />
                      <span className="font-serif">Share</span>
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