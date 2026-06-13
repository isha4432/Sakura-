import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
        <h2 className="section-heading mb-6">
          Crafted with <span className="text-gradient-sakura">Passion</span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            We believe Japanese cuisine is more than food—it's art, culture, and a philosophy of balance. Every dish is prepared with reverence for tradition and a spirit of innovation.
          </p>
          <p>
            Our chefs source the freshest ingredients daily, honouring the Japanese concept of <em className="text-foreground font-serif">shun</em>—eating at the peak of each season.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-8 md:p-10"
      >
        <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-1 font-sans">Director</p>
            <p className="text-foreground font-serif text-lg">MD: Isha Rehman</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-1 font-sans">Email</p>
            <a href="mailto:ishanri44c0@gmail.com" className="text-foreground hover:text-primary transition-colors">
              ishanri44c0@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
