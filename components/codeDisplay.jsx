"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function CodeDisplay({ code }) {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      setScrollHeight(codeRef.current.scrollHeight);
    }
  }, [code]);

  return (
    <div className="bg-[#F4F4F4] rounded-3xl p-8 h-[318.12px] w-full ">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <h2 className="text-2xl 3xl:text-4xl font-bold text-gray-900 mb-2">
            Start Building
          </h2>
          <p className="text-gray-600 text-base 3xl:text-2xl ">
            Updates or task completion will be provided within 1-2 days.
          </p>
        </div>

        <div
          className="relative h-[130px] overflow-hidden rounded-lg "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <pre
            ref={codeRef}
            className={cn(
              "absolute w-full transition-all duration-700 ease-in-out",
              "font-mono text-sm p-4",
              isHovered
                ? `-translate-y-[${scrollHeight - 130}px]`
                : "translate-y-0"
            )}
            style={{
              transform: isHovered
                ? `translateY(-${scrollHeight - 130}px)`
                : "translateY(0)",
            }}
          >
            <code className="text-blue-500 whitespace-pre 3xl:text-2xl ">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
