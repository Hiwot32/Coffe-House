"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import header from "./header.module.css"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={header.outerDiv}>
      <div className="flex justify-between items-center w-[90%] mx-auto py-5">
        
        {/* LOGO */}
        <Image
          src="/images/headerImg/imgi_2_logo.svg"
          alt="Coffee Shop Logo"
          width={150}
          height={50}
        />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* DESKTOP BOOK BUTTON */}
        <div className={`hidden md:block ${header.booking} px-6 py-3 text-white font-bold rounded-3xl`}>
          <Link href="/booking">Book A Table</Link>
        </div>

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
        <div className={`md:hidden flex flex-col items-center gap-6 py-6 text-white text-lg font-bold`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

          <Link
            href="/booking"
            className={`px-6 py-3 border border-white rounded-3xl ${header.booking}`}
            onClick={() => setOpen(false)}
          >
            Book A Table
          </Link>
        </div>
      )}
    </header>
  )
}
