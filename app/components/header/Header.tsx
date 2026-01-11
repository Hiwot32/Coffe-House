"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import header from "./header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleBookingClick = () => {
    router.push("/login?callbackUrl=/booking");
  };

  return (
    <div className={header.outerDiv}>
      <div className="flex justify-between w-[90%] mx-auto py-5 items-center">

        <Image
          src="/images/headerImg/imgi_2_logo.svg"
          alt="Coffee Shop Logo"
          width={150}
          height={50}
        />

        <ul className="hidden md:flex gap-10 text-white text-lg font-bold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact Us</Link>
        </ul>

        <div className="hidden md:block">
          {!session ? (
            <button
              onClick={handleBookingClick}
              className={`text-white font-bold border border-white p-4 rounded-3xl ${header.booking}`}
            >
              Book A Table
            </button>
          ) : (
            <div className="flex items-center gap-4 border border-white px-5 py-3 rounded-3xl">
              <span className="text-white font-semibold">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-red-400 hover:text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 text-white text-lg font-bold">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

          {!session ? (
            <button
              onClick={() => {
                setOpen(false);
                handleBookingClick();
              }}
              className={`border border-white px-6 py-3 rounded-3xl ${header.booking}`}
            >
              Book A Table
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2 border border-white px-6 py-3 rounded-3xl">
              <span>{session.user?.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-red-400"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
