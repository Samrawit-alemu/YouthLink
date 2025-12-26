import React from 'react';
import { Users, Briefcase, Calendar, CheckCircle, TrendingUp, MoreHorizontal, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmployerDashboard = () => {
    // Mock Data for Employer
    const stats = [
        { title: 'Active Jobs', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Total Applicants', value: '148', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Interviews', value: '8', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-100' },
        { title: 'Hired', value: '24', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    const recentApplicants = [
        { name: 'Abebe Kebede', role: 'Graphic Designer', date: '2 hrs ago', status: 'New', avatar: 'https://i.pravatar.cc/150?u=abebe' },
        { name: 'Sara Tadesse', role: 'Social Media Manager', date: '5 hrs ago', status: 'Reviewed', avatar: 'https://i.pravatar.cc/150?u=sara' },
        { name: 'Dawit Mulat', role: 'Frontend Developer', date: '1 day ago', status: 'Interview', avatar: 'https://i.pravatar.cc/150?u=dawit' },
    ];

    const activeJobs = [
        { title: 'Senior Graphic Designer', applicants: 45, type: 'Full-time', posted: '3 days ago' },
        { title: 'Social Media Intern', applicants: 28, type: 'Internship', posted: '5 days ago' },
        { title: 'React Developer', applicants: 12, type: 'Contract', posted: '1 week ago' },
    ];

    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Employer Dashboard</h1>
                    <p className="text-slate-500 text-sm">Welcome back, Creative Solutions Inc.</p>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/post-job" className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
                        <Briefcase size={18} />
                        Post a New Job
                    </Link>
                    <button className="p-2.5 bg-white border border-gray-200 rounded-full text-slate-600 hover:text-primary transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-10 w-10 bg-slate-200 rounded-full overflow-hidden border border-gray-200">
                        <img src="https://i.pravatar.cc/150?u=company" alt="Company Logo" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Applicants */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-slate-900">Recent Applicants</h2>
                        <Link to="/candidates" className="text-primary text-sm font-medium hover:underline">View All</Link>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="text-left py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Candidate</th>
                                        <th className="text-left py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Applied For</th>
                                        <th className="text-left py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                        <th className="text-left py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="text-right py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentApplicants.map((applicant, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img src={applicant.avatar} alt={applicant.name} className="w-8 h-8 rounded-full bg-slate-200" />
                                                    <span className="font-medium text-slate-900 text-sm">{applicant.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-slate-600 text-sm">{applicant.role}</td>
                                            <td className="py-4 px-6 text-slate-500 text-sm">{applicant.date}</td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                    ${applicant.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                                        applicant.status === 'Reviewed' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-green-100 text-green-800'
                                                    }
                                                `}>
                                                    {applicant.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button className="text-slate-400 hover:text-slate-600">
                                                    <MoreHorizontal size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Active Job Postings */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-slate-900">Your Job Postings</h2>
                        <Link to="/my-jobs" className="text-primary text-sm font-medium hover:underline">Manage</Link>
                    </div>

                    <div className="space-y-4">
                        {activeJobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">{job.type}</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <Users size={14} className="mr-1.5" />
                                        {job.applicants} Applicants
                                    </div>
                                    <span className="text-xs text-slate-400">Posted {job.posted}</span>
                                </div>
                            </div>
                        ))}

                        <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl flex flex-col items-center justify-center text-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-primary">
                                <Briefcase size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">Post a New Job</h3>
                            <p className="text-slate-500 text-xs mb-3">Reach thousands of job seekers</p>
                            <Link to="/post-job" className="text-primary text-sm font-bold hover:underline">Create Listing</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;
