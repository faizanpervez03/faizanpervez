'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { Badge } from '@/app/components/common/Badge';

/**
 * About Section
 * Professional overview with achievements and approach
 */
export function About() {
  const highlights = [
    {
      label: 'Years Experience',
      value: '3+',
    },
    {
      label: 'Projects Completed',
      value: '50+',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="01 DISCOVERY"
          title="Engineering with Precision"
          description="With over 3 years of hands-on experience in the MERN ecosystem, I specialize in transforming complex business requirements into elegant, high-performance digital solutions."
        />

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 items-center mt-12"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-lg">
                My approach combines rigid technical architecture with fluid user interface design. 
                I don't just write code; I build systems that scale alongside your growth.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                From architecting database schemas to crafting pixel-perfect frontends, I ensure 
                every layer of your application is optimized for performance, maintainability, and 
                user satisfaction.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
                >
                  <div className="text-3xl font-bold text-cyan-500 mb-2">{item.value}</div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Approach */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">My Approach</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Discovery', desc: 'Understanding your vision and business goals' },
                  { title: 'Architecture', desc: 'Designing scalable, maintainable solutions' },
                  { title: 'Development', desc: 'Building with precision and best practices' },
                  { title: 'Optimization', desc: 'Ensuring performance and reliability' },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
