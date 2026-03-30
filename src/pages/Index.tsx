import Header from "@/components/petshop/Header";
import HeroCarousel from "@/components/petshop/HeroCarousel";
import AboutUs from "@/components/petshop/AboutUs";
import FoodProducts from "@/components/petshop/FoodProducts";
import Services from "@/components/petshop/Services";
import Testimonials from "@/components/petshop/Testimonials";
import Brands from "@/components/petshop/Brands";
import Contact from "@/components/petshop/Contact";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";
import WhyUs from "@/components/petshop/WhyUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <AboutUs />

      <FoodProducts />
      <Services />
      <WhyUs />
      <Testimonials />

      {/* CTA Strip */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-secondary-foreground font-bold text-lg">Entrega grátis acima de R$150</span>
          <a href="#racoes" className="bg-secondary-foreground text-secondary font-bold px-6 py-2 rounded-lg text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-200">
            Ver rações →
          </a>
        </div>
      </div>

      <Brands />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
