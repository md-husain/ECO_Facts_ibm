import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="fs-3">🌱 EcoFacts</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#facts">Facts</Nav.Link>
            <Nav.Link href="#stats">Climate Stats</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;