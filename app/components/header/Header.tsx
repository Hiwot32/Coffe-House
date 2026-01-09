"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import header from "./header.module.css"


export default function Header() {
  return (
    <div className={header.outerDiv}>
        <div className="flex justify-between w-[90%] mx-auto py-5 items-center">
            <div className="">
                <Image
                    src="/images/headerImg/imgi_2_logo.svg"
                    alt="Coffee Shop Logo"
                    width={150}
                    height={50}
                />
            </div>
            <div className="">
                <ul className="flex gap-10 text-white text-lg cursor-pointer font-bold">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About Us</Link>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/contact'>Contact Us</Link>
                </ul>

            </div>
            <div className={`text-white font-bold border p-4 rounded-3xl cursor-pointer ${header.booking}`}>
                <p>Book A Table</p>

            </div>
        </div>
      
    </div>
  )
}
