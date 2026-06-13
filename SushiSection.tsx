import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import FoodCard from "./FoodCard";
import salmonNigiri from "@/assets/salmon-nigiri.jpg";
import tunaNigiri from "@/assets/tuna-nigiri.jpg";
import californiaRoll from "@/assets/california-roll.jpg";

const sushiItems = [
  { image: salmonNigiri, title: "Salmon Nigiri", description: "Fresh Atlantic salmon draped over perfectly seasoned rice, finished with a touch of wasabi.", badge: "Chef's Pick" },
  { image: tunaNigiri, title: "Tuna Nigiri", description: "Premium bluefin tuna, melt-in-your-mouth tender, resting on hand-pressed shari rice." },
  { image: californiaRoll, title: "California Roll", description: "Creamy avocado, crab, and cucumber wrapped in nori and tobiko-crusted sushi rice." },
];

const SushiSection = () => (
  <SectionWrapper id="sushi">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Signature Collection</p>
      <h2 className="section-heading text-gradient-sakura mb-4">Sushi Collection</h2>
      <p className="section-subheading mx-auto">Each piece is a masterwork of balance, crafted with the finest seasonal ingredients.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sushiItems.map((item, i) => (
        <FoodCard key={item.title} {...item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default SushiSection;
