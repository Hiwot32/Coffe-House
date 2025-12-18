import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";
import AboutUs from "./components/about/AboutUs";

export default function Home() {
  return (
   <>
   <HeroSection />
   <AboutUs />
   </>
  );
}
