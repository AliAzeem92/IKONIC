import Image from "next/image";
import staff from "@/public/icons/staff.svg";
import skillDocs from "@/public/icons/skillDocs.svg";
import focused from "@/public/icons/focused.svg";
import teamMassage from "@/public/icons/teamMassage.svg";
import taskProgress from "@/public/icons/taskProgress.svg";
import personalizedProject from "@/public/icons/personalizedProject.svg";
import skillGroup from "@/public/icons/skillGroup.svg";
import dataProtect from "@/public/icons/dataProtect.svg";
import priceTag from "@/public/icons/priceTag.svg";
import HeroHoverButton from "./heroSection/heroHoverButton";
import OpenLinkGray from "@/public/icons/openLinkGray.svg";

const items = [
  { id: 1, src: staff, alt: staff, text: "Flexible Staff" },
  { id: 2, src: skillDocs, alt: skillDocs, text: "Dynamic Skill Allocation" },
  { id: 3, src: focused, alt: focused, text: "Focused on Efficiency" },
  {
    id: 4,
    src: teamMassage,
    alt: teamMassage,
    text: "Comprehensive Team Oversight",
  },
  {
    id: 5,
    src: taskProgress,
    alt: taskProgress,
    text: "Seamless Task Delegation",
  },
  {
    id: 6,
    src: personalizedProject,
    alt: personalizedProject,
    text: "Personalized Project Management",
  },
  { id: 7, src: skillGroup, alt: skillGroup, text: "Skill Group" },
  { id: 8, src: dataProtect, alt: dataProtect, text: "Robust Data Protection" },
  { id: 9, src: priceTag, alt: priceTag, text: "Transparent Pricing" },
  { id: 10, src: focused, alt: focused, text: "Focused on Efficiency" },
];

const PricingSlider = () => {
  return (
    <div className="bg-[#FFFFFF] text-black p-[5%] rounded-xl w-full">
      <div className="flex w-full justify-between">
        <div className="w-[70%]">
          <h1 className="text-5xl font-semibold mb-6">All Inclusive</h1>
          <p className="text-lg">
            Our pricing is designed to fit your project needs—whether you need
            one developer or an entire team. Enjoy complete flexibility.
          </p>
        </div>
        <div className="flex flex-col items-center mt-3">
          <h4 className="font-semibold mb-2">Subscribing 3 Devs</h4>
          <h1 className="text-5xl font-semibold ">$2,999</h1>
        </div>
      </div>

      <div className="flex w-full justify-between">
        {/* Grid Layout */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <Image src={item.src} alt={item.alt} width={40} height={40} />
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        {/* "Subscribing 3 Devs" Section */}
        <div className="flex flex-col items-center mt-6">
          <HeroHoverButton
            className="bg-[#28C3F4] hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            text="Get Our Services"
          />
          <div className="flex gap-5 items-center ">
            <p className="text-[gray] ">Need Custom Plan</p>
            <Image src={OpenLinkGray} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSlider;
