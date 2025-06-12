import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // Add state for signup form
  const [isSignup, setIsSignup] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Use the login function from AuthContext instead of directly setting the user
      const result = await login(email, password, 'user');
      
      if (result.success) {
        navigate('/user/dashboard');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupLoading(true);
    setSignupError('');
    
    // Basic validation
    if (signupPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
      setSignupLoading(false);
      return;
    }
    
    if (signupPassword.length < 6) {
      setSignupError('Password must be at least 6 characters');
      setSignupLoading(false);
      return;
    }
    
    try {
      // Create a properly formatted user object with the signup form data
      const userData = {
        name: signupName,
        username: signupUsername, // Add this line
        email: signupEmail,
        password: signupPassword
      };
      
      // Send the correct user data to the API
      const res = await axios.post("http://localhost:5000/api/signup", userData);
      
      // If successful, show success message
      if (res.data && res.data.message) {
        alert(res.data.message);
        
        // Instead of using login function directly, just log in with credentials
        try {
          const loginRes = await axios.post("http://localhost:5000/api/auth", {
            email: signupEmail,
            password: signupPassword
          });
          
          if (loginRes.data && loginRes.data.success) {
            const user = {
              id: loginRes.data.user.id,
              name: loginRes.data.user.name,
              email: loginRes.data.user.email,
              role: 'user'
            };
            
            contextSetCurrentUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/user/dashboard');
          } 
        } catch (loginErr) {
          console.error('Auto login failed:', loginErr);
          // Don't show error, just reset the form and have them log in manually
          setIsSignup(false);
        }
      }
    } catch (err) {
      console.error('Signup error:', err);
      // Display more specific error message from the API if available
      if (err.response && err.response.data && err.response.data.message) {
        setSignupError(err.response.data.message);
      } else {
        setSignupError('An error occurred during signup. Please try again.');
      }
    } finally {
      setSignupLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-aged-paper flex flex-col py-12 sm:px-6 lg:px-8 relative">
      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-repeat-x opacity-30" 
           style={{backgroundImage: "url('path/to/newspaper-border.png')"}}></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Newspaper style header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            {isSignup ? 'REGISTER' : 'ACCOUNT ACCESS'}
          </h2>
          <div className="mt-2 h-0.5 bg-gray-800 max-w-xs mx-auto"></div>
          <p className="mt-3 font-serif italic text-sm text-gray-700">
            {isSignup 
              ? 'Join our community of writers and readers' 
              : 'Sign in to access your account'}
          </p>
        </div>

        <div className="bg-paper border border-gray-800 shadow-xl sm:rounded-none">
          {/* Login/Signup tabs */}
          <div className="flex border-b border-gray-800">
            <button
              className={`py-3 px-4 w-1/2 text-center font-serif font-medium ${
                !isSignup 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-paper text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsSignup(false)}
            >
              Sign In
            </button>
            <button
              className={`py-3 px-4 w-1/2 text-center font-serif font-medium ${
                isSignup 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-paper text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsSignup(true)}
            >
              Register
            </button>
          </div>
          
          <div className="p-8">
            {/* Login Form */}
            {!isSignup && (
              <>
                {error && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-800">
                    <p className="font-serif">{error}</p>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-accent border-gray-500 focus:ring-accent"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-serif">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-accent hover:underline font-serif">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-gray-800 text-white border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-colors font-serif"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>
              </>
            )}
            
            {/* Signup Form */}
            {isSignup && (
              <>
                {signupError && (
                  <div className="mb-4 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 p-4 text-red-700 dark:text-red-400">
                    <p>{signupError}</p>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSignup}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Full Name
                    </label>
                    <input
                      id="signup-name"
                      name="name"
                      type="text"
                      required
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Username
                    </label>
                    <input
                      id="signup-username"
                      name="name"
                      type="text"
                      // autoComplete="name"
                      required
                      value={signupUsername}
                      onChange={(e) => setSignupUsername(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Email address
                    </label>
                    <input
                      id="signup-email"
                      name="email"
                      type="email"
                      required
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Password
                    </label>
                    <input
                      id="signup-password"
                      name="password"
                      type="password"
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-serif">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-aged-paper border border-gray-500 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                      I agree to the <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">Privacy Policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={signupLoading}
                    className="w-full py-2 px-4 bg-gray-800 text-white border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-colors font-serif"
                  >
                    {signupLoading ? 'Creating account...' : 'Create account'}
                  </button>
                </form>
                
                <div className="mt-6">
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <button 
                      onClick={() => setIsSignup(false)} 
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;