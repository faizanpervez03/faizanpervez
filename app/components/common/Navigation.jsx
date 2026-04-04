'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';

/**
 * Navigation component
 * Sticky header with logo and navigation links
 * Includes smooth animations and mobile-responsive design
 */
export function Navigation() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-white"
          >
            Faizan Pervez
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-400 hover:text-cyan-500 transition-colors text-sm font-medium uppercase tracking-wider"
                whileHover={{ color: '#06b6d4' }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:inline-flex"
            >
              Download CV
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
