import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, Upload, X } from 'lucide-react';
import { JOBS } from '../lib/mockData';

const ApplyJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = JOBS.find(j => j.id === parseInt(id));
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    if (!job) return <div>Job not found</div>;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock submission
        setTimeout(() => {
            setLoading(false);
            alert('Application Submitted Successfully!');
            navigate('/dashboard');
        }, 1500);
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) setFile(droppedFile);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-slate-900">Sera Flega</span>
                    </div>
                    <Link to={`/jobs/${id}`} className="text-slate-500 hover:text-slate-900 text-sm font-medium flex items-center gap-1">
                        <ArrowLeft size={16} />
                        Back to Job
                    </Link>
                </div>
            </header>

            <main className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Apply to {job.title}</h1>
                        <p className="text-slate-500">{job.company}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Cover Message */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Cover Message</label>
                            <textarea
                                rows={6}
                                className="w-full rounded-xl border-gray-200 bg-gray-50 p-4 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none placeholder:text-slate-400"
                                placeholder="Write a brief message about why you're a great fit for this role..."
                            />
                        </div>

                        {/* Portfolio Link */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Portfolio Link</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <LinkIcon className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="url"
                                    className="w-full rounded-xl border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                                    placeholder="https://yourportfolio.com"
                                />
                            </div>
                        </div>

                        {/* Attachments */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Attachments</label>
                            <div
                                className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 hover:bg-gray-50/80 transition-colors cursor-pointer"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleFileDrop}
                            >
                                {file ? (
                                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                <Upload size={18} className="text-primary" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-slate-900 truncate max-w-[200px]">{file.name}</p>
                                                <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFile(null)}
                                            className="p-1 hover:bg-gray-100 rounded-full text-slate-400 hover:text-red-500"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-sm font-bold text-slate-900 mb-1">Attachments</h4>
                                        <p className="text-sm text-slate-500 mb-4">Drag and drop your CV or work samples here</p>
                                        <button
                                            type="button"
                                            className="bg-white border border-gray-200 text-slate-700 font-semibold py-2 px-4 rounded-xl text-sm hover:bg-gray-50 transition-colors"
                                            onClick={() => document.getElementById('file-upload').click()}
                                        >
                                            Browse Files
                                        </button>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Submitting Application...' : 'Submit Application'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ApplyJob;
