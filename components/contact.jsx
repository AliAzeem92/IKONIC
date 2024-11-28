import React from "react";
import ContactCard from "./contactCard";
import WorkerReviews from "./workerReviews";

const Contact = () => {
  return (
    <div className="py-[133px] ">
      <div>
        <div className="flex flex-col items-center text-center gap-[40px] ">
          <h1 className="text-5xl font-semibold ">
            Add and Onboard Skilled
            <br />
            Talent to Your Team Seamlessly
          </h1>
          <p className="text-2xl font-light ">
            We help you identify, onboard, and integrate skilled professionals
            to
            <br />
            meet your project deadlines on time.
          </p>
        </div>
        <div>
          <ContactCard />
        </div>
        <div>
          <WorkerReviews />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
