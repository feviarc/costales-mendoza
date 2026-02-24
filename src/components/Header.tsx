import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Costales Mendoza" className="h-12 md:h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-secondary text-lg leading-tight">
                Costales Mendoza
              </h1>
              <p className="text-xs text-primary font-medium">¡Puros Costales!</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+523531014522"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-primary-foreground rounded-lg font-semibold hover:bg-brand-red-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llámanos
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.034941,-102.716965"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-primary-foreground rounded-lg font-semibold hover:bg-brand-red-dark transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Cómo llegar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {
          isMenuOpen && (
            <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden bg-background border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <a
                  href="tel:+523531014522"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-primary-foreground rounded-lg font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Llámanos
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=20.034941,-102.716965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-primary-foreground rounded-lg font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  Cómo llegar
                </a>
              </nav>
            </motion.div>
          )
        }
      </AnimatePresence>
    </header>
  );
};

export default Header;
