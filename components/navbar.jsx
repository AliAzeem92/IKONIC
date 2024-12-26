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
        <div className="sm:flex gap-[84px] items-center hidden ">
          <ul className="flex gap-[55px] font-semibold text-lg 3xl:text-4xl ">
            {" "}
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <div>
            <Button title="Lets Talk..." className="bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
