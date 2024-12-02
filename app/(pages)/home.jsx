import Brands from "@/components/brands";
import Hero from "@/components/heroSection/hero";
import TalentSection from "@/components/talentSection";
import Contact from "@/components/contact";
import Services from "@/components/services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <TalentSection />
      <Contact />
      <Services />
      <div className="p-10 bg-[red] "></div>
    </main>
  );
};

export default HomePage;
