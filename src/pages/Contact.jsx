import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (email or API)
    alert('Message sent!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="w-full h-64 bg-[url('https://source.unsplash.com/1600x400/?church')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">Contact Us</h1>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#740798]">Get In Touch</h2>
          <p className="text-gray-700">We’d love to hear from you! Reach out with any questions, prayer requests, or visit us in person.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-800">
              <FaMapMarkerAlt className="text-[#740798]" />
              <span>Royal Chapel, Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaPhoneAlt className="text-[#740798]" />
              <span>+233 26 777 1616</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="text-[#740798]" />
              <span>info@royalchapel.org</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-xl text-[#740798]">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg space-y-6">
          <h3 className="text-2xl font-semibold text-[#740798]">Send Us a Message</h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#740798]"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#740798]"
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#740798]"
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#740798]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#740798] hover:bg-[#5a066c] text-white py-3 px-6 rounded font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
