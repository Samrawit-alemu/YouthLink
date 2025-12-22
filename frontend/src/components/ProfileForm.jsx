
import React, { useState } from 'react';
import { User, MapPin, Mail, Phone, Globe, Plus, X, Upload, Save, X as CloseIcon } from 'lucide-react';

const ProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        ...user,
        // Ensure arrays exist
        skills: user.skills || [],
        portfolio: user.portfolio || [],
        educations: user.educations || [],
        cv: user.cv || null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Generic handler for array updates (adding item)
    const addItem = (field, newItem) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], newItem]
        }));
    };

    // Generic handler for array updates (removing item)
    const removeItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    // Specific handler for array item changes
    const handleArrayItemChange = (field, index, key, value) => {
        const newArray = [...formData[field]];
        if (typeof newArray[index] === 'object') {
            newArray[index] = { ...newArray[index], [key]: value };
        } else {
            newArray[index] = value; // for simple arrays like strings
        }
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleFileChange = (e) => {
        // Mock file upload
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, cv: file.name }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-800">Edit Profile</h2>
                <div className="flex gap-2">
                    <button type="button" onClick={onCancel} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                        <Save className="h-4 w-4" /> Save Changes
                    </button>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Personal Info */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" /> Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Headline / Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Contact Info */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" /> Contact & Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Phone</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                    placeholder="+251 ..."
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-1">
                            <label className="text-sm font-medium text-slate-700">Website / Portfolio URL</label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website || ''}
                                    onChange={handleChange}
                                    placeholder="https://"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* About Me */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">About Me</h3>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-y"
                    />
                </section>

                <hr className="border-gray-100" />

                {/* Skills */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">Skills</h3>
                        <button
                            type="button"
                            onClick={() => addItem('skills', '')}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                        >
                            <Plus className="h-4 w-4" /> Add Skill
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-1 bg-slate-100 rounded-full pl-3 pr-1 py-1">
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => handleArrayItemChange('skills', index, null, e.target.value)}
                                    className="bg-transparent border-none focus:ring-0 text-sm p-0 w-24 text-slate-700 placeholder-slate-400"
                                    placeholder="Skill name"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem('skills', index)}
                                    className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-red-500 transition-colors"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Education */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">Education</h3>
                        <button
                            type="button"
                            onClick={() => addItem('educations', { school: '', degree: '', year: '' })}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                        >
                            <Plus className="h-4 w-4" /> Add Education
                        </button>
                    </div>
                    <div className="space-y-4">
                        {formData.educations.map((edu, index) => (
                            <div key={index} className="p-4 bg-slate-50 rounded-lg border border-gray-100 relative group">
                                <button
                                    type="button"
                                    onClick={() => removeItem('educations', index)}
                                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <CloseIcon className="h-4 w-4" />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            value={edu.school}
                                            onChange={(e) => handleArrayItemChange('educations', index, 'school', e.target.value)}
                                            placeholder="School / University"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            value={edu.degree}
                                            onChange={(e) => handleArrayItemChange('educations', index, 'degree', e.target.value)}
                                            placeholder="Degree / Field"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            value={edu.year}
                                            onChange={(e) => handleArrayItemChange('educations', index, 'year', e.target.value)}
                                            placeholder="Years (e.g. 2020 - 2024)"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Portfolio */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">Portfolio Projects</h3>
                        <button
                            type="button"
                            onClick={() => addItem('portfolio', { title: '', type: '', link: '' })}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                        >
                            <Plus className="h-4 w-4" /> Add Project
                        </button>
                    </div>
                    <div className="space-y-4">
                        {formData.portfolio.map((project, index) => (
                            <div key={index} className="p-4 bg-slate-50 rounded-lg border border-gray-100 relative group">
                                <button
                                    type="button"
                                    onClick={() => removeItem('portfolio', index)}
                                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <CloseIcon className="h-4 w-4" />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            value={project.title}
                                            onChange={(e) => handleArrayItemChange('portfolio', index, 'title', e.target.value)}
                                            placeholder="Project Title"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            value={project.type}
                                            onChange={(e) => handleArrayItemChange('portfolio', index, 'type', e.target.value)}
                                            placeholder="Category (e.g. Design)"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-1">
                                        <input
                                            type="text"
                                            value={project.link}
                                            onChange={(e) => handleArrayItemChange('portfolio', index, 'link', e.target.value)}
                                            placeholder="Project Link URL"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* CV Upload */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">CV / Resume</h3>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600 font-medium">{formData.cv ? formData.cv : 'Upload your CV'}</p>
                        <p className="text-xs text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="cv-upload"
                        />
                        <label htmlFor="cv-upload" className="mt-4 inline-block px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50 cursor-pointer">
                            Choose File
                        </label>
                    </div>
                </section>
            </div>
        </form>
    );
};

export default ProfileForm;
