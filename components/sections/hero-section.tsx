"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm
              bg-white/10 dark:bg-white/5 
              border border-white/20 dark:border-white/10 
              shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]
              text-foreground/90 dark:text-foreground/80
              hover:bg-white/20 dark:hover:bg-white/10 
              hover:border-white/30 dark:hover:border-white/20
              transition-all duration-300"
          >
            Leading Innovation in Technology
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming Ideas into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500">
              Digital Reality
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We craft cutting-edge software solutions that empower businesses to thrive in the digital age.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="gap-2 relative group overflow-hidden"
              onClick={() => scrollToSection('contact')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-violet-500 transition-transform group-hover:scale-105 duration-300" />
              <span className="relative flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm border-white/20 dark:border-white/10 
                bg-white/10 dark:bg-white/5
                hover:bg-white/20 dark:hover:bg-white/10 
                hover:border-white/30 dark:hover:border-white/20
                text-foreground/90 dark:text-foreground/80
                shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]
                transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}