"use client";
import React, { useEffect, useState } from "react";
import journy from "./journy.module.css";

export default function Journy() {
  const [visitors, setVisitors] = useState(0);
  const [recipes, setRecipes] = useState(0);
  const [events, setEvents] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const animate = (setValue: (val: number) => void, end: number) => {
      let start = 0;
      const step = Math.ceil(end / 60);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setValue(end);
          clearInterval(interval);
        } else {
          setValue(start);
        }
      }, 30);
    };

    animate(setVisitors, 300);
    animate(setRecipes, 50);
    animate(setEvents, 120);
    animate(setCustomers, 500);
  }, []);

  return (
    <div className={journy.outerDiv}>
      <div className="px-6 sm:px-10 md:px-12 pb-8 text-white">
    
        <div className="py-12 sm:py-55">
          <p className="font-bold text-lg sm:text-xl md:text-2xl pb-2">
            Our Journey of Success
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold w-full sm:w-4/5">
            OUR COFFEE ADVENTURE, YOUR FAVORITE PLACE
          </p>
        </div>

     
        <div
          className={`flex flex-col sm:flex-row sm:flex-wrap justify-between sm:justify-around gap-6 sm:gap-8 border-t pt-6 sm:pt-12 pb-6 ${journy.buttom}`}
        >
          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl pb-1">{visitors}+</p>
            <p className="text-lg sm:text-xl">Daily Visitors</p>
          </div>

          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl pb-1">{recipes}</p>
            <p className="text-lg sm:text-xl">Recipes Created</p>
          </div>

          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl pb-1">{events}+</p>
            <p className="text-lg sm:text-xl">Events Hosted</p>
          </div>

          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl pb-1">{customers}+</p>
            <p className="text-lg sm:text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
