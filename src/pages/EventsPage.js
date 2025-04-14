import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from '../components/EventCard';
import ReviewSection from '../components/ReviewSection.jsx';

const eventsList = [
  { title: "Sunset DJ Party", image: "https://as2.ftcdn.net/v2/jpg/02/72/60/67/1000_F_272606780_fB53yCWvumnBcYDPIhHm8Q64u9e98e3d.jpg", location: "Someshwara Beach", date: "25 Apr 2025" },
  { title: "Mangalore Food Carnival", image: "https://i.pinimg.com/originals/d3/5a/c9/d35ac97011a84fd6f630a0f358aae3fe.jpg", location: "Kadri Park", date: "26 Apr 2025" },
  { title: "Seashell Art Fair", image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_864/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ewy89jq3m1ls43rywq5f/WorldSeashellMuseumAdmissionTicket.jpg", location: "Panambur Beach", date: "29 Apr 2025" },
  { title: "Beach Volleyball League", image: "https://th.bing.com/th/id/OIP.7rqFvyPi51jtmICHxi8vkwAAAA?cb=iwp&w=474&h=316&rs=1&pid=ImgDetMain", location: "Tannirbhavi Beach", date: "01 May 2025" },
  { title: "Sand Sculpture Showcase", image: "https://th.bing.com/th/id/OIP.AWsm-FZToR6ZC92E3yf9LgHaE8?cb=iwp&rs=1&pid=ImgDetMain", location: "Ullal Beach", date: "04 May 2025" },
  { title: "Open Air Cinema Night", image: "https://openaircinema.blog/wp-content/uploads/2016/02/pop-up-cinema.jpg", location: "Someshwara Beach", date: "06 May 2025" },
  { title: "Mangalore Marathon", image: "https://www.jsonline.com/gcdn/authoring/authoring-images/2025/04/12/PMJS/83061723007-250412-running-milwaukee-marathon-p-1.jpg?width=660&height=475&fit=crop&format=pjpg&auto=webp", location: "Mangalore Beach Road", date: "07 May 2025" }
];

const EventsPage = () => {
    return (
      <Container className="py-5">
        <h2 className="text-white mb-4">All Events</h2>
        <Row>
          {eventsList.map((event, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
        <ReviewSection />
      </Container>
    );
  };
   export default EventsPage;

