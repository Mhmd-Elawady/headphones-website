import React from "react";
import { PiWaveformLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  px-4 py-3   ">
        <div className="container-fluid  ">
          <Link
            className="navbar-brand d-flex align-items-center primary-color"
            to="/"
          >
            <PiWaveformLight size={24} className="me-2" />
            Resonance
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <Link className="nav-link active primary-color" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link primary-color  " to="/techspecs">
                  Tech Specs
                </Link>
              </li>
              <Link
                className="btn btn-gradient position-relative bg-dark text-white border-0 px-3 py-2 rounded-1 overflow-hidden rounded-5 ms-3 "
                to="/compare"
              >
                Compare
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
