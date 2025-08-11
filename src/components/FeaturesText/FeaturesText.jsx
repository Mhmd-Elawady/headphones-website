import React from "react";
import { Carousel } from "react-bootstrap";
import "./FeaturesText.css";
export default function FeaturesCarousel() {
  const cards = [
    {
      title: "Deep lows. Lush mids.",
      desc: "Airy highs. All perfectly in balance.",
      img: "../src/assets/Headphone Model(1).png",
      bg: "linear-gradient(to bottom, #e6e6e6, #fcd2a2)",
    },
    {
      className:'img1',
      title: "Silence distractions.",
      desc: "Control everything with a gentle tap",
      img: "../src/assets/Headphone Detail 4.png",
      bg: "linear-gradient(to bottom, #D2CDC6, #F2EBE3)",
    },
    {
      title: "Thoughtfully packed in plastic-free,",
      desc: "high quality materials..",
      img: "../src/assets/Headphone Detail 4(2).png",
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
                <img src={card.img} alt="Headphones" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
