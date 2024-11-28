import Navbar from "./navbar";
import SubsImage from "./subsImage";
import Sub1 from "@/public/SubsImages/1.svg";
import Sub2 from "@/public/SubsImages/2.svg";
import Sub3 from "@/public/SubsImages/3.svg";
import HeroHoverButton from "./heroHoverButton";
import HeroServices from "./heroServices";
import Infinit from "./infinit";

const Hero = () => {
  return (
    <div className="bg-[#f1f1f1] ">
      <Navbar />
      <div className="flex flex-col items-center mt-[53px] sm:t-[100px] mb-[75.5px] ">
        <div className="flex bg-[#0314190F] py-[10px] px-[22px] rounded-full items-center text-xs sm:text-base  ">
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
          <h1 className="text-center py-[30px] text-3xl sm:text-5xl font-semibold px-10 ">
            Hire your Ikonic Developers in a
            <br />
            Few Simple Steps
          </h1>
        </div>
        <div>
          <h1 className="text-[#4a4a4a] max-w-[688px] text-center text-xl px-5  ">
            Say goodbye to long hiring cycles, integration headaches, and
            security concerns. Build your dream software team in just 24-48
            hours, with complete control and peace of mind.
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-5 ">
          <HeroHoverButton
            className="bg-[#28C3F4] hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            text="Book a consultation call"
          />
          <HeroHoverButton
            className="hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg border-black border-2 "
            text="View Our Previous Work"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-screen sm:px-[183px] px-8 py-5 ">
          <HeroServices text="Hire Developers in 24-48 hours" />
          <HeroServices text="Secure and Scalable Solutions" />
          <HeroServices text="Seamless Integration with your Team" />
        </div>
      </div>
      <div>
        <Infinit />
      </div>
    </div>
  );
};

export default Hero;
