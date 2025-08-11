import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Compare.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CpuSvg from "../../assets/Cpu.svg";
import SpeakerSimpleSlash from "../../assets/SpeakerSimpleSlash.svg";
import UserSound from "../../assets/UserSound.svg";
import Minus from "../../assets/Minus.svg";
import Ear from "../../assets/Ear.svg";
import HandTap from "../../assets/HandTap.svg";
import BatteryCharging from "../../assets/BatteryCharging.svg";
import Drop from "../../assets/Drop.svg";
import Microphone from "../../assets/Microphone.svg";
import Equalizer from "../../assets/Equalizer.svg";

import headphoneImg from "../../assets/headphonesGreen.png";
import earbudsImg from "../../assets/headphones-green.png";

export default function CompareSection() {
  const products = [
    {
      title: "Aura Pro II",
      img: headphoneImg,
      price: 320,
      specs: [
        {
          icon: (
            <img src={CpuSvg} alt="CPU" style={{ width: 24, height: 24 }} />
          ),
          text: "R1 Chip",
        },
        {
          icon: (
            <img
              src={SpeakerSimpleSlash}
              alt="Noise Cancellation"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "2x more Active Noise Cancellation",
        },
        {
          icon: (
            <img
              src={UserSound}
              alt="Personalized Spatial Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Personalized Spatial Audio",
        },
        {
          icon: (
            <img
              src={Equalizer}
              alt="Lossless Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Lossless Audio",
        },
        {
          icon: (
            <img
              src={Minus}
              alt="Lossless Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Lossless Audio",
        },
        {
          icon: (
            <img
              src={Minus}
              alt="Lossless Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Lossless Audio",
        },
        {
          icon: (
            <img
              src={BatteryCharging}
              alt="Battery"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Up to 6 hours of listening",
        },
        {
          icon: (
            <img
              src={Minus}
              alt="Lossless Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Lossless Audio",
        },
        {
          icon: (
            <img
              src={Microphone}
              alt="Microphones"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Dual beamforming microphones",
        },
      ],
    },
    {
      title: "Flow II",
      img: earbudsImg,
      price: 160,
      specs: [
        {
          icon: (
            <img src={CpuSvg} alt="CPU" style={{ width: 24, height: 24 }} />
          ),
          text: "R1 Chip",
        },
        {
          icon: (
            <img
              src={SpeakerSimpleSlash}
              alt="Noise Cancellation"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "2x more Active Noise Cancellation",
        },
        {
          icon: (
            <img
              src={UserSound}
              alt="Personalized Spatial Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Personalized Spatial Audio",
        },
        {
          icon: (
            <img
              src={Minus}
              alt="Lossless Audio"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Lossless Audio",
        },
        {
          icon: (
            <img
              src={Ear}
              alt="Hearing Test"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Hearing Test and Hearing Protection",
        },
        {
          icon: (
            <img
              src={HandTap}
              alt="Touch Sensor"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Touch sensor",
        },
        {
          icon: (
            <img
              src={BatteryCharging}
              alt="Battery"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Up to 6 hours of listening",
        },
        {
          icon: (
            <img
              src={Drop}
              alt="Water Resistant"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Water resistant",
        },
        {
          icon: (
            <img
              src={Microphone}
              alt="Microphones"
              style={{ width: 24, height: 24 }}
            />
          ),
          text: "Dual beamforming microphones",
        },
      ],
    },
  ];
  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold mb-2 section-title ">Compare Resonance Models</h2>
      <p className="text-muted mb-5">
        Get help choosing. Chat with a Specialist.
      </p>

      <Row className="g-4 ">
        {products.map((product, idx) => (
          <Col key={idx} md={6} sm={12}>
            <Card className="h-100 border-0 shadow-sm p-3 rounded-4">
              <div
                className="bg-light rounded-3 p-4 text-center d-flex flex-column align-items-center"
                style={{ minHeight: "320px" }}
              >
                <h5 className="fw-bold mb-3">{product.title}</h5>

                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "200px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="mt-3">
                  <p className="text-muted">Starting at ${product.price}</p>
                  <Button className="btn-gradient mb-2">Buy Now</Button>
                </div>
              </div>

              <ul className="list-unstyled mt-4 text-center small text-secondary">
                {product.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    {spec.icon && (
                      <span
                        style={{
                          fontSize: "1.4rem",
                          color: "#333",
                          marginBottom: "4px",
                        }}
                      >
                        {spec.icon}
                      </span>
                    )}
                    <span>{spec.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
