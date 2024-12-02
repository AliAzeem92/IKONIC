import Image from "next/image";

const ServicesImgCard = ({ Img, heading, description }) => {
  return (
    <main className="flex flex-col bg-[#ffffff] hover:bg-[#fdfbfb] p-[7%] gap-[20px] rounded-lg border-[lightgray] border-2 ">
      <Image src={Img} alt={Img} className="mb-[20px] " />
      <h1 className="text-lg font-semibold ">{heading} </h1>
      <p>{description}</p>
    </main>
  );
};

export default ServicesImgCard;
