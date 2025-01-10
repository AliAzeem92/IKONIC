"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "@/data/constants";
import online from "@/public/icons/online.svg";
import ImageCarousel from "./imageCarousel";

export default function Carousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const colors = [
      "bg-[#f9d1b3]",
      "bg-[#ffb2c3]",
      "bg-[#fffda7]",
      "bg-[#f1878a]",
      "bg-[#e3ffbf]",
      "bg-[#a6d9e6]",
    ];

    const images = [];
    for (let i = 0; i < 4; i++) {
      const index = (position + i) % CAROUSEL_IMAGES.length;
      images.push({
        src: CAROUSEL_IMAGES[index],
        bgColor: colors[index],
      });
    }
    return images;
  };

  return (
    <div className="bg-[#F4F4F4] rounded-3xl p-8 h-[318.12px] 3xl:h-[350px] w-full">
      <div className="flex flex-col justify-between h-full">
        {/* Text Section */}
        <div className="flex-grow">
          <h2 className="text-2xl 3xl:text-4xl font-bold text-gray-900 mb-2">
            Match Talent
          </h2>
          <p className="text-gray-600 text-base 3xl:text-2xl">
            With a highly qualified expert who can guide you through every step
            of the process
          </p>
        </div>

        <ImageCarousel
          className="left-[25%] 3xl:left-[40%] "
          getImageClasses={(index) =>
            index === 1
              ? "size-16 p-2 3xl:size-28 3xl:p-3 "
              : "size-12 p-2 3xl:size-20 3xl:p-3 "
          }
        />
      </div>
    </div>
  );
}
