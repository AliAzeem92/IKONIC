"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Button from "./Button";

const menuItems = [
  { label: "Case Listing", href: "/casestudieslisting" },
  { label: "Case Detail", href: "/casestudiesdetail" },
  { label: "Blog Listing", href: "/blogsListing" },
  { label: "Blog Detail", href: "/blogsDetail" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export function Navigation() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
          <Menu />
          <span className="sr-only">Open menu</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="xxxs:w-[250px] xxs:w-[300px] xs:w-[350px] bg-gradient-to-bl from-blue-300 via-blue-400 to-purple-500 border-2 border-white"
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                className="w-full cursor-pointer text-white text-xl "
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <Button title="Lets Talk" className="bg-black w-fit ml-2 " />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
