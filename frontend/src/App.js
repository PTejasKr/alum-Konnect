import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Import Navbar
import Footer from './components/Footer/Footer'; // Import Footer
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import JobsPage from './pages/JobsPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
        <Footer /> {/* Render Footer here */}
      </div>
    </Router>
  );
}

export default App;
