import React from "react";
import HeroHoverButton from "./heroSection/heroHoverButton";
import ServicesImgCard from "./servicesImgCard";
import saas from "@/public/icons/services/saas.svg";
import cms from "@/public/icons/services/cms.svg";
import api from "@/public/icons/services/api.svg";
import ServicesCard from "./servicesCard";

const Services = () => {
  return (
    <main className="flex flex-col items-center bg-[#F4F4F4] p-[7%]">
      <div className="flex flex-col w-full sm:gap-[40px] gap-[26px]">
        <div>
          <h1 className="sm:text-5xl text-3xl font-semibold">
            Services We Offer
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:text-xl text-sm gap-[26px]">
          <div className="sm:w-[40%]">
            <p>
              Hire the ikonic team for your desired business goals you want to
              achieve in future.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center ">
            <HeroHoverButton
              className="bg-[#28C3F4] hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              text="Get Our Services"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-0 mt-7">
        <ServicesImgCard
          Img={saas}
          heading="SaaS Product Development"
          description="We offer bespoke designs and build tailored software to solve your specific challenges, ensuring your business operates with optimal efficiency and productivity."
        />
        <ServicesImgCard
          Img={cms}
          heading="ERP & CMS Development"
          description="Streamline all operations with enterprise softwares that will enhance your organization’s efficiency with reliable ERP and CMS systems . This is to simplify management, increase productivity, and boost your customer experiences."
        />
        <ServicesImgCard
          Img={api}
          heading="API Integrations"
          description="We build secure and seamless API integrations that allow your software to communicate smoothly with third-party applications and systems for enhanced functionality and reduced friction."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-14 mt-10 ">
        <ServicesCard
          heading="Automation Solutions"
          description="Automate tasks, improving workflow and freeing your team."
        />
        <ServicesCard
          heading="Module Development"
          description="Deploy modules that integrate seamlessly to scale your business easily."
        />
        <ServicesCard
          heading="Applications Maintenance"
          description="Ensure smooth software performance with fixes, updates, and improvements."
        />
        <ServicesCard
          heading="Cloud-Based Solutions"
          description="Scalable cloud-based development without worrying about infrastructure."
        />
        <ServicesCard
          heading="Privacy Solutions"
          description="Protected software and data with advanced security protocols."
        />
        <ServicesCard
          heading="Software Development"
          description="Custom software development solutions tailored to your business needs."
        />
        <ServicesCard
          heading="Bug Fixes"
          description="Resolves software bugs while enhancing the existing code"
        />
        <ServicesCard
          heading="UX/UI Development"
          description="Engaging user interfaces so that your software is as functional too."
        />
        <ServicesCard
          heading="Mobile App Development"
          description="Build high-performance mobile applications for iOS and Android. "
        />
        <ServicesCard
          heading="AI-Powered Solutions"
          description="Custom AI with machine learning, and intelligent automation."
        />
        <ServicesCard
          heading="DevOps Services"
          description="By automating testing, integration, and monitoring."
        />
        <ServicesCard
          heading="E-commerce Development"
          description="E-commerce with secure payment gateways, and product navigation."
        />
      </div>
    </main>
  );
};

export default Services;
