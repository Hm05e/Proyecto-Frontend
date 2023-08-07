// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/register', {
        name: name,
        email: email,
        password: password  
      });

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
      
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
      
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

    </Form>
  );
}

export default Register;