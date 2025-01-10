"use client";

import HeroHoverButton from "./heroSection/heroHoverButton";
import OpenLinkGray from "@/public/icons/openLinkGray.svg";
import Image from "next/image";

export function PricingCard({ data, style }) {
  return (
    <div
      className="bg-[#FFFFFF] text-black p-[5%] rounded-xl w-full"
      style={style}
    >
      <div className="flex sm:flex-row flex-col-reverse w-full justify-between ">
        <div className="sm:w-[70%] ">
          <h1 className="sm:text-5xl text-xl 3xl:text-7xl font-semibold sm:mb-6 mb-3 ">
            {data.title}
          </h1>
          <p className="sm:text-lg text-sm 3xl:text-3xl ">{data.description}</p>
        </div>
        <div className="flex flex-col sm:items-center mt-3 mb-6 ">
          <h4 className="font-semibold text-xs 3xl:text-3xl sm:text-base mb-2 3xl:mb-4 sm:text-black text-[#858C8E] ">
            Subscribing {data.devCount} Devs
          </h4>
          <h1 className="text-5xl 3xl:text-7xl font-semibold ">
            {data.price === "Custom" ? (
              "Custom"
            ) : (
              <>
                $<span>{data.price}</span>
              </>
            )}
          </h1>
        </div>
      </div>

      <div className="lg:flex w-full justify-between">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6 3xl:w-[60%] ">
          {data.features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-center ">
              <Image
                src={feature.src}
                alt={feature.alt}
                className="3xl:w-[15%]"
              />
              <p className="sm:text-lg text-sm 3xl:text-3xl ">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-6">
          <HeroHoverButton
            className="sm:my-[42px] my-[10px] bg-[#28C3F4] hover:bg-black hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
            text="Get Our Services"
          />
          <div className="flex gap-5 items-center ">
            <p className="text-[gray] 3xl:text-xl ">Need Custom Plan</p>
            <Image src={OpenLinkGray} alt="Arrow" className="3xl:w-4 " />
          </div>
        </div>
      </div>
    </div>
  );
}
