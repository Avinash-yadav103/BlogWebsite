import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Add userType parameter to the login function
  const login = async (email, password, userType = 'admin') => {
    try {
      // This would typically be an API call to different endpoints based on userType
      if (userType === 'admin' && email === 'admin@example.com' && password === 'password') {
        const user = {
          id: '1',
          name: 'Admin User',
          email,
          role: 'admin',
        };
        
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      } 
      else if (userType === 'user' && email === 'user@example.com' && password === 'password123') {
        const user = {
          id: '2',
          name: 'Regular User',
          email,
          role: 'user',
        };
        
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      } 
      else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An error occurred during login' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => !!currentUser;

  const value = {
    currentUser,
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};