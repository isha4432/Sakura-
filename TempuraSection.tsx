import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import FoodCard from "./FoodCard";
import shrimpTempura from "@/assets/shrimp-tempura.jpg";
import veggieTempura from "@/assets/veggie-tempura.jpg";

const tempuraItems = [
  { image: shrimpTempura, title: "Shrimp Tempura", description: "Tiger prawns in a light, airy batter, fried to golden perfection. Served with tentsuyu dipping sauce.", badge: "Crispy" },
  { image: veggieTempura, title: "Vegetable Tempura", description: "Seasonal vegetables—sweet potato, shiso leaf, eggplant—in a delicate tempura batter." },
];

const TempuraSection = () => (
  <SectionWrapper id="tempura">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Golden & Crispy</p>
      <h2 className="section-heading mb-4">
        Tempura <span className="gold-accent">Selection</span>
      </h2>
      <p className="section-subheading mx-auto">Perfectly fried with a whisper-light crunch that melts on contact.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {tempuraItems.map((item, i) => (
        <FoodCard key={item.title} {...item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default TempuraSection;
