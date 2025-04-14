import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const AdminDashboard = () => {
  const [events, setEvents] = useState([
    { title: 'Sunset DJ Party', ticketsSold: 25 },
    { title: 'Mangalore Marathon', ticketsSold: 60 }
  ]);

  const [users, setUsers] = useState([
    { name: 'Ravi', event: 'Sunset DJ Party', email: 'ravi@email.com' },
    { name: 'Anjali', event: 'Mangalore Marathon', email: 'anjali@email.com' }
  ]);

  const removeEvent = (index) => {
    const updated = [...events];
    updated.splice(index, 1);
    setEvents(updated);
  };

  return (
    <Container className="py-5 text-white">
      <h2>Admin Dashboard</h2>
      <h4 className="mt-4">Manage Events</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr><th>Event</th><th>Tickets Sold</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr key={idx}>
              <td>{event.title}</td>
              <td>{event.ticketsSold}</td>
              <td><Button variant="danger" size="sm" onClick={() => removeEvent(idx)}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="mt-4">Registered Users</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr><th>Name</th><th>Event</th><th>Email</th></tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.event}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;