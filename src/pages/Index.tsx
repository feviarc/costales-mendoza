import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/Products";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Products />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
