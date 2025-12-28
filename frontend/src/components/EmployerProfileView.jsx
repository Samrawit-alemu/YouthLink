import React from 'react';
import { MapPin, Link as LinkIcon, Mail, Building, Users, Globe, Edit, Briefcase, CheckCircle } from 'lucide-react';

const EmployerProfileView = ({ user, onEdit }) => {
    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Company Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                    <div className="h-32 bg-primary/10 w-full relative">
                        <button
                            onClick={onEdit}
                            className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                            <Edit className="h-4 w-4 text-slate-600" />
                        </button>
                    </div>
                    <div className="px-8 pb-8 relative">
                        <div className="absolute -top-12 left-8 p-1 bg-white rounded-full">
                            <div className="h-24 w-24 bg-slate-200 rounded-full flex items-center justify-center border-4 border-white text-slate-400 overflow-hidden">
                                {user.logo ? (
                                    <div className="bg-white w-full h-full flex items-center justify-center text-xs font-bold text-slate-700">
                                        {/* Placeholder for uploaded image display if it was real */}
                                        {user.logo}
                                    </div>
                                ) : (
                                    <Building className="h-10 w-10" />
                                )}
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">{user.companyName}</h1>
                                <p className="text-slate-600 font-medium mb-1">{user.industry}</p>
                                <div className="flex items-center text-sm text-slate-500 mb-4">
                                    <MapPin className="h-4 w-4 mr-1" /> {user.location}
                                </div>

                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light/10 text-primary">
                                        <Users className="h-3 w-3 mr-1" /> {user.size} Employees
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors">
                                    View Jobs
                                </button>
                                <button
                                    onClick={onEdit}
                                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover font-medium shadow-sm transition-colors"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-slate-600">
                                    <Mail className="h-4 w-4 mr-3 text-slate-400" />
                                    {user.email}
                                </div>
                                {user.website && (
                                    <div className="flex items-center text-sm text-slate-600">
                                        <Globe className="h-4 w-4 mr-3 text-slate-400" />
                                        <a href={user.website} className="text-primary hover:underline">{user.website}</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-slate-900">Benefits & Perks</h3>
                            </div>
                            <div className="space-y-2">
                                {user.benefits && user.benefits.length > 0 ? (
                                    user.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start text-sm text-slate-600">
                                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-500 italic">No benefits listed</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-6">
                        {/* About Company */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-3">About Company</h3>
                            <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                                {user.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerProfileView;
