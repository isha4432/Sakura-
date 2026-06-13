import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import FoodCard from "./FoodCard";
import matchaMochi from "@/assets/matcha-mochi.jpg";
import dango from "@/assets/dango.jpg";
import matchaTea from "@/assets/matcha-tea.jpg";

const dessertItems = [
  { image: matchaMochi, title: "Matcha Mochi", description: "Pillowy soft mochi filled with ceremonial-grade matcha cream. A delicate balance of sweet and earthy." },
  { image: dango, title: "Dango", description: "Traditional Japanese rice dumplings in pink, white, and green—symbolizing the beauty of cherry blossom season." },
  { image: matchaTea, title: "Traditional Matcha", description: "Stone-ground Uji matcha whisked to a smooth, frothy perfection. A meditative experience in every sip.", badge: "Zen" },
];

const DessertSection = () => (
  <SectionWrapper id="desserts" className="relative">
    <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-matcha/5 blur-[100px] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Sweet Endings</p>
      <h2 className="section-heading text-gradient-sakura mb-4">Dessert & Matcha</h2>
      <p className="section-subheading mx-auto">Delicate confections and ceremonial teas to complete your journey.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {dessertItems.map((item, i) => (
        <FoodCard key={item.title} {...item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default DessertSection;
