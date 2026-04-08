
import Header from "@/components/petshop/Header";
import HeroCarousel from "@/components/petshop/HeroCarousel";
import WhyUs from "@/components/petshop/WhyUs";
import Services from "@/components/petshop/Services";
import PromoSection from "@/components/petshop/PromoSection";
import ValueBanner from "@/components/petshop/ValueBanner";
import Gallery from "@/components/petshop/Gallery";
import Testimonials from "@/components/petshop/Testimonials";
import CtaBanner from "@/components/petshop/CtaBanner";
import FAQ from "@/components/petshop/FAQ";
import Contact from "@/components/petshop/Contact";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";
import ScrollToTop from "@/components/petshop/ScrollToTop";
import FirstVisitPopup from "@/components/petshop/FirstVisitPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <WhyUs />
      <Services />
      <ValueBanner />
      <PromoSection />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <FirstVisitPopup />
    </div>
  );
};

export default Index;
