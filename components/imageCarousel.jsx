// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { CAROUSEL_IMAGES } from "@/data/constants";
// import online from "@/public/icons/online.svg";

// export default function ImageCarousel({ className }) {
//   const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleImages = () => {
//     const colors = [
//       "bg-[#f9d1b3]",
//       "bg-[#ffb2c3]",
//       "bg-[#fffda7]",
//       "bg-[#f1878a]",
//       "bg-[#e3ffbf]",
//       "bg-[#a6d9e6]",
//     ];

//     const images = [];
//     for (let i = 0; i < 4; i++) {
//       const index = (position + i) % CAROUSEL_IMAGES.length;
//       images.push({
//         src: CAROUSEL_IMAGES[index],
//         bgColor: colors[index],
//       });
//     }
//     return images;
//   };

//   return (
//     <div>
//       <div
//         className={`flex items-center gap-2 text-sm 3xl:text-xl text-gray-600 bg-white p-1 px-2 rounded w-fit relative ${className} `}
//       >
//         <Image src={online} alt="online" className="3xl:size-[100%] " />
//         Online
//       </div>
//       <div className="flex justify-end ">
//         <div className="flex items-center justify-end gap-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ">
//           {getVisibleImages().map(({ src, bgColor }, index) => (
//             <div
//               key={`${position}-${index}`}
//               className={`relative flex-shrink-0 transition-all duration-300 ease-in-out rounded-lg overflow-hidden
//                 ${bgColor}
//                 ${
//                   index === 1
//                     ? "size-16 p-2 3xl:size-28 3xl:p-3 "
//                     : "size-12 p-2 3xl:size-20 3xl:p-3 "
//                 } `}
//             >
//               <Image src={src} alt={`Team member ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "@/data/constants";
import online from "@/public/icons/online.svg";

export default function ImageCarousel({ className, getImageClasses }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const colors = [
      "bg-[#f9d1b3]",
      "bg-[#ffb2c3]",
      "bg-[#fffda7]",
      "bg-[#f1878a]",
      "bg-[#e3ffbf]",
      "bg-[#a6d9e6]",
    ];

    const images = [];
    for (let i = 0; i < 4; i++) {
      const index = (position + i) % CAROUSEL_IMAGES.length;
      images.push({
        src: CAROUSEL_IMAGES[index],
        bgColor: colors[index],
      });
    }
    return images;
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 text-sm 3xl:text-2xl text-gray-600 bg-white p-1 px-2 rounded w-fit relative ${className}`}
      >
        <Image src={online} alt="online" className="3xl:size-[100%]" />
        Online
      </div>
      <div className="flex justify-end">
        <div className="flex items-center justify-end gap-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {getVisibleImages().map(({ src, bgColor }, index) => (
            <div
              key={`${position}-${index}`}
              className={`relative flex-shrink-0 transition-all duration-300 ease-in-out rounded-lg overflow-hidden
                   ${bgColor}
                   ${getImageClasses(index)}`} // Pass index to get custom classes
            >
              <Image src={src} alt={`Team member ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
