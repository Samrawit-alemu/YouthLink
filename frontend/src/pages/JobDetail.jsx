import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { JOBS } from '../lib/mockData';
import { MapPin, Clock, DollarSign, Briefcase, ChevronLeft, Share2, CheckCircle } from 'lucide-react';

const JobDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = JOBS.find(j => j.id === parseInt(id));
    const [isApplying, setIsApplying] = useState(false);

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <div className="text-6xl mb-4">😕</div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Job Not Found</h1>
                <p className="text-slate-600 mb-6">The job posting you are looking for might have been removed or expired.</p>
                <Link to="/jobs" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover">
                    Browse Jobs
                </Link>
            </div>
        );
    }

    const handleApply = (e) => {
        e.preventDefault();
        // Mock submission
        setIsApplying(true);
        setTimeout(() => {
            alert('Application submitted successfully! (Mock)');
            setIsApplying(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/jobs" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 transition-colors font-medium">
                    <ChevronLeft className="h-4 w-4 mr-1" /> Back to Jobs
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 w-full relative">
                        <div className="absolute -bottom-10 left-8 h-20 w-20 bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
                            <span className="text-3xl font-bold text-slate-700">{job.company.charAt(0)}</span>
                        </div>
                    </div>

                    <div className="pt-14 px-8 pb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                    <span className="font-semibold text-slate-900 flex items-center"><Briefcase className="h-4 w-4 mr-1 text-primary" /> {job.company}</span>
                                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-slate-400" /> {job.location}</span>
                                    <span className="flex items-center"><Clock className="h-4 w-4 mr-1 text-slate-400" /> {job.postedAt}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
                                    <Share2 className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        <div className="h-px bg-gray-100 my-8" />

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h2 className="text-lg font-bold text-slate-900 mb-4">About the Job</h2>
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                        {job.description}
                                        {/* Mocking more content for realism */}
                                        {"\n\n"}
                                        We are looking for a dedicated individual who is eager to learn and grow.
                                        You will be working closely with our team to deliver high-quality results.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-lg font-bold text-slate-900 mb-4">Responsibilities</h2>
                                    <ul className="space-y-2">
                                        {[
                                            "Collaborate with team members to deliver projects on time",
                                            "Maintain high standards of quality and attention to detail",
                                            "Communicate effectively with stakeholders",
                                            "Adapt to new tools and technologies as needed"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600">
                                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-semibold text-slate-900 mb-4">Job Overview</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Budget</div>
                                            <div className="text-slate-900 font-semibold flex items-center">
                                                <DollarSign className="h-4 w-4 mr-1 text-primary" /> {job.budget}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Job Type</div>
                                            <div className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md">
                                                {job.type}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Category</div>
                                            <div className="text-slate-900 font-medium">
                                                {job.category || 'General'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-100 my-8" />

                        {/* Application Section */}
                        <div id="apply-section" className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Apply for this position</h2>
                            <form onSubmit={handleApply} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter / Note</label>
                                    <textarea
                                        required
                                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 h-32"
                                        placeholder="Tell the employer why you are a good fit..."
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        disabled={isApplying}
                                        className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                    >
                                        {isApplying ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
