import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="py-3">
          <Col md={6} className="mb-4 mb-md-0">
            <h5 className="mb-3">🌱 EcoFacts</h5>
            <p className="mb-0">Promoting awareness about climate change through bite-sized, engaging facts and tips. Let's work together to protect our planet.</p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#facts" className="text-white text-decoration-none">Facts</a></li>
              <li className="mb-2"><a href="#stats" className="text-white text-decoration-none">Climate Stats</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Stay Connected</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">📱</a>
              <a href="#" className="text-white fs-5">💻</a>
              <a href="#" className="text-white fs-5">📷</a>
              <a href="#" className="text-white fs-5">📢</a>
            </div>
          </Col>
        </Row>
        <hr className="my-3 bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 small">© {new Date().getFullYear()} EcoFacts. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;