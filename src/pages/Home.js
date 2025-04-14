import React from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Container, Row, Col } from 'react-bootstrap';

const featuredEvents = [
    { title: "Beach Music Bash", image: "https://th.bing.com/th/id/OIP.hzwE_GovZky0r_Svl4LCrQHaE8?cb=iwp&rs=1&pid=ImgDetMain", location: "Panambur Beach", date: "20 Apr 2025" },
 
    { title: "Full Moon Beach Night", image: "https://thumbs.dreamstime.com/b/beautiful-fantasy-tropical-beach-star-full-moon-night-skies-seascape-retro-style-artwork-vintage-color-tone-88747137.jpg", location: "Tannirbhavi Beach", date: "24 Apr 2025" },
   
    { title: "Seaside Yoga Retreat", image: "https://th.bing.com/th/id/OIP.nSYcYg3N9k5WM6f9tqNitgHaE8?cb=iwp&rs=1&pid=ImgDetMain", location: "Ullal Beach", date: "30 Apr 2025" },
    { title: "Kite Flying Carnival", image: "https://th.bing.com/th/id/OIP.N3HGyjO_xnbahYq3pyGlAwHaFj?cb=iwp&rs=1&pid=ImgDetMain", location: "Someshwara Beach", date: "03 May 2025" },
    { title: "Beachside Fashion Show", image: "https://i.ytimg.com/vi/vwt9ebcNn7Q/maxresdefault.jpg", location: "Panambur Beach", date: "05 May 2025" }
  
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