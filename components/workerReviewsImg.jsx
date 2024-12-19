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
      <Image src={Img} alt="Img" className="md:w-auto md:h-auto w-[50%] " />
      <div className="lg:block hidden ">
        <div className="relative -top-12 left-32 ">
          <Image
            src={playNow}
            alt="Rotating Fan"
            className="rotating-fan mx-auto  size-28"
          />
          <Image
            src={play}
            alt="Center Image"
            className="w-6 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerReviewsImg;
