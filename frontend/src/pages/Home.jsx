import React from 'react';
import { Link } from 'react-router-dom';
import { JOBS, CATEGORIES } from '../lib/mockData';
import JobCard from '../components/JobCard';
import { Search, Briefcase, Code, PenTool, Users, ChevronRight, CheckCircle } from 'lucide-react';

const Home = () => {
    const recentJobs = JOBS.slice(0, 3);

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-16 pb-32">
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-primary-light/10 to-transparent opacity-50 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                        For Ethiopian Students & Graduates
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                        Find Work That Matters. <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Build Your Future.
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
                        Connect with local businesses for freelance gigs, internships, and part-time jobs.
                        Gain experience while you study.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/jobs" className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all transform hover:-translate-y-1">
                            Find Opportunities
                        </Link>
                        <Link to="/post-job" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-semibold rounded-full shadow-sm hover:border-primary/50 hover:text-primary transition-all">
                            Post a Job
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats/Trust Bar */}
            <div className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary-light mb-1">500+</div>
                        <div className="text-slate-400 text-sm">Active Students</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-light mb-1">200+</div>
                        <div className="text-slate-400 text-sm">Local Businesses</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-light mb-1">1000+</div>
                        <div className="text-slate-400 text-sm">Gigs Completed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-light mb-1">50k+</div>
                        <div className="text-slate-400 text-sm">ETB Paid Out</div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Recent Opportunities</h2>
                        <p className="text-slate-500">Discover the latest gigs from local employers.</p>
                    </div>
                    <Link to="/jobs" className="text-primary font-medium flex items-center hover:text-primary-hover transition-colors">
                        View all jobs <ChevronRight className="h-5 w-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentJobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Browse by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {CATEGORIES.slice(0, 8).map((cat, idx) => (
                            <Link to={`/jobs?category=${cat}`} key={idx}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col items-center text-center">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    {/* Simplified icon logic for demo */}
                                    {idx % 4 === 0 ? <Code /> : idx % 4 === 1 ? <PenTool /> : idx % 4 === 2 ? <Briefcase /> : <Users />}
                                </div>
                                <h3 className="font-semibold text-slate-900 group-hover:text-primary">{cat}</h3>
                                <span className="text-xs text-slate-500 mt-2">120+ jobs</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop Section */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary-light font-semibold tracking-wider text-sm">WHY YOUTHLINK?</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Bridging the Gap Between Talent and Opportunity</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            We understand the struggle of finding experience as a student. We also know local businesses need affordable help. We built YouthLink to solve both.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Verified Student Profiles",
                                "Secure Payment Protection (Coming Soon)",
                                "Local Ethiopia-Based Gigs",
                                "Skill-Based Matching"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-primary-light h-6 w-6" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 p-8 border border-slate-600 shadow-2xl relative">
                            {/* Abstract representation of UI */}
                            <div className="absolute top-8 left-8 right-8 h-8 bg-slate-600 rounded-full w-2/3 mb-4 animate-pulse" />
                            <div className="absolute top-24 left-8 right-8 h-32 bg-slate-600/50 rounded-xl mb-4" />
                            <div className="absolute bottom-8 right-8 h-12 w-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform translate-x-4 translate-y-4">
                                <Briefcase className="text-white h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
