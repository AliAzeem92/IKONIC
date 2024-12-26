"use client";

import { cn } from "@/lib/utils";

export function ScrollingTitle({ title, position, isCenter }) {
  return (
    <div
      className={cn(
        "absolute transform transition-all duration-700 ease-in-out sm:min-w-[500px] left-[25%] lg:left-auto  ",
        isCenter
          ? "text-[#00B4D8] sm:text-4xl text-2xl 3xl:text-6xl font-bold"
          : "text-gray-500/50 sm:text-3xl text-xl 3xl:text-5xl "
      )}
      style={{
        transform: `translateY(${position * -70}px)`,
      }}
    >
      {isCenter ? (
        <div className="flex items-center gap-3 3xl:gap-5 ">
          <span>{title}</span>
          <div className="w-8 bg-[#00B4D8]  border-2 border-[#00B4D8]  " />
        </div>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
}
