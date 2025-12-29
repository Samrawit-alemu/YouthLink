import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            <AdminSidebar />
            <main className="flex-1 ml-64 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
