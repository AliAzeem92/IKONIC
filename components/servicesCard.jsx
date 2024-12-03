const ServicesCard = ({ heading, description }) => {
  return (
    <main className="flex flex-col bg-[#ffffff] hover:bg-[#fdfbfb] p-[7%] gap-[20px] rounded-lg border-[lightgray] hover:border-[#1cbff3] border-2 ">
      <h1 className="text-lg font-semibold ">{heading} </h1>
      <p>{description}</p>
    </main>
  );
};

export default ServicesCard;
