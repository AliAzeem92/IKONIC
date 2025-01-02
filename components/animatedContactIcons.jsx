"use client";

import { Phone, Mail, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const icons = [
  { Icon: Phone, label: "Call us" },
  { Icon: Calendar, label: "Get offers" },
  { Icon: Mail, label: "Email us" },
];

export default function AnimatedContactIcons() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F4F4F4] rounded-3xl p-8 h-[318.12px] 3xl:h-[350px] w-full ">
      <div className="flex flex-col justify-between h-full">
        {/* Text Section */}
        <div className="flex-grow">
          <h2 className="text-2xl 3xl:text-4xl font-bold text-gray-900 mb-2">
            Get in touch
          </h2>
          <p className="text-gray-600 text-base 3xl:text-2xl ">
            A plan that best suits your needs and submit your initial task for
            review.
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          {icons.map(({ Icon, label }, index) => (
            <div key={label} className="relative">
              <div
                className={cn(
                  "p-2 3xl:p-4 rounded-full transition-all duration-500 ease-in-out",
                  activeIndex === index
                    ? "ring-2 3xl:ring-4 ring-[#12BDF3]"
                    : ""
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 3xl:w-14 3xl:h-14 rounded-full transition-all duration-500 ease-in-out",
                    "flex items-center justify-center",
                    activeIndex === index
                      ? "bg-[#12BDF3] scale-110 3xl:scale-125 "
                      : "bg-gray-200 scale-95 3xl:scale-110 "
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 3xl:w-7 3xl:h-7 transition-all duration-500",
                      activeIndex === index
                        ? "text-white w-6 h-6 3xl:w-8 3xl:h-8 "
                        : "text-gray-600"
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
