import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Register = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/setup-profile');
        }, 1000);
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary-light/10 p-3 rounded-full">
                            <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Create Account</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Join the community today
                    </p>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                        onClick={() => setRole('student')}
                        className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${role === 'student' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        I'm a Student
                    </button>
                    <button
                        onClick={() => setRole('employer')}
                        className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${role === 'employer' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        I'm an Employer
                    </button>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    {role === 'student' && (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">University / College</label>
                            <input
                                name="university"
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="e.g. Addis Ababa University"
                            />
                        </div>
                    )}

                    {role === 'employer' && (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Company Name (Optional)</label>
                            <input
                                name="company"
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>
                    )}

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70"
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm text-slate-500">
                    Already have an account? <Link to="/login" className="font-medium text-primary hover:text-primary-hover">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
