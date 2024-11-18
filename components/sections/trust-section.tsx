"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Star, Flag, Globe, Lock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OurTrustPillars() {
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
            Our {" "}
            <span className="gradient-text">Trust Pillars</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certifications, compliance, and achievements represent our unwavering commitment to trust, quality, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* ISO Certified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent border border-blue-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">ISO Certified</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                Certified for ISO 9001:2015, ensuring quality management and exceptional service delivery.
              </p>
            </Card>
          </motion.div>

          {/* MSME Registered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent border border-green-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">MSME Registered</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                Recognized under the MSME Act, supporting entrepreneurship and innovation.
              </p>
            </Card>
          </motion.div>

          {/* GDPR Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-gray-500/20 via-gray-500/10 to-transparent border border-gray-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Lock className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">GDPR Compliance</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                Adhering to GDPR standards, safeguarding data privacy and ensuring transparency in data handling.
              </p>
            </Card>
          </motion.div>

          {/* HIPAA Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent border border-purple-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">HIPAA Compliance</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                Fully compliant with HIPAA regulations, ensuring security and confidentiality of healthcare data.
              </p>
            </Card>
          </motion.div>

          {/* Startup India */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Star className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">Startup India Registered</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                Registered under the Startup India initiative, driving innovation and entrepreneurial excellence.
              </p>
            </Card>
          </motion.div>

          {/* Made in India */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border border-orange-300/50 backdrop-blur-lg hover:shadow-lg">
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-primary" />
                <h4 className="text-xl font-semibold">Made in India</h4>
              </div>
              <p className="mt-4 text-muted-foreground">
                A proud proponent of "Made in India," offering indigenous solutions with global impact.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
