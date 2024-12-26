import Image from "next/image";
import tick from "@/public/icons/ticked.svg";

const HeroServices = ({ text }) => {
  return (
    <div className="flex items-center gap-5 lg:text-xl 3xl:text-3xl text-base py-1 sm:py-0 ">
      <Image src={tick} alt="Tick Icon" className="3xl:w-10 " />
      <h1>{text} </h1>
    </div>
  );
};

export default HeroServices;
