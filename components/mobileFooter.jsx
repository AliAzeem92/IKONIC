import React from 'react';
import BeforeFooter from './beforeFooter';
import Image from 'next/image';

const mobileFooter = () => {
  return (
    <div className="block md:hidden">
      <BeforeFooter />
      <div className="bg-[#021318]">
        <div className="w-full md:max-w-[1240px] mx-auto">
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
              <h2 className="text-[38px] leading-[40.93px] font-medium text-white capitalize">
                More than just another agency
                <span className="text-[38px] leading-[40.93px] font-bold text-[#12BDF3] capitalize md:block">
                  &nbsp;Your team, extended.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-row gap-10 md:py-16">
            <div className="w-full md:w-6/12 flex flex-col justify-between p-5 md:p-0">
              <p className="text-base md:text-xl font-normal text-[#FFFFFFB2] max-w-[386px]">
                IKONIC is a team of talented agile developers who provide
                bespoke software development services.
              </p>
              <div className="mt-5 md:mt-0">
                <h3 className="text-lg text-white font-medium">Connect on</h3>
                <div className="flex flex-row md:flex-col gap-3">
                  <button className="flex items-center gap-3 bg-[#25D366] text-white text-base font-medium py-[16.74px] w-[218px] pl-[55px] rounded-[7.05px] mt-5">
                    WhatsApp
                    <Image
                      src="/whatsapp.svg"
                      alt="Whatsapp"
                      width={100000000}
                      height={100000000}
                      className="w-5"
                    />
                  </button>
                  <button className="flex items-center gap-3 bg-[#2AABEE] text-white text-base font-medium py-[16.74px] w-[218px] pl-[55px] rounded-[7.05px] mt-5">
                    Telegram
                    <Image
                      src="/telegram.svg"
                      alt="Telegram"
                      width={100000000}
                      height={100000000}
                      className="w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 md:py-16 mt-10 p-5 md:p-0">
            <div className="w-6/12 md:w-2/12">
              <h3 className="text-[22px] font-medium text-white leading-[23.76px]">
                Useful Links
              </h3>
              <ul className="pt-5 [&>li]:text-base [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>About Us</li>
                <li>Hire Developers</li>
                <li>Software Development</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-6/12 md:w-2/12">
              <h3 className="text-[22px] font-medium text-white leading-[23.76px]">
                Technologies
              </h3>
              <ul className="pt-5 [&>li]:text-base [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>PHP</li>
                <li>Laravel</li>
                <li>Node.Js</li>
                <li>Shopify</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-10 md:py-16 mt-10 pb-10 p-5 md:p-0">
            <div className="w-full md:w-2/12">
              <h3 className="text-[22px] font-medium text-white leading-[23.76px]">
                Contact Us
              </h3>
              <ul className="pt-5 [&>li]:text-base [&>li]:font-normal [&>li]:text-white [&>li]:mt-5">
                <li>Help</li>
                <li>FAQ</li>
                <li>info@ikonicdev.com</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mobileFooter;
