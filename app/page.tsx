"use client";

import { BentoGrid } from "@/components/sections/bento-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { IndustriesSection } from "@/components/sections/industries";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { ProductsSection } from "@/components/sections/products-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <BentoGrid />
      </section>

      <section id="process">
        <DevelopmentProcess />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>

      <section id="tech-stack">
        <TechnologyStack />
      </section>

      <section id="projects">
        <ProductsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}