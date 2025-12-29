import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    // Check user role from localStorage (mock auth)
    const userRole = localStorage.getItem('userRole') || 'jobseeker';

    useEffect(() => {
        switch (userRole) {
            case 'admin':
                navigate('/admin/dashboard');
                break;
            case 'employer':
                navigate('/employer/dashboard');
                break;
            default:
                navigate('/user/dashboard');
                break;
        }
    }, [userRole, navigate]);

    return (
        <div className="flex items-center justify-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
};

export default Dashboard;
