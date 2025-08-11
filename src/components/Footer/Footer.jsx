import React from "react";
import { PiWaveformLight } from "react-icons/pi";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer-section text-center d-flex flex-column justify-content-center align-items-center">
        <h2 className="footer-title">Sound. Presence. Purpose.</h2>
        <p className="footer-subtitle">
          Focused on crafting immersive audio experiences.
          <br />
          We believe sound should not just be heard—it should move you.
        </p>
        <div className="footer-buttons mt-3">
          <button className="btn btn-light m-2">Aura Pro II</button>
          <button className="btn btn-light m-2">Flow II</button>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center w-100 px-4 mt-4">
          <div className="footer-logo">
            {" "}
            <PiWaveformLight size={24} className="me-2" /> Resonance
          </div>
          <div className="footer-right">
            © 2025 Resonance. All rights reserved.
            <img src="../src\assets\XLogo.png" alt="" />
            <img src="../src\assets\MetaLogo.png" alt="" />
            <img src="../src\assets\DiscordLogo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
