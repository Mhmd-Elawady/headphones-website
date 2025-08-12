import React from "react";
import "./HeroContent.css";
import headphoneImg from "../../assets/Headphone-Main.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function HeroContent() {
  return (
    <div className="container-fluid hero-wrapper position-relative overflow-hidden">
      <div className="hero-bg-element hero-bg-1"></div>
      <div className="hero-bg-element hero-bg-2"></div>

      <div className="hero-content-container">
        <h1 className="heading">Resonance</h1>

        <div className="headphone-container">
          <LazyLoadImage
            className="headphone-image"
            src={headphoneImg}
            alt="Resonance Aura Pro II Headphones"
          />
        </div>

        <h2 className="heading2">Aura Pro II</h2>
      </div>
    </div>
  );
}
