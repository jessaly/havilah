import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

       {/* Hero Section */}
      <section className="pt-28 bg-[#740798] text-white text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Contact Us</h1>
         
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-amber-400 text-white py-2 px-4 text-sm md:text-base">
        <div className="container mx-auto">
          Royal Chapel &gt; <span className="font-semibold">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#740798]">Get In Touch</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We’d love to hear from you! Reach out with any questions, prayer requests, or visit us in person.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 text-gray-700 text-lg">
              <FaMapMarkerAlt className="text-[#740798] text-xl" />
              <span>Royal Chapel, Kumasi, Ghana</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 text-lg">
              <FaPhoneAlt className="text-[#740798] text-xl" />
              <span>+233 26 777 1616</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 text-lg">
              <FaEnvelope className="text-[#740798] text-xl" />
              <span>info@royalchapel.org</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-[#740798] text-2xl">
            <a href="#" className="hover:text-amber-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-lg space-y-6 border border-gray-100 mx-auto"
        >
          <h3 className="text-3xl font-semibold text-[#740798] mb-2">Send Us a Message</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#740798] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="w-full mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#740798] transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className="w-full mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#740798] transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#740798] transition"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#740798] hover:bg-[#5a066c] text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2 transition-opacity duration-500 ease-in-out">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
