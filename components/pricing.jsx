"use client";
import Image from "next/image";
import PricingSlider from "./pricingSlider";
import whatsapp from "@/public/icons/whatsapp.svg";
import telegram from "@/public/icons/telegram.svg";
import ScrollingBanner from "./languageBanner";
import { useEffect, useState } from "react";
import { items, newBannerItems } from "./ui/bannerData";

const data = [
  { bg: true, border: true },
  { bg: true, border: true },
  { bg: true, border: false },
  { bg: false, border: false },
  { bg: false, border: false },
  { bg: false, border: false },
];

const contact = [
  { Ima: whatsapp, text: "Connect on Whatsapp" },
  { Ima: telegram, text: "Connect on Telegram" },
];

const Pricing = () => {
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
    <main className="flex flex-col items-center bg-[#021318] text-white p-[7%]">
      <div className="text-center">
        <h1 className="sm:text-5xl text-xl font-semibold px-5 mb-[7%] mt-5">
          Here is our Flat Pricing
        </h1>
        <p className="sm:text-xl text-sm font-light px-5 mb-[10%]">
          Our pricing is designed to fit your project needs.
        </p>
      </div>
      <div className="flex mb-[3%]">
        {data.map((item, index) => (
          <div key={index} className="flex items-center w-full">
            <p
              className={`sm:px-4 px-2 sm:py-2 mx-2 rounded-full font-semibold ${
                item.bg ? "bg-[#12BDF3]" : "bg-[#FFFFFF] text-black"
              }`}
            >
              {index + 1}
            </p>
            {index < 5 && (
              <span
                className={`border-2 flex-1 h-0 sm:w-[90px] w-6 ${
                  item.border ? "border-[#12BDF3]" : "border-[#FFFFFF]"
                }`}
              ></span>
            )}
          </div>
        ))}
      </div>
      <PricingSlider />
      <div className="flex sm:flex-row flex-col mt-[3%] sm:gap-32 gap-5 ">
        {contact.map((item, index) => (
          <div
            key={`contact-${index}`}
            className="flex gap-4 items-center mt-[5%]"
          >
            <Image src={item.Ima} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
