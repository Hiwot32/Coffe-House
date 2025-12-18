import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";
import AboutUs from "./components/about/AboutUs";
import Journy from "./components/journy/Journy";
import Offer from "./components/offer/Offer";

export default function Home() {
  return (
   <>
   <HeroSection />
   <AboutUs />
   <Journy />
   <Offer />
   </>
  );
}
