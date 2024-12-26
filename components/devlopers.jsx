"use client";

import { useEffect, useState } from "react";
import { ScrollingTitle } from "./scrollingTitle";

const TITLES = [
  "Webflow Developer",
  "Laravel Developer",
  "Software Developer",
  "Shopify Developer",
  "Wordpress Developer",
];

export default function Developers() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const initialPositions = Array.from(
      { length: TITLES.length },
      (_, i) => i - 2
    );
    setPositions(initialPositions);

    const interval = setInterval(() => {
      setPositions((prev) => prev.map((pos) => (pos <= -2 ? 2 : pos - 1)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center ">
      <div className="relativ h-[300px] 3xl:h-[400px] flex items-center">
        {TITLES.map((title, index) => (
          <ScrollingTitle
            key={title}
            title={title}
            position={positions[index] || 0}
            isCenter={positions[index] === 0}
          />
        ))}
      </div>
    </main>
  );
}
