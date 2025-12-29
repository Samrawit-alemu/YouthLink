import React, { useState } from 'react';
import { Users, Briefcase, FileText, PieChart, Search, Plus, MoreHorizontal } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('All Users');

    const stats = [
        { title: 'Total Users', value: '1,420', change: '+2.5%', isPositive: true },
        { title: 'Active Gigs', value: '256', change: '+5.2%', isPositive: true },
        { title: 'Pending Jobs', value: '32', change: '-1.8%', isPositive: false },
        { title: 'Total Categories', value: '15', change: '+0.5%', isPositive: true },
    ];

    const users = [
        { id: 1, name: 'Sara T.', email: 'sara.t@example.com', role: 'Student', status: 'Active', date: '2023-10-26', avatar: 'https://i.pravatar.cc/150?u=sara' },
        { id: 2, name: 'John D.', email: 'john.d@example.com', role: 'Business', status: 'Active', date: '2023-10-25', avatar: 'https://i.pravatar.cc/150?u=john' },
        { id: 3, name: 'Mike R.', email: 'mike.r@example.com', role: 'Student', status: 'Pending', date: '2023-10-24', avatar: 'https://i.pravatar.cc/150?u=mike' },
        // Add more mock data as needed
    ];

    return (
        <div className="p-8 font-sans text-slate-900">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Users Dashboard</h1>
                    <p className="text-slate-500">Manage all registered users, their roles, and status.</p>
                </div>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform transition-transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30">
                    <Plus size={20} />
                    Add New User
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
                        <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                        <span className={`text-sm font-bold ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.change}
                        </span>
                    </div>
                ))}
            </div>

            {/* Users Table Section */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Tabs */}
                <div className="px-8 pt-8 pb-4 border-b border-gray-100 flex gap-8">
                    {['All Users', 'Students', 'Businesses'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === tab
                                    ? 'border-cyan-500 text-cyan-500'
                                    : 'border-transparent text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-wider">User</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-wider">Date Joined</th>
                                <th className="text-right py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-5 px-8">
                                        <div className="flex items-center gap-4">
                                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">{user.name}</h4>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className="font-medium text-slate-700">{user.role}</span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                                            ${user.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-slate-100 text-slate-700'
                                            }
                                        `}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-8 text-slate-500 text-sm font-medium">
                                        {user.date}
                                    </td>
                                    <td className="py-5 px-8 text-right">
                                        <button className="text-cyan-500 hover:text-cyan-600 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
