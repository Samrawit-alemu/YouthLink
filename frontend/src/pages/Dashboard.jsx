import React from 'react';
import { JOBS } from '../lib/mockData';
import { Briefcase, CheckCircle, Clock, Bookmark, TrendingUp, Bell, Search, MapPin, Calendar, DollarSign, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Determine status color helper
    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted': return 'bg-green-100 text-green-700 border-green-200';
            case 'Rejected': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-amber-100 text-amber-700 border-amber-200';
        }
    };

    const myApplications = [
        { job: JOBS[0], status: 'Pending', date: 'Dec 12, 2024' },
        { job: JOBS[1], status: 'Accepted', date: 'Dec 10, 2024' },
        { job: JOBS[3], status: 'Pending', date: 'Dec 14, 2024' }
    ];

    const savedJobs = [JOBS[2], JOBS[0]];
    const recommendedJobs = [JOBS[1], JOBS[2]];

    const stats = [
        { label: "Total Applied", value: "12", icon: Briefcase, color: "bg-blue-50 text-blue-600" },
        { label: "Interviews", value: "3", icon: Calendar, color: "bg-purple-50 text-purple-600" },
        { label: "Profile Views", value: "45", icon: TrendingUp, color: "bg-pink-50 text-pink-600" },
        { label: "Saved Jobs", value: "8", icon: Bookmark, color: "bg-amber-50 text-amber-600" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-12">
            {/* Header / Welcome Section */}
            <div className="bg-white border-b border-gray-200 pt-8 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Abel! 👋</h1>
                            <p className="text-slate-500 mt-1">Here's what's happening with your job search today.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
                                <Bell className="h-6 w-6" />
                                <span className="absolute top-1 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
                            </button>
                            <Link to="/jobs" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
                                <Search className="h-4 w-4" />
                                Find Jobs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className={`p-3 rounded-lg w-fit mb-3 ${stat.color}`}>
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-sm text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Applications */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-slate-900">Recent Applications</h2>
                                <Link to="#" className="text-primary text-sm font-medium hover:underline">View All</Link>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {myApplications.map((app, idx) => (
                                    <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors group">
                                        <div className="flex items-start gap-4">
                                            <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xl shrink-0">
                                                {app.job.company.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">{app.job.title}</h3>
                                                <p className="text-sm text-slate-500">{app.job.company} • Applied {app.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(app.status)}`}>
                                                {app.status}
                                            </span>
                                            <Link to={`/jobs/${app.job.id}`} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors">
                                                <Briefcase className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommended Jobs */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-slate-900">Recommended for You</h2>
                                <Link to="/jobs" className="text-primary text-sm font-medium hover:underline">See More</Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {recommendedJobs.map((job) => (
                                    <div key={job.id} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow hover:border-primary/30 group">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex flex-col">
                                                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{job.title}</h3>
                                                <span className="text-sm text-slate-500">{job.company}</span>
                                            </div>
                                            <button className="text-slate-300 hover:text-amber-500 transition-colors">
                                                <Bookmark className="h-5 w-5" />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md flex items-center gap-1">
                                                <MapPin className="h-3 w-3" /> {job.location}
                                            </span>
                                            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md flex items-center gap-1">
                                                <DollarSign className="h-3 w-3" /> {job.budget}
                                            </span>
                                        </div>
                                        <Link to={`/jobs/${job.id}`} className="block w-full text-center py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary hover:border-primary/30 transition-colors">
                                            View Details
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">

                        {/* Profile Completion Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="relative inline-block mb-4">
                                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                    <User className="h-10 w-10" />
                                </div>
                                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-100 shadow-sm">
                                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="font-bold text-slate-900">Abel Kebede</h3>
                            <p className="text-sm text-slate-500 mb-4">Graphic Design Student</p>

                            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 mb-4">
                                <span>Profile Completion</span>
                                <span>85%</span>
                            </div>

                            <Link to="/profile" className="text-primary text-sm font-medium hover:underline">Complete Profile</Link>
                        </div>

                        {/* Recent Saved Jobs */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-slate-900 mb-4">Saved Jobs</h3>
                            <div className="space-y-4">
                                {savedJobs.map((job) => (
                                    <Link key={job.id} to={`/jobs/${job.id}`} className="flex gap-3 items-start group">
                                        <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-100 transition-colors">
                                            <Bookmark className="h-5 w-5" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-medium text-slate-900 text-sm truncate group-hover:text-primary transition-colors">{job.title}</h4>
                                            <p className="text-xs text-slate-500 truncate">{job.company}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events / Interviews (Mock) */}
                        <div className="bg-gradient-to-br from-primary/90 to-blue-700 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 bg-white/10 rounded-full blur-xl"></div>
                            <h3 className="font-bold mb-4 relative z-10">Upcoming Activity</h3>
                            <div className="space-y-4 relative z-10">
                                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                                    <div className="flex items-center gap-2 text-xs font-medium text-blue-100 mb-1">
                                        <Calendar className="h-3 w-3" /> Tomorrow, 10:00 AM
                                    </div>
                                    <p className="text-sm font-medium">Interview with TechHub</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
