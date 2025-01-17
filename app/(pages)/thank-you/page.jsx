"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PartyPopper } from "lucide-react";
import greenCircleTick from "@/public/icons/greenCircleTick.svg";
import { Phone } from "lucide-react";
import HeroHoverButton from "@/components/heroSection/heroHoverButton";
import Image from "next/image";

export default function ThankYou() {
  const router = useRouter();

  return (
    <main>
      <div className="my-[5%] ">
        <div className="py-12 text-center space-y-4 ">
          <h6 className="flex space-x-2 mx-auto text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full ">
            Almost
            <br /> <b>Done</b>
            <Image
              src={greenCircleTick}
              alt="Green Circle Tick"
              className="pl-2 "
            />
          </h6>
          <h2 className="text-5xl 3xl:text-7xl font-bold text-primary">
            Thank you for your submission!
          </h2>
          <p className="text-muted-foreground 3xl:font-medium 3xl:text-3xl 3xl:py-3 ">
            Due to the high demand for Dev Subscription, Appointments are
            <br />
            First-Come, First-Serve!
          </p>
          <div className="border-b-[#CECECE] border-[0.01px] w-[80%] mx-auto "></div>
          <p className="font-medium 3xl:text-3xl ">Reserve Your Spot Now</p>
          <p className="flex items-center justify-center gap-2 ">
            <Phone className="3xl:w-10 3xl:h-10 " />
            <span className="3xl:text-3xl text-black/70">051 4800841</span>
          </p>
          <br />
          <p className="text-black/70 3xl:text-2xl ">
            Schedule Appointment Below
          </p>
          <div className="mx-auto w-fit ">
            <HeroHoverButton
              onClick={() => router.push("/")}
              className="w-fit bg-[#28C3F4] hover:bg-black hover:text-white transition-all duration-300 shadow-lg sm:w-auto"
              text="Schedule Now"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
