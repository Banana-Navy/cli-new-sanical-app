import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import StorePhoto from "@/components/StorePhoto";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <Brands />
      <StorePhoto />
      <ContactCTA />
    </>
  );
}
