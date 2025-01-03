import React from "react";
import Image from "next/image";
import VUEJS from "@/public/devTech/VUEJS.svg";
import HTML from "@/public/devTech/HTML.svg";
import CSS from "@/public/devTech/CSS.svg";
import JS from "@/public/devTech/JS.svg";
import mobileRectangleBox from "@/public/caseDetail/mobileRectangleBox.svg";
import ticked from "@/public/icons/tickedBlue.svg";
import challenge from "@/public/caseDetail/challenge.svg";
import solution from "@/public/caseDetail/solution.svg";
import transformativeOutcomes from "@/public/caseDetail/transformativeOutcomes.svg";
import openLink from "@/public/icons/openLink.svg";
import rectanglePoint from "@/public/icons/rectanglePoint.svg";

const tech = [
  { src: VUEJS, alt: "VUEJS" },
  { src: HTML, alt: "HTML" },
  { src: CSS, alt: "CSS" },
  { src: JS, alt: "JavaScript" },
];

const challenges = [
  { challenge: "Security concerns for handling sensitive financial data" },
  { challenge: "Difficulty in navigation and mobile responsiveness" },
  { challenge: "Security concerns for handling sensitive financial data" },
  { challenge: "Need for seamless integration with financial tools" },
];

const transformative = [
  { point: "Enhanced user engagement and conversion rates" },
  { point: "Increased website traffic through SEO optimization" },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
  { point: "Enhanced user engagement and conversion rates" },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
  {
    point: "Improved client trust with secure, transparent tools and services",
  },
];

const start = [
  { start: "Secure and Scalable Solutions" },
  { start: "Seamless Integration with your Team" },
];

const page = () => {
  return (
    <main id="Case Studies Detail ">
      {/* Hero */}
      <div>
        <h6 className="text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center mx-auto w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
          Case studies
        </h6>
        <h1 className="text-4xl md:text-6xl 3xl:text-8xl font-semibold text-center mx-auto mt-[2%] px-[5%] ">
          Solutions for every financial life
        </h1>
        <p className="text-lg 3xl:text-3xl font-normal 3xl:font-semibold text-center mx-auto mt-[3%] text-[#021318B2] px-[16%] leading-8 ">
          <span className="hidden md:block ">
            The Air Printer App is a cutting-edge Android application designed
            to make mobile printing seamless and accessible. The app allows
            users to print documents, images, and other files directly from
            their mobile devices to any printer connected to the same Wi-Fi
            network. With a sleek interface and robust functionality, the app
            caters to both individual and professional users, offering
            unparalleled convenience and productivity.
          </span>
          <span className="sm:hidden block ">
            We&apos;ve already helped a lot of companies by providing online
            solutions. Take a look at some of our success stories!
          </span>
        </p>
        <div className="flex justify-center mt-[2%] gap-[1%] ">
          {tech.map((img) => (
            <div key={img.alt}>
              <Image
                src={img.src}
                alt={img.alt}
                className="w-16 sm:w-auto 3xl:w-64 "
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mx-auto w-[90%] ">
          <Image
            src={mobileRectangleBox}
            alt="Image"
            className="px-[7%] my-[5%] 3xl:size-[100%] "
          />
        </div>
      </div>
      {/* Challenges */}
      <div className="bg-[#F4F4F4] w-full px-[7%] py-[5%] ">
        <h1 className="text-center text-5xl 3xl:text-8xl font-semibold ">
          Challenges
        </h1>
        <p className="text-sm sm:text-lg 3xl:text-3xl text-center font-semibold md:font-normal 3xl:font-semibold text-[#021318B2] mt-[2%] sm:leading-8 md:px-[10%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="grid md:grid-cols-2 gap-3 3xl:gap-10 mt-[4%] mx-auto ">
          {challenges.map((challenge, index) => (
            <div
              key={`challenge-${index}`}
              className="flex items-center gap-3 3xl:gap-10 justify-center "
            >
              <Image src={ticked} alt="Tick Icon" className="3xl:w-[5%] " />
              <p className="text-lg 3xl:text-3xl font-normal 3xl:font-semibold text-[#021318] ">
                {challenge.challenge}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mx-auto w-[90%] ">
          <Image
            src={challenge}
            alt="Image"
            className="px-[7%] mt-[5%] 3xl:size-[100%] "
          />
        </div>
      </div>
      {/* Solution */}
      <div className="w-full px-[7%] py-[3%] ">
        <h1 className="text-center text-5xl 3xl:text-8xl font-semibold ">
          Solution
        </h1>
        <p className="text-sm sm:text-lg 3xl:text-3xl text-center font-semibold md:font-normal 3xl:font-semibold text-[#021318B2] mt-[2%] sm:leading-8 md:px-[10%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="flex justify-center mx-auto w-[90%] ">
          <Image
            src={solution}
            alt="Image"
            className="px-[7%] mt-[5%] mb-[9px] 3xl:size-[100%]  "
          />
        </div>
      </div>
      {/* Transformative Outcomes */}
      <div className="bg-[#F4F4F4] w-ful px-[7%] py-[5%] ">
        <h6 className="text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center mx-auto w-fit px-[20px] pb-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full ">
          The Results
        </h6>
        <h1 className="text-center text-5xl 3xl:text-8xl font-semibold mt-[3%] ">
          Transformative Outcomes
        </h1>
        <p className="text-sm sm:text-lg 3xl:text-3xl text-center font-semibold md:font-normal 3xl:font-semibold text-[#021318B2] mt-[2%] sm:leading-8 md:px-[10%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <div className="flex justify-center ">
          <div className="lg:flex justify-between gap-20 mt-[5%] ">
            <div className="flex flex-col gap-4 3xl:gap-10 md:w-[600px] 3xl:w-[1100px] bg-white rounded-xl px-[3%] py-5 justify-center mb-5 lg:mb-0 ">
              {transformative.map((points, index) => (
                <div
                  key={`transformativeOutcomes-${index}`}
                  className="flex gap-3 3xl:gap-5 items-center "
                >
                  <Image
                    src={rectanglePoint}
                    alt="Image"
                    className="3xl:w-3 "
                  />
                  <p className="text-xl 3xl:text-4xl text-[#021318] ">
                    {points.point}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <Image
                src={transformativeOutcomes}
                alt="Image"
                className="md:w-[600px] 3xl:w-[1100px] "
              />
            </div>
          </div>
        </div>
      </div>
      {/* Lets Start */}
      <div className="my-[5%] mx-[7%] py-[4%] bg-[#021318] text-white text-center rounded-lg 3xl:rounded-2xl ">
        <h1 className="text-3xl sm:text-5xl 3xl:text-8xl ">
          Let&apos;s Start Your Web Project!
        </h1>
        <p className="text-xl 3xl:text-3xl 3xl:font-medium px-[10%] mt-[2%] ">
          If your website isn&apos;t performing well or just doesn&apos;t
          properly represent your business, talk to us. We&apos;ll build you a
          custom solution that works.
        </p>
        <div className="flex justify-center my-[3%] ">
          <button className="flex items-center gap-3 font-medium text-lg 3xl:text-3xl bg-[#28C3F4] hover:bg-white text-black py-[10px] px-[20px] rounded-lg ">
            <span>Let&apos;s Collaborate</span>
            <Image src={openLink} alt="Open Link" className="3xl:w-5 " />
          </button>
        </div>
        <div className="grid md:grid-cols-2 mx-auto ">
          {start.map((start, index) => (
            <div
              key={`challenge-${index}`}
              className="flex sm:items-center gap-5 sm:justify-center px-7 sm:px-0 "
            >
              <Image src={ticked} alt="Tick Icon" className="3xl:w-[5%] " />
              <p className="text-lg 3xl:text-3xl font-normal 3xl:font-semibold ">
                {start.start}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
