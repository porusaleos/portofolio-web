import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-xl p-6 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default SkillCard;