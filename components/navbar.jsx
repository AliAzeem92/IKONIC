"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import Logo from "@/public/logo.svg";
import { Navigation } from "./navigation";

const Navbar = () => {
  const pathname = usePathname(); // Updated hook

  const menuItems = [
    { label: "Case Listing", href: "/casestudieslisting" },
    { label: "Case Detail", href: "/casestudiesdetail" },
    { label: "Blog Listing", href: "/blogsListing" },
    { label: "Blog Detail", href: "/blogsDetail" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="flex w-full px-5 sm:px-[25px] lg:px-[50px] pt-[20px]">
      <div className="flex justify-between w-full p-4 sm:px-[30px] sm:py-[16px] bg-white rounded-lg items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" className="3xl:w-80" />
          </Link>
        </div>
        {/* <DropDown /> */}
        <div className="sm:hidden ">
          <Navigation />
        </div>
        <div className="sm:flex gap-[15px] lg:gap-[84px] items-center hidden">
          <ul className="flex pl-5 gap-[8px] lg:gap-[60px] font-semibold text-xs lg:text-lg 3xl:text-4xl items-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <div
                    className={`${
                      pathname === item.href ? "underline text-blue-400 " : ""
                    } hover:underline hover:text-blue-400 `}
                  >
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Button title="Lets Talk" className="bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
