import SubsImage from "./subsImage";
import Sub1 from "@/public/SubsImages/1.svg";
import Sub2 from "@/public/SubsImages/2.svg";
import Sub3 from "@/public/SubsImages/3.svg";
import HeroHoverButton from "./heroHoverButton";
import HeroServices from "./heroServices";
import Infinit from "./infinit";
import heroBgImage from "@/public/heroBgImage.svg";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-[53px] sm:pt-[100px] mb-[75.5px] ">
        <div className="flex bg-[#0314190F] py-[10px] px-[22px] rounded-full items-center text-xs sm:text-base 3xl:text-2xl ">
          <div>
            <span className="font-bold ">200+</span> Developers for you to
            subscribe
          </div>
          <div className="flex ml-5 ">
            <SubsImage Img={Sub1} />
            <SubsImage Img={Sub2} />
            <SubsImage Img={Sub3} />
          </div>
        </div>
        <div>
          <h1 className="text-center py-[30px] text-3xl md:text-4xl lg:text-6xl 3xl:text-8xl font-semibold px-10 ">
            Hire your Ikonic Developers in a
            <br />
            Few Simple Steps
          </h1>
        </div>
        <div>
          <h1 className="text-[#4a4a4a] max-w-[688px] 3xl:max-w-[1000px] text-center text-xl 3xl:text-3xl px-5  ">
            Say goodbye to long hiring cycles, integration headaches, and
            security concerns. Build your dream software team in just 24-48
            hours, with complete control and peace of mind.
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-5 ">
          <HeroHoverButton
            className="bg-[#28C3F4] hover:bg-black hover:text-white sm:my-[42px] my-[10px] transition-all duration-300 shadow-lg 3xl:font-semibold "
            text="Book a consultation call"
          />
          <HeroHoverButton
            className="hover:bg-black hover:text-white transition-all sm:my-[42px] my-[10px] duration-300 shadow-lg border-black border-2 3xl:font-semibold "
            text="View Our Previous Work"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between w-full lg:px-[170px] px-8 sm:py-5">
            <HeroServices text="Hire Developers in 24-48 hours" />
            <HeroServices text="Secure and Scalable Solutions" />
            <HeroServices text="Seamless Integration with your Team" />
          </div>
        </div>
      </div>
      <div>
        <></>
        <Infinit />
      </div>
    </div>
  );
};

export default Hero;
