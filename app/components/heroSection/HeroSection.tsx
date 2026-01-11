"use client";
import React from "react";

export default function HeroSection() {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative 
  min-h-screen 
  bg-[linear-gradient(rgba(25,34,37,0.7),rgba(25,34,37,0.7)),url('/images/heroImg/imgi_44_hero-bg.jpg')] 
  bg-cover 
  bg-center 
  bg-fixed"
    >
      <div className="w-full md:w-4/5 lg:w-2/3 xl:w-200 px-4 md:px-10 flex flex-col justify-center">
        <p className="text-white text-sm  ">
          Crafted With Love, Served With Passion
        </p>

        <h1 className="text-white pb-7  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
          STEP INTO THE AROMA OF FRESHLY COFFEE
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Discover a place where every cup is a masterpiece, crafted with
          passion and precision. From the rich, bold flavors of our signature
          blends to the cozy ambiance that feels like home.
        </p>
      </div>
    </div>
  );
}
