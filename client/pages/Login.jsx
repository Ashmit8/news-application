import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      window.sessionStorage.setItem('loggedIn', true);
      console.log('Login successful:', data);
      
      // navigate('/home');
      window.location.href = '/home'
      
      // Handle successful login here (e.g., redirect to another page)
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed: ' + error.message);
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">Login</button> 
      </form>
     
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    

   

    
    </div>
    
  );
 
};


export default Login;


       
      
      

 