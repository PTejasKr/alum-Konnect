import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import JobsPage from './pages/JobsPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DirectoryPage from './pages/DirectoryPage';
import NetworkPage from './pages/NetworkPage';
import CareerPage from './pages/CareerPage';
import ProfilePage from './pages/ProfilePage';
import AlumniLoginPage from './pages/AlumniLoginPage';
import AlumniSignupPage from './pages/AlumniSignupPage';
import StudentLoginPage from './pages/StudentLoginPage';
import StudentSignupPage from './pages/StudentSignupPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminSignupPage from './pages/AdminSignupPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/alumni-login" element={<AlumniLoginPage />} />
            <Route path="/alumni-signup" element={<AlumniSignupPage />} />
            <Route path="/student-login" element={<StudentLoginPage />} />
            <Route path="/student-signup" element={<StudentSignupPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin-signup" element={<AdminSignupPage />} />
          </Routes>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;