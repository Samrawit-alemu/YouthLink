import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Bell, Search, GraduationCap } from 'lucide-react';
import { JOBS } from '../lib/mockData';

const UserDashboard = () => {
    // Determine status color helper
    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted': return 'bg-green-100 text-green-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-blue-100 text-blue-700';
        }
    };

    const myApplications = [
        {
            id: 1,
            title: 'Graphic Designer',
            company: 'Creative Solutions Inc.',
            date: 'Applied: 2 days ago',
            status: 'Pending',
            logoBg: 'bg-[#D4D3C5]',
            logoIcon: null
        },
        {
            id: 2,
            title: 'Social Media Manager',
            company: 'Digital Hub PLC',
            date: 'Applied: 5 days ago',
            status: 'Viewed',
            logoBg: 'bg-gray-50',
            logoIcon: 'Tree'
        },
    ];

    const recommendedJobs = [
        {
            id: 101,
            title: 'UX/UI Design Intern',
            company: 'Ethio Innovate',
            type: 'Part-time',
            tags: ['Remote', '3 Months'],
            budget: '15,000 ETB',
            logoBg: 'bg-[#A8A355]', // Olive green
            logoIcon: 'Brain'
        },
        {
            id: 102,
            title: 'Junior Frontend Developer',
            company: 'Green Tech Ethiopia',
            type: 'Full-time',
            tags: ['On-site'],
            budget: '25,000 ETB',
            logoBg: 'bg-[#437F46]', // Green
            logoIcon: 'Tree'
        },
        {
            id: 103,
            title: 'Event Planning Assistant',
            company: 'Addis Events',
            type: 'Gig',
            tags: ['Hybrid'],
            budget: '5,000 ETB',
            logoBg: 'bg-[#3C5F60]', // Teal
            logoIcon: 'Calendar'
        },
    ];

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
                    {myApplications.map((app) => (
                        <div key={app.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1">{app.title}</h3>
                                <p className={app.company === 'Creative Solutions Inc.' ? 'text-primary text-sm mb-4' : 'text-slate-500 text-sm mb-4'}>
                                    {app.company}
                                </p>
                                <span className="text-xs text-slate-400">{app.date}</span>
                            </div>
                            <div className={`h-12 w-12 ${app.logoBg} rounded-xl flex items-center justify-center flex-shrink-0 border border-transparent`}>
                                {app.logoIcon === 'Tree' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                        <path d="M12 19V6M5 12l7-7 7 7M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                                        <path d="M9 10a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2" opacity="0" />
                                        {/* Using a generic Tree-like shape or similar from Lucide if available, but custom SVG for 'Tree' look */}
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3 0-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5z" />
                                        <path d="M15.5 14.5A2.5 2.5 0 0 0 18 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3 0-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommendations Section */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-6">Gigs Recommended For You</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recommendedJobs.map((job) => (
                        <div key={job.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${job.logoBg} text-white`}>
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight mb-1">{job.title}</h3>
                                    <p className="text-slate-500 text-sm">{job.company}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-[10px]">{job.type}</span>
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-[10px]">{tag}</span>
                                ))}
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                <div>
                                    <span className="block font-bold text-slate-900">{job.budget}</span>
                                    <span className="text-xs text-slate-400">/{job.type === 'Gig' ? 'project' : 'month'}</span>
                                </div>
                                <Link to={`/jobs/${job.id}/apply`} className="px-5 py-2.5 bg-[#0EA5E9] text-white text-sm font-bold rounded-xl hover:bg-sky-600 transition-colors">
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

export default UserDashboard;
