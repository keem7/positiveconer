import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium tracking-widest text-accent border border-accent/30 rounded-full">
              LUXURY COLLECTION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Elevate Your
            <span className="block text-gold-gradient">Everyday Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our curated collection of fine jewelry, premium phone accessories, 
            custom gear, and authentic sports merchandise. Quality meets affordability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-gradient text-primary font-semibold rounded-sm hover:shadow-gold transition-all duration-300"
            >
              Explore Collection
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 100L60 91.7C120 83.3 240 66.7 360 58.3C480 50 600 50 720 54.2C840 58.3 960 66.7 1080 66.7C1200 66.7 1320 58.3 1380 54.2L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
