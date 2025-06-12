// Newspaper-style Navbar component
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({users = []}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log('Users in Navbar:', users);
  }, [users]);
  
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close login menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLoginMenuOpen && !event.target.closest('.login-menu-container')) {
        setIsLoginMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLoginMenuOpen]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`border-b border-gray-800 ${scrolled ? 'sticky top-0 z-50 bg-paper/95 backdrop-blur-sm shadow-md' : ''}`}>
      {/* Top bar with date and secondary links */}
      <div className="bg-gray-100 border-b border-gray-300 text-xs">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <span className="font-serif italic">{currentDate}</span>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            
            {/* Authentication buttons */}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="font-serif">{currentUser.name}</span>
                <button onClick={logout} className="hover:underline">Logout</button>
              </div>
            ) : (
              <div className="relative login-menu-container">
                <button 
                  onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                  className="hover:underline flex items-center"
                >
                  <span>Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isLoginMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-paper border border-gray-300 shadow-lg py-1 z-50">
                    <Link 
                      to="/admin/login" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-aged-paper font-serif"
                      onClick={() => setIsLoginMenuOpen(false)}
                    >
                      Login as Admin
                    </Link>
                    <Link 
                      to="/login" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-aged-paper font-serif"
                      onClick={() => setIsLoginMenuOpen(false)}
                    >
                      Login as User
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="hover:underline"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
        </div>
      </div>

      {/* Masthead with title */}
      <div className="container mx-auto py-8 px-4 text-center border-b border-gray-800">
        <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tighter">
          <Link to="/">The Daily Chronicle</Link>
        </h1>
        <p className="mt-2 font-serif italic text-gray-600">Insightful articles, tutorials, and stories that inform and inspire</p>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="hidden md:flex justify-center space-x-8 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`hover:text-accent border-b-2 ${
                location.pathname === link.path
                  ? 'border-accent text-accent'
                  : 'border-transparent hover:border-accent'
              } py-1 transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Conditional dashboard link */}
          {currentUser && (
            <Link 
              to={currentUser.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'} 
              className="hover:text-accent border-b-2 border-transparent hover:border-accent py-1 transition-colors"
            >
              Dashboard
            </Link>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 border-t border-gray-300 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 font-serif ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Conditional dashboard link */}
            {currentUser && (
              <Link 
                to={currentUser.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'}
                className="block py-2 font-serif hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            
            {/* Mobile login links if not logged in */}
            {!currentUser && (
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  to="/admin/login"
                  className="block py-2 font-serif hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login as Admin
                </Link>
                <Link
                  to="/login"
                  className="block py-2 font-serif hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login as User
                </Link>
              </div>
            )}
            
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="block w-full text-left py-2 font-serif hover:text-accent"
            >
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;