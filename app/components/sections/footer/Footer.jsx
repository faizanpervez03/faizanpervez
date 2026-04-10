'use client';

import { motion } from 'framer-motion';

/**
 * Footer Component
 * Site footer with copyright and quick links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter', url: 'https://twitter.com' },
    { label: 'Email', url: 'mailto:hello@faizanpervez.dev' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Faizan Pervez</h3>
            <p className="text-gray-500 text-sm">
              Building elegant, high-performance solutions for the modern web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all text-sm font-semibold text-gray-400 hover:text-cyan-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.label.charAt(0)}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between text-sm text-gray-500"
        >
          <p>© {currentYear} Faizan Pervez. Crafted in Code.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
