import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, User, Briefcase, FileText, Settings, Bell, Search, GraduationCap } from 'lucide-react';
import { JOBS } from '../lib/mockData';
import EmployerDashboard from './EmployerDashboard';

const Dashboard = () => {
    // Check user role from localStorage (mock auth)
    const userRole = localStorage.getItem('userRole') || 'jobseeker';

    if (userRole === 'employer') {
        return <EmployerDashboard />;
    }

    // Determine status color helper
    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted': return 'bg-green-100 text-green-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-blue-100 text-blue-700';
        }
    };

    const myApplications = [
        { job: JOBS[0], status: 'Pending', date: 'Applied: 2 days ago' },
        { job: JOBS[1], status: 'Viewed', date: 'Applied: 5 days ago' },
    ];

    const recommendedJobs = [JOBS[2], JOBS[1], JOBS[3]];

    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-10">
                <h1 className="text-2xl font-bold text-slate-900">Welcome back, Abebe!</h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search for jobs or gigs..."
                            className="pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                    </div>
                    <Link to="/profile" className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        Update Profile
                    </Link>
                    <button className="p-2.5 bg-white border border-gray-200 rounded-full text-slate-600 hover:text-primary transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </header>

            {/* Applications Section */}
            <section className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Track Your Applications</h2>

                <div className="border-b border-gray-200 mb-6">
                    <div className="flex gap-8">
                        <button className="pb-3 border-b-2 border-primary text-slate-900 font-medium text-sm">Submitted (2)</button>
                        <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Viewed (1)</button>
                        <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Accepted (0)</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* App Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-900 mb-1">Graphic Designer</h3>
                            <p className="text-primary text-sm mb-4">Creative Solutions Inc.</p>
                            <span className="text-xs text-slate-400">Applied: 2 days ago</span>
                        </div>
                        <div className="h-12 w-12 bg-[#D4D3C5] rounded-xl flex-shrink-0"></div>
                    </div>

                    {/* App Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-900 mb-1">Social Media Manager</h3>
                            <p className="text-slate-500 text-sm mb-4">Digital Hub PLC</p>
                            <span className="text-xs text-slate-400">Applied: 5 days ago</span>
                        </div>
                        <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                            <GraduationCap size={20} className="text-green-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommendations Section */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-6">Gigs Recommended For You</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recommendedJobs.map((job, idx) => (
                        <div key={job.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${idx % 2 === 0 ? 'bg-[#8F8B3C]' : 'bg-[#2E6B43]'} text-white`}>
                                    {/* Mock Logo */}
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight mb-1">{job.title}</h3>
                                    <p className="text-slate-500 text-sm">{job.company}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg">{job.type}</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">Remote</span>
                                {idx === 0 && <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">3 Months</span>}
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                <div>
                                    <span className="block font-bold text-slate-900">{job.budget}</span>
                                    <span className="text-xs text-slate-400">/month</span>
                                </div>
                                <Link to={`/jobs/${job.id}/apply`} className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
