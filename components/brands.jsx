import Image from "next/image";
import doobert from "@/public/brands/doobert.svg";
import herco from "@/public/brands/herco.svg";
import deliverybr from "@/public/brands/deliverybr.svg";

const Brands = () => {
  const listData = [
    {
      heading: "200",
      symbol: "+",
      info: "Tasks Delivered",
    },
    {
      heading: "100",
      symbol: "+",
      info: "Projects Completed",
    },
    {
      heading: "96",
      symbol: "%",
      info: "Client Retention",
    },
  ];

  const imageList = [
    { src: doobert, alt: "Doobert" },
    { src: herco, alt: "Herco" },
    { src: deliverybr, alt: "DeliveryBR" },
    { src: deliverybr, alt: "DeliveryBR" },
    { src: doobert, alt: "Doobert" },
    { src: herco, alt: "Herco" },
  ];

  return (
    <main className="flex sm:flex-row flex-col sm:gap-20 justify-center sm:py-20 py-10 px-5 ">
      <div>
        <div className="sm:text-4xl text-2xl 3xl:text-6xl font-semibold mb-10">
          Chosen by Global Leading
          <br />
          Brands and Agencies
        </div>
        <div className="flex gap-10">
          {listData.map((section, index) => (
            <div key={index} className="relative pl-6">
              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(18, 189, 243, 0.8) 0%, rgba(18, 189, 243, 0) 100%)",
                  borderRadius: "2px",
                }}
              ></div>
              <div className="flex flex-col gap-2 ">
                <span className="flex items-center text-2xl 3xl:text-5xl font-bold ">
                  <h3>{section.heading}</h3>
                  <h3 className="text-[#12BDF3]">{section.symbol}</h3>
                </span>
                <p className="text-xs 3xl:text-lg font-semibold sm:font-normal ">
                  {section.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-10 items-center ">
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="filter grayscale 3xl:size-[110%] "
          />
        ))}
      </div>
    </main>
  );
};

export default Brands;
