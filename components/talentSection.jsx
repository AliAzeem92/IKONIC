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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[204px] md:gap-14 py-16 ">
              <div className="lg:max-w-xl space-y-6 ">
                <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold leading-tight text-center md:text-left">
                  Instantly Access Top Talent to Get Quality Work Done by
                  Specialized Professionals!
                </h2>
                <p className="text-sm md:text-lg text-gray-300 text-center md:text-left">
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

            <div className="flex flex-col sm:flex-row gap-8 pt-6 mt-12 border-t-[1px] border-t-gray-700">
              {[
                "Simplified Talent Search",
                "Effortless Hiring Process",
                "Zero Hidden Fees",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={ticked} alt="Tick Icon" width={20} height={20} />
                  <p className="text-xs md:text-sm text-gray-300 font-medium">
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
