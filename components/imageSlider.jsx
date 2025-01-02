"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageSlider({
  images = [],
  direction = "right",
  speed = 1,
}) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || images.length === 0) return;

    const scrollDirection = direction === "right" ? 1 : -1;
    let animationFrameId;

    const animate = () => {
      if (!slider) return;

      slider.scrollLeft += speed * scrollDirection;

      // Check if we've reached the end
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else if (slider.scrollLeft <= 0 && scrollDirection === -1) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, images]);

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ">
      <div
        ref={sliderRef}
        className="flex w-full gap-1 p-1 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Render images dynamically */}
        {images.map((image, idx) => (
          <Image key={`img-${idx}`} src={image.src} alt={image.alt} />
        ))}
        {/* Duplicate set for seamless looping */}
        {images.map((image, idx) => (
          <Image key={`img-dup-${idx}`} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}
