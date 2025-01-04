import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if(response.status !== 200 && response.status !== 201) { 
        throw new Error(data.message);
      } else {
        alert('User registered successfully');
        window.location.href = '/login';
      }
      // Handle success (e.g., show a success message, redirect to login page, etc.)
    } catch (error) {
      console.error(error);
      alert('Error registering user');
      // Handle error (e.g., show an error message)
    }
  };


  

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div className="mt-3">
        <p>Already have an account? <NavLink  to="/login">Login here</NavLink></p>
      </div>
    </div>
  );
};
