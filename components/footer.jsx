import Image from "next/image";
import BeforeFooter from "./beforeFooter";
import whatsapp from "@/public/whatsapp.svg";
import telegram from "@/public/telegram.svg";
import arrowup from "@/public/arrow-up.svg";

const Footer = () => {
  return (
    <div className="hidden md:block">
      <BeforeFooter />
      <div className="bg-[#021318] px-10 3xl:px-20 ">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:border-b md:border-[#FFFFFF1A] py-10 md:py-20">
            <div className="w-full md:w-1/2 p-5 md:p-0">
              <Image
                src="/iKonic-logo.svg"
                alt="iKoninc Logo"
                width={100000000}
                height={100000000}
                className="w-[55%] md:w-[70%]"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 md:p-0">
              <h2 className="text-4xl 3xl:text-6xl font-medium text-white capitalize">
                More than just another agency
                <span className="text-4xl 3xl:text-6xl font-bold text-[#12BDF3] capitalize md:block">
                  Your team, extended.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:py-16">
            <div className="w-full md:w-6/12 flex flex-col justify-between">
              <p className="text-base md:text-xl 3xl:text-3xl font-normal text-[#FFFFFFB2] w-1/2 ">
                IKONIC is a team of talented agile developers who provide
                bespoke software development services.
              </p>
              <div className="mt-5 3xl:mt-10 ">
                <h3 className="text-lg 3xl:text-2xl text-white font-medium">
                  Connect on
                </h3>
                <div>
                  <button className="flex items-center bg-[#25D366] text-white text-lg 3xl:text-3xl px-7 py-4 rounded mt-5 ">
                    <span>Whatsapp</span>
                    <Image
                      src={whatsapp}
                      alt="Button Image"
                      className="ml-2 3xl:ml-4 3xl:w-10 "
                    />
                  </button>
                  <button className="flex items-center bg-[#2AABEE] text-white text-lg 3xl:text-3xl px-8 py-4 rounded mt-5 ">
                    <span>Telegram</span>
                    <Image
                      src={telegram}
                      alt="Button Image"
                      className="ml-2 3xl:ml-4 3xl:w-10 "
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-6/12 md:w-2/12">
              <h3 className="text-2xl 3xl:text-4xl font-medium text-white ">
                Useful Links
              </h3>
              <ul className="pt-5 text-base 3xl:text-2xl [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>About Us</li>
                <li>Hire Developers</li>
                <li>Software Development</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-6/12 md:w-2/12">
              <h3 className="text-2xl 3xl:text-4xl font-medium text-white ">
                Technologies
              </h3>
              <ul className="pt-5 text-base 3xl:text-2xl [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>PHP</li>
                <li>Laravel</li>
                <li>Node.Js</li>
                <li>Shopify</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
              </ul>
            </div>
            <div className="w-full md:w-2/12">
              <h3 className="text-2xl 3xl:text-4xl font-medium text-white ">
                Contact Us
              </h3>
              <ul className="pt-5 text-base 3xl:text-2xl [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>Help</li>
                <li>FAQ</li>
                <li>info@ikonicdev.com</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between py-10 border-t border-[#FFFFFF1A]">
            <p className="text-base 3xl:text-2xl font-normal text-white">
              © 2024 Rights Reserved. Designed By IKONIC
            </p>
            <span className="flex gap-4 items-center 3xl:text-2xl font-normal text-white">
              Back to the top
              <Image src={arrowup} alt="arrow" className="3xl:w-9 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
