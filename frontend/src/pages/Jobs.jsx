import React, { useState, useMemo } from 'react';
import { JOBS, CATEGORIES } from '../lib/mockData';
import JobCard from '../components/JobCard';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Jobs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');

    const filteredJobs = useMemo(() => {
        return JOBS.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory || job.type === selectedCategory; // Allow type filtering too conceptually

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        if (cat === 'All') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: cat });
        }
    };

    return (
        <div className="bg-slate-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Search */}
                <div className="mb-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Find Your Next Gig</h1>
                    <p className="text-slate-600 mb-8">Browse hundreds of opportunities from local businesses in Ethiopia.</p>

                    <div className="flex gap-2 bg-white p-2 rounded-xl shadow-md border border-gray-200">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border-none rounded-lg focus:ring-0 text-gray-900 placeholder-gray-500 sm:text-sm bg-transparent"
                                placeholder="Search by title, skill, or company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                            <div className="flex items-center gap-2 font-semibold text-slate-900 mb-4">
                                <Filter className="h-4 w-4" /> Filters
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-slate-900 mb-3">Categories</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                                            checked={selectedCategory === 'All'}
                                            onChange={() => handleCategoryChange('All')}
                                        />
                                        <span className="text-sm text-slate-600">All Categories</span>
                                    </label>
                                    {CATEGORIES.map(cat => (
                                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                                                checked={selectedCategory === cat}
                                                onChange={() => handleCategoryChange(cat)}
                                            />
                                            <span className="text-sm text-slate-600">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Results */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-slate-900">
                                {filteredJobs.length} {filteredJobs.length === 1 ? 'Result' : 'Results'} Found
                            </h2>
                            <div className="text-sm text-slate-500">
                                Showing results for <span className="font-medium text-slate-900">"{selectedCategory}"</span>
                            </div>
                        </div>

                        {filteredJobs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredJobs.map(job => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 mb-4">
                                    <Search className="h-8 w-8 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900 mb-1">No jobs found</h3>
                                <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); handleCategoryChange('All'); }}
                                    className="mt-4 text-primary font-medium hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
