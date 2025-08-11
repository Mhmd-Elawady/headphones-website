import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechFeaturesSection.css";

export default function TechFeaturesSection() {
  const featuresData = [
    {
      title: "Audio Technology",
      items: [
        "Custom-tuned 40mm Resonance™ drivers for deep bass.",
        "Ultra-low distortion signal processing.",
        "Adaptive Sound Sculpting™ — real-time EQ.",
        "Spatial Audio Calibration with dynamic head tracking.",
        "Natural Voice Isolation for calls, focus, and immersive listening.",
        "Pressure-balancing acoustic vents for long-wear comfort.",
      ],
    },
    {
      title: "Intelligence",
      items: [
        "Dual noise-targeting microphones.",
        "Internal ear-position mic for personalized audio tuning.",
        "Proximity & motion sensors to detect wear and usage.",
        "Gesture-aware force sensor for effortless control.",
        "Accelerometer-assisted voice capture for clarity on the move.",
      ],
    },
    {
      title: "Power",
      items: [
        "Custom-designed R2 Sound Core chip.",
        "Advanced audio algorithms tuned for emotional clarity.",
        "Onboard neural audio engine for Spatial Audio and Adaptive EQ.",
      ],
    },
    {
      title: "Controls",
      items: [
        "Tap once to play/pause or answer a call.",
        "Tap twice to skip forward or end a call.",
        "Tap three times to rewind.",
        "Press and hold to access voice assistant.",
        "Automatic mute when removed, smart resume when worn.",
      ],
    },
    {
      title: "Built for the Elements",
      items: [
        "Rated IPX4 for sweat and weather resistance..",
        "Designed for long sessions, light activity, or relaxed stillness..",
      ],
    },
    {
      title: "Battery",
      items: [
        "Up to 36 hours total listening time with case.",
        "Up to 6.5 hours on a single charge.",
        "Fast charge: 10 minutes = 2 hours of play..",

        "USB-C charging + Qi-compatible wireless charging.",

        "LED status light + Find My compatible tone alert.",
      ],
    },
    {
      title: "Connectivity",
      items: [
        "Bluetooth® 5.3 low-latency audio..",
        "Multipoint connection with auto handoff..",
        "Seamless pairing across all your devices.",
      ],
    },
    {
      title: "Materials",
      items: [
        "100% recycled aluminum in internal frames..",
        "Bio-based mesh ear padding.",
        "Rare earth magnets sourced from reclaimed materials.",
        "Plastic-free, fiber-based packaging.",
        "Assembled in Zero Waste-certified facilities.",
      ],
    },
    {
      title: "Sustainability & Materials",
      items: [
        "100% recycled aluminum in internal frames..",
        "Bio-based mesh ear padding",
        "Rare earth magnets sourced from reclaimed materials.",
        "Plastic-free, fiber-based packaging.",
        "Assembled in Zero Waste-certified facilities.",
      ],
    },
  ];

  return (
    <div className="container my-5">
      {featuresData.map((section, index) => (
        <div key={index} className="row py-4 border-bottom">
          <div className="col-md-3 fw-bold feature-title">{section.title}</div>
          <div className="col-md-9">
            <ul className="list-unstyled mb-3 mt-3">
              {section.items.map((item, i) => (
                <li key={i} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
