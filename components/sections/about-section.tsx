"use client";

import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About{" "}
              <span className="gradient-text">Lumovate Intelligence</span>
            </h2>
            <p className="text-muted-foreground">
              Building the Future of Digital Innovation
            </p>
          </motion.div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-6 text-lg leading-relaxed">
                Lumovate Intelligence is a forward-thinking software development company dedicated to transforming businesses through innovative technology solutions. We believe in pushing the boundaries of what's possible in the digital realm while maintaining a strong focus on delivering real business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-blue-500/30 via-blue-500/20 to-violet-500/30 hover:from-blue-500/40 hover:to-violet-500/40 dark:from-blue-500/40 dark:via-blue-500/30 dark:to-violet-500/40 dark:hover:from-blue-500/50 dark:hover:to-violet-500/50 border-blue-500/20 dark:border-blue-400/30 backdrop-blur-sm neon-glow">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We're committed to delivering excellence through our expertise, creativity, and dedication to client success.
                  </p>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-emerald-500/30 via-emerald-500/20 to-teal-500/30 hover:from-emerald-500/40 hover:to-teal-500/40 dark:from-emerald-500/40 dark:via-emerald-500/30 dark:to-teal-500/40 dark:hover:from-emerald-500/50 dark:hover:to-teal-500/50 border-emerald-500/20 dark:border-emerald-400/30 backdrop-blur-sm neon-glow">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the global leader in digital transformation, recognized for our innovative solutions, exceptional service, and commitment to creating lasting value for our clients.
                  </p>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-purple-500/30 via-purple-500/20 to-pink-500/30 hover:from-purple-500/40 hover:to-pink-500/40 dark:from-purple-500/40 dark:via-purple-500/30 dark:to-pink-500/40 dark:hover:from-purple-500/50 dark:hover:to-pink-500/50 border-purple-500/20 dark:border-purple-400/30 backdrop-blur-sm neon-glow">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Our Values
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Innovation & Excellence
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Client-Centric Approach
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Integrity & Transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Continuous Learning
                    </li>
                  </ul>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-amber-500/30 via-amber-500/20 to-orange-500/30 hover:from-amber-500/40 hover:to-orange-500/40 dark:from-amber-500/40 dark:via-amber-500/30 dark:to-orange-500/40 dark:hover:from-amber-500/50 dark:hover:to-orange-500/50 border-amber-500/20 dark:border-amber-400/30 backdrop-blur-sm neon-glow">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Our Culture
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Collaborative Environment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Innovation-Driven
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Continuous Growth
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Work-Life Balance
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}