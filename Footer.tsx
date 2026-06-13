const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-lg font-bold text-gradient-sakura">桜 Sakura</p>
      <p className="text-muted-foreground text-sm font-sans">
        © {new Date().getFullYear()} Sakura Japanese Cuisine. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
