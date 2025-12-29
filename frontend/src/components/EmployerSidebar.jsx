import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Briefcase, FileText, Settings } from 'lucide-react';

const EmployerSidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10 transition-all duration-300">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary p-1.5 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <span className="text-xl font-bold text-slate-900">YouthLink</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                <Link
                    to="/employer/dashboard"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/employer/dashboard') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link
                    to="/employer/post-job"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/employer/post-job') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <Briefcase size={20} />
                    Post a Job
                </Link>
                <Link
                    to="/employer/my-jobs"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/employer/my-jobs') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <FileText size={20} />
                    My Jobs
                </Link>
                <Link
                    to="/employer/candidates"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive('/employer/candidates') ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                    <User size={20} />
                    Candidates
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
                    <div className="h-10 w-10 bg-slate-200 rounded-full overflow-hidden border border-gray-200">
                        <img src="https://i.pravatar.cc/150?u=company" alt="Company Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-slate-900 truncate">Creative Solutions</h4>
                        <p className="text-xs text-slate-500 truncate">Employer</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default EmployerSidebar;
