import Image from "next/image";
import star from "@/public/icons/star.svg";
import line from "@/public/icons/curlyLine.svg";
import skillGroup from "@/public/icons/skillGroup.svg";
import arrow from "@/public/icons/openLink.svg";
import tickedWhite from "@/public/icons/tickedWhite.svg";
import cross from "@/public/icons/cross.svg";
import Logo from "@/public/whiteLogo.svg";

const Choose = () => {
  return (
    <main className="flex flex-col w-[100%] items-center px-5 pt-5  ">
      <div className="bg-[#F7F7F9] p-[3%] w-full rounded-xl  ">
        <div className="flex sm:flex-row flex-col-reverse sm:gap-28 gap-10 pt-4 ">
          <div className="relative">
            <Image
              src={star}
              alt="star"
              width={50}
              className="absolute left-0 -top-5 "
            />
            <Image src={skillGroup} alt="skillGroup" />
          </div>
          <div className="mt-5 relative ">
            <Image
              src={line}
              alt="Curly line"
              className="absolute right-0 -top-5 "
            />
            <span className="py-1 px-4 bg-[#d5edf6] rounded-full ">
              <b>50+</b> Technologies
            </span>
            <h1 className="text-5xl font-semibold mt-[40px] ">
              Build With
              <br />
              the Tools You Love.
            </h1>
            <p className="text-xl mt-[40px] ">
              While we do have our favorites, our diverse development
              <br />
              staff will work on the tech-stack you decide.
            </p>
            <button className="flex gap-3 items-center px-7 py-3 rounded mt-[40px] bg-black text-white ">
              <h1>Explore Now</h1>
              <Image src={arrow} alt="Arrow" className="fil " />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center py-[7%] ">
        <div>
          <h1 className="text-5xl font-semibold ">Why Choose IKONIC?</h1>
        </div>
        <div className="flex w-full justify-center mt-[70px] ">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="bg-[#12BDF3] ">
                  <Image src={Logo} alt="logo" />
                </th>
                <th>Freelancer</th>
                <th>Agencies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Billing</td>
                <td className="bg-[#12BDF3] ">Fixed Monthly Price</td>
                <td>Hourly</td>
                <td>Project Based</td>
              </tr>
              <tr>
                <td>Dedicated Team</td>
                <td className="bg-[#12BDF3] ">
                  <Image src={tickedWhite} alt="tickedWhite" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
              </tr>
              <tr>
                <td>Unlimited Development</td>
                <td className="bg-[#12BDF3] ">
                  <Image src={tickedWhite} alt="tickedWhite" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
              </tr>
              <tr>
                <td>Unlimited Revisions</td>
                <td className="bg-[#12BDF3] ">
                  <Image src={tickedWhite} alt="tickedWhite" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
              </tr>
              <tr>
                <td>Educational Resources</td>
                <td className="bg-[#12BDF3] ">
                  <Image src={tickedWhite} alt="tickedWhite" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
              </tr>
              <tr>
                <td>Real-Time Tracking</td>
                <td className="bg-[#12BDF3] ">
                  <Image src={tickedWhite} alt="tickedWhite" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
                <td>
                  <Image src={cross} alt="cross" width={20} />
                </td>
              </tr>
              <tr>
                <td>Contract</td>
                <td className="bg-[#12BDF3] ">Cancel Whenever</td>
                <td>Contracts</td>
                <td>No Escape</td>
              </tr>
              <tr>
                <td>Contract</td>
                <td className="bg-[#12BDF3] ">
                  <button className="flex gap-3 items-center px-7 py-3 rounded mt-[40px] bg-white text-black ">
                    <h1>Submit Form</h1>
                    <Image src={arrow} alt="Arrow" className="fil " />
                  </button>
                </td>
                <td>Contracts</td>
                <td>No Escape</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Choose;