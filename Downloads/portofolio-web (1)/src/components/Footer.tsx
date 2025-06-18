import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 backdrop-blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            
            </span>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <SocialLink Icon={Github} href="https://github.com/secalanraflurry" />
            <SocialLink Icon={Mail} href="mailto:alfieakbarriyadi@email.com" />
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200/20 dark:border-gray-700/20 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Alfie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors"
  >
    <Icon size={20} />
  </a>
);

export default Footer;