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
      <DropdownMenu className="p-2 bg-blue-500 text-white rounded-lg  ">
        <DropdownItem>About</DropdownItem>
        <DropdownItem>Pricing</DropdownItem>
        <DropdownItem>Delete file</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
