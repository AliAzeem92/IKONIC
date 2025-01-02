import Image from "next/image";
import star from "@/public/icons/star.svg";
import line from "@/public/icons/curlyLine.svg";
import arrow from "@/public/icons/openLinkWhite.svg";
import ComparisonTable from "./chooseTable";
import ImageSlider from "./imageSlider";
import {
  database,
  database2,
  database3,
  tech,
  tech2,
  tech3,
} from "@/data/constants";

const Choose = () => {
  return (
    <main className="flex flex-col w-full items-center px-5 pt-5  ">
      <div className="flex flex-col lg:flex-row justify-center bg-[#F7F7F9] p-[3%] w-full rounded-xl  ">
        <div className="flex lg:flex-row flex-col-reverse sm:gap-20 gap-10 3xl:gap-32 pt-4 items-center ">
          <div className="relative">
            <Image
              src={star}
              alt="star"
              className="absolute left-0 -top-5 3xl:-top-10 3xl:w-[10%] "
            />
            <div className="md:w-[600px] 3xl:w-[1000px] -rotate-3 ">
              <ImageSlider images={tech} direction="left" speed={1} />
              <ImageSlider images={database} direction="right" speed={1} />
              <ImageSlider images={tech2} direction="left" speed={1} />
              <ImageSlider images={database2} direction="right" speed={1} />
              <ImageSlider images={tech3} direction="left" speed={1} />
              <ImageSlider images={database3} direction="right" speed={1} />
            </div>
          </div>
          <div className="mt-5 relative ">
            <Image
              src={line}
              alt="Curly line"
              className="absolute right-0 -top-5 3xl:w-[10%] "
            />
            <span className="py-1 px-4 3xl:py-3 3xl:px-6 3xl:text-xl bg-[#d5edf6] rounded-full ">
              <b>50+</b> Technologies
            </span>
            <h1 className="text-5xl 3xl:text-7xl font-semibold mt-[40px] ">
              Build With
              <br />
              the Tools You Love.
            </h1>
            <p className="text-xl 3xl:text-3xl mt-[40px] ">
              While we do have our favorites, our diverse development
              <br />
              staff will work on the tech-stack you decide.
            </p>
            <button className="flex gap-3 3xl:gap-5 items-center px-7 py-3 rounded mt-[40px] bg-black text-white 3xl:text-3xl ">
              <h1>Explore Now</h1>
              <Image src={arrow} alt="Arrow" className="3xl:w-6 " />
            </button>
          </div>
        </div>
      </div>

      <ComparisonTable />
    </main>
  );
};

export default Choose;
