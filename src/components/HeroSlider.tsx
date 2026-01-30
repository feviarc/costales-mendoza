import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Costales de Alta Calidad",
    subtitle: "Para agricultura, industria y comercio",
  },
  {
    image: hero2,
    title: "Mayoreo y Menudeo",
    subtitle: "Atendemos empresas y particulares",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section id="inicio" className="relative h-[70vh] md:h-[85vh] overflow-hidden mt-16 md:mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">
            {slides[current].title}
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-brand-red-dark transition-colors"
            >
              Ver Productos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-bold rounded-lg border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-colors"
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-primary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
