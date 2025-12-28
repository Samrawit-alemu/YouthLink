import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
