import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../src/components/Navbar';

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>About Us</h1>
        <p className="lead">
          Welcome to our News Application! We are dedicated to bringing you the latest and most accurate news from around the world.
        </p>
        <p>
          Our team of experienced journalists and editors work tirelessly to provide you with up-to-date news coverage on a wide range of topics, including politics, business, technology, sports, entertainment, and more.
        </p>
        <p>
          We believe in the power of information and strive to deliver news that is not only timely but also trustworthy. Our mission is to keep you informed and engaged with the world around you.
        </p>
        <p>
          Thank you for choosing our News Application as your source for news. We are committed to providing you with the best news experience possible.
        </p>
      </div>
    </>
  );
}