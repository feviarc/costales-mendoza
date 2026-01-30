import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Costal de Yute Natural",
    description: "Ideal para granos, café y productos agrícolas. Material 100% natural y biodegradable.",
    sizes: "50kg, 70kg, 100kg",
    image: product1,
  },
  {
    id: 2,
    name: "Costal de Polipropileno",
    description: "Resistente y duradero para uso industrial. Disponible en blanco y colores.",
    sizes: "25kg, 50kg, 100kg",
    image: product2,
  },
  {
    id: 3,
    name: "Costal para Café",
    description: "Diseño especial para el transporte y almacenamiento de café en grano.",
    sizes: "60kg, 69kg",
    image: product3,
  },
  {
    id: 4,
    name: "Costal Industrial",
    description: "Uso pesado para construcción, arena y materiales de obra.",
    sizes: "40kg, 50kg",
    image: product4,
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Catálogo
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia variedad de costales para diferentes industrias y necesidades. 
            Calidad garantizada desde Sahuayo, Michoacán.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.sizes}
                  </span>
                  <a
                    href="#contacto"
                    className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    Cotizar →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas? Contamos con más productos disponibles.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors"
          >
            Solicitar Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
