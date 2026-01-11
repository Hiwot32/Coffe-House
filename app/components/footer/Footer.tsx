"use client";
import React from "react";
import footer from "./footer.module.css";


export default function Footer() {
  return (
    <div className="py-20 bg-[linear-gradient(rgba(25,34,37,0.82),rgba(25,34,37,0.83)),url('/images/footerImg/footerBg.jpg')] bg-cover">
      <div className="flex flex-col md:flex-row justify-between w-[88%] mx-auto py-15 gap-10 md:gap-0">
        <div className="flex flex-col items-center text-center flex-1 border-b border-gray-600 pb-10 md:pb-0 md:border-b-0 md:border-r">
          <p className="pt-4 text-2xl text-[var(--header-btn)]">CONTACT US</p>
          <p className="py-1 text-lg text-white">T. +123 456 789</p>
          <p className="text-lg text-white">M. info@domainname.com</p>
        </div>

        <div className="flex flex-col items-center text-center flex-1 border-b border-gray-600 pb-10 md:pb-0 md:border-b-0 md:border-r">
          <p className="pt-4 text-2xl text-[var(--header-btn)]">ADDRESS</p>
          <p className="py-1 text-lg text-white px-4">
            29721 Westheimer Road, <br /> Santa Ana, Illinois 85486
          </p>
        </div>

        <div className="flex flex-col items-center text-center flex-1">
          <p className="pt-4 text-2xl text-[var(--header-btn)]">OPENING HOURS</p>
          <p className="py-1 text-lg text-white">
            Everyday: From 12.30 To 23.00 <br />
            Kitchen Closes At 22.00
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center w-[88%] mx-auto mt-10 border-t border-gray-600 pt-6 text-white">
        <p>Copyright &copy; 2026 All Rights Reserved.</p>
      </div>
    </div>
  );
}
