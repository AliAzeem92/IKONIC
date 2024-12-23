// import Image from "next/image";
// import phone from "@/public/icons/phone.svg";
// import massage from "@/public/icons/massage.svg";
// import calender from "@/public/icons/calender.svg";

// const contactData = [
//   {
//     id: 1,
//     title: "Get in Touch",
//     description:
//       "A plan that best suits your needs and submit your initial task for review.",
//     icon1: phone,
//     icon2: massage,
//     icon3: calender,
//   },
// ];

// const ContactCard = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-8 pt-[56px] px-5 ">
//       {contactData.map((card) => (
//         <div
//           key={card.id}
//           className="bg-[#F4F4F4] p-[35px] w-[386px] sm:w-[403.56px] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//         >
//           <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
//           <p className="text-gray-600 mb-4">{card.description}</p>
//           <div className="flex flex-row-reverse items-center gap-3 ">
//             <Image src={card.icon3} alt={card.icon3} />
//             <Image src={card.icon2} alt={card.icon2} />
//             <Image src={card.icon1} alt={card.icon1} width={45} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContactCard;
//
//
//
import Image from 'next/image';
import phone from '@/public/icons/phone.svg';
import massage from '@/public/icons/massage.svg';
import calender from '@/public/icons/calender.svg';

const contactData = [
  {
    id: 1,
    title: 'Get in Touch',
    description:
      'A plan that best suits your needs and submit your initial task for review.',
    icons: [
      { src: phone, alt: 'Phone Icon' },
      { src: massage, alt: 'Message Icon' },
      { src: calender, alt: 'Calendar Icon' },
    ],
  },
];

const ContactCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 pt-[56px] px-5">
      {contactData.map((card) => (
        <div
          key={card.id}
          className="bg-[#F4F4F4] bg-blend-saturation p-[30px] w-[90%] sm:w-[400px] rounded-lg "
        >
          <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <div className="flex justify-end items-center gap-3  ">
            {card.icons.map((icon, idx) => (
              <div
                key={idx}
                className="relative hover:p-2  rounded-full transition-all transform hover:scale-110 border-2 hover:border-[#12BDF3]  "
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  className="object-contain p-2 bg-[#e3e4e5] hover:bg-[#12BDF3] rounded-full "
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
