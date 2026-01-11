"use client";
import React from "react";

export default function PageHero({ title }) {
  return (
    <div
      className="bg-[linear-gradient(rgba(25,34,37,0.7),rgba(25,34,37,0.7)),url('/images/imgi_42_page-header-bg.jpg')] 
  bg-center 
  bg-cover 
  bg-no-repeat"
    >
      <div className="py-50 pl-10 text-white">
        <p className="text-white text-8xl">{title}</p>
      </div>
    </div>
  );
}
