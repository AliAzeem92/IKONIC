"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ticked from "@/public/icons/tickedBlue.svg";
import Developers from "./devlopers";

const TalentSection = () => {
  return (
    <main>
      <div className="flex flex-col justify-center bg-[#021318] text-white py-16 px-6 md:p-5 lg:px-20 lg:py-10 ">
        <div className="container mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-col lg:flex-row gap-12 md:gap-14 lg:gap-44 py-16 ">
              <div className="lg:max-w-2xl 3xl:max-w-5xl space-y-6 3xl:space-y-10 ">
                <h2 className="text-3xl md:text-2xl lg:text-5xl 3xl:text-7xl font-bold leading-tight text-center md:text-left">
                  Instantly Access Top Talent to Get Quality Work Done by
                  Specialized Professionals!
                </h2>
                <p className="text-sm md:text-lg lg:text-3xl 3xl:text-4xl lg:font-light text-gray-300 text-center md:text-left">
                  Finding the right talent is exhausting, costly, and often
                  takes too long. Especially when you need someone right away.
                  You don’t need to get frustrated anymore when you can easily
                  hire talent on demand.
                </p>
              </div>

              <div>
                <Developers />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 mt-12 border-t-[1px] 3xl:border-t-[2px] border-t-gray-700">
              {[
                "Simplified Talent Search",
                "Effortless Hiring Process",
                "Zero Hidden Fees",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={ticked}
                    alt="Tick Icon"
                    className="3xl:size-[40%] "
                  />
                  <p className="text-xs md:text-sm 3xl:text-2xl 3xl:w-96 text-gray-300 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TalentSection;
