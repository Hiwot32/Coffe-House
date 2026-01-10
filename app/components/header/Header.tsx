"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import header from "./header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession(); // check user login
  const router = useRouter();

  const handleBookingClick = () => {
    if (session) {
      router.push("/booking"); // user logged in
    } else {
      router.push("/login"); // user not logged in
    }
  };

  return (
    <div className={header.outerDiv}>
      <div className="flex justify-between w-[90%] mx-auto py-5 items-center">

        {/* LOGO */}
        <Image
          src="/images/headerImg/imgi_2_logo.svg"
          alt="Coffee Shop Logo"
          width={150}
          height={50}
        />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-bold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact Us</Link>
        </ul>

        {/* DESKTOP BOOKING BUTTON */}
        <button
          onClick={handleBookingClick}
          className={`hidden md:block text-white font-bold border border-white p-4 rounded-3xl ${header.booking}`}
        >
          Book A Table
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 text-white text-lg font-bold">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

          <button
            onClick={handleBookingClick}
            className={`border border-white px-6 py-3 rounded-3xl ${header.booking}`}
          >
            Book A Table
          </button>
        </div>
      )}
    </div>
  );
}
