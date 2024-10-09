import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ArtisanDashboard from './pages/ArtisanDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import CulturalConsultantDashboard from './pages/CulturalConsultantDashboard';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard'; // Import the AdminDashboard

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
                <Route path="/customer-dashboard" element={<CustomerDashboard />} />
                <Route path="/cultural-consultant-dashboard" element={<CulturalConsultantDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Add this */}
            </Routes>
        </Router>
    );
}

export default App;