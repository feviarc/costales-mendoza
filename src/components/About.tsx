import { motion } from "framer-motion";

import {
  Award,
  Clock,
  Truck,
  Users,
} from "lucide-react";

import logo from "@/assets/delivery-truck.png";


const features = [
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Productos de primera calidad para satisfacer las exigencias de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Asesoría profesional para encontrar el costal ideal para tu negocio.",
  },
  {
    icon: Truck,
    title: "Envíos a Todo México",
    description: "Llegamos a cualquier parte del país con entregas puntuales y seguras.",
  },
  {
    icon: Clock,
    title: "Entregas Rápidas",
    description: "Contamos con inventario disponible para entregas inmediatas.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative overflow-hidden"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Más de 20 años siendo{" "}
              <span className="text-gradient">¡Puros Costales!</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>Costales Mendoza</strong> es una empresa familiar ubicada en Sahuayo, 
              Michoacán, dedicada a la distribución de costales de alta calidad para el 
              sector agrícola, industrial y comercial.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Atendemos tanto a empresas como a clientes particulares, 
              ofreciendo precios competitivos en mayoreo y menudeo. Nuestro compromiso 
              es brindar productos que cumplan con los más altos estándares de calidad.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="flex items-start gap-3"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logo & Features */}
          <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
          >
            <div className="relative bg-gradient-to-br from-brand-cream to-accent rounded-2xl p-8 md:p-12">
              <img
               src={logo}
               alt="Costales Mendoza | Venta de costales en Sahuayo Michoacan"
               className="w-48 h-37 mx-auto mb-8 animate-float"
              />

              <div className="grid grid-cols-2 gap-4">
                {features.slice(2).map((feature, index) => (
                  <motion.div
                   key={feature.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + index * 0.1 }}
                   className="bg-background rounded-xl p-4 card-shadow"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
