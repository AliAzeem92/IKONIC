"use client";
import Image from "next/image";
import PricingSlider from "./pricingSlider";
import whatsapp from "@/public/icons/whatsapp.svg";
import telegram from "@/public/icons/telegram.svg";

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
  return (
    <main className="flex flex-col items-center bg-[#021318] text-white p-[7%]">
      <div className="text-center">
        <h1 className="sm:text-5xl text-xl 3xl:text-7xl font-semibold px-5 mb-[7%] mt-5">
          Here is our Flat Pricing
        </h1>
        <p className="sm:text-xl text-sm 3xl:text-3xl font-light px-5 mb-[10%]">
          Our pricing is designed to fit your project needs.
        </p>
      </div>
      <PricingSlider />
      <div className="flex sm:flex-row flex-col mt-[3%] sm:gap-32 gap-5 ">
        {contact.map((item, index) => (
          <div
            key={`contact-${index}`}
            className="flex gap-4 items-center mt-[5%]"
          >
            <Image src={item.Ima} alt={item.text} className="3xl:w-[40%] " />
            <p className="3xl:text-3xl ">{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
