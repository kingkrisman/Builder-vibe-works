import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Palette,
  Phone,
  Settings,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-muted/50 pt-16">
      {/* Floating icons background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/4 top-1/3"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Code className="h-12 w-12 text-primary/20" />
        </motion.div>
        <motion.div
          className="absolute right-1/4 top-1/2"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Video className="h-16 w-16 text-primary/20" />
        </motion.div>
        <motion.div
          className="absolute left-1/3 bottom-1/4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Phone className="h-10 w-10 text-primary/20" />
        </motion.div>
        <motion.div
          className="absolute right-1/3 top-1/4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Settings className="h-14 w-14 text-primary/20" />
        </motion.div>
        <motion.div
          className="absolute left-1/5 top-2/3"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <Palette className="h-12 w-12 text-primary/20" />
        </motion.div>
      </div>

      <div className="container relative flex flex-col items-center justify-center py-24 text-center md:py-32">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.h1
            className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Transforming
            </span>{" "}
            Ideas Into Digital Reality
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Daniels Network provides cutting-edge technology solutions for
            businesses and individuals, from software development to graphic
            design and everything in between.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 1 },
            y: {
              delay: 1.5,
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">
              Scroll to explore
            </span>
            <div className="h-10 w-6 rounded-full border-2 border-primary/50 p-1">
              <motion.div
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
