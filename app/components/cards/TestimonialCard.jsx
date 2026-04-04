'use client';

import { motion } from 'framer-motion';

/**
 * Testimonial card component
 * Displays client feedback and reviews
 */
export function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Quote */}
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
