import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">BlogSite</Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sharing thoughts, ideas, and knowledge with the world.
            </p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Navigation</h3>
            <div className="flex flex-col space-y-1">
              <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Blog</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Subscribe to get the latest posts delivered right to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} BlogSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;