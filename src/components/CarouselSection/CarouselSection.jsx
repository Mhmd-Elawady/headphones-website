import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlueImg from "../../assets/Blueimage.png";
import greenImg from "../../assets/Headphone Images(1).png";
import PinkImg from "../../assets/Pinkimage.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./CarouselSection.css";
export default function CarouselSection() {
  const [color, setColor] = useState("green");

  const headphones = {
    Blue: BlueImg,
    green: greenImg,
    Pink: PinkImg,
  };

  const colors = [
    { name: "Blue", hex: "#0081f3ff" },
    { name: "green", hex: "#8A9B68" },
    { name: "Pink", hex: "#e00c61ff" },
  ];

  return (
    <div className="container-fluid CarouselSection text-center py-5">
      <div className="Features-Text mb-4">
        <h2 className="fw-bold">Your Style. Your Sound.</h2>
        <p className="text-muted">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
      </div>

      <div className="Headphone-Carousel d-flex justify-content-center align-items-center w-100 position-relative">
        <LazyLoadImage
          src={headphones.Blue}
          alt="Yellow Headphone"
          className="blur-headphone position-absolute start-0 d-none d-md-block"
        />
        <LazyLoadImage
          src={headphones.Pink}
          alt="Red Headphone"
          className="blur-headphone position-absolute end-0 d-none d-md-block"
        />

        <LazyLoadImage
          src={headphones[color]}
          alt={color}
          className="main-headphone img-fluid"
        />
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        {colors.map((c) => (
          <button
            key={c.name}
            className="color-btn"
            style={{ background: c.hex }}
            onClick={() => setColor(c.name)}
          ></button>
        ))}
      </div>

      <p className="mt-3 text-muted">Choose a color that fits your flow.</p>
    </div>
  );
}
