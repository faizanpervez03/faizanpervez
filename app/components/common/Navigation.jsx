'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './Button';
import { HiMenu, HiX } from 'react-icons/hi';

/**
 * Navigation component
 * Sticky header with logo and navigation links
 * Includes smooth animations and mobile-responsive design
 */
export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    // Close menu immediately
    setIsOpen(false);

    const id = href.replace('#', '');

    // If on home page, just scroll to section
    if (pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    } else {
      // If on other page, navigate to home with anchor
      router.push(`/#${id}`);
    }
  };

  const downloadCV = () => {
    // Open CV in a new tab so user can view and download it
    window.open('/cv/Faizan%20Pervez%20Cv.pdf', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-gray-800 bg-gray-950/95 backdrop-blur-xl shadow-lg'
          : 'border-gray-800/30 bg-gray-950/80 backdrop-blur-md'
      }`}
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
                onClick={() => handleNavClick(item.href)}
                className="text-gray-400 hover:text-cyan-500 transition-colors text-sm font-medium uppercase tracking-wider"
                whileHover={{ color: '#06b6d4' }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons & Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={downloadCV}
              className="hidden sm:inline-flex"
            >
              Download CV
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex"
            >
              Hire Me
            </Button>

            {/* Mobile Hamburger Menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <HiX size={24} />
              ) : (
                <HiMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-gray-800/30 space-y-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-400 hover:text-cyan-500 hover:bg-gray-800/50 rounded transition-colors text-sm font-medium uppercase tracking-wider cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800/30 mt-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={downloadCV}
                className="w-full"
              >
                Download CV
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="w-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
