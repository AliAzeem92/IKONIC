import Image from "next/image";
import Img from "@/public/icons/openLink.svg";

const HeroHoverButton = ({ className, text, textClassName, onClick }) => {
  return (
    <div
      className={`flex flex-row w-fit items-center justify-center gap-5 px-[41.5px] py-[19.5px] rounded group ${className}`}
    >
      <button
        className="text-center text-lg md:text-xl 3xl:text-3xl"
        onClick={onClick ? onClick : undefined} // Attach onClick only if it's provided
      >
        {text}
      </button>
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
