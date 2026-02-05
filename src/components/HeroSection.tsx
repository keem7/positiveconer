import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <img 
              src={logo} 
              alt="Positive Corner Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground mt-8 mb-6 leading-[1.1] tracking-tight"
          >
            Positive
            <br />
            <span className="text-gold-gradient">Corner</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-medium text-foreground mb-4"
          >
            Crafting Positivity Together
          </motion.p>

          {/* Services */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Personalized Everyday Items | Personal Shopping | Custom Products
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-elevated transition-all duration-500 hover:scale-[1.02]"
            >
              Explore Collection
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-foreground font-medium rounded-full border border-border hover:bg-secondary transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center gap-12 mt-20"
          >
            {[
              { value: "7+", label: "Collections" },
              { value: "Nationwide", label: "Delivery" },
              { value: "100%", label: "Customized" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToProducts}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
