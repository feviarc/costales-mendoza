import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Costales Mendoza" className="h-16 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Distribuidores de costales de alta calidad para agricultura, 
              industria y comercio desde Sahuayo, Michoacán.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Productos", href: "#productos" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Productos</h4>
            <ul className="space-y-2 text-secondary-foreground/80 text-sm">
              <li>Costales de Yute</li>
              <li>Costales de Polipropileno</li>
              <li>Costales para Café</li>
              <li>Costales Industriales</li>
              <li>Costales a Medida</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-secondary-foreground/80">
                  Carretera Jiquilpan - Guadalajara #2354,<br />
                  Col. La Yerbabuena, C.P. 59026<br />
                  Sahuayo, Michoacán, México
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+523531234567"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +52 353 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contacto@costalesmendoza.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  contacto@costalesmendoza.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-primary" />
                <a
                  href="https://costalesmendoza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  costalesmendoza.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Costales Mendoza. Todos los derechos reservados.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Hecho con ❤️ en Michoacán, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
