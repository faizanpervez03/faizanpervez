'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { TechCard } from '@/app/components/cards/TechCard';
import { skillsData, skillCategories } from '@/app/data/skills';

/**
 * Tech Stack Section
 * Displays technologies and skills with seamless infinite carousel animations
 */
export function TechStack() {
  // 3 rows with all 20 technologies
  const row1 = skillsData.slice(0, 7);
  const row2 = skillsData.slice(7, 14);
  const row3 = skillsData.slice(14, 20);

  // Triple rows for seamless scrolling
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];
  const duplicatedRow3 = [...row3, ...row3, ...row3];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="02. TECH STACK"
          title="The Toolkit"
          description="A curated collection of technologies I use to build robust, scalable applications"
        />

        {/* Seamless Infinite Carousel - Perfectly Smooth */}
        <div className="space-y-6 mt-12">
          {/* Row 1 - Right to Left */}
          <div className="overflow-hidden">
            <motion.div animate={{ x: -1120 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex gap-4 md:gap-6 w-max">
              {duplicatedRow1.map((skill, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 w-32 md:w-40">
                  <TechCard skill={skill} index={index % 7} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Left to Right */}
          <div className="overflow-hidden" style={{ direction: 'rtl' }}>
            <motion.div animate={{ x: 1120 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex gap-4 md:gap-6 w-max" style={{ direction: 'ltr' }}>
              {duplicatedRow2.map((skill, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 w-32 md:w-40">
                  <TechCard skill={skill} index={(index + 7) % 14} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Right to Left */}
          <div className="overflow-hidden">
            <motion.div animate={{ x: -1120 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex gap-4 md:gap-6 w-max">
              {duplicatedRow3.map((skill, index) => (
                <div key={`row3-${index}`} className="flex-shrink-0 w-32 md:w-40">
                  <TechCard skill={skill} index={(index + 14) % 20} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

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
