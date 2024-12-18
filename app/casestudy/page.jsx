"use client";
import React, { useEffect, useState } from "react";
import CardSection from "@/components/cards";
import cardsData from "@/components/ui/cardsData";
import ScrollingBanner from "@/components/languageBanner";
import { items, newBannerItems } from "@/components/ui/bannerData";
import UserReviews from "@/components/userreviews";

const page = () => {
  const [banners, setBanners] = useState([]);
  const [newBanners, setNewBanners] = useState([]);

  // Simulate fetching data
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
    <main className="overflow-hidden">
      <div className="container mt-[75px]">
        <h6 className="text-base font-normal bg-[#ebecec] h-10 text-center mx-auto w-[129px] pt-[6px] rounded-full">
          Case studies
        </h6>
        <h2 className="text-[64px] text-center font-medium leading-[76.8px] w-[520px] mx-auto">
          Some Of The Work We've Done
        </h2>
        <p className="text-xl font-normal text-center w-[688px] mx-auto mt-3">
          We've already helped a lot of companies by providing online solutions.
          Take a look at some of our success stories!
        </p>
      </div>
      <CardSection cards={cardsData} />
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
    </main>
  );
};

export default page;
