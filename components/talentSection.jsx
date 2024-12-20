"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ticked from "@/public/icons/tickedBlue.svg";

const TalentSection = () => {
  const talentList = [
    "Software Developer",
    "Shopify Developer",
    "WordPress Developer",
    "Webflow Developer",
    "Laravel Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === talentList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [talentList.length]);

  return (
    <section className="bg-gradient-to-r from-[#1A2A3B] to-[#0A0F1F] text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[204px] py-16">
        <div className="max-w-xl space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
            Instantly Access Top Talent to Get Quality Work Done by Specialized
            Professionals!
          </h2>
          <p className="text-sm md:text-lg text-gray-300 text-center md:text-left">
            Finding the right talent is exhausting, costly, and often takes too
            long. Especially when you need someone right away. You don’t need to
            get frustrated anymore when you can easily hire talent on demand.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="space-y-4">
            {talentList.map((talent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0.3,
                  y:
                    currentIndex === index
                      ? 0
                      : currentIndex > index
                      ? -50
                      : 50,
                }}
                transition={{ duration: 0.5 }}
                className={`text-xl md:text-3xl font-semibold transition-all ease-in-out ${
                  currentIndex === index
                    ? "text-[#12BDF3] z-10"
                    : "text-gray-400 z-0"
                }`}
              >
                {talent}
              </motion.div>
            ))}
          </div>
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
    </section>
  );
};

export default TalentSection;
