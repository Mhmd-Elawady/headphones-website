import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroContent from "../components/HeroContent/HeroContent";
import CarouselSection from "../components/CarouselSection/CarouselSection";
import FeaturesText from "../components/FeaturesText/FeaturesText";
import PersonalizeSection from "../components/PersonalizeSection/PersonalizeSection";
import FeatureImage from "../components/FeatureImage/FeatureImage";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <div className="Hero-Content ">
        <Navbar />
        <HeroContent />
      </div>
      <CarouselSection />
      <FeaturesText />
      <PersonalizeSection />
      <FeatureImage />
      <Footer />
    </>
  );
}
