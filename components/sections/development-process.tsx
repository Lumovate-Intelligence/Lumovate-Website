"use client";

import { Card } from "@/components/ui/card";
import { Code, FileSearch, Lightbulb, Rocket, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const steps: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
    icon: Lightbulb,
    gradient: "from-blue-500/10 via-blue-500/5 to-violet-500/10 hover:from-blue-500/20 hover:via-blue-500/10 hover:to-violet-500/20 dark:from-blue-500/20 dark:via-blue-500/10 dark:to-violet-500/20 dark:hover:from-blue-500/30 dark:hover:via-blue-500/20 dark:hover:to-violet-500/30"
  },
  {
    title: "Design & Architecture",
    description: "Our team designs the system architecture and user experience.",
    icon: FileSearch,
    gradient: "from-purple-500/10 via-purple-500/5 to-pink-500/10 hover:from-purple-500/20 hover:via-purple-500/10 hover:to-pink-500/20 dark:from-purple-500/20 dark:via-purple-500/10 dark:to-pink-500/20 dark:hover:from-purple-500/30 dark:hover:via-purple-500/20 dark:hover:to-pink-500/30"
  },
  {
    title: "Development",
    description: "We build your solution using agile development practices.",
    icon: Code,
    gradient: "from-emerald-500/10 via-emerald-500/5 to-teal-500/10 hover:from-emerald-500/20 hover:via-emerald-500/10 hover:to-teal-500/20 dark:from-emerald-500/20 dark:via-emerald-500/10 dark:to-teal-500/20 dark:hover:from-emerald-500/30 dark:hover:via-emerald-500/20 dark:hover:to-teal-500/30"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing ensures a bug-free and reliable product.",
    icon: Settings,
    gradient: "from-amber-500/10 via-amber-500/5 to-orange-500/10 hover:from-amber-500/20 hover:via-amber-500/10 hover:to-orange-500/20 dark:from-amber-500/20 dark:via-amber-500/10 dark:to-orange-500/20 dark:hover:from-amber-500/30 dark:hover:via-amber-500/20 dark:hover:to-orange-500/30"
  },
  {
    title: "Deployment",
    description: "We deploy your solution and ensure smooth operation.",
    icon: Rocket,
    gradient: "from-cyan-500/10 via-cyan-500/5 to-blue-500/10 hover:from-cyan-500/20 hover:via-cyan-500/10 hover:to-blue-500/20 dark:from-cyan-500/20 dark:via-cyan-500/10 dark:to-blue-500/20 dark:hover:from-cyan-500/30 dark:hover:via-cyan-500/20 dark:hover:to-blue-500/30"
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and updates keep your system running optimally.",
    icon: Users,
    gradient: "from-rose-500/10 via-rose-500/5 to-red-500/10 hover:from-rose-500/20 hover:via-rose-500/10 hover:to-red-500/20 dark:from-rose-500/20 dark:via-rose-500/10 dark:to-red-500/20 dark:hover:from-rose-500/30 dark:hover:via-rose-500/20 dark:hover:to-red-500/30"
  }
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5 relative">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 h-full bg-gradient-to-br ${step.gradient} backdrop-blur-sm border-white/10 hover:-translate-y-1 transition-all duration-300`}>
                <div className="relative">
                  <step.icon className="w-10 h-10 text-primary mb-4" />
                  <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Connection Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-1/4 bottom-1/4 left-1/3 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-1/4 bottom-1/4 right-1/3 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}