"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { pricingData } from "@/lib/pricing-data";
import { PricingCard } from "./pricingCard";

export default function PricingSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const progressClasses = {
    0: "w-0",
    1: "w-1/5",
    2: "w-2/5",
    3: "w-3/5",
    4: "w-4/5",
    5: "w-full",
  };

  return (
    <div className="w-full max-w-6xl 3xl:max-w-full 3xl:mx-auto 3xl:px-4 3xl:py-16">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-16 relative">
        <div className="absolute h-0.5 bg-gray-200 w-full top-1/2 -translate-y-1/2 z-0" />
        <div
          className={cn(
            "absolute h-0.5 3xl:h-2 bg-blue-500 top-1/2 -translate-y-1/2 z-0 transition-all duration-300",
            progressClasses[activeSlide]
          )}
        />
        {pricingData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "w-8 h-8 3xl:w-24 3xl:h-24 rounded-full z-10 transition-all duration-300 flex items-center justify-center text-sm 3xl:text-6xl font-medium",
              activeSlide >= index
                ? "bg-blue-500 text-white"
                : "bg-white border-2 border-gray-200 text-gray-500"
            )}
          >
            {index === pricingData.length - 1 ? "6+" : index + 1}
          </button>
        ))}
      </div>

      {/* Sliding Cards Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {pricingData.map((tier, index) => (
            <div key={index} className="w-full flex-shrink-0 3xl:px-4">
              <div>
                <PricingCard data={tier} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
