import React from 'react';
import { MapPin, Clock, Briefcase, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 
            ${job.type === 'Freelance' ? 'bg-indigo-50 text-indigo-600' :
                            job.type === 'Part-time' ? 'bg-purple-50 text-purple-600' :
                                job.type === 'Contract' ? 'bg-orange-50 text-orange-600' :
                                    'bg-blue-50 text-blue-600'}`}>
                        {job.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{job.company}</p>
                </div>
                {/* Placeholder for company logo if needed */}
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 font-bold">
                    {job.company.charAt(0)}
                </div>
            </div>

            <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-grow">
                {job.description}
            </p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    {job.location}
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-slate-400" />
                    {job.budget}
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-slate-400" />
                    {job.postedAt}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 2).map((skill, index) => (
                        <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {skill}
                        </span>
                    ))}
                    {job.skills.length > 2 && (
                        <span className="text-xs text-slate-400 px-1 py-1">+ {job.skills.length - 2}</span>
                    )}
                </div>
                <Link to={`/jobs/${job.id}`} className="text-primary hover:text-primary-hover font-medium text-sm flex items-center gap-1 group/btn">
                    Apply <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
