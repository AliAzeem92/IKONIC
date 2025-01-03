"use client";
import { useEffect, useState } from "react";
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
import { items, newBannerItems } from "@/components/ui/bannerData";
import ScrollingBanner from "@/components/languageBanner";
import ContactForm from "@/components/contactForm";

const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [newBanners, setNewBanners] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(items), 1000)
      );
      const newResponse = await new Promise((resolve) =>
        setTimeout(() => resolve(newBannerItems), 1000)
      );

      setBanners(response);
      setNewBanners(newResponse);
    };
    fetchData();
  }, []);
  return (
    <main className="Homepage ">
      <Hero />
      <Brands />
      <TalentSection />
      <Contact />
      <Services />
      <Availability />
      <SkilledPortfolio />
      <Choose />
      <Pricing />
      <div className="relative bottom-8 ">
        {/* Render first set of banners */}
        {banners.map((banner, index) => (
          <ScrollingBanner
            key={index}
            bgColor={banner.bgColor}
            items={banner.languages}
            rotate={banner.rotate}
          />
        ))}
        {/* Render second set of banners */}
        {newBanners.map((banner, index) => (
          <ScrollingBanner
            key={`new-${index}`}
            bgColor={banner.bgColor}
            items={banner.languages}
            rotate={banner.rotate}
          />
        ))}
      </div>
      <UserReviews />
      <FAQ />
      <span className="lg:block hidden ">
        <Blog />
      </span>
      <ContactForm />
    </main>
  );
};

export default HomePage;
