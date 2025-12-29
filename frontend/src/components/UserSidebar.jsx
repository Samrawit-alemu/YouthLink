import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Briefcase, FileText, Settings } from 'lucide-react';

const UserSidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10 transition-all duration-300">
            <div className="p-6 flex items-center gap-3">
                <div className="text-primary">
                    {/* Abstract Blue Shape Logo */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4C6 2.89543 6.89543 2 8 2H14C15.1046 2 16 2.89543 16 4V28C16 29.1046 15.1046 30 14 30H8C6.89543 30 6 29.1046 6 28V4Z" fill="#0EA5E9" />
                        <path d="M16 10C16 8.89543 16.8954 8 18 8H24C25.1046 8 26 8.89543 26 10V28C26 29.1046 25.1046 30 24 30H18C16.8954 30 16 29.1046 16 28V10Z" fill="#0EA5E9" fillOpacity="0.6" />
                    </svg>
                </div>
                <span className="text-2xl font-bold text-slate-900">Sera Flega</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                <Link
                    to="/user/dashboard"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/user/dashboard') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link
                    to="/profile"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/profile') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <User size={20} />
                    My Profile
                </Link>
                <Link
                    to="/jobs"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/jobs') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <Briefcase size={20} />
                    Browse Jobs
                </Link>
                <Link
                    to="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/applications') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <FileText size={20} />
                    My Applications
                </Link>

                <Link
                    to="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/settings') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <Settings size={20} />
                    Settings
                </Link>
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=abebe" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-slate-900 truncate">Abebe Kebede</h4>
                        <p className="text-xs text-slate-500 truncate">abebek@email.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default UserSidebar;
