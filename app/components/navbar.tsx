import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className="flex fixed top-0 left-0 right-0 bg-purple-600 p-2 pb-4 items-center justify-between z-50">
        <div className="flex gap-8 items-center">
          <p className="text-white text-center">Vatsin</p>
          
          <div className="relative">
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              className="rounded-2xl p-2 pl-10 outline-none w-[20rem]"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right Section */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Adding space for content below the fixed navbar */}
      <div className="pt-16"> {/* Adjust this value to match the height of your navbar */}
        {/* Content goes here */}
      </div>
    </>
  );
}

export default Navbar;
