"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import menu from "@/public/icons/menu.svg";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>
          <Image src={menu} alt={menu} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="p-2 bg-[#28C3F4] text-white rounded-lg border-4 border-gray-200 text-xl right-[280%] w-[380%] ">
        <DropdownItem className="mb-1 ">About</DropdownItem>
        <DropdownItem>Pricing</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
