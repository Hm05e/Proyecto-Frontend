// Profile.js

import { useState } from 'react';
import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    setUser(data);
  };
  fetchUser();


const handleSave = async (formData) => {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/user', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` }, 
    body: JSON.stringify(formData)
  });
  await response.json();
};

  return (
    <Form>
      <input name="name" /> 
      <input name="email" />

      <Button onClick={(e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        handleSave(formData);
      }}>
        Guardar Cambios
      </Button>

    </Form>
  );

}

export default Profile;