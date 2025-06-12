import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Newspaper-style top border */}
      <div className="h-1 bg-white"></div>
      <div className="h-px bg-gray-600 mt-px"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">The Daily Chronicle</h3>
            <p className="text-gray-300 text-sm">
              Insightful articles, tutorials, and stories that inform and inspire.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 border-b border-gray-700 pb-2">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/blog/category/technology" className="hover:text-gray-300 font-serif">Technology</Link></li>
              <li><Link to="/blog/category/science" className="hover:text-gray-300 font-serif">Science</Link></li>
              <li><Link to="/blog/category/design" className="hover:text-gray-300 font-serif">Design</Link></li>
              <li><Link to="/blog/category/business" className="hover:text-gray-300 font-serif">Business</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 border-b border-gray-700 pb-2">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300 font-serif">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300 font-serif">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300 font-serif">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300 font-serif">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 border-b border-gray-700 pb-2">Subscribe</h4>
            <p className="text-gray-300 mb-4 text-sm">Stay updated with our latest stories and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-700 border border-gray-600 text-white flex-grow focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-accent text-white border border-accent hover:bg-transparent hover:text-accent transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="font-serif text-sm text-gray-400">
            © {new Date().getFullYear()} The Daily Chronicle. All rights reserved. 
          </p>
        </div>
      </div>
      
      {/* Newspaper-style bottom border */}
      <div className="h-px bg-gray-600"></div>
      <div className="h-1 bg-white"></div>
    </footer>
  );
};

export default Footer;