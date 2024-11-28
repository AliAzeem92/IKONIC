import Image from "next/image";
import phone from "@/public/icons/phone.svg";
import massage from "@/public/icons/massage.svg";
import calender from "@/public/icons/calender.svg";

const contactData = [
  {
    id: 1,
    title: "Get in Touch",
    description:
      "A plan that best suits your needs and submit your initial task for review.",
    icon1: phone,
    icon2: massage,
    icon3: calender,
  },
];

const ContactCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 pt-[56px] px-5 ">
      {contactData.map((card) => (
        <div
          key={card.id}
          className="bg-[#F4F4F4] p-[35px] w-[386px] sm:w-[403.56px] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <div className="flex flex-row-reverse items-center gap-3 ">
            <Image src={card.icon3} alt={card.icon3} />
            <Image src={card.icon2} alt={card.icon2} />
            <Image src={card.icon1} alt={card.icon1} width={45} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
