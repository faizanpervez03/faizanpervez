'use client';

import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';

/**
 * Tech card component
 * Displays individual skill/technology with icon and name
 */
export function TechCard({ skill, index }) {
  // Get the icon component from react-icons
  const IconComponent = SiIcons[skill.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="p-4 rounded-lg bg-gray-900/60 border border-gray-800/70 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer group"
    >
      {IconComponent ? (
        <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform`}>
          <IconComponent />
        </div>
      ) : (
        <div className="text-4xl">{skill.icon}</div>
      )}
      <h3 className="text-white font-semibold text-center text-xs leading-tight whitespace-nowrap">
        {skill.name}
      </h3>
    </motion.div>
  );
}
