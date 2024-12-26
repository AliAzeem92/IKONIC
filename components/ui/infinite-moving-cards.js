"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  bgImage,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [directionInitialized, setDirectionInitialized] = useState(false);
  const [speedInitialized, setSpeedInitialized] = useState(false);

  const initializeDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
      setDirectionInitialized(true);
    }
  }, [direction]);

  const initializeSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
      setSpeedInitialized(true);
    }
  }, [speed]);

  useEffect(() => {
    if (!directionInitialized) initializeDirection();
  }, [directionInitialized, initializeDirection]);

  useEffect(() => {
    if (!speedInitialized) initializeSpeed();
  }, [speedInitialized, initializeSpeed]);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }, [initializeDirection, initializeSpeed]);

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[214.39px] h-[267px] 3xl:w-[250px] 3xl:h-[300px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 "
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#f9d1b3",
            }}
            key={item.name}
          >
            <blockquote>
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-md p-4">
                <span className="flex flex-col gap-2">
                  <span className="text-sm 3xl:text-lg text-[#1A1A1A] font-semibold">
                    {item.name}
                  </span>
                  <span>
                    <Image
                      src={item.developer}
                      alt={item.developer}
                      className="3xl:size-[100%] "
                    />
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
