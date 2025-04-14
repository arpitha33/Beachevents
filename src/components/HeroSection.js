import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">Experience Mangalore’s Best Beach Festivals 🌴</h1>
        <p className="lead">Discover events, explore beaches, and dive into cultural fun along the coast!</p>
        <Button variant="light" href="/events">Browse Events</Button>
      </Container>
    </div>
  );
};

export default HeroSection;