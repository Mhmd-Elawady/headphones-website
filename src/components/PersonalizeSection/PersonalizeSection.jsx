import React from "react";
import "./PersonalizeSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import detail1 from "../../assets/Headphone-Detail-4-3.png";
import detail2 from "../../assets/Headphone-Detail-3.png";
import detail3 from "../../assets/Headphone-Detail-5.png";

export default function PersonalizeSection() {
  return (
    <>
      <section className="details-section text-center py-5">
        <Container>
          <h2 className="details-title">Every Detail Matters</h2>
          <p className="details-subtitle">
            From the stitch to the signal, precision lives here.
          </p>

          <Row className="mt-4">
            <Col xs={12} md={4} className="mb-3">
              <LazyLoadImage src={detail1} alt="Detail 1" className="details-image" />
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <LazyLoadImage src={detail2} alt="Detail 2" className="details-image" />
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <LazyLoadImage src={detail3} alt="Detail 3" className="details-image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
