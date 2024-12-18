import Brands from "@/components/brands";
import Hero from "@/components/heroSection/hero";
import TalentSection from "@/components/talentSection";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Availability from "@/components/availability";
import SkilledPortfolio from "@/components/skilledPortfolio";
import Choose from "@/components/choose";
import Pricing from "@/components/pricing";
import UserReviews from "@/components/userreviews";
import FAQ from "@/components/faqsection";
import Blog from "@/components/blog";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <TalentSection />
      <Contact />
      <Services />
      <Availability />
      <SkilledPortfolio />
      {/* <Choose /> */}
      <Pricing />
      <UserReviews />
      <FAQ />
      <span className="lg:block hidden ">
        <Blog />
      </span>
    </main>
  );
};

export default HomePage;
