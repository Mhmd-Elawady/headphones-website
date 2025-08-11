import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import TechPersonalizeSection from '../components/TechPersonalizeSection/TechPersonalizeSection';
import TechFeaturesSection from '../components/TechFeaturesSection/TechFeaturesSection';
import Footer from '../components/Footer/Footer';

export default function TechSpecs() {
  return (
    <>
      <Navbar /> 
      <TechPersonalizeSection/>
      <TechFeaturesSection/>
       <Footer/>
    </>
  )
}
