import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/ticketing', { state: { event } });
  };

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={event.image} alt={event.title} />
      <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>{event.date} | {event.location}</Card.Text>
        <Button variant="primary" onClick={handleBookNow}>Book Now</Button>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EventCard;