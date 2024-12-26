import React from "react";
import AvailabilityCard from "./availabilityCard";
import hiring from "@/public/availability/hiring.svg";
import timeZone from "@/public/availability/timeZone.svg";
import projectManagment from "@/public/availability/projectManagment.svg";
import encrypted from "@/public/availability/encrypted.svg";
import workforce from "@/public/availability/workforce.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import telegram from "@/public/icons/telegram.svg";

const Availability = () => {
  return (
    <main className="flex flex-col items-center p-[8%] text-center ">
      <div>
        <h1 className="font-semibold text-5xl 3xl:text-7xl mb-[7%] ">
          Unlock the Power of Agile
          <br />
          Staffing Solutions
        </h1>
        <p className="text-xl 3xl:text-3xl mb-[7%] ">
          Efficient, secure, and scalable developers tailored to your project
          <br />
          needs — all within your time zone and on your timeline.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <AvailabilityCard
          heading="Fast Hiring in 24-48 Hrs"
          description="Onboard skilled developers in 24-48 hours with our fast, streamlined recruitment process to keep your project moving."
          Img={hiring}
        />
        <AvailabilityCard
          heading="Available in Your Time Zone"
          description="Our developers work in your time zone, ensuring seamless communication and real-time feedback for smooth project progress."
          Img={timeZone}
        />
        <AvailabilityCard
          heading="Dedicated Project Manager"
          description="A dedicated project manager ensures clear communication, smooth workflows, and timely deliveries, so you can focus on the big picture."
          Img={projectManagment}
        />
        <AvailabilityCard
          heading="IP & Data Security"
          description="We adhere to strict confidentiality agreements and security protocols to safeguard your intellectual property and sensitive data."
          Img={encrypted}
        />
        <AvailabilityCard
          variant="alternate"
          heading="Schedule A Free"
          heading2="Discovery Call"
          button="Let's Talk..."
          whatsapp={whatsapp}
          telegram={telegram}
          description="A 20-min discovery call to discuss your project."
          className="sm:block hidden"
        />

        <AvailabilityCard
          heading="Scalable Workforce"
          description="Quickly adjust your team size with our scalable workforce, ensuring you always have the resources you need."
          Img={workforce}
        />
        <AvailabilityCard
          variant="alternate"
          heading="Schedule A Free"
          heading2="Discovery Call"
          button="Lets Talk..."
          whatsapp={whatsapp}
          telegram={telegram}
          description="A 20-min discovery call to discuss your project."
          className="block sm:hidden "
        />
      </div>
    </main>
  );
};

export default Availability;
