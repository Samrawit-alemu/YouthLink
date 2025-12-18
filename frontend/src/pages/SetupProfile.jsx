import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import EmployerProfileForm from '../components/EmployerProfileForm';

const SetupProfile = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState('seeker'); // 'seeker' or 'employer'

    // Initial empty state for Seeker
    const [seekerUser, setSeekerUser] = useState({
        name: "",
        role: "Student",
        title: "",
        location: "",
        email: "",
        phone: "",
        website: "",
        bio: "",
        skills: [],
        portfolio: [],
        educations: [],
        cv: null
    });

    // Initial empty state for Employer
    const [employerUser, setEmployerUser] = useState({
        companyName: "",
        industry: "",
        size: "",
        location: "",
        email: "",
        website: "",
        about: "",
        benefits: [],
        logo: null
    });

    const handleSave = (formData) => {
        console.log(`Saving ${accountType} profile:`, formData);

        // Save to local storage to persist for Profile view (Simulating backend)
        localStorage.setItem('userProfile', JSON.stringify(formData));
        localStorage.setItem('userType', accountType);

        setTimeout(() => {
            navigate('/profile');
        }, 800);
    };

    const handleCancel = () => {
        if (window.confirm("Are you sure you want to skip profile setup? You can do this later.")) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Welcome to YouthThink!</h1>
                    <p className="mt-2 text-slate-600">Let's set up your profile.</p>
                </div>

                {/* Account Type Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm inline-flex">
                        <button
                            onClick={() => setAccountType('seeker')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${accountType === 'seeker'
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Job Seeker
                        </button>
                        <button
                            onClick={() => setAccountType('employer')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${accountType === 'employer'
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Employer
                        </button>
                    </div>
                </div>

                {accountType === 'seeker' ? (
                    <ProfileForm
                        user={seekerUser}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                ) : (
                    <EmployerProfileForm
                        user={employerUser}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                )}
            </div>
        </div>
    );
};

export default SetupProfile;
