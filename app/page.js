'use client';

import { Hero } from '@/app/components/sections/hero/Hero';
import { About } from '@/app/components/sections/about/About';
import { TechStack } from '@/app/components/sections/tech-stack/TechStack';
import { Projects } from '@/app/components/sections/projects/Projects';
import { Experience } from '@/app/components/sections/experience/Experience';
import { Testimonials } from '@/app/components/sections/testimonials/Testimonials';
import { Contact } from '@/app/components/sections/contact/Contact';

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
