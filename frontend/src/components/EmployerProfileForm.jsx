import React, { useState } from 'react';
import { User, MapPin, Mail, Phone, Globe, Plus, X, Upload, Save, Building, Users, Briefcase } from 'lucide-react';

const EmployerProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        ...user,
        // Ensure arrays exist
        benefits: user.benefits || [],
        gallery: user.gallery || [],
        logo: user.logo || null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const addItem = (field, newItem) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], newItem]
        }));
    };

    const removeItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleArrayItemChange = (field, index, value) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, logo: file.name }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-800">Edit Company Profile</h2>
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
                {/* Company Info */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" /> Company Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Industry</label>
                            <input
                                type="text"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Company Size</label>
                            <div className="relative">
                                <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <select
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none bg-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="1-10">1-10 Employees</option>
                                    <option value="11-50">11-50 Employees</option>
                                    <option value="51-200">51-200 Employees</option>
                                    <option value="201-500">201-500 Employees</option>
                                    <option value="500+">500+ Employees</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Headquarters Location</label>
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
                            <label className="text-sm font-medium text-slate-700">Contact Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Website</label>
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

                {/* About Company */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">About Company</h3>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your company culture, mission, and what you do..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-y"
                    />
                </section>

                <hr className="border-gray-100" />

                {/* Benefits/Perks */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">Benefits & Perks</h3>
                        <button
                            type="button"
                            onClick={() => addItem('benefits', '')}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                        >
                            <Plus className="h-4 w-4" /> Add Benefit
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formData.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-1 bg-slate-100 rounded-full pl-3 pr-1 py-1">
                                <input
                                    type="text"
                                    value={benefit}
                                    onChange={(e) => handleArrayItemChange('benefits', index, e.target.value)}
                                    className="bg-transparent border-none focus:ring-0 text-sm p-0 w-32 text-slate-700 placeholder-slate-400"
                                    placeholder="e.g. Remote work"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem('benefits', index)}
                                    className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-red-500 transition-colors"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Logo Upload */}
                <section>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Company Logo</h3>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600 font-medium">{formData.logo ? formData.logo : 'Upload Company Logo'}</p>
                        <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB</p>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="logo-upload"
                            accept="image/*"
                        />
                        <label htmlFor="logo-upload" className="mt-4 inline-block px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50 cursor-pointer">
                            Choose File
                        </label>
                    </div>
                </section>
            </div>
        </form>
    );
};

export default EmployerProfileForm;
