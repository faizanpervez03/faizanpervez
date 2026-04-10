'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import { projectsData } from '@/app/data/projects';
import { ProjectCard } from '@/app/components/cards/ProjectCard';

/**
 * Get unique categories from projects
 */
function getCategories(projects) {
  const categories = new Set();
  projects.forEach(project => {
    categories.add(project.category);
  });
  return Array.from(categories).sort();
}

/**
 * Projects Page Content with Filtering
 */
export function ProjectsPageContent() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = useMemo(() => getCategories(projectsData), []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-6 group"
          >
            <HiArrowLeft className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold uppercase tracking-wide text-sm">
              Back
            </span>
          </motion.button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-gray-400 text-lg">
            Explore my complete portfolio of work across different categories
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {/* All Button */}
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-semibold uppercase tracking-wide text-sm transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-500/50'
              }`}
            >
              All <span className="ml-2 text-xs font-bold">{projectsData.length}</span>
            </button>

            {/* Category Buttons */}
            {categories.map(category => {
              const count = projectsData.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full font-semibold uppercase tracking-wide text-sm transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/50'
                      : 'bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-500/50'
                  }`}
                >
                  {category} <span className="ml-2 text-xs font-bold">{count}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-12 text-gray-400"
          >
            <p>
              Showing <span className="text-cyan-400 font-semibold">{filteredProjects.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{projectsData.length}</span> projects
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
