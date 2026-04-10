'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/app/components/common/SectionHeader';
import { ContactForm } from '@/app/components/forms/ContactForm';

/**
 * Contact Section
 * Get in touch form and contact information
 */
export function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@faizanpervez.dev',
      link: 'mailto:hello@faizanpervez.dev',
    },
    {
      label: 'Location',
      value: 'Remote / Global',
    },
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="06. CONNECTION"
          title="Let's Build Something Epic"
          description="Have a project in mind or just want to say hi? My inbox is always open. I'm currently looking for new opportunities and collaborations."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div key={info.label} whileHover={{ x: 5 }}>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-2">
                    {info.label}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white text-lg hover:text-cyan-400 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-lg">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-4">
                Social
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-xl hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-xl p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
