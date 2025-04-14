import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', rating: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment || !form.rating) return;
    setReviews([...reviews, form]);
    setForm({ name: '', comment: '', rating: '' });
  };

  return (
    <Container className="my-5 text-white">
      <h3>Leave a Review</h3>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Comment" value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="number" min="1" max="5" placeholder="Rating (1-5)" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <ListGroup variant="flush">
        {reviews.map((r, idx) => (
          <ListGroup.Item key={idx} className="bg-dark text-white">
            <strong>{r.name}</strong> ({r.rating}/5): {r.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ReviewSection;