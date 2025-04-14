import React from 'react';
import { Container } from 'react-bootstrap';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <AuthForm type="login" />
    </Container>
  );
};

export default AuthPage;
