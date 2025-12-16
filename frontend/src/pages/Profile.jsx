import React, { useState } from 'react';
import { User, MapPin, Link as LinkIcon, Mail, Phone, Edit, Plus, Github, Linkedin, Globe } from 'lucide-react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    // Mock User Data
    const [user, setUser] = useState({
        name: "Abel Kebede",
        role: "Student",
        title: "Graphic Design Student @ AAU",
        location: "Addis Ababa, Ethiopia",
        email: "abel.kebede@example.com",
        bio: "Passionate graphic designer with experience in branding and illustration. I love creating clean and impactful visual identities.",
        skills: ["Photoshop", "Illustrator", "Figma", "Branding", "Sketching"],
        portfolio: [
            { title: "Coffee Brand Identity", link: "#", type: "Behance" },
            { title: "Event Poster Series", link: "#", type: "Dribbble" }
        ]
    });

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                    <div className="h-32 bg-primary/10 w-full relative">
                        <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                            <Edit className="h-4 w-4 text-slate-600" />
                        </button>
                    </div>
                    <div className="px-8 pb-8 relative">
                        <div className="absolute -top-12 left-8 p-1 bg-white rounded-full">
                            <div className="h-24 w-24 bg-slate-200 rounded-full flex items-center justify-center border-4 border-white text-slate-400">
                                <User className="h-10 w-10" />
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                                <p className="text-slate-600 font-medium mb-1">{user.title}</p>
                                <div className="flex items-center text-sm text-slate-500 mb-4">
                                    <MapPin className="h-4 w-4 mr-1" /> {user.location}
                                </div>

                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light/10 text-primary">
                                        {user.role}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors">
                                    Share Profile
                                </button>
                                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover font-medium shadow-sm transition-colors">
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
                                <div className="flex items-center text-sm text-slate-600">
                                    <Phone className="h-4 w-4 mr-3 text-slate-400" />
                                    +251 911 000 000
                                </div>
                                <div className="flex items-center text-sm text-slate-600">
                                    <Globe className="h-4 w-4 mr-3 text-slate-400" />
                                    <a href="#" className="text-primary hover:underline">www.abel.design</a>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4 justify-center">
                                <a href="#" className="text-slate-400 hover:text-[#0077b5]"><Linkedin className="h-5 w-5" /></a>
                                <a href="#" className="text-slate-400 hover:text-black"><Github className="h-5 w-5" /></a>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-slate-900">Skills</h3>
                                <button className="text-primary hover:text-primary-hover"><Plus className="h-4 w-4" /></button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {user.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-6">
                        {/* About */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-3">About</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {user.bio}
                            </p>
                        </div>

                        {/* Portfolio / Projects */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-semibold text-slate-900">Portfolio</h3>
                                <button className="text-sm text-primary font-medium hover:underline flex items-center">
                                    <Plus className="h-4 w-4 mr-1" /> Add Project
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Mock Project Card 1 */}
                                <div className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="h-32 bg-slate-200 relative">
                                        {/* Placeholder image area */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image</div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Coffee Brand Identity</h4>
                                        <span className="text-xs text-slate-500">Logo Design, Packaging</span>
                                    </div>
                                </div>

                                {/* Mock Project Card 2 */}
                                <div className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="h-32 bg-slate-200 relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image</div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Event Poster Series</h4>
                                        <span className="text-xs text-slate-500">Illustration, Print</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
