import Header from "@/components/petshop/Header";
import HeroCarousel from "@/components/petshop/HeroCarousel";
import AnimatedStrip from "@/components/petshop/AnimatedStrip";
import Categories from "@/components/petshop/Categories";
import Services from "@/components/petshop/Services";
import FeaturedProducts from "@/components/petshop/FeaturedProducts";
import FoodProducts from "@/components/petshop/FoodProducts";
import Brands from "@/components/petshop/Brands";
import AboutUs from "@/components/petshop/AboutUs";
import WhyUs from "@/components/petshop/WhyUs";
import PetTips from "@/components/petshop/PetTips";
import Testimonials from "@/components/petshop/Testimonials";
import CtaBanner from "@/components/petshop/CtaBanner";
import FAQ from "@/components/petshop/FAQ";
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
      <FeaturedProducts />
      <FoodProducts />
      <Brands />
      <WhyUs />
      <AboutUs />
      <PetTips />
      <Testimonials />
      <CtaBanner />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
