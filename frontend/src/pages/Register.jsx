import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Users, TrendingUp, Eye, EyeOff } from 'lucide-react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('jobseeker');
    const [showPassword, setShowPassword] = useState(false);

    // Email/Password Signup Hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Google Signup Hook (uses Popup by default)
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError,
    ] = useSignInWithGoogle(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Optionally pass name to backend or update profile later
        await createUserWithEmailAndPassword(email, password);
    };

    const handleGoogleRegister = async () => {
        await signInWithGoogle();
    };

    useEffect(() => {
        const currentUser = user?.user || googleUser?.user;
        if (currentUser) {
            // Sync with backend
            currentUser.getIdToken().then(token => {
                axios.post('/api/register', { token, role })
                    .then(() => {
                        console.log("Backend sync successful");
                    })
                    .catch(err => {
                        console.error("Backend sync error", err);
                        // Depending on reqs, might want to block nav or show error
                    })
                    .finally(() => {
                        // Decide where to go.
                        // Design implies 'setup-profile' is next step.
                        navigate('/setup-profile', { state: { role } });
                    });
            });
        }
    }, [user, googleUser, navigate, role]);

    const isLoading = loading || googleLoading;
    const authError = error || googleError;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="flex w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden">
                {/* Left Sidebar - Gradient & Info */}
                <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary opacity-90 z-0"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

                    <div className="relative z-10 text-white">
                        <h1 className="text-4xl font-bold mb-2">Sera Flega</h1>
                        <p className="text-lg text-white/90">Connecting Ambition with Opportunity.</p>
                    </div>

                    <div className="relative z-10 space-y-8 pl-4">
                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-all duration-300">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-medium text-white">Find Gigs</span>
                        </div>
                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-all duration-300">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-medium text-white">Hire Talent</span>
                        </div>
                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-all duration-300">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-medium text-white">Build Your Career</span>
                        </div>
                    </div>

                    <div className="relative z-10 text-white/60 text-sm">
                        © 2024 Sera Flega. All rights reserved.
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Create Your Account</h2>
                            <p className="mt-2 text-gray-500">Join Sera Flega and connect with opportunities.</p>
                        </div>

                        {/* Role Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
                            <div className="flex rounded-xl bg-gray-50 p-1.5 border border-gray-100">
                                <button
                                    onClick={() => setRole('jobseeker')}
                                    className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${role === 'jobseeker'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
                                        }`}
                                >
                                    Job Seeker
                                </button>
                                <button
                                    onClick={() => setRole('employer')}
                                    className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${role === 'employer'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
                                        }`}
                                >
                                    Employer
                                </button>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleRegister}>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter your full name"
                                        className="block w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="block w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm"
                                    />
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                                    <div className="relative">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            placeholder="Enter your password"
                                            className="block w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {role === 'employer' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name (Optional)</label>
                                        <input
                                            name="company"
                                            type="text"
                                            placeholder="Enter your company name"
                                            className="block w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="text-xs text-gray-500">
                                By creating an account, you agree to our <a href="#" className="font-medium text-primary hover:text-primary-hover">Terms of Service</a>.
                            </div>

                            {authError && (
                                <div className="text-red-500 text-sm text-center">
                                    {authError.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 uppercase text-xs tracking-wider font-medium">Or</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={handleGoogleRegister}
                                disabled={isLoading}
                                className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-200"
                            >
                                <svg className="h-5 w-5 mr-3" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M12.0003 20.45c4.6669 0 8.4503-3.7834 8.4503-8.4503 0-.6934-.075-1.365-.1984-2.0084H12.0003v3.7932h4.8347c-.2085 1.125-.8385 2.0784-1.7967 2.7167v2.2584h2.9084c1.7017-1.5668 2.6834-3.8751 2.6834-6.5001 0-7.3918-6.0084-13.3834-13.3834-13.3834-7.3918 0-13.3834 6.0084-10.4667 11.2334 1.4817 2.6518 4.2668 4.4501 7.4668 4.4501 3.2 0 5.9851-1.7984 7.4668-4.4501h.0017v-2.2584H2.4649c1.6084 4.7934 6.1668 8.2418 11.5354 8.2418z" fill="#4285F4" fillRule="evenodd" clipRule="evenodd" opacity="0"></path>
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                <span className="hidden sm:inline">Sign up with </span>Google
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-200"
                            >
                                <svg className="h-5 w-5 mr-3 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="hidden sm:inline">Sign up with </span>LinkedIn
                            </button>
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="font-semibold text-primary hover:text-primary-hover transition-colors">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
