"use client";

import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Cpu, 
  Globe2, 
  Palette, 
  Rocket, 
  Shield,
  Smartphone,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  image?: string;
  stats?: Array<{ value: string; label: string }>;
}

export function BentoGrid() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/10 via-blue-500/10 to-violet-500/10">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience excellence through our comprehensive suite of services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className={`p-8 h-full group overflow-hidden relative bg-gradient-to-br from-cyan-500/30 via-cyan-500/20 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-600/40 dark:from-cyan-500/40 dark:via-cyan-500/30 dark:to-blue-600/40 dark:hover:from-cyan-500/50 dark:hover:to-blue-600/50 backdrop-blur-sm border-cyan-500/20 dark:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300`}>
              <div className="relative h-full flex flex-col">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  We combine cutting-edge technology with innovative solutions to help businesses thrive in the digital age. Our commitment to excellence and forward-thinking approach ensures your success in the ever-evolving digital landscape.
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-muted-foreground">Commitment</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`group overflow-hidden relative h-full ${service.gradient}`}>
                {service.image && (
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    />
                  </div>
                )}
                <div className="relative p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services: ServiceCardProps[] = [
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications built for iOS and Android.",
    icon: Smartphone,
    gradient: "bg-gradient-to-br from-rose-500/30 via-rose-500/20 to-pink-600/30 hover:from-rose-500/40 hover:to-pink-600/40 dark:from-rose-500/40 dark:via-rose-500/30 dark:to-pink-600/40 dark:hover:from-rose-500/50 dark:hover:to-pink-600/50 backdrop-blur-sm border-rose-500/20 dark:border-rose-400/30",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Web Development",
    description: "Modern web applications using the latest technologies and frameworks.",
    icon: Globe2,
    gradient: "bg-gradient-to-br from-blue-500/30 via-blue-500/20 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-600/40 dark:from-blue-500/40 dark:via-blue-500/30 dark:to-indigo-600/40 dark:hover:from-blue-500/50 dark:hover:to-indigo-600/50 backdrop-blur-sm border-blue-500/20 dark:border-blue-400/30",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and serverless applications with comprehensive security and monitoring.",
    icon: Cpu,
    gradient: "bg-gradient-to-br from-violet-500/30 via-violet-500/20 to-purple-600/30 hover:from-violet-500/40 hover:to-purple-600/40 dark:from-violet-500/40 dark:via-violet-500/30 dark:to-purple-600/40 dark:hover:from-violet-500/50 dark:hover:to-purple-600/50 backdrop-blur-sm border-violet-500/20 dark:border-violet-400/30",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that drive engagement and conversion.",
    icon: Palette,
    gradient: "bg-gradient-to-br from-emerald-500/30 via-emerald-500/20 to-green-600/30 hover:from-emerald-500/40 hover:to-green-600/40 dark:from-emerald-500/40 dark:via-emerald-500/30 dark:to-green-600/40 dark:hover:from-emerald-500/50 dark:hover:to-green-600/50 backdrop-blur-sm border-emerald-500/20 dark:border-emerald-400/30",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure management.",
    icon: Rocket,
    gradient: "bg-gradient-to-br from-amber-500/30 via-amber-500/20 to-orange-600/30 hover:from-amber-500/40 hover:to-orange-600/40 dark:from-amber-500/40 dark:via-amber-500/30 dark:to-orange-600/40 dark:hover:from-amber-500/50 dark:hover:to-orange-600/50 backdrop-blur-sm border-amber-500/20 dark:border-amber-400/30",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security implementations and auditing.",
    icon: Shield,
    gradient: "bg-gradient-to-br from-red-500/30 via-red-500/20 to-rose-600/30 hover:from-red-500/40 hover:to-rose-600/40 dark:from-red-500/40 dark:via-red-500/30 dark:to-rose-600/40 dark:hover:from-red-500/50 dark:hover:to-rose-600/50 backdrop-blur-sm border-red-500/20 dark:border-red-400/30",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60"
  }
];