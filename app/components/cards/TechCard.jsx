'use client';

import { motion } from 'framer-motion';

/**
 * Tech card component
 * Displays individual skill/technology with icon and description
 */
export function TechCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="text-3xl mb-3">{skill.icon}</div>
      <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
        {skill.category}
      </p>
      <p className="text-gray-400 text-sm">{skill.description}</p>
    </motion.div>
  );
}
