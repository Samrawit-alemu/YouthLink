import React, { useState, useEffect } from 'react';
import { User, MapPin, Link as LinkIcon, Mail, Phone, Edit, Plus, Github, Linkedin, Globe, FileText, GraduationCap, Download } from 'lucide-react';
import ProfileForm from '../components/ProfileForm';
import EmployerProfileForm from '../components/EmployerProfileForm';
import EmployerProfileView from '../components/EmployerProfileView';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userType, setUserType] = useState('seeker'); // 'seeker' or 'employer'

    // Mock User Data for Seeker
    const [seekerUser, setSeekerUser] = useState({
        name: "Abel Kebede",
        role: "Job Seeker",
        title: "Graphic Design Student @ AAU",
        location: "Addis Ababa, Ethiopia",
        email: "abel.kebede@example.com",
        phone: "+251 911 000 000",
        website: "www.abel.design",
        bio: "Passionate graphic designer with experience in branding and illustration. I love creating clean and impactful visual identities.",
        skills: ["Photoshop", "Illustrator", "Figma", "Branding", "Sketching"],
        portfolio: [
            { title: "Coffee Brand Identity", link: "#", type: "Behance" },
            { title: "Event Poster Series", link: "#", type: "Dribbble" }
        ],
        educations: [
            { school: "Addis Ababa University", degree: "BFA in Graphic Design", year: "2021 - Present" }
        ],
        cv: "Abel_Kebede_Resume.pdf"
    });

    // Mock User Data for Employer
    const [employerUser, setEmployerUser] = useState({
        companyName: "TechCorp Ethiopia",
        industry: "Software Development",
        size: "51-200",
        location: "Addis Ababa, Bole",
        email: "careers@techcorp.et",
        website: "https://techcorp.et",
        about: "We are a leading software development company in Ethiopia, focused on building innovative solutions for the African market. We value creativity, collaboration, and continuous learning.",
        benefits: ["Health Insurance", "Flexible Hours", "Professional Development", "Free Coffee"],
        logo: null
    });

    useEffect(() => {
        // Check for stored profile from SetupProfile
        const storedType = localStorage.getItem('userType');
        if (storedType) {
            setUserType(storedType);
            const storedProfile = localStorage.getItem('userProfile');
            if (storedProfile) {
                if (storedType === 'seeker') {
                    setSeekerUser(JSON.parse(storedProfile));
                } else {
                    setEmployerUser(JSON.parse(storedProfile));
                }
            }
        }
    }, []);

    const handleSave = (updatedUser) => {
        if (userType === 'seeker') {
            setSeekerUser(updatedUser);
            localStorage.setItem('userProfile', JSON.stringify(updatedUser));
        } else {
            setEmployerUser(updatedUser);
            localStorage.setItem('userProfile', JSON.stringify(updatedUser));
        }
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className="bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {userType === 'employer' ? (
                        <EmployerProfileForm
                            user={employerUser}
                            onSave={handleSave}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        <ProfileForm
                            user={seekerUser}
                            onSave={handleSave}
                            onCancel={() => setIsEditing(false)}
                        />
                    )}
                </div>
            </div>
        );
    }

    if (userType === 'employer') {
        return <EmployerProfileView user={employerUser} onEdit={() => setIsEditing(true)} />;
    }

    return (
        <div className="bg-slate-50 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                    <div className="h-32 bg-primary/10 w-full relative">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
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
                                <h1 className="text-2xl font-bold text-slate-900">{seekerUser.name}</h1>
                                <p className="text-slate-600 font-medium mb-1">{seekerUser.title}</p>
                                <div className="flex items-center text-sm text-slate-500 mb-4">
                                    <MapPin className="h-4 w-4 mr-1" /> {seekerUser.location}
                                </div>


                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors">
                                    Share Profile
                                </button>
                                <button
                                    onClick={() => setIsEditing(true)}
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
                                    {seekerUser.email}
                                </div>
                                {seekerUser.phone && (
                                    <div className="flex items-center text-sm text-slate-600">
                                        <Phone className="h-4 w-4 mr-3 text-slate-400" />
                                        {seekerUser.phone}
                                    </div>
                                )}
                                {seekerUser.website && (
                                    <div className="flex items-center text-sm text-slate-600">
                                        <Globe className="h-4 w-4 mr-3 text-slate-400" />
                                        <a href={seekerUser.website} className="text-primary hover:underline">{seekerUser.website}</a>
                                    </div>
                                )}
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
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {seekerUser.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CV / Resume Download */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-4">Resume</h3>
                            {seekerUser.cv ? (
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white rounded-md shadow-sm text-red-500">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 truncate max-w-[120px]">{seekerUser.cv}</p>
                                            <p className="text-xs text-slate-500">PDF</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-primary">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </div>
                            ) : (
                                <p className="text-sm text-slate-500 italic">No CV uploaded</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-6">
                        {/* About */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-3">About</h3>
                            <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                                {seekerUser.bio}
                            </p>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-slate-900 mb-4">Education</h3>
                            <div className="space-y-6">
                                {seekerUser.educations && seekerUser.educations.length > 0 ? (
                                    seekerUser.educations.map((edu, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="mt-1">
                                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                    <GraduationCap className="h-5 w-5" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">{edu.school}</h4>
                                                <p className="text-sm text-slate-600">{edu.degree}</p>
                                                <p className="text-xs text-slate-500 mt-1">{edu.year}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-500 italic">No education listed</p>
                                )}
                            </div>
                        </div>

                        {/* Portfolio / Projects */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-semibold text-slate-900">Portfolio</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {seekerUser.portfolio.map((project, index) => (
                                    <div key={index} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="h-32 bg-slate-200 relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image</div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">{project.title}</h4>
                                            <span className="text-xs text-slate-500">{project.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

