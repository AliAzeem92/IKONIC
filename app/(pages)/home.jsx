import Brands from "@/components/brands";
import Hero from "@/components/heroSection/hero";
import TalentSection from "@/components/talentSection";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Availability from "@/components/availability";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <TalentSection />
      <Contact />
      <Services />
      <Availability />
      <div className="p-20 bg-[red] "></div>
    </main>
  );
};

export default HomePage;
