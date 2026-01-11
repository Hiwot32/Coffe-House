"use client";
import React from "react";
import story from "./story.module.css";
import Image from "next/image";

export default function Story() {
  return (
    <div className={story.outerSection}>
      <div className="py-20 px-10 flex flex-col lg:flex-row gap-12">
       
        <div className="rounded-t-full  group relative overflow-hidden  rounded-xl bg-gray-800">
          <Image
            src="/images/storyImg/imgi_9_our-story-image.jpg"
            alt="coffee cup"
            width={750}
            height={1200}
          />
          
          <div
            className="absolute top-1/2 left-1/2 w-0 h-full bg-white opacity-20 rotate-12 transform     -translate-x-1/2 -translate-y-1/2
                  transition-all duration-1000 ease-in-out
                  group-hover:w-[150%]"
          ></div>
        </div>

        <div className="pt-10 text-white w-full lg:w-240">
          <p className="text-sm font-bold pb-2">Our Story</p>

          <p className="text-5xl">
            HOW WE CRAFT EVERY CUP OF COFFEE TO PERFECTION
          </p>

          <p className="py-8 text-lg">
            Experience the journey of coffee, from carefully sourced beans to
            expertly roasted blends, crafted with passion and precision to
            deliver every perfect sip that awakens your senses.
          </p>

          <div className="border-b border-b-white">
            <p className="text-2xl font-bold py-4">Organic Coffee Seed</p>
            <p className="text-lg pb-5">
              Grown naturally without chemicals, our organic coffee seeds ensure
              pure and rich flavors.
            </p>
          </div>

          <div className="border-b border-b-white">
            <p className="text-2xl font-bold py-4">Italy Modern Machine</p>
            <p className="text-lg pb-5">
              Crafted with precision, our Italy modern machines deliver
              authentic and consistent coffee perfection.
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold py-4">Best Traditional Flavors</p>
            <p className="text-lg pb-5">
              Relish the timeless charm of coffee with our best traditional
              flavors, crafted to perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
