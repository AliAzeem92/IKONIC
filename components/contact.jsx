import React from "react";
import ContactCard from "./contactCard";
import WorkerReviews from "./workerReviews";

const Contact = () => {
  return (
    <div className="sm:py-[133px] py-[60px] ">
      <div>
        <div className="flex flex-col items-center text-center sm:gap-[40px] gap-[26px] ">
          <h1 className="sm:text-5xl text-2xl font-semibold px-5 ">
            Add and Onboard Skilled
            <br />
            Talent to Your Team Seamlessly
          </h1>
          <p className="sm:text-2xl text-lg sm:font-light px-3 ">
            We help you identify, onboard, and integrate skilled professionals
            to
            <br />
            meet your project deadlines on time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
        <div>
          <WorkerReviews />
        </div>
      </div>
    </div>
  );
};

export default Contact;
