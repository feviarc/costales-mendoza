import { motion } from "framer-motion";

import product1 from "@/assets/costal-de-polipropileno-01.jpg";
import product2 from "@/assets/costal-de-polipropileno-02.jpg";
import product3 from "@/assets/costal-de-polipropileno-03.jpg";
import product4 from "@/assets/costal-de-polipropileno-04.jpg";
import product5 from "@/assets/costal-de-polipropileno-05.jpg";
import product6 from "@/assets/costal-de-polipropileno-06.jpg";
import product7 from "@/assets/costal-de-polipropileno-07.jpg";
import product8 from "@/assets/costal-de-polipropileno-08.jpg";
import product9 from "@/assets/costal-de-polipropileno-09.jpg";
import product10 from "@/assets/costal-de-polipropileno-10.jpg";
import product11 from "@/assets/costal-de-polipropileno-11.jpg";
import product12 from "@/assets/costal-de-polipropileno-12.jpg";
import product13 from "@/assets/costal-de-polipropileno-13.jpg";
import product14 from "@/assets/costal-de-polipropileno-14.jpg";
import product15 from "@/assets/costal-de-polipropileno-15.jpg";
import product16 from "@/assets/costal-de-polipropileno-16.jpg";
import product17 from "@/assets/costal-de-polipropileno-17.jpg";


const products = [
  {
    id: 1,
    name: "30 x 45 cms",
    description: "Costal de Polipropileno. (5Kg)",
    sizes: "",
    image: product1,
  },
  {
    id: 2,
    name: "35 x 82 cms",
    description: "Costal de Polipropileno con fuelle. (Laminado, 25Kg)",
    sizes: "",
    image: product2,
  },
  {
    id: 3,
    name: "35 x 65 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product3,
  },
  {
    id: 4,
    name: "45 x 90 cms",
    description: "Costal de Polipropileno con fuelle. (Laminado)",
    sizes: "",
    image: product4,
  },
   {
    id: 5,
    name: "47 x 80 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product5,
  },
  {
    id: 6,
    name: "50 x 80 cms",
    description: "Costal de Polipropileno. (25Kg)",
    sizes: "",
    image: product6,
  },
  {
    id: 7,
    name: "50 x 90 cms",
    description: "Costal de Polipropileno. (50kg)",
    sizes: "",
    image: product7,
  },
  {
    id: 8,
    name: "50 x 95 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product8,
  },
  {
    id: 9,
    name: "54 x 90 cms",
    description: "Costal de Polipropileno. (50Kg)",
    sizes: "",
    image: product9,
  },
  {
    id: 10,
    name: "54 x 100 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product10,
  },
  {
    id: 11,
    name: "54 x 102 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product11,
  },
  {
    id: 12,
    name: "57 x 90 cms",
    description: "Costal de Polipropileno. (50Kg)",
    sizes: "",
    image: product12,
  },
   {
    id: 13,
    name: "57 x 100 cms",
    description: "Costal de Polipropileno. (50Kg)",
    sizes: "",
    image: product13,
  },
  {
    id: 14,
    name: "60 x 95 cms",
    description: "Costal de Polipropileno. (50Kg)",
    sizes: "",
    image: product14,
  },
  {
    id: 15,
    name: "60 x 95 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product15,
  },
  {
    id: 16,
    name: "70 x 115 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product16,
  },
  {
    id: 17,
    name: "70 x 120 cms",
    description: "Costal de Polipropileno.",
    sizes: "",
    image: product17,
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Conoce nuestros productos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia variedad de costales para diferentes industrias y necesidades.
            Calidad garantizada desde Sahuayo, Michoacán.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          products.map((product, index) => (
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
                  alt={`Costales de polipropileno de ${product.name} en Sahuayo, Michoacan`}
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
              </div>
            </motion.div>
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default Products;
