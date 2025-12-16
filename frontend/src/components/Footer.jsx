import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-white">Youth<span className="text-primary-light">Link</span></span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-6">
                            Empowering Ethiopian students and graduates by connecting them with local opportunities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/jobs" className="hover:text-primary-light transition-colors">Find Gigs</Link></li>
                            <li><Link to="/post-job" className="hover:text-primary-light transition-colors">Post a Job</Link></li>
                            <li><Link to="/talent" className="hover:text-primary-light transition-colors">Browse Talent</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary-light transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/blog" className="hover:text-primary-light transition-colors">Blog</Link></li>
                            <li><Link to="/guide" className="hover:text-primary-light transition-colors">Freelancing Guide</Link></li>
                            <li><Link to="/community" className="hover:text-primary-light transition-colors">Community</Link></li>
                            <li><Link to="/help" className="hover:text-primary-light transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>support@youthlink.et</li>
                            <li>+251 911 234 567</li>
                            <li>Addis Ababa, Ethiopia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} YouthLink Ethiopia. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-slate-500">
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
