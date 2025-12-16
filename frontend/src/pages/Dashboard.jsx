import React from 'react';
import { JOBS } from '../lib/mockData';
import { Briefcase, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Determine status color helper
    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted': return 'bg-green-100 text-green-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-yellow-100 text-yellow-800';
        }
    };

    const myApplications = [
        { job: JOBS[0], status: 'Pending', date: 'Dec 12, 2024' },
        { job: JOBS[1], status: 'Accepted', date: 'Dec 10, 2024' }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">My Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">12</div>
                            <div className="text-sm text-slate-500">Jobs Applied</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">2</div>
                            <div className="text-sm text-slate-500">Accepted</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">3</div>
                            <div className="text-sm text-slate-500">Pending Review</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-slate-900">Recent Applications</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {myApplications.map((app, idx) => (
                            <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                <div>
                                    <h3 className="font-semibold text-slate-900">{app.job.title}</h3>
                                    <p className="text-sm text-slate-500">{app.job.company} • Applied on {app.date}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                                        {app.status}
                                    </span>
                                    <Link to={`/jobs/${app.job.id}`} className="text-primary text-sm font-medium hover:underline">
                                        View Job
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
