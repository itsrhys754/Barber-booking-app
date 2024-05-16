"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="p-5 shadow-sm flex justify-between items-center bg-white">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={100} />
        </Link>
        <div className="ml-8 hidden md:flex gap-6">
          <Link
            href={"/"}
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            About us
          </Link>
          <Link
            href={"https://blackwoodbarber.setmore.com/beta"}
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Book
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <button
          id="menu-toggle"
          className="text-gray-700 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`md:hidden ${
          showMenu ? "fixed top-0 left-0 w-full h-screen bg-white z-50" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            href={"/"}
            className="block py-4 text-gray-700 hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="block py-4 text-gray-700 hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="block py-4 text-gray-700 hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            About us
          </Link>
          <Link
            href={"https://blackwoodbarber.setmore.com/beta"}
            className="block py-4 text-gray-700 hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Book
          </Link>
        </div>
      </div>
      {/* <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Login / Sign Up</Button>
        )}
      </div> */}
    </div>
  );
}

export default Header;