import { motion } from "framer-motion";
import heroSushi from "@/assets/hero-sushi.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Japanese Culinary Art
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
          Experience{" "}
          <span className="text-gradient-sakura">Japanese Cuisine</span>{" "}
          in 3D
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
          An immersive digital journey through authentic Japanese flavors.
        </p>
        <a
          href="#sushi"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--sakura)/0.3)] text-sm uppercase tracking-wider"
        >
          Explore Menu
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center"
      >
        <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] animate-float">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={heroSushi}
            alt="Premium sushi platter"
            className="relative w-full h-full object-cover rounded-3xl sakura-glow"
          />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
