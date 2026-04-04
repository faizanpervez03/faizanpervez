'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

/**
 * Project card component
 * Displays project information with image, tech stack, and action links
 */
export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-800">
        <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center text-gray-600">
          {project.title}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="primary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
            onClick={() => window.open(project.liveLink)}
          >
            Live Demo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-xs"
            onClick={() => window.open(project.codeLink)}
          >
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
