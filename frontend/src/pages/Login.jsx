import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError,
    ] = useSignInWithGoogle(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    };

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    };

    useEffect(() => {
        if (user || googleUser) {
            const currentUser = user?.user || googleUser?.user;
            if (googleUser) {
                // Sync with backend for Google Login
                currentUser.getIdToken().then(token => {
                    axios.post('/api/register', { token })
                        .catch(err => console.error("Backend sync error", err));
                });
            }
            navigate('/dashboard');
        }
    }, [user, googleUser, navigate]);

    if (error || googleError) {
        // You might want to display this error in the UI
        console.error(error || googleError);
    }

    const isLoading = loading || googleLoading;

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary-light/10 p-3 rounded-full">
                            <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Welcome back</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Please sign in to your account
                    </p>
                </div>


                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-primary-hover">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {(error || googleError) && (
                        <div className="text-red-500 text-sm text-center">
                            {(error || googleError).message}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>

                    {/* Google Login Button (added to Login as well since it was in Register) */}
                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
                        >
                            Sign in with Google
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm text-slate-500">
                    Don't have an account? <Link to="/register" className="font-medium text-primary hover:text-primary-hover">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
