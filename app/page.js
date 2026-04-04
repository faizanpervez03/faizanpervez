'use client';

import { Hero } from '@/app/sections/hero/Hero';
import { About } from '@/app/sections/about/About';
import { TechStack } from '@/app/sections/tech-stack/TechStack';
import { Projects } from '@/app/sections/projects/Projects';
import { Experience } from '@/app/sections/experience/Experience';
import { Testimonials } from '@/app/sections/testimonials/Testimonials';
import { Contact } from '@/app/sections/contact/Contact';

/**
 * Homepage
 * Main landing page with all portfolio sections
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
