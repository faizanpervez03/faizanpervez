'use client';

import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';

/**
 * Experience card component
 * Displays experience/job information with timeline
 */
export function ExperienceCard({ experience, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-950 shadow-lg shadow-cyan-500/50" />

      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-2 top-5 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
      )}

      {/* Content */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{experience.position}</h3>
          <span className="text-sm text-gray-500">{experience.period}</span>
        </div>

        <p className="text-cyan-400 font-semibold mb-3">{experience.company}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {experience.badges.map((badge) => (
            <Badge key={badge} variant="primary" className="text-xs">
              {badge}
            </Badge>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-4">{experience.description}</p>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="text-gray-500 text-sm flex items-start gap-2"
            >
              <span className="text-cyan-500 mt-1">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
