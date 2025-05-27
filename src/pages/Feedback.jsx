import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields (Name and Message).');
      return;
    }
    // TODO: Integrate backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      purpose: '',
      message: '',
    });
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 bg-[#740798] text-white text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Inquiry & Feedback</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-amber-400 text-white py-2 px-4 text-sm md:text-base">
        <div className="container mx-auto">
          Royal Chapel &gt; <span className="font-semibold">Inquiry & Feedback</span>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
                {/* Name Field */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#740798] focus:border-transparent"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#740798] focus:border-transparent"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-600 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#740798] focus:border-transparent"
                  />
                </div>

                {/* Purpose Radio Buttons */}
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-4">
                    I want to:
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="inquiry"
                        checked={formData.purpose === 'inquiry'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#740798] border-gray-300 focus:ring-[#740798]"
                      />
                      <span className="ml-3 text-gray-600">Make an inquiry</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="service-feedback"
                        checked={formData.purpose === 'service-feedback'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#740798] border-gray-300 focus:ring-[#740798]"
                      />
                      <span className="ml-3 text-gray-600">Give feedback about church service</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="general-feedback"
                        checked={formData.purpose === 'general-feedback'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#740798] border-gray-300 focus:ring-[#740798]"
                      />
                      <span className="ml-3 text-gray-600">Give feedback about the church in general</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="other"
                        checked={formData.purpose === 'other'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#740798] border-gray-300 focus:ring-[#740798]"
                      />
                      <span className="ml-3 text-gray-600">Other</span>
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
                    Comment or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#740798] focus:border-transparent resize-vertical"
                    placeholder="Please enter your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#740798] text-white px-8 py-3 rounded-md hover:bg-amber-400 transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-sm h-fit">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                
                {/* Location */}
                <div className="mb-8">
                  <h3 className="text-[#740798] font-semibold text-sm uppercase tracking-wide mb-3">
                    LOCATION
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>........</p>
                    <p>.......</p>
                    <p>.......</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="mb-8">
                  <h3 className="text-[#740798] font-semibold text-sm uppercase tracking-wide mb-3">
                    PHONE NUMBERS
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>.......</p>
                    <p>.......</p>
                    <p>........</p>
                  </div>
                </div>

                {/* Emails */}
                <div>
                  <h3 className="text-[#740798] font-semibold text-sm uppercase tracking-wide mb-3">
                    EMAILS
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>...........</p>
                    <p>...........</p>
                    <p>............</p>
                  </div>
                </div>

                {/* Back to top button */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Back to top"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;