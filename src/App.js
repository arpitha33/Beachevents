import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import EventsPage from './pages/EventsPage';
import AttractionsPage from './pages/AttractionsPage';
import CalendarPage from './pages/CalendarPage';
import './App.css';
import TicketFormPage from './pages/TicketFormPage';
import AdminDashboard from './pages/AdminDashboard';
// Correct import statement (adjust the path as needed)





function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/ticketing" element={<TicketFormPage />} />
       
<Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;