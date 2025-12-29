import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './UserSidebar';

const UserLayout = () => {
    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            <UserSidebar />
            <main className="flex-1 ml-64 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default UserLayout;
