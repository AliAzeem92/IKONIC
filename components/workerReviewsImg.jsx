import React from "react";
import playNow from "@/public/icons/playNow.svg";
import play from "@/public/icons/playButton.svg";
import Img from "@/public/workers/2.svg";
import Image from "next/image";

const WorkerReviewsImg = ({ className }) => {
  return (
    <div
      className={`lg:flex-shrink-0 flex flex-col items-center ${className} `}
    >
      {/* Mobile & Tablet Screen Play Button */}
      <div className="block lg:hidden ">
        <div className="relative sm:top-14 top-8 sm:left-32 left-16 ">
          <Image
            src={playNow}
            alt="Rotating Fan"
            className="rotating-fan mx-auto  sm:size-20 size-16 "
          />
          <Image
            src={play}
            alt="Center Image"
            className="sm:w-4 sm:h-5 w-3 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
      {/* Main Image */}
      <Image src={Img} alt="Img" className="md:w-auto md:h-auto 3xl:w-96 " />
      {/* Desktop Play Button */}
      <div className="lg:block hidden ">
        <div className="relative -top-12 left-32 3xl:left-48 3xl:-top-24 ">
          <Image
            src={playNow}
            alt="Rotating Fan"
            className="rotating-fan mx-auto size-36 3xl:size-48 "
          />
          <Image
            src={play}
            alt="Center Image"
            className="size-7 3xl:size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerReviewsImg;
