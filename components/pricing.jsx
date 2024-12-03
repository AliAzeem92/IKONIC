"use client";
import PricingSlider from "./pricingSlider";

const Pricing = () => {
  return (
    <main className="flex flex-col items-center bg-[#021318] text-white p-[7%] ">
      <div className="text-center ">
        <h1 className="sm:text-5xl text-2xl font-semibold px-5 mb-10 ">
          Here is our Flat Pricing
        </h1>
        <p className="text-xl font-light px-5 mb-[7%] ">
          Our pricing is designed to fit your project needs.
        </p>
      </div>
      <PricingSlider />
    </main>
  );
};

export default Pricing;
