import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-sans text-sm";

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h2 className="section-heading text-gradient-sakura mb-4">Contact Us</h2>
          <p className="section-subheading mx-auto">We'd love to hear from you.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10 space-y-6"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-primary mb-2 font-sans">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-primary mb-2 font-sans">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-primary mb-2 font-sans">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              required
              className={inputClass + " resize-none"}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--sakura)/0.3)] text-sm uppercase tracking-wider"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
