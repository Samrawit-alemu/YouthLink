import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import ApplyJob from './pages/ApplyJob';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SetupProfile from './pages/SetupProfile';

function App() {
    return (
        <Routes>
            {/* Public Layout Routes */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="setup-profile" element={<SetupProfile />} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/jobs/:id/apply" element={<ApplyJob />} />

            {/* Authenticated Dashboard Routes */}
            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default App;
