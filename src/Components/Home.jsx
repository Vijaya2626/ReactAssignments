// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0  h1">Banking Assignment Portal</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content text-center">
        <h2 className="welcome-title">Welcome to the Banking Assignments</h2>
        <p className="lead">Select a day to view your assignment components:</p>
        <div className="day-buttons d-flex justify-content-center flex-wrap gap-3 mt-4">
          <button className="btn day-btn" onClick={() => navigate('/day1')}>Day 1</button>
          <button className="btn day-btn" onClick={() => navigate('/day2')}>Day 2</button>
          <button className="btn day-btn" onClick={() => navigate('/day3')}>Day 3</button>
          <button className="btn day-btn" onClick={() => navigate('/day4')}>Day 4</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
