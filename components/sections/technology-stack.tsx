"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Shield, 
  Braces,
  Layout,
  Smartphone,
  Box
} from "lucide-react";

interface Technology {
  name: string;
  description?: string;
}

interface TechCategory {
  title: string;
  icon: React.ElementType;
  gradient: string;
  technologies: Technology[];
}

const techStacks: TechCategory[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    gradient: "bg-gradient-to-br from-blue-500/20 via-indigo-400/10 to-violet-500/20 hover:from-blue-500/30 hover:to-violet-500/30 dark:from-blue-400/30 dark:via-indigo-400/20 dark:to-violet-400/30 dark:hover:from-blue-400/40 dark:hover:to-violet-400/40 border-blue-500/20 dark:border-blue-400/30",
    technologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Backend Development",
    icon: Code2,
    gradient: "bg-gradient-to-br from-emerald-500/20 via-green-400/10 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 dark:from-emerald-400/30 dark:via-green-400/20 dark:to-teal-400/30 dark:hover:from-emerald-400/40 dark:hover:to-teal-400/40 border-emerald-500/20 dark:border-emerald-400/30",
    technologies: [
      { name: "Node.js" },
      { name: "Spring Boot" },
      { name: "Django" },
      { name: "Laravel" },
      { name: "ASP.NET Core" },
      { name: "GraphQL" }
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    gradient: "bg-gradient-to-br from-amber-500/20 via-orange-400/10 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 dark:from-amber-400/30 dark:via-orange-400/20 dark:to-yellow-400/30 dark:hover:from-amber-400/40 dark:hover:to-yellow-400/40 border-amber-500/20 dark:border-amber-400/30",
    technologies: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "Elasticsearch" },
      { name: "Amazon S3" }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    gradient: "bg-gradient-to-br from-purple-500/20 via-fuchsia-400/10 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 dark:from-purple-400/30 dark:via-fuchsia-400/20 dark:to-pink-400/30 dark:hover:from-purple-400/40 dark:hover:to-pink-400/40 border-purple-500/20 dark:border-purple-400/30",
    technologies: [
      { name: "React Native" },
      { name: "Flutter" },
      { name: "iOS (Swift)" },
      { name: "Android (Kotlin)" },
      { name: "Ionic" },
      { name: "PWA" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "bg-gradient-to-br from-cyan-500/20 via-sky-400/10 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 dark:from-cyan-400/30 dark:via-sky-400/20 dark:to-blue-400/30 dark:hover:from-cyan-400/40 dark:hover:to-blue-400/40 border-cyan-500/20 dark:border-cyan-400/30",
    technologies: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Google Cloud" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" }
    ]
  },
  {
    title: "Testing & QA",
    icon: Box,
    gradient: "bg-gradient-to-br from-rose-500/20 via-red-400/10 to-orange-500/20 hover:from-rose-500/30 hover:to-orange-500/30 dark:from-rose-400/30 dark:via-red-400/20 dark:to-orange-400/30 dark:hover:from-rose-400/40 dark:hover:to-orange-400/40 border-rose-500/20 dark:border-rose-400/30",
    technologies: [
      { name: "Jest" },
      { name: "Cypress" },
      { name: "Selenium" },
      { name: "JUnit" },
      { name: "TestNG" },
      { name: "Postman" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    gradient: "bg-gradient-to-br from-violet-500/20 via-purple-400/10 to-indigo-500/20 hover:from-violet-500/30 hover:to-indigo-500/30 dark:from-violet-400/30 dark:via-purple-400/20 dark:to-indigo-400/30 dark:hover:from-violet-400/40 dark:hover:to-indigo-400/40 border-violet-500/20 dark:border-violet-400/30",
    technologies: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "OpenAI API" },
      { name: "Computer Vision" },
      { name: "NLP" }
    ]
  },
  {
    title: "Security & Auth",
    icon: Shield,
    gradient: "bg-gradient-to-br from-red-500/20 via-rose-400/10 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 dark:from-red-400/30 dark:via-rose-400/20 dark:to-pink-400/30 dark:hover:from-red-400/40 dark:hover:to-pink-400/40 border-red-500/20 dark:border-red-400/30",
    technologies: [
      { name: "OAuth 2.0" },
      { name: "JWT" },
      { name: "SAML" },
      { name: "Keycloak" },
      { name: "Auth0" },
      { name: "Okta" }
    ]
  },
  {
    title: "Enterprise Solutions",
    icon: Braces,
    gradient: "bg-gradient-to-br from-teal-500/20 via-emerald-400/10 to-green-500/20 hover:from-teal-500/30 hover:to-green-500/30 dark:from-teal-400/30 dark:via-emerald-400/20 dark:to-green-400/30 dark:hover:from-teal-400/40 dark:hover:to-green-400/40 border-teal-500/20 dark:border-teal-400/30",
    technologies: [
      { name: "SAP Integration" },
      { name: "Salesforce" },
      { name: "Microsoft 365" },
      { name: "Oracle" },
      { name: "ServiceNow" },
      { name: "Workday" }
    ]
  }
];

export function TechnologyStack() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Technology{" "}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 h-full feature-card hover:-translate-y-1 transition-all duration-300 group ${category.gradient}`}>
                  <div className="relative">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, idx) => (
                      <motion.li
                        key={tech.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{tech.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}