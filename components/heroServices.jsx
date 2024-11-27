import Image from "next/image";
import tick from "@/public/icons/ticked.svg";

const HeroServices = ({ text }) => {
  return (
    <div className="flex items-center gap-5 text-xl ">
      <Image src={tick} alt="Tick Icon" width={32} />
      <h1>{text} </h1>
    </div>
  );
};

export default HeroServices;
