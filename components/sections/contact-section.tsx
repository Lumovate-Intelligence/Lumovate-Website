"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      setIsSubmitting(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 flex items-start gap-4 bg-gradient-to-br from-blue-500/30 via-blue-500/20 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-600/40 dark:from-blue-500/40 dark:via-blue-500/30 dark:to-indigo-600/40 dark:hover:from-blue-500/50 dark:hover:to-indigo-600/50 backdrop-blur-sm border-blue-500/20 dark:border-blue-400/30 hover:-translate-y-1 transition-all duration-300">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Innovation Street<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 bg-gradient-to-br from-purple-500/30 via-purple-500/20 to-pink-500/30 hover:from-purple-500/40 hover:to-pink-500/40 dark:from-purple-500/40 dark:via-purple-500/30 dark:to-pink-500/40 dark:hover:from-purple-500/50 dark:hover:to-pink-500/50 backdrop-blur-sm border-purple-500/20 dark:border-purple-400/30 hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  info@techvision.com<br />
                  support@techvision.com
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 bg-gradient-to-br from-emerald-500/30 via-emerald-500/20 to-teal-500/30 hover:from-emerald-500/40 hover:to-teal-500/40 dark:from-emerald-500/40 dark:via-emerald-500/30 dark:to-teal-500/40 dark:hover:from-emerald-500/50 dark:hover:to-teal-500/50 backdrop-blur-sm border-emerald-500/20 dark:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567<br />
                  Mon - Fri, 9am - 6pm PST
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 bg-gradient-to-br from-amber-500/30 via-amber-500/20 to-orange-500/30 hover:from-amber-500/40 hover:to-orange-500/40 dark:from-amber-500/40 dark:via-amber-500/30 dark:to-orange-500/40 dark:hover:from-amber-500/50 dark:hover:to-orange-500/50 backdrop-blur-sm border-amber-500/20 dark:border-amber-400/30 hover:-translate-y-1 transition-all duration-300">
              <Building className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-500/30 via-cyan-500/20 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-600/40 dark:from-cyan-500/40 dark:via-cyan-500/30 dark:to-blue-600/40 dark:hover:from-cyan-500/50 dark:hover:to-blue-600/50 backdrop-blur-sm border-cyan-500/20 dark:border-cyan-400/30">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="bg-background/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field}
                            className="bg-background/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 123-4567" 
                            {...field}
                            className="bg-background/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] bg-background/50 backdrop-blur-sm border-white/10 focus:border-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg shadow-primary/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}