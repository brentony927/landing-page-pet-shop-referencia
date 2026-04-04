import Header from "@/components/petshop/Header";
import HeroCarousel from "@/components/petshop/HeroCarousel";
import AnimatedStrip from "@/components/petshop/AnimatedStrip";
import Categories from "@/components/petshop/Categories";
import Services from "@/components/petshop/Services";
import AboutUs from "@/components/petshop/AboutUs";
import Testimonials from "@/components/petshop/Testimonials";
import CtaBanner from "@/components/petshop/CtaBanner";
import Contact from "@/components/petshop/Contact";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <AnimatedStrip />
      <Categories />
      <Services />
      <AboutUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
