'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { Button } from '@/app/components/common/Button';
import { ProjectCard } from '@/app/components/cards/ProjectCard';
import { projectsData } from '@/app/data/projects';

/**
 * Projects Section
 * Showcases featured projects with descriptions and technologies
 */
export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View All */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <SectionHeader
              number="03. PORTFOLIO"
              title="Featured Creations"
              description="A selection of recent projects showcasing my expertise in full-stack development"
            />
          </div>
          <motion.a
            href="#"
            className="hidden md:inline-block text-cyan-500 hover:text-cyan-400 transition-colors text-sm font-semibold uppercase tracking-wider"
            whileHover={{ x: 5 }}
          >
            View All →
          </motion.a>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
