import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import FoodCard from "./FoodCard";
import tonkotsuRamen from "@/assets/tonkotsu-ramen.jpg";
import misoRamen from "@/assets/miso-ramen.jpg";

const ramenItems = [
  { image: tonkotsuRamen, title: "Tonkotsu Ramen", description: "Rich, creamy pork bone broth simmered for 18 hours, topped with chashu, soft-boiled egg, and fresh noodles.", badge: "Popular" },
  { image: misoRamen, title: "Miso Ramen", description: "Hearty miso-based broth with silken tofu, seasonal vegetables, and springy wheat noodles." },
];

const RamenSection = () => (
  <SectionWrapper id="ramen" className="relative">
    {/* Warm glow background */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Warm & Comforting</p>
      <h2 className="section-heading mb-4">
        Ramen <span className="gold-accent">Series</span>
      </h2>
      <p className="section-subheading mx-auto">Soul-warming bowls of handcrafted ramen with deeply flavored broths.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {ramenItems.map((item, i) => (
        <FoodCard key={item.title} {...item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default RamenSection;
