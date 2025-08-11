import React from "react";
import "./HeroContent.css";

export default function HeroContent() {
  return (
    <div className="container-fluid hero-wrapper position-relative overflow-hidden">
      <div className="hero-bg-element hero-bg-1"></div>
      <div className="hero-bg-element hero-bg-2"></div>

      <div className="hero-content-container">
        <h1 className="heading">Resonance</h1>

        <div className="headphone-container">
          <img
            className="headphone-image"
            src="../src/assets/Headphone Image.png"
            alt="Resonance Aura Pro II Headphones"
          />
        </div>

        <h2 className="heading2">Aura Pro II</h2>
      </div>
    </div>
  );
}
