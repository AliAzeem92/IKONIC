import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import DropDown from "./dropDown";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex w-full px-5 sm:px-[50px] pt-[20px]">
      <div className="flex justify-between w-full p-4 sm:px-[30px] sm:py-[16px] bg-white rounded-lg items-center ">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" className="3xl:w-80 " />
          </Link>
        </div>
        <div className="sm:hidden ">
          <DropDown />
        </div>
        <div className="sm:flex gap-[60px] lg:gap-[84px] items-center hidden ">
          <ul className="flex gap-[45px] lg:gap-[55px] font-semibold text-lg 3xl:text-4xl items-center ">
            <div className="flex gap-2 font-semibold text-xs 3xl:text-lg ">
              <li>
                <a className="text-blue-400 " href="/casestudieslisting">
                  CS Listing
                </a>
              </li>
              <li>
                <a className="text-blue-400 " href="/casestudiesdetail">
                  CS Detail
                </a>
              </li>
              <li>
                <a className="text-blue-400 " href="/blogsListing">
                  B Listing
                </a>
              </li>
              <li>
                <a className="text-blue-400 " href="/blogsDetail">
                  B Detail
                </a>
              </li>
            </div>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
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
