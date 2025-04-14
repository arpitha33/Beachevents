import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/events?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Navbar expand="lg" className="dark-navbar py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">Pearls & Palms</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
            <Nav.Link as={Link} to="/attractions" className="nav-link-custom">Beaches</Nav.Link>
            <Nav.Link as={Link} to="/calendar" className="nav-link-custom">Calendar</Nav.Link>
            <Nav.Link as={Link} to="/auth" className="nav-link-custom">Login</Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              size="sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-light" size="sm" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
