import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import '../App.css';

const AuthForm = ({ type = 'login' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${type === 'login' ? 'Login' : 'Signup'} successful for ${email}`);
  };

  return (
    <Card className="auth-card text-white bg-dark p-4">
      <h3 className="mb-4">{type === 'login' ? 'Login' : 'Sign Up'}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button variant="light" type="submit" className="w-100 mt-2">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </Button>
      </Form>
    </Card>
  );
};

export default AuthForm;