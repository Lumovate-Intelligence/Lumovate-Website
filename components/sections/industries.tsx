"use client";

import { Card } from "@/components/ui/card";
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Users, Briefcase, Shield, Globe2, Rocket, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const gradients = {
  social: "from-blue-500/10 via-indigo-500/5 to-violet-500/10 hover:from-blue-500/20 hover:to-violet-500/20",
  ecommerce: "from-emerald-500/10 via-green-500/5 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20",
  healthcare: "from-rose-500/10 via-pink-500/5 to-red-500/10 hover:from-rose-500/20 hover:to-red-500/20",
  education: "from-amber-500/10 via-yellow-500/5 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20",
  banking: "from-cyan-500/10 via-blue-500/5 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20",
  enterprise: "from-purple-500/10 via-violet-500/5 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20",
  security: "from-red-500/10 via-rose-500/5 to-pink-500/10 hover:from-red-500/20 hover:to-pink-500/20",
  travel: "from-teal-500/10 via-emerald-500/5 to-green-500/10 hover:from-teal-500/20 hover:to-green-500/20",
  tech: "from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 hover:from-violet-500/20 hover:to-fuchsia-500/20",
  other: "from-gray-500/10 via-slate-500/5 to-zinc-500/10 hover:from-gray-500/20 hover:to-zinc-500/20"
};

// Dark mode enhancements
const darkGradients = {
  social: "dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-violet-500/20 dark:hover:from-blue-500/30 dark:hover:to-violet-500/30",
  ecommerce: "dark:from-emerald-500/20 dark:via-green-500/10 dark:to-teal-500/20 dark:hover:from-emerald-500/30 dark:hover:to-teal-500/30",
  healthcare: "dark:from-rose-500/20 dark:via-pink-500/10 dark:to-red-500/20 dark:hover:from-rose-500/30 dark:hover:to-red-500/30",
  education: "dark:from-amber-500/20 dark:via-yellow-500/10 dark:to-orange-500/20 dark:hover:from-amber-500/30 dark:hover:to-orange-500/30",
  banking: "dark:from-cyan-500/20 dark:via-blue-500/10 dark:to-indigo-500/20 dark:hover:from-cyan-500/30 dark:hover:to-indigo-500/30",
  enterprise: "dark:from-purple-500/20 dark:via-violet-500/10 dark:to-indigo-500/20 dark:hover:from-purple-500/30 dark:hover:to-indigo-500/30",
  security: "dark:from-red-500/20 dark:via-rose-500/10 dark:to-pink-500/20 dark:hover:from-red-500/30 dark:hover:to-pink-500/30",
  travel: "dark:from-teal-500/20 dark:via-emerald-500/10 dark:to-green-500/20 dark:hover:from-teal-500/30 dark:hover:to-green-500/30",
  tech: "dark:from-violet-500/20 dark:via-purple-500/10 dark:to-fuchsia-500/20 dark:hover:from-violet-500/30 dark:hover:to-fuchsia-500/30",
  other: "dark:from-gray-500/20 dark:via-slate-500/10 dark:to-zinc-500/20 dark:hover:from-gray-500/30 dark:hover:to-zinc-500/30"
};

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-violet-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We{" "}
              <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering innovative solutions across key sectors
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`p-6 h-full feature-card hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br backdrop-blur-sm border-white/10 group
                  ${gradients[industry.gradient]} ${darkGradients[industry.gradient]}`}
              >
                <div className="relative">
                  <industry.icon className="w-10 h-10 text-primary mb-4" />
                  <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/80">Solutions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {industry.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Industries - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className={`p-8 feature-card hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border-white/10 bg-gradient-to-br ${gradients.other} ${darkGradients.other}`}>
            <div className="flex items-center gap-4 mb-6">
              <LayoutGrid className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Other Industries</h3>
                <p className="text-muted-foreground">We also serve various other sectors with tailored solutions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {otherIndustries.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium text-foreground/80">{category.title}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

const industries = [
  {
    title: "Social Media & Entertainment",
    description: "Building engaging platforms that connect people and content.",
    icon: Users,
    gradient: "social",
    examples: [
      "Social Networking Apps",
      "Content Sharing Platforms",
      "Live Streaming Solutions",
      "Community Management"
    ]
  },
  {
    title: "E-commerce & Retail",
    description: "End-to-end solutions for modern retail businesses.",
    icon: ShoppingBag,
    gradient: "ecommerce",
    examples: [
      "Online Marketplaces",
      "Inventory Management",
      "Payment Solutions",
      "Recommendation Systems"
    ]
  },
  {
    title: "Healthcare & Medical",
    description: "Digital solutions for modern healthcare delivery.",
    icon: Stethoscope,
    gradient: "healthcare",
    examples: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Hospital Management",
      "Medical Imaging"
    ]
  },
  {
    title: "Education & E-learning",
    description: "Transforming education through technology.",
    icon: GraduationCap,
    gradient: "education",
    examples: [
      "Learning Management",
      "Virtual Classrooms",
      "Educational Apps",
      "Assessment Tools"
    ]
  },
  {
    title: "Banking & Finance",
    description: "Secure and innovative financial technology solutions.",
    icon: Building2,
    gradient: "banking",
    examples: [
      "Mobile Banking",
      "Payment Processing",
      "Investment Platforms",
      "Fraud Detection"
    ]
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive business management systems.",
    icon: Briefcase,
    gradient: "enterprise",
    examples: [
      "ERP Systems",
      "CRM Solutions",
      "Business Intelligence",
      "Process Automation"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protecting digital assets and ensuring data security.",
    icon: Shield,
    gradient: "security",
    examples: [
      "Security Systems",
      "Threat Detection",
      "Identity Management",
      "Compliance Tools"
    ]
  },
  {
    title: "Travel & Hospitality",
    description: "Digital solutions for the travel industry.",
    icon: Globe2,
    gradient: "travel",
    examples: [
      "Booking Platforms",
      "Hotel Management",
      "Travel Planning",
      "Customer Experience"
    ]
  },
  {
    title: "Technology & SaaS",
    description: "Building the next generation of software solutions.",
    icon: Rocket,
    gradient: "tech",
    examples: [
      "Cloud Applications",
      "API Services",
      "Developer Tools",
      "Analytics Platforms"
    ]
  }
];

const otherIndustries = [
  {
    title: "Manufacturing",
    items: [
      "Industry 4.0",
      "IoT Solutions",
      "Supply Chain",
      "Quality Control"
    ]
  },
  {
    title: "Real Estate",
    items: [
      "Property Management",
      "Virtual Tours",
      "Listing Platforms",
      "Smart Buildings"
    ]
  },
  {
    title: "Energy & Utilities",
    items: [
      "Smart Grid",
      "Resource Management",
      "Green Energy",
      "Usage Analytics"
    ]
  },
  {
    title: "Emerging Sectors",
    items: [
      "Web3 & Blockchain",
      "Space Tech",
      "Biotech",
      "Clean Energy"
    ]
  }
];