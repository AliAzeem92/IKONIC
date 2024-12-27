import React from "react";
import HeroHoverButton from "./heroSection/heroHoverButton";
import CardSection from "./cards";
import cardsData from "./ui/cardsData";

const SkilledPortfolio = () => {
  return (
    <main className="flex flex-col items-center bg-[#021318] text-white p-[6%] ">
      <div className="flex items-center justify-between w-full mb-[6%] ">
        <div>
          <h1 className="text-2xl sm:text-4xl 3xl:text-6xl font-semibold">
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

      <CardSection
        cards={cardsData}
        className="-mt-12 "
        titleColor="text-white-[#FFFFFF] "
        descriptionColor="text-white-[#FFFFFF] "
        textSize="text-sm 3xl:text-xl "
      />
    </main>
  );
};

export default SkilledPortfolio;
