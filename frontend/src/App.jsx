import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserLayout from './components/UserLayout';
import EmployerLayout from './components/EmployerLayout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import ApplyJob from './pages/ApplyJob';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminDashboard from './pages/AdminDashboard';
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

            {/* Main entry point that redirects */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* User (Job Seeker) Routes */}
            <Route element={<UserLayout />}>
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/profile" element={<Profile />} />
                {/* Fallback alias for user dashboard if needed or keep cleaned up */}
            </Route>

            {/* Employer Routes */}
            <Route path="/employer" element={<EmployerLayout />}>
                <Route path="dashboard" element={<EmployerDashboard />} />
                {/* Add other employer routes here later, e.g. post-job */}
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<AdminDashboard />} /> {/* Reusing dashboard for now or separate user list */}
            </Route>
        </Routes>
    );
}

export default App;
