'use client';

import { motion } from 'framer-motion';

/**
 * Section header component
 * Displays section number, title, and optional description
 * Includes smooth animations on scroll
 */
export function SectionHeader({
  number,
  title,
  description,
  subtitle,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="mb-12 md:mb-16"
    >
      {number && (
        <motion.div
          variants={itemVariants}
          className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-3"
        >
          {number}
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-xl font-semibold text-gray-300 mb-2"
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
