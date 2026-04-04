'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { TechCard } from '@/app/components/cards/TechCard';
import { skillsData, skillCategories } from '@/app/data/skills';

/**
 * Tech Stack Section
 * Displays technologies and skills organized by categories
 */
export function TechStack() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="02. TECH STACK"
          title="The Toolkit"
          description="A curated collection of technologies I use to build robust, scalable applications"
        />

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {skillsData.map((skill, index) => (
            <TechCard key={skill.id} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Categories Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Skill Categories</h3>
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-400 bg-gray-800/50 rounded-full hover:text-cyan-400 hover:bg-gray-800 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
