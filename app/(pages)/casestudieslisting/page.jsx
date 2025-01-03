"use client";
import React, { useEffect, useState } from "react";
import CardSection from "@/components/cards";
import cardsData from "@/components/ui/cardsData";
import ScrollingBanner from "@/components/languageBanner";
import { items, newBannerItems } from "@/components/ui/bannerData";
import UserReviews from "@/components/userreviews";
import FAQ from "@/components/faqsection";
import ContactForm from "@/components/contactForm";

const Page = () => {
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
    <main id="Case Studies Listing " className="overflow-hidden">
      <div className="w-full md:max-w-[1240px] mx-auto mt-[75px] p-5 md:p-0">
        <h6 className="text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center mx-auto w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
          Case studies
        </h6>
        <h2 className="text-[40px] md:text-[64px] text-center font-medium leading-[48px] md:leading-[76.8px] md:w-[520px] mx-auto mt-5 md:mt-0">
          Some Of The Work We&apos;ve Done
        </h2>
        <p className="text-lg md:text-xl font-normal text-center md:w-[688px] mx-auto mt-3">
          We&apos;ve already helped a lot of companies by providing online
          solutions. Take a look at some of our success stories!
        </p>
      </div>
      <CardSection cards={cardsData} className="px-5 sm:px-24 mt-24 mb-9 " />
      <CardSection cards={cardsData} className="px-5 sm:px-24 mb-24 " />
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
      <UserReviews />
      <FAQ />
      <ContactForm />
    </main>
  );
};

export default Page;
