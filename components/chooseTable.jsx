import Image from "next/image";
import tickedWhite from "@/public/icons/tickedWhite.svg";
import cross from "@/public/icons/cross.svg";
import Logo from "@/public/smallLogo.svg";
import openLink from "@/public/icons/openLink.svg";

const ComparisonTable = () => {
  const features = [
    "Dedicated Team",
    "Unlimited Development",
    "Unlimited Revisions",
    "Educational Resources",
    "Real-Time Tracking",
  ];

  return (
    <div className="max-w-7xl flex flex-col items-center py-[7%] sm:gap-16 gap-10  ">
      <div>
        <h1 className="sm:text-5xl text-xl font-semibold ">
          Why Choose IKONIC?
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm ">
              <th className="sm:p-4 sm:w-96 "></th>
              <th className="p-4 text-center bg-[#12BDF3] shadow-2xl shadow-[#12BDF3] w-max mx-auto border-8 border-[#12BDF3B0] rounded-t-lg ">
                <div className=" text-white sm:py-2 sm:px-4 ">
                  <div className="flex justify-center items-center sm:w-auto sm:h-auto ">
                    <Image src={Logo} alt="Logo" />
                  </div>
                </div>
              </th>
              <th className="sm:p-4 sm:w-96 text-center">Freelancer</th>
              <th className="sm:p-4  sm:w-96 text-center">Agencies</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="border-gray-200">
              <td className="p-4 font-semibold ">Billing</td>
              <td className="p-4 text-center text-white shadow-2xl shadow-[#12BDF3] bg-[#12BDF3] border-x-8 border-[#12BDF3B0]  ">
                Fixed Monthly Price
              </td>
              <td className="p-4 text-center text-[gray] ">Hourly</td>
              <td className="p-4 text-center text-[gray] ">Project Based</td>
            </tr>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="p-4 font-semibold ">{feature}</td>
                <td className="p-4 bg-[#12BDF3] border-x-8 border-[#12BDF3B0] shadow-2xl shadow-[#12BDF3] ">
                  <div className="flex justify-center items-center ">
                    <Image
                      src={tickedWhite}
                      alt="Tick"
                      width={16}
                      height={16}
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center items-center">
                    <Image src={cross} alt="Cross" width={16} height={16} />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center items-center">
                    <Image src={cross} alt="Cross" width={16} height={16} />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-4 font-semibold ">Contract</td>
              <td className="p-4 text-center shadow-2xl shadow-[#12BDF3] bg-[#12BDF3] border-x-8 border-[#12BDF3B0] text-white  ">
                Cancel Whenever
              </td>
              <td className="p-4 text-center text-[gray]">Contracts</td>
              <td className="p-4 text-center text-[gray]">No Escape</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-4 font-semibold ">Contract</td>
              <td className="sm:p-4 text-center shadow-2xl shadow-[#12BDF3] bg-[#12BDF3] border-x-8 border-b-8 border-[#12BDF3B0] rounded-b-lg ">
                <div className="flex gap-4 justify-center items-center sm:text-lg text-xs bg-white py-2 sm:px-10 rounded-lg font-semibold sm:w-56 ">
                  <p>Submit Form </p>
                  <Image
                    src={openLink}
                    alt="Open Link"
                    width={16}
                    height={16}
                    className="hidden sm:block "
                  />
                </div>
              </td>
              <td className="p-4 text-center text-[gray]">Cancel Whenever</td>
              <td className="p-4 text-center text-[gray]">No Escape</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
