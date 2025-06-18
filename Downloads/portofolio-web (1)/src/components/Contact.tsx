import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 backdrop-blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
            
            <ContactInfo
              Icon={Mail}
              title="Email"
              content="alfieakbarriyadi@gmail.com"
              href="alfieakbarriyadi@gmail.com"
            />
            <ContactInfo
              Icon={Phone}
              title="Phone"
              content="+62 857 6601 8489"
              href="+62 857 6601 8489"
            />
            <ContactInfo
              Icon={MapPin}
              title="Location"
              content="Bintan, Riau Islands, Indonesia"
              href="#"
            />
          </div>
          
          <form className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
            />
            <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  Icon,
  title,
  content,
  href
}: {
  Icon: any;
  title: string;
  content: string;
  href: string;
}) => (
  <a
    href={href}
    className="flex items-start space-x-4 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-lg hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors"
  >
    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
      <Icon className="text-white" size={24} />
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </a>
);

export default Contact;