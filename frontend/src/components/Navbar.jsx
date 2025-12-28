import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, User, GraduationCap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-primary-light/20 p-2 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-bold text-xl text-dark">Youth<span className="text-primary">Link</span></span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-3 ml-4">
                            <Link to="/login" className="text-gray-600 font-medium text-sm hover:text-primary transition-colors">
                                Log In
                            </Link>
                            <Link
                                to="/register"
                                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-primary bg-primary/5'
                                    : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center text-gray-600 font-medium py-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center bg-primary text-white font-medium py-2 rounded-lg hover:bg-primary-hover shadow-md"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
