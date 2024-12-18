import Image from "next/image";
import Button from "./Button";
import bg from "@/public/BG.svg";

const AvailabilityCard = ({
  Img,
  heading,
  description,
  variant = "default",
  whatsapp,
  telegram,
  heading2,
  button,
}) => {
  return (
    <main
      className={`flex flex-col items-center gap-[20px] rounded-2xl ${
        variant === "default" ? "bg-[#F4F4F4]" : "bg-[#319cde]"
      }`}
      style={
        variant !== "default"
          ? {
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "500px 150px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              padding: "5%",
              paddingTop: "5%",
              // border: "2px solid #223a49",
              // borderRadius: "12px",
            }
          : { padding: "5%" }
      }
    >
      {variant === "default" ? (
        <>
          <h1 className="text-lg font-semibold">{heading}</h1>
          <p>{description}</p>
          <Image src={Img} alt={`Image for ${heading}`} className="mb-[20px]" />
        </>
      ) : (
        <div className="flex flex-col text-white gap-16">
          <div className="flex flex-col justify-between gap-6">
            <h2 className="text-3xl font-semibold">
              {heading}
              {heading2 && <br />}
              {heading2}
            </h2>
            {button && (
              <Button
                title={button}
                className="bg-[#28C3F4] hover:bg-[#1CAFE0]"
              />
            )}
            <div className="flex gap-10">
              {whatsapp && (
                <div className="flex items-center gap-3">
                  <Image
                    src={whatsapp}
                    alt="WhatsApp Icon"
                    width={30}
                    height={30}
                  />
                  <p>WhatsApp</p>
                </div>
              )}
              {telegram && (
                <div className="flex items-center gap-3">
                  <Image
                    src={telegram}
                    alt="Telegram Icon"
                    width={30}
                    height={30}
                  />
                  <p>Telegram</p>
                </div>
              )}
            </div>
          </div>
          {description && (
            <p className="text-sm text-center mt-6">{description}</p>
          )}
        </div>
      )}
    </main>
  );
};

export default AvailabilityCard;
