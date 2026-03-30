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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <FoodProducts />
      <Services />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
