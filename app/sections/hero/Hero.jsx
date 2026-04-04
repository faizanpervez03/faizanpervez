"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Button } from '@/app/components/common/Button';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

/**
 * Hero Section
 * Opening section with name, title, tagline, and CTA buttons
 */
export function Hero() {
  const roles = ['MERN Stack Developer', 'Full Stack Developer', 'Software Developer'];
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
      setDisplayText('');
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    {
      icon: SiReact,
      label: "React",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      icon: SiNodedotjs,
      label: "Node.js",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: SiMongodb,
      label: "MongoDB",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      icon: SiTailwindcss,
      label: "Tailwind CSS",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: SiExpress,
      label: "Express.js",
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-x-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full overflow-hidden"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider">
                available for hire
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white whitespace-nowrap">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">Faizan Pervez</span>
              <span className="text-white"> — </span>
              <span className="block text-3xl md:text-4xl text-white mt-4 min-h-[2.5rem] md:min-h-[3.5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
            >
              I build high-performance, scalable full-stack applications with a
              focus on seamless user experiences and robust architecture. Let's
              build something extraordinary together.
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800 flex-wrap"
            >
              <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold min-w-full">
                Tech Stack:
              </span>
              {techStack.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    whileHover={{
                      scale: 1.2,
                      filter: "drop-shadow(0 0 12px rgba(6, 182, 212, 0.8))",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg ${tech.bgColor} cursor-pointer group relative transition-all duration-300 hover:${tech.bgColor}`}
                    title={tech.label}
                  >
                    <IconComponent className={`text-3xl ${tech.color}`} />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-gray-700">
                        {tech.label}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold text-cyan-500">3+</div>
                <p className="text-gray-500 text-sm mt-2">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-500">20+</div>
                <p className="text-gray-500 text-sm mt-2">Projects Delivered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Avatar Area */}
          <motion.div
            variants={itemVariants}
            className="relative h-auto w-full flex justify-center items-start mt-8 lg:mt-0 overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden"
            >
              {/* Profile Image */}
              <Image
                src="/faizan-img.jpg"
                alt="Faizan Pervez"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />

              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent rounded-2xl" />
            </motion.div>

            {/* Decorative elements - hidden on mobile */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-lg blur-2xl"
            />
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="hidden sm:block absolute -top-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-lg blur-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
