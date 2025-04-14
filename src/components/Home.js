import React from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Container, Row, Col } from 'react-bootstrap';

const featuredEvents = [
  { title: "Beach Music Bash", image: "https://source.unsplash.com/600x400/?concert,beach", location: "Panambur Beach", date: "20 Apr 2025" },
  { title: "Kudla Food Fest", image: "https://source.unsplash.com/600x400/?food,street", location: "City Center", date: "22 Apr 2025" },
  { title: "Full Moon Beach Night", image: "https://source.unsplash.com/600x400/?moon,party", location: "Tannirbhavi Beach", date: "24 Apr 2025" },
  { title: "Cultural Folk Night", image: "https://source.unsplash.com/600x400/?folk,dance", location: "Kadri Grounds", date: "28 Apr 2025" },
  { title: "Seaside Yoga Retreat", image: "https://source.unsplash.com/600x400/?yoga,beach", location: "Ullal Beach", date: "30 Apr 2025" },
  { title: "Kite Flying Carnival", image: "https://source.unsplash.com/600x400/?kite,sky", location: "Someshwara Beach", date: "03 May 2025" },
  { title: "Beachside Fashion Show", image: "https://source.unsplash.com/600x400/?fashion,beach", location: "Panambur Beach", date: "05 May 2025" }
];

const Home = () => {
  return (
    <div className="home-page bg-black text-white">
      <HeroSection />
      <Container className="py-5">
        <h2 className="mb-4">Featured Events</h2>
        <Row>
          {featuredEvents.map((event, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;