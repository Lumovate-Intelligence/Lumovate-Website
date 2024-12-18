"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Menu, X  } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "services", label: "Services" },
    { href: "tech-stack", label: "Technologies" },
    { href: "projects", label: "Projects" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/Logo.png" />
        <title>Lumovate Intelligence - Transforming Ideas into Digital Reality</title>
      </head>
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        <Providers>
        <header className="fixed top-0 w-full z-50 navbar">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <motion.button 
                  className="flex items-center gap-2 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => scrollToSection('home')}
                >
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/LogoWithText.png"
                      alt="Lumovate Intelligence Logo"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
                  </div>
                  {/* <span className="text-xl font-bold">Lumovate Intelligence</span> */}
                </motion.button>
                <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm font-medium hover:text-primary transition-colors relative group"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </motion.button>
                  ))}
                  <ThemeToggle />
                </nav>

                <nav className="md:hidden flex items-center gap-2">
                  {/* {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm font-medium hover:text-primary transition-colors relative group"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </motion.button>
                  ))} */}
                  <ThemeToggle />
                  {menuOpen ? (
                    <X className="w-6 h-6" onClick={()=>setMenuOpen(false)} />
                  ) : (
                    <Menu className="w-6 h-6" onClick={()=>setMenuOpen(true)} />
                  )}
                </nav>
              </div>
            </div>
            {menuOpen && (
              <motion.nav
                className="md:hidden px-6 bg-background shadow absolute top-full left-0 w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col items-start gap-4 py-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </header>
          <div className="enhanced-gradient min-h-screen">
            {children}
          </div>
          <Footer scrollToSection={scrollToSection} />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const quickLinks = [
    { href: "services", label: "Services" },
    { href: "process", label: "Dev Process" },
    { href: "tech-stack", label: "Technologies" },
    { href: "projects", label: "Projects" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  const services = [
    "Mobile Development",
    "Web Development",
    "Cloud Solutions",
    "UI/UX Design",
    "DevOps & CI/CD",
    "Security Solutions",
  ];

  return (
    <footer className="bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="w-full md:w-[80%]">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-[90%] md:w-full h-24">
                <Image
                  src="/images/LogoWithText.png"
                  alt="Lumovate Intelligence Logo"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              </div>
              {/* <span className="text-xl font-bold">Lumovate Intelligence</span> */}
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@lumovateintelligence.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 6378298502
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>
                  Bijarniya Farm House, Naya bas<br />
                  Dudhwa, Sikar <br/>
                  Rajasthan, India - 332406
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumovate Intelligence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}