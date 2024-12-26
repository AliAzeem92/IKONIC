import Image from "next/image";
import Button from "./Button";
// import bg from "@/public/BG.svg";

const AvailabilityCard = ({
  Img,
  heading,
  description,
  variant = "default",
  whatsapp,
  telegram,
  heading2,
  button,
  className,
}) => {
  return (
    <main
      className={`flex flex-col items-center gap-[20px] rounded-2xl ${
        variant === "default"
          ? "bg-[#F4F4F4]"
          : "bg-[#021318] hover:bg-[#0b232a] hover:scale-[101%] "
      }`}
      style={
        variant !== "default"
          ? {
              // backgroundImage: `url(${bg.src})`,
              // backgroundSize: "500px 150px",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "bottom",
              // padding: "5%",
              // paddingTop: "5%",
              // border: "2px solid #223a49",
              // borderRadius: "12px",
            }
          : { padding: "5%" }
      }
    >
      {variant === "default" ? (
        <>
          <h1 className="text-lg 3xl:text-2xl font-semibold">{heading}</h1>
          <p className="3xl:text-xl ">{description}</p>
          <Image
            src={Img}
            alt={`Image for ${heading}`}
            className="mb-[20px] 3xl:w-[80%] 3xl:py-10 "
          />
        </>
      ) : (
        <div className={`flex flex-col text-white p-6 ${className} `}>
          <div className="flex flex-col justify-between gap-6 3xl:gap-10 ">
            <h2 className="text-3xl 3xl:text-5xl font-semibold">
              {heading}
              {heading2 && <br />}
              {heading2}
            </h2>
            {button && (
              <Button
                title={button}
                className="bg-[#28C3F4] hover:bg-[#1CAFE0] 3xl:text-3xl "
              />
            )}
            <div className="flex justify-center items-center md:flex-row flex-col md:gap-10 gap-5 3xl:gap-24 ">
              {whatsapp && (
                <div className="flex items-center gap-3">
                  <Image
                    src={whatsapp}
                    alt="WhatsApp Icon"
                    className="3xl:w-14 "
                  />
                  <p className="3xl:text-2xl ">WhatsApp</p>
                </div>
              )}
              {telegram && (
                <div className="flex items-center gap-3">
                  <Image
                    src={telegram}
                    alt="Telegram Icon"
                    className="3xl:w-14 "
                  />
                  <p className="3xl:text-2xl ">Telegram</p>
                </div>
              )}
            </div>
          </div>
          {description && (
            <p className="text-sm 3xl:text-2xl text-center md:mt-10 3xl:mt-20 ">
              {description}
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default AvailabilityCard;
