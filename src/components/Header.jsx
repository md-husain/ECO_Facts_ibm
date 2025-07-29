import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <header id="home" className="bg-success text-white py-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-3">
                Learn About Our Planet, One Fact at a Time
              </h1>
              <p className="lead mb-4 fs-5">
                EcoFacts provides bite-sized, engaging facts about climate change and environmental issues to raise awareness and inspire action.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="light" size="lg" href="#facts" className="me-3">
                  Explore Facts
                </Button>
                <Button variant="outline-light" size="lg" href="#contact">
                  Get Involved
                </Button>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <img 
                src="/assets/Greenearth.jpeg" 
                alt="Earth" 
                className="img-fluid rounded-circle shadow-lg ring-4 ring-green-400"
                style={{ maxWidth: '400px', border: '1px solid black' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;