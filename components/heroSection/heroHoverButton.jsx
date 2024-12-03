import Image from "next/image";
import Img from "@/public/icons/openLink.svg";

const HeroHoverButton = ({ className, text }) => {
  return (
    <div
      className={`flex items-center justify-center gap-5 px-[41.5px] py-[19.5px] rounded sm:my-[42px] my-[10px] group ${className}`}
    >
      <button className="text-center text-lg sm:text-3xl w-full">{text}</button>
      <Image
        src={Img}
        alt="Went to Link"
        width={20}
        className="transition-all duration-300 group-hover:filter group-hover:invert"
      />
    </div>
  );
};

export default HeroHoverButton;
