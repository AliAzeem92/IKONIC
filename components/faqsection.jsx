"use client";
import { useState } from "react";
import Image from "next/image";
import verified from "@/public/verified.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active FAQ

  // Handle the toggle functionality
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close FAQ
  };

  const faqs = [
    {
      question:
        "What types of software development services does Ikonic offer?",
      answer:
        "You can reach out to us through our contact form or email. We will discuss your project requirements and connect you with the most suitable developers based on your needs.",
      solution: {
        title: "On-Demand Talent Matching",
        icon: verified,
      },
    },
    {
      question:
        "What types of software development services does Ikonic offer?",
      answer:
        "You can reach out to us through our contact form or email. We will discuss your project requirements and connect you with the most suitable developers based on your needs.",
      solution: {
        title: "On-Demand Talent Matching",
        icon: verified,
      },
    },
    {
      question:
        "What types of software development services does Ikonic offer?",
      answer:
        "You can reach out to us through our contact form or email. We will discuss your project requirements and connect you with the most suitable developers based on your needs.",
      solution: {
        title: "On-Demand Talent Matching",
        icon: verified,
      },
    },
  ];

  return (
    <div>
      <div className="w-full md:max-w-[1240px] mx-auto mt-[75px]">
        <h3 className="text-[48px] 3xl:text-[70px] font-medium text-center tracking-tighter text-[#021318] leading-[57.6px]">
          Frequently Asked Questions
        </h3>
        <p className="text-xl 3xl:text-3xl text-[#021318CC] text-center mt-[25px]">
          Connect with your new team members without the hassle of recruiting.
        </p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-section border-b ${
              activeIndex === index ? "border-[#000]" : "border-[#ccd0d1]"
            } ${
              activeIndex === index ? "py-0" : "py-5"
            } transition-all duration-300`}
          >
            <div
              className="flex gap-10 w-full md:max-w-[1190px] 3xl:max-w-full 3xl:px-[7%] mx-auto justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)} // Open FAQ on any click in the section
            >
              <div className="faq-question">
                <div className="flex items-center gap-5">
                  <span className="text-2xl 3xl:text-5xl 3xl:font-semibold font-bold">
                    Q{index + 1}
                  </span>
                  <h3
                    className={`text-[26px] 3xl:text-[40px] font-medium leading-[31.2px] tracking-tighter ${
                      activeIndex === index ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-300`}
                  >
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index && (
                  <p className="text-lg 3xl:text-2xl font-normal text-[#021318CC] mt-8 opacity-100 transition-all ease-in-out duration-1000 delay-200">
                    {faq.answer}
                  </p>
                )}
              </div>

              {/* Solutions box appears when FAQ is open */}
              {activeIndex === index && (
                <div className="bg-[#12BDF3] rounded-xl py-6 m-5 opacity-100 transition-all ease-in-out duration-1000 delay-300">
                  <div className="text-center">
                    <Image
                      src={faq.solution.icon}
                      alt="Verified"
                      className="mx-auto mb-2 "
                    />
                    <span className="text-base 3xl:text-2xl 3xl:font-semibold font-normal text-white ">
                      Solutions
                    </span>
                  </div>
                  <p className="text-lg 3xl:text-2xl 3xl:font-semibold font-medium text-white text-center w-[270px] mt-2">
                    {faq.solution.title}
                  </p>
                </div>
              )}

              {/* Toggle icon - plus or minus */}
              <div
                className={`flex items-center mt-4 ${
                  activeIndex === index
                    ? "bg-[#12BDF3] 3xl:px-7 3xl:py-10 py-7 px-6 h-5 rounded-full "
                    : "bg-[#F3F3F3] py-5 px-5 rounded-full"
                } text-center transition-all duration-300`}
              >
                <Image
                  src={activeIndex === index ? "/minus.svg" : "/plus-icon.svg"}
                  alt="toggle-icon"
                  width={24}
                  height={24}
                  className="w-4 3xl:w-6 fill-slate-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
