import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success response
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Newspaper-style headline */}
        <header className="text-center mb-12 border-b-4 border-double border-ink pb-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">CONTACT THE EDITOR</h1>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <p className="mt-4 font-serif italic text-gray-600 text-lg">
            Correspondence & Inquiries
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-aged-paper border border-gray-300 p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6 border-b border-gray-400 pb-3">
                Editorial Office
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <Mail className="text-accent mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-serif font-medium text-ink">Correspondence</p>
                    <a href="mailto:editor@dailychronicle.com" className="font-serif text-gray-700 hover:text-accent">
                      editor@dailychronicle.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-serif font-medium text-ink">Telephone</p>
                    <a href="tel:+1234567890" className="font-serif text-gray-700 hover:text-accent">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-accent mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-serif font-medium text-ink">Address</p>
                    <p className="font-serif text-gray-700">
                      123 Chronicle Avenue<br />
                      Literary District<br />
                      Newspaper City, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-aged-paper border border-gray-300 p-6">
              <h2 className="font-serif text-2xl font-bold mb-6 border-b border-gray-400 pb-3">
                Follow Our Columns
              </h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 border-2 border-ink flex items-center justify-center mr-3 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <span className="font-serif group-hover:text-accent">Twitter</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>

                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 border-2 border-ink flex items-center justify-center mr-3 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-serif group-hover:text-accent">Facebook</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>

                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 border-2 border-ink flex items-center justify-center mr-3 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-serif group-hover:text-accent">Instagram</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>

                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 border-2 border-ink flex items-center justify-center mr-3 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-serif group-hover:text-accent">GitHub</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white border border-gray-800 p-8">
              <div className="flex items-center border-b border-gray-300 pb-4 mb-6">
                <MessageSquare className="text-accent mr-3" size={24} />
                <h2 className="font-serif text-2xl font-bold">
                  Correspondence Form
                </h2>
              </div>
              
              {formStatus && (
                <div className={`mb-6 p-4 border ${
                  formStatus.type === 'success' 
                    ? 'border-green-700 bg-green-50 text-green-700' 
                    : 'border-red-700 bg-red-50 text-red-700'
                }`}>
                  <p className="font-serif">{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-400 bg-aged-paper font-serif focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-400 bg-aged-paper font-serif focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-400 bg-aged-paper font-serif focus:outline-none focus:border-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-400 bg-aged-paper font-serif focus:outline-none focus:border-accent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center bg-ink text-paper hover:bg-transparent hover:text-ink border-2 border-ink px-6 py-2 font-serif transition-colors disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Correspondence'}
                  <Send className="ml-2" size={18} />
                </button>
              </form>

              <div className="mt-12 border-t border-gray-300 pt-6">
                <p className="font-serif text-gray-600 italic">
                  All correspondence is reviewed by our editorial staff. We aim to respond to all inquiries within 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <section className="mt-16 border-4 border-double border-gray-800">
          <div className="bg-aged-paper p-8">
            <h2 className="font-serif text-2xl font-bold mb-6 border-b border-gray-400 pb-3">
              Editorial Office Location
            </h2>
            <div className="border-2 border-gray-800 h-96 bg-white">
              <div className="w-full h-full flex items-center justify-center">
                <p className="font-serif text-gray-600 italic">
                  Map would be embedded here in a production environment
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-400 p-4 bg-white">
                <h3 className="font-serif font-bold mb-2">Business Hours</h3>
                <p className="font-serif text-sm">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
              <div className="border border-gray-400 p-4 bg-white">
                <h3 className="font-serif font-bold mb-2">Editorial Meetings</h3>
                <p className="font-serif text-sm">
                  Every Tuesday<br />
                  10:00 AM - 12:00 PM
                </p>
              </div>
              <div className="border border-gray-400 p-4 bg-white">
                <h3 className="font-serif font-bold mb-2">Public Tours</h3>
                <p className="font-serif text-sm">
                  First Friday of each month<br />
                  2:00 PM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Classified Ad-style footer */}
        <div className="mt-16 border-2 border-gray-800 p-6 bg-white text-center">
          <h3 className="font-serif text-xl font-bold mb-4">ADVERTISE WITH US</h3>
          <p className="font-serif mb-4">For advertising inquiries, subscription services, or to report delivery issues:</p>
          <p className="font-serif font-bold">Call (555) 123-4567 or email <a href="mailto:advertising@dailychronicle.com" className="text-accent hover:underline">advertising@dailychronicle.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;