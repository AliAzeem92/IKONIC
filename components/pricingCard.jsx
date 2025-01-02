// "use client";

// import { Check, ArrowRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// export function PricingCard({ data, style }) {
//   return (
//     <div
//       className="bg-black rounded-2xl shadow-xl p-8 min-w-full"
//       style={style}
//     >
//       <div className="flex justify-between items-start mb-8">
//         <div>
//           <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
//           <p className="text-gray-600 max-w-md">{data.description}</p>
//         </div>
//         <div className="text-right">
//           <p className="text-sm text-gray-600 mb-1">
//             Subscribing {data.devCount} Devs
//           </p>
//           <div className="text-4xl font-bold">
//             {data.price === "Custom" ? (
//               "Custom"
//             ) : (
//               <>
//                 $<span>{data.price}</span>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-6 mb-8">
//         {data.features.map((feature, index) => (
//           <div key={index} className="flex items-center gap-2">
//             <Check className="w-5 h-5 text-blue-500" />
//             <span>{feature}</span>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center">
//         <button
//           variant="default"
//           size="lg"
//           className="bg-blue-500 hover:bg-blue-600"
//         >
//           Subscribe Now
//           <ArrowRight className="ml-2 w-4 h-4" />
//         </button>
//         {data.price === "Custom" && (
//           <button variant="outline" size="lg">
//             Need Custom Plan
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { Check, ArrowRight } from "lucide-react";
import HeroHoverButton from "./heroSection/heroHoverButton";
import OpenLinkGray from "@/public/icons/openLinkGray.svg";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

export function PricingCard({ data, style }) {
  return (
    <div
      className="bg-[#FFFFFF] text-black p-[5%] rounded-xl w-full"
      style={style}
    >
      <div className="flex sm:flex-row flex-col-reverse w-full justify-between ">
        <div className="sm:w-[70%] ">
          <h1 className="sm:text-5xl text-xl 3xl:text-7xl font-semibold sm:mb-6 mb-3 ">
            {data.title}
          </h1>
          <p className="sm:text-lg text-sm 3xl:text-3xl ">{data.description}</p>
        </div>
        <div className="flex flex-col sm:items-center mt-3 mb-6 ">
          <h4 className="font-semibold text-xs 3xl:text-3xl sm:text-base mb-2 3xl:mb-4 sm:text-black text-[#858C8E] ">
            Subscribing {data.devCount} Devs
          </h4>
          <h1 className="text-5xl 3xl:text-7xl font-semibold ">
            {data.price === "Custom" ? (
              "Custom"
            ) : (
              <>
                $<span>{data.price}</span>
              </>
            )}
          </h1>
        </div>
      </div>

      <div className="lg:flex w-full justify-between">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6 3xl:w-[60%] ">
          {data.features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-center ">
              <Image
                src={feature.src}
                alt={feature.alt}
                className="3xl:w-[15%]"
              />
              <p className="sm:text-lg text-sm 3xl:text-3xl ">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-6">
          <HeroHoverButton
            className="bg-[#28C3F4] hover:bg-black hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
            text="Get Our Services"
          />
          <div className="flex gap-5 items-center ">
            <p className="text-[gray] 3xl:text-xl ">Need Custom Plan</p>
            <Image src={OpenLinkGray} alt="Arrow" className="3xl:w-4 " />
          </div>
        </div>
      </div>
    </div>
  );
}
