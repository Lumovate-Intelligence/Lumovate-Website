import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowUpRight, Sparkles, Scan, MessageSquareText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";

interface ProductShowcaseProps {
  title: string;
  description: string;
  features: string[];
  images: string[];
  link: string;
  icon: React.ElementType;
  gradient: string;
  hasPlayStore?: boolean;
  hasAppStore?: boolean;
}

function AppStoreButtons({ hasPlayStore, hasAppStore }: { hasPlayStore?: boolean, hasAppStore?: boolean }) {
  if (!hasPlayStore && !hasAppStore) return null;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <Button 
        asChild 
        size="lg" 
        className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg"
      >
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaGooglePlay className="w-5 h-5" />
          <div className="flex flex-col items-start ml-2">
            <span className="text-xs">GET IT ON</span>
            <span className="text-sm font-semibold">Google Play</span>
          </div>
          <ArrowUpRight className="w-4 h-4 ml-auto" />
        </a>
      </Button>

      <Button 
        asChild 
        size="lg" 
        className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg"
      >
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <AiOutlineApple className="w-5 h-5" />
          <div className="flex flex-col items-start ml-2">
            <span className="text-xs">Download on the</span>
            <span className="text-sm font-semibold">App Store</span>
          </div>
          <ArrowUpRight className="w-4 h-4 ml-auto" />
        </a>
      </Button>
      {/* {hasPlayStore && (
        <div className="relative">
          <a className="block hover:opacity-80 transition-opacity cursor-not-allowed">
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={646}
              height={250}
              className="w-48 h-auto"
            />
            <Badge variant="secondary" className="absolute -top-2 left-1/2 -translate-x-1/2">
              Coming Soon
            </Badge>
          </a>
        </div>
      )}
      {hasAppStore && (
        <div className="relative">
          <a className="block hover:opacity-80 transition-opacity cursor-not-allowed">
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={250}
              height={83}
              className="w-40 h-auto"
            />
            <Badge variant="secondary" className="absolute -top-2 left-1/2 -translate-x-1/2">
              Coming Soon
            </Badge>
          </a>
        </div>
      )} */}
    </div>
  );
}

export function ProductsSection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/10 via-blue-500/10 to-violet-500/10">
      <div className="absolute inset-0 bg-grid-white/10 opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that drive business success
            </p>
          </motion.div>
        </div>
        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`feature-card hover:-translate-y-1 transition-all duration-300 ${product.gradient}`}>
                <div className="relative h-[500px] w-full">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {product.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="relative h-[500px] w-full">
                            <Image
                              src={image}
                              alt={`${product.title} screenshot ${idx + 1}`}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <product.icon className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl font-bold gradient-text">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <Sparkles className="w-4 h-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="space-y-4">
                          <Button 
                            asChild 
                            size="lg" 
                            className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg"
                          >
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <GoGlobe className="w-5 h-5" />
                              Visit Website <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </Button>
                          <Button 
                            asChild 
                            size="lg" 
                            className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg"
                          >
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <FaGooglePlay className="w-5 h-5" />
                            <div className="flex flex-col items-start ml-2">
                              <span className="text-xs">GET IT ON</span>
                              <span className="text-sm font-semibold">Google Play</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </Button>
                          <Button 
                            asChild 
                            size="lg" 
                            className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg"
                          >
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <AiOutlineApple className="w-5 h-5" />
                            <div className="flex flex-col items-start ml-2">
                              <span className="text-xs">Download on the</span>
                              <span className="text-sm font-semibold">App Store</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </Button>
                          {/* <AppStoreButtons 
                            hasPlayStore={product.hasPlayStore} 
                            hasAppStore={product.hasAppStore} 
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products: ProductShowcaseProps[] = [
  {
    title: "PurelyScan",
    description: "An innovative platform that analyzes ingredient lists from food and body care products, providing comprehensive ratings and detailed insights about their positive and negative aspects.",
    icon: Scan,
    features: [
      "Instant ingredient analysis using advanced AI",
      "Detailed product safety ratings",
      "Comprehensive breakdown of ingredients",
      "Mobile-friendly image upload",
      "Personalized recommendations",
      "Cross-platform compatibility"
    ],
    images: [
      "/images/purelyscan-1.png",
    ],
    link: "https://purelyscan.com",
    gradient: "bg-gradient-to-br from-cyan-500/30 via-cyan-500/20 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-600/40 dark:from-cyan-500/40 dark:via-cyan-500/30 dark:to-blue-600/40 dark:hover:from-cyan-500/50 dark:hover:to-blue-600/50",
    hasPlayStore: true,
    hasAppStore: true,
  },
  {
    title: "LumoChat",
    description: "A unified platform bringing together the world's leading language models for chat, audio, video, and image generation. With a flexible pay-as-you-go model, access premium AI capabilities at your own pace and budget.",
    icon: MessageSquareText,
    features: [
      "Access to multiple LLMs (ChatGPT, Claude, Gemini)",
      "Integrated image generation (Stable Diffusion, DALL-E)",
      "Audio and video AI processing",
      "Flexible pay-as-you-go pricing",
      "Cross-platform compatibility",
      "Enterprise-grade security"
    ],
    images: [
      "/images/lumochat-1.png",
    ],
    link: "https://lumochat.com",
    gradient: "bg-gradient-to-br from-violet-500/30 via-violet-500/20 to-purple-600/30 hover:from-violet-500/40 hover:to-purple-600/40 dark:from-violet-500/40 dark:via-violet-500/30 dark:to-purple-600/40 dark:hover:from-violet-500/50 dark:hover:to-purple-600/50",
    hasPlayStore: true,
    hasAppStore: true,
  }
];