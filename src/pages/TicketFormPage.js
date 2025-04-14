// src/pages/TicketFormPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const TicketFormPage = () => {
  const { state } = useLocation();
  const event = state?.event;

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <Container className="text-white py-5">
      <h2 className="mb-4">Book Tickets for {event?.title}</h2>

      {showSuccess && <Alert variant="success">✅ Tickets booked successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tickets</Form.Label>
          <Form.Control type="number" min="1" max="10" required />
        </Form.Group>
        <Button type="submit">Confirm Booking</Button>
      </Form>
    </Container>
  );
};

export default TicketFormPage;
