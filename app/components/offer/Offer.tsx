"use client"
import  { useState } from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import offer from "./offer.module.css";

export default function Offer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Private Dining Room",
      desc: "Experience an elevated dining experience in our exclusive Private Dining Room.",
    },
    {
      title: "Organize A Wedding",
      desc: "Celebrate your special day with an elegant and intimate wedding setup tailored just for you.",
    },
    {
      title: "Birthday Party",
      desc: "Host unforgettable birthday parties in a cozy and stylish environment.",
    },
  ];

  return (
    <div className={offer.outerDiv}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-30 px-6 sm:px-10 py-12 sm:py-20">
        <div className="w-full lg:w-1/2 pt-4 text-white">
          <p className="font-bold text-lg sm:text-xl pb-2">What We Offer</p>
          <p className="text-2xl sm:text-3xl md:text-4xl pb-4 font-bold">
            HOST PRIVATE EVENTS IN AN INTIMATE SETTING
          </p>
          <p className="text-base sm:text-lg pb-4">
            We offer a warm and inviting space perfect for your private events.
            Whether it’s a birthday celebration, a small gathering, or an
            exclusive business meeting
          </p>

          {items.map((item, index) => (
            <div
              key={index}
              className={`${index < 2 ? "border-b border-amber-100" : ""} py-4 sm:py-5`}
            >
              <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                {openIndex === index ? <RemoveIcon /> : <AddIcon />}
                <p className="text-lg sm:text-xl font-medium">{item.title}</p>
              </div>
              {openIndex === index && (
                <p className="text-base sm:text-lg mt-2 sm:mt-3">{item.desc}</p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 rounded-t-full group relative overflow-hidden rounded-xl bg-gray-800">
          <Image
            src="/images/offerImg/imgi_17_offer-image.jpg"
            alt="coffee cup"
            width={500}
            height={1000}
            className="object-cover w-full h-auto"
          />
          <div
            className="absolute top-1/2 left-1/2 w-0 h-full bg-white opacity-20 rotate-12 transform -translate-x-1/2 -translate-y-1/2
                       transition-all duration-1000 ease-in-out
                       group-hover:w-[150%]"
          ></div>
        </div>
      </div>
    </div>
  );
}
