"use client";
import React from "react";
import about from "./about.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="px-10 py-37 bg-[rgb(18,29,35)] bg-[url('/images/aboutImg/imgi_45_about-bg-image.png')] bg-contain">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-30 mx-auto text-white items-center">
        <div className="w-80 md:w-150">
          <p className="text-sm font-bold">About Us</p>
          <p className="text-4xl pb-8">
            BRINGING PEOPLE TOGETHER, ONE CUP AT A TIME
          </p>
          <div className="flex gap-7 pb-6">
            <Image
              src="/images/aboutImg/download (1).svg"
              alt="cup"
              width={35}
              height={35}
            />
            <p className="text-lg">
              <span className="text-xl font-bold">Food Delivery</span>
              <br />
              With our fast and reliable food delivery service, your favorite
              coffee, snacks, and treats are just a click away.
            </p>
          </div>
          <div className="flex gap-7">
            <Image
              src="/images/aboutImg/download.svg"
              alt="cup"
              width={35}
              height={35}
            />
            <p className="text-lg">
              <span className="text-xl font-bold">Event Elegance</span>
              <br />
              Host your special moments with us! From intimate gatherings to
              vibrant celebrations offers.
            </p>
          </div>
        </div>

        <div className="relative ">
          <div className="relative  rounded-t-full overflow-hidden group">
            <Image
              src="/images/aboutImg/imgi_4_about-us-image.jpg"
              alt="about us"
              width={550}
              height={1200}
              className=" rounded-t-full"
            />
            {/* Shine overlay */}
            <div
              className="absolute top-1/2 left-1/2 w-0 h-full bg-white opacity-20 rotate-12 transform     -translate-x-1/2 -translate-y-1/2
                  transition-all duration-1000 ease-in-out
                  group-hover:w-[150%]"
            ></div>
          </div>

          <div className="hidden lg:block absolute bottom-[20px] left-[-12%]  w-[60%] p-[30px] rounded-[20px] bg-[rgb(211,179,147)] shadow-lg text-black">
            <Image
              src="/images/footerImg/download(1).svg"
              alt="clock"
              width={50}
              height={50}
            />
            <p className="py-4 text-xl font-bold">Opening Hours</p>
            <p className="flex gap-12 ">
              Monday-Friday <span>09:30-7:30</span>
            </p>
            <p className="flex gap-22 py-3">
              Saturday <span>10:30-05:00</span>
            </p>
            <p className="flex gap-24">
              Sunday <span>24hrs Open</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
