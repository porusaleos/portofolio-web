import React, { useEffect, useRef } from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import { createScrollAnimation, staggerFadeInUp } from '../utils/animations';
import { gsap } from 'gsap';
import SkillCard from './SkillCard';
import ProgressBar from './ProgressBar';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      createScrollAnimation(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1
      });
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      createScrollAnimation(cards, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }

    if (journeyRef.current) {
      createScrollAnimation(journeyRef.current, {
        y: 50,
        opacity: 0,
        duration: 1
      });
    }
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 backdrop-blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCard
            Icon={Code}
            title="Development"
            description="Learn to build modern web applications using modern web technologies. Also build a functional project with internet integrated."
          />
          <SkillCard
            Icon={Palette}
            title="UI UX Design"
            description="Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility."
          />
          <SkillCard
            Icon={Globe}
            title="Strategy"
            description="I love turning complex problems into simple, beautiful, and intuitive solutions. And i love to learn e new things."
          />
        </div>

        <div ref={journeyRef} className="mt-16 sm:mt-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm constantly learning and staying up-to-date with the latest technologies and best
                practices in the ever-evolving web development landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;