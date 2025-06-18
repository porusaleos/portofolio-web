import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Dispenser',
      description: 'Just place your glass infront ultrasonic sensor.',
      image: 'https://cdn.dribbble.com/userupload/17794343/file/original-c48d65debf83106e426e4c7edffa62a0.jpg?resize=1024x576&vertical=center',
      tags: ['C++', 'HC-SR04', 'Arduino Uno'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    },
    {
      title: 'Automatic Clock',
      description: 'A collaborative ESP8266 with Network Time Protocol to show Real-Time.',
      image: 'https://cdn.dribbble.com/userupload/17794342/file/original-a6b7aaf407d40244d6dde3015a32b644.jpg?resize=1200x675&vertical=center',
      tags: ['C++', 'Dot Matrix', 'NTP', 'ESP8266'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    },

    {
      title: '(SOON) Garden Monitoring System',
      description: 'Real-time weather, humidity, and temperature monitoring dashboard with detailed forecasts',
      image: 'https://cdn.dribbble.com/userupload/17794420/file/original-df5ef2eaf89f2c13b4b1486558be3bf3.png?resize=1200x675&vertical=center',
      tags: ['XAMPP', 'PHP', 'SQL', 'Javascript'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    },
  
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website with glassmorphism design',
      image: 'https://cdn.dribbble.com/userupload/17821636/file/original-f4d0bead134b6c4341969ee0cb1eaade.png?resize=752x&vertical=center',
      tags: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    },

    {
      title: 'Rupiah Guards',
      description: 'Game dimana kita membawa player untuk menemukan koin yang disembunyikan oleh NPC. Dibuat oleh tim Pribumi Tech',
      image: 'https://dribbble.com/shots/26164719-GAMEDEBVVV?added_first_shot=true&new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=alfie-porus&utm_content=GAMEDEBVVV&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alfie-porus&utm_content=GAMEDEBVVV&utm_medium=Social_Share',
      tags: ['Unreal Engine', '3D Design', '3D Games'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    },

    {
      title: 'Waroeng Bakar',
      description: 'Online Shop apps for family bussiness',
      image: 'https://dribbble.com/shots/26164729-FLUTTER-APP?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=alfie-porus&utm_content=FLUTTER%20APP&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alfie-porus&utm_content=FLUTTER%20APP&utm_medium=Social_Share',
      tags: ['Flutter', 'MongoDB', 'Dart'],
      liveUrl: 'https://github.com/secalanraflurry',
      githubUrl: 'https://github.com/secalanraflurry'
    }


  ];

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 backdrop-blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) => (
  <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-xl overflow-hidden group">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={20} className="text-white" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <Github size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;