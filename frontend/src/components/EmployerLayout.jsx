import React from 'react';
import { Outlet } from 'react-router-dom';
import EmployerSidebar from './EmployerSidebar';

const EmployerLayout = () => {
    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            <EmployerSidebar />
            <main className="flex-1 ml-64 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default EmployerLayout;
