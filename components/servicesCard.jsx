const ServicesCard = ({ heading, description }) => {
  return (
    <main className="flex flex-col bg-[#ffffff] hover:bg-[#fdfbfb] p-[7%] gap-[20px] rounded-lg border-[lightgray] hover:border-[#1cbff3] border-2 w-full">
      <h1 className="text-lg font-semibold 3xl:text-3xl ">{heading} </h1>
      <p className="3xl:text-2xl ">{description}</p>
    </main>
  );
};

export default ServicesCard;
