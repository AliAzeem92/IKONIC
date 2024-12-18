import React from "react";
import HeroHoverButton from "./heroSection/heroHoverButton";
import SkillCards from "./skillCards";
import wooCommerce from "@/public/skills/wooCommerce.svg";
import wordpress from "@/public/skills/wordpress.svg";
import laravel from "@/public/skills/laravel.svg";
import reactJS from "@/public/skills/reactJS.svg";
import JS from "@/public/skills/JS.svg";
import wooCommerce2 from "@/public/skills/wooCommerce2.svg";

const SkilledPortfolio = () => {
  return (
    <main className="flex flex-col items-center bg-[#021318] text-white pt-[6%] pb-[13%] px-[6%] ">
      <div className="flex items-center justify-between w-full mb-[6%] ">
        <div>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Portfolio of Our
            <br />
            Skilled Professionals
          </h1>
        </div>
        <div className="hidden sm:block ">
          <HeroHoverButton
            text="See More Case Studies"
            className="bg-[#28C3F4] hover:bg-black hover:text-white text-black transition-all duration-300 shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full justify-center sm:gap-x-[2%] sm:gap-y-[6%] gap-10 ">
        <SkillCards
          Img={wooCommerce}
          Skill_1="WooCommerce"
          Skill_2="Coding"
          Heading="Optimizing Code Efficiency and Performance Enhancement for eCommPlus"
          Disc="Our team conducted a thorough code audit and implemented performance ..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
        <SkillCards
          Img={wordpress}
          Skill_1="Wordpress"
          Skill_2="Application"
          Heading="Building a Scalable Subscription Management for FlexiBilling"
          Disc="Ikonic developed a custom SaaS application that allows users to manage subscriptions, track billing cycles, and ..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
        <SkillCards
          Img={laravel}
          Skill_1="Laravel"
          Skill_2="APIs"
          Heading="We Integrated API Solutions: Real-Time Data Sync for FinTech"
          Disc="The client wanted to enhance their platform with real-time data synchronization across multiple services..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
        <SkillCards
          Img={reactJS}
          Skill_1="React.Js"
          Skill_2="App Dev"
          Heading="Mobile App Development for HealthTrack Company"
          Disc="We build a feature-rich mobile app that promotes healthy living., including fitness tracking, meal planning, and social shari..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
        <SkillCards
          Img={JS}
          Skill_1="Javascript"
          Skill_2="Optimization"
          Heading="Reengineering Legacy Systems for RetailHub"
          Disc="The client was struggled with outdated legacy systems .We migrated their legacy applications to a cloud-based architectu..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
        <SkillCards
          Img={wooCommerce2}
          Skill_1="WooCommerce"
          Skill_2="Streamlining"
          Heading="A Tailored Automation Solution for Team Collaboration"
          Disc="Our client need a solution for inefficient project management hat slowed down their productivity.For that, we developed..."
          skill1Color="white"
          skill1Bg="blue"
          skill1Border="blue"
        />
      </div>
    </main>
  );
};

export default SkilledPortfolio;
