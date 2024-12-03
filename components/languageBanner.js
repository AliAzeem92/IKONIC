'use client';
import { useEffect, useState } from 'react';

const ScrollingBanner = ({ items, bgColor, rotate }) => {
  const [scrollSpeed, setScrollSpeed] = useState(20); // Speed of the scrolling

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollSpeed((prevSpeed) => (prevSpeed === 20 ? 15 : 20)); // Toggle scroll speed for demonstration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden py-4 ${bgColor}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        /* WebkitMaskImage:
          'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%', */
      }}
    >
      <div className="flex animate-scroll gap-5 text-[28.36px] font-medium text-white">
        {/* Loop items and concatenate them for continuous scrolling */}
        <div className="flex gap-7 animate-scroll-repeat">
          {items.concat(items).map((item, index) => (
            <div key={index} className="flex items-center">
              <span>{item.name}</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-7"
              >
                <path
                  d="M11.1229 0.834982L13.155 8.09314L20.6864 10.9637L12.8269 12.75L9.79719 19.6515L7.76508 12.3934L0.233643 9.52278L8.09317 7.73652L11.1229 0.834982Z"
                  fill="#F7F4EE"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
