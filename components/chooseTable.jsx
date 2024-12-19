// import Image from "next/image";
// import tickedWhite from "@/public/icons/tickedWhite.svg";
// import cross from "@/public/icons/cross.svg";
// import Logo from "@/public/whiteLogo.svg";
// import arrow from "@/public/icons/openLink.svg";

// const ChooseTable = () => {
//   return (
//     <main className="flex flex-col w-full bg-red-300 items-center py-[7%] ">
//       <div>
//         <h1 className="text-5xl font-semibold ">Why Choose IKONIC?</h1>
//       </div>
//       <div className="flex w-full justify-center items-center text-center mt-[70px] bg-red-400 ">
//         <table className="w-full bg-red-500 mx-[7%] ">
//           <thead>
//             <tr>
//               <th></th>
//               <th className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={Logo} alt="logo" />
//               </th>
//               <th>Freelancer</th>
//               <th>Agencies</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Billing</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 Fixed Monthly Price
//               </td>
//               <td>Hourly</td>
//               <td>Project Based</td>
//             </tr>
//             <tr>
//               <td>Dedicated Team</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={tickedWhite} alt="tickedWhite" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//             </tr>
//             <tr>
//               <td>Unlimited Development</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={tickedWhite} alt="tickedWhite" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//             </tr>
//             <tr>
//               <td>Unlimited Revisions</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={tickedWhite} alt="tickedWhite" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//             </tr>
//             <tr>
//               <td>Educational Resources</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={tickedWhite} alt="tickedWhite" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//             </tr>
//             <tr>
//               <td>Real-Time Tracking</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <Image src={tickedWhite} alt="tickedWhite" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//               <td>
//                 <Image src={cross} alt="cross" width={20} />
//               </td>
//             </tr>
//             <tr>
//               <td>Contract</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 Cancel Whenever
//               </td>
//               <td>Contracts</td>
//               <td>No Escape</td>
//             </tr>
//             <tr>
//               <td>Contract</td>
//               <td className="flex justify-center bg-[#12BDF3] ">
//                 <button className="flex gap-3 items-center px-7 py-3 rounded mt-[40px] bg-white text-black ">
//                   <h1>Submit Form</h1>
//                   <Image src={arrow} alt="Arrow" className="fil " />
//                 </button>
//               </td>
//               <td>Contracts</td>
//               <td>No Escape</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </main>
//   );
// };

// export default ChooseTable;
//
//
//
//
import Image from "next/image";
import tickedWhite from "@/public/icons/tickedWhite.svg";
import cross from "@/public/icons/cross.svg";
import Logo from "@/public/whiteLogo.svg";
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
    <div className="max-w-7xl mx-auto p-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="p-4"></th>
              <th className="p-4 text-center bg-[#12BDF3] shadow-2xl shadow-[#12BDF3] w-max mx-auto border-8 border-[#12BDF3B0] rounded-t-sm ">
                <div className=" text-white py-2 px-4 ">
                  <div className="flex justify-center items-center ">
                    <Image src={Logo} alt="Logo" />
                  </div>
                </div>
              </th>
              <th className="p-4 text-center">Freelancer</th>
              <th className="p-4 text-center">Agencies</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="border-gray-200">
              <td className="p-4">Billing</td>
              <td className="p-4 text-center text-white bg-[#12BDF3] border-x-8 border-[#12BDF3B0]  ">
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
                <td className="p-4">{feature}</td>
                <td className="p-4 bg-[#12BDF3] border-x-8 border-[#12BDF3B0] ">
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
              <td className="p-4">Contract</td>
              <td className="p-4 text-center bg-[#12BDF3] border-x-8 border-[#12BDF3B0] text-white  ">
                Cancel Whenever
              </td>
              <td className="p-4 text-center text-[gray]">Contracts</td>
              <td className="p-4 text-center text-[gray]">No Escape</td>
            </tr>
            <tr className="bg-gray-100 ">
              <td className="p-4">Contract</td>
              <td className="p-4 text-center bg-[#12BDF3] border-x-8 border-b-8 border-[#12BDF3B0]  ">
                <div className="flex gap-2 justify-center items-center">
                  <p>Submit Form </p>
                  <Image
                    src={openLink}
                    alt="Open Link"
                    width={16}
                    height={16}
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
