import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  index?: number;
  badge?: string;
}

const FoodCard = ({ image, title, description, index = 0, badge }: FoodCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="glass-card-hover group overflow-hidden"
  >
    <div className="relative overflow-hidden aspect-square">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      {badge && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-sans font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default FoodCard;
