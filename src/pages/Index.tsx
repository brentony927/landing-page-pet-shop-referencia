import Header from "@/components/petshop/Header";
import HeroCarousel from "@/components/petshop/HeroCarousel";
import Services from "@/components/petshop/Services";
import FoodProducts from "@/components/petshop/FoodProducts";
import WhyUs from "@/components/petshop/WhyUs";
import Testimonials from "@/components/petshop/Testimonials";
import Contact from "@/components/petshop/Contact";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <Services />
      <FoodProducts />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
