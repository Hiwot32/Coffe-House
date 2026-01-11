"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Journy() {
  const [visitors, setVisitors] = useState(0);
  const [recipes, setRecipes] = useState(0);
  const [events, setEvents] = useState(0);
  const [customers, setCustomers] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startAnimations();
          setHasAnimated(true); 
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimations = () => {
    const animate = (setValue: (val: number) => void, end: number) => {
      let start = 0;
      const duration = 2000; 
      const frameRate = 1000 / 60; 
      const totalFrames = Math.round(duration / frameRate);
      const step = end / totalFrames;

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setValue(end);
          clearInterval(interval);
        } else {
          setValue(Math.floor(start));
        }
      }, frameRate);
    };

    animate(setVisitors, 300);
    animate(setRecipes, 50);
    animate(setEvents, 120);
    animate(setCustomers, 500);
  };

  return (
    <div 
      ref={sectionRef} 
      className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/images/journyImg/imgi_46_intro-video-bg.jpg')] bg-center bg-cover bg-no-repeat"
    >
      <div className="px-6 sm:px-10 md:px-12 pb-8 text-white">
        <div className="py-12 sm:py-32">
          <p className="font-bold text-lg sm:text-xl md:text-2xl pb-2">
            Our Journey of Success
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold w-full sm:w-4/5 uppercase">
            Our coffee adventure, your favorite place
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between sm:justify-around gap-6 sm:gap-8 border-t pt-6 sm:pt-12 pb-6 border-b border-white/20">
          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold pb-1">{visitors}+</p>
            <p className="text-lg sm:text-xl">Daily Visitors</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold pb-1">{recipes}</p>
            <p className="text-lg sm:text-xl">Recipes Created</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold pb-1">{events}+</p>
            <p className="text-lg sm:text-xl">Events Hosted</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold pb-1">{customers}+</p>
            <p className="text-lg sm:text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}