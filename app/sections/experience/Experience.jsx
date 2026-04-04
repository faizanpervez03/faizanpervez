'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { ExperienceCard } from '@/app/components/cards/ExperienceCard';
import { experienceData } from '@/app/data/experience';

/**
 * Experience Section
 * Professional timeline and career journey
 */
export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="04. JOURNEY"
          title="Professional Timeline"
          description="My career progression and key roles that shaped my expertise"
        />

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12"
        >
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
