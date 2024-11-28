import Brands from "@/components/brands";
import Hero from "@/components/heroSection/hero";
import TalentSection from "@/components/talentSection";
import Contact from "@/components/contact";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <TalentSection />
      <Contact />
      <div className="p-10 bg-[red] "></div>
    </main>
  );
};

export default HomePage;
