"use client";

import Image from "next/image";
import React, { useState } from "react";

const SkillCards = ({
  Img,
  Skill_1,
  Skill_2,
  Heading,
  Disc,
  skill1Color = "red",
  skill1Bg = "white",
  skill1Border = "black",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main
      className="flex flex-col gap-5 w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with Original Zoom Effect */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={Img}
          alt="Skill Image"
          className={`transition-transform duration-500 ${
            isHovered ? "scale-150 " : "scale-100"
          }`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Skill Tags */}
      <div className="flex gap-4 mt-2">
        {/* Skill 1 */}
        <h1
          className={`p-1 px-4 rounded-full border transition-all duration-300 ${
            isHovered
              ? "bg-gray-700 text-white border-gray-500"
              : `bg-[${skill1Bg}] text-[${skill1Color}] border-[${skill1Border}]`
          }`}
        >
          {Skill_1}
        </h1>

        {/* Skill 2 */}
        <h1 className="bg-white text-black p-1 px-4 rounded-full">{Skill_2}</h1>
      </div>

      {/* Heading and Description */}
      <div className="flex flex-col gap-3 max-w-[75%]">
        <h1 className="font-semibold text-xl">{Heading}</h1>
        <p className="text-[lightgray] font-light">{Disc}</p>
      </div>
    </main>
  );
};

export default SkillCards;
