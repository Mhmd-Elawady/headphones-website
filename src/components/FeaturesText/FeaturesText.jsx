import React from "react";
import { Carousel } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./FeaturesText.css";
import img1 from "../../assets/Headphone-Model.png";
import img2 from "../../assets/Headphone-Detail-main.png";
import img3 from "../../assets/Headphone-Detail-one.png";

export default function FeaturesCarousel() {
  const cards = [
    {
      
      title: "Deep lows. Lush mids.",
      desc: "Airy highs. All perfectly in balance.",
      img: img1,
      bg: "linear-gradient(to bottom, #e6e6e6, #fcd2a2)",
           
    },
    {
      
      title: "Silence distractions.",
      desc: "Control everything with a gentle tap",
      img: img2,
      bg: "linear-gradient(to bottom, #D2CDC6, #F2EBE3)",
        
    },
    {
      title: "Thoughtfully packed in plastic-free,",
      desc: "high quality materials..",
      img: img3,
      bg: "linear-gradient(to bottom, #D8B74B, #F2EBE3)",
     
    },
  ];

  return (
    <div className="container my-5">
      <Carousel>
        {cards.map((card, index) => (
          <Carousel.Item key={index}>
            <div className="feature-card" style={{ background: card.bg }}>
              <div className="feature-text">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
              <div className="feature-image">
                <LazyLoadImage src={card.img} alt="Headphones" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}



