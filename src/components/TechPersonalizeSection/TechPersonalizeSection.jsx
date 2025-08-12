
import React, { useState } from "react";
import "./TechPersonalizeSection.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BlueImg from "../../assets/Blueimage.png";
import greenImg from "../../assets/Headphone Images(1).png";
import PinkImg from "../../assets/Pinkimage.png";
export default function TechPersonalizeSection() {
      const [currentImage, setCurrentImage] = useState(greenImg);
  return (
    <>
      <div className="container carousel-section">
      <h4 className="fw-bold mb-4 color-text">Color</h4>
      <LazyLoadImage
        src={currentImage}
        alt="Headphone"
        className="headphone-img img-fluid d-flex justify-content-center  mb-4"
      />
      <div className="d-flex justify-content-center gap-3 ">
        <button
          className="color-btn Blue"
          onClick={() => setCurrentImage(BlueImg)}
        ></button>
        <button
          className="color-btn green"
          onClick={() => setCurrentImage(greenImg)}
        ></button>
        <button
          className="color-btn Pink"
          onClick={() => setCurrentImage(PinkImg)}
        ></button>
      </div>
    </div>
    </>
  )
}
