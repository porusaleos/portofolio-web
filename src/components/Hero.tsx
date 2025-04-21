import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { staggerFadeInUp, fadeIn } from '../utils/animations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (titleRef.current && subtitleRef.current && buttonsRef.current && scrollIndicatorRef.current) {
      tl.add(fadeIn(titleRef.current))
        .add(fadeIn(subtitleRef.current), '-=0.5')
        .add(staggerFadeInUp([...buttonsRef.current.children]), '-=0.5')
        .add(fadeIn(scrollIndicatorRef.current), '-=0.3');
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 backdrop-blur-[100px] -z-10" />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          FrontEnd Web Developer Enthusiast
        </h1>
        <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          Learn to crafting beautiful digital experiences with modern web technologies
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            View Projects <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full font-medium hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
      
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 dark:border-gray-400 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;