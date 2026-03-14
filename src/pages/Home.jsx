import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,

} from 'react-icons/fa';

import prayerImg from '../assets/images/prayer.png';
import welcomeImg from '../assets/images/welcome1.JPG';
import Footer from '../components/Footer';
import logoImg from '../assets/images/logo.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const events = [
    {
      id: 1,
      title: 'Rest Service',
      date: 'Every Saturday',
      time: '8AM to 10:30AM',
      location: 'Church Auditorium',
      bg: 'bg-purple-100',
      border: 'border-purple-500',
      text: 'text-purple-700',
    },
    {
      id: 2,
      title: 'Word Impact Service',
      date: 'Every Wednesday',
      time: '6PM to 8PM',
      location: 'Church Auditorium',
      bg: 'bg-amber-100',
      border: 'border-amber-400',
      text: 'text-amber-600',
    },
    {
      id: 3,
      title: 'Sabbath Delight',
      date: 'First Saturday of every month',
      time: '8AM to 12PM',
      location: 'Church Auditorium',
      bg: 'bg-indigo-100',
      border: 'border-indigo-500',
      text: 'text-indigo-700',
    },
    {
      id: 4,
      title: 'Healing Night',
      date: 'Last Saturday of every month',
      time: '10PM to 4AM',
      location: 'Church Auditorium',
      bg: 'bg-pink-100',
      border: 'border-pink-400',
      text: 'text-pink-600',
    },
    {
      id: 5,
      title: 'Legacy Summit',
      date: 'In June',
      time: 'Will be Communicated',
      location: 'Church Auditorium',
      bg: 'bg-blue-100',
      border: 'border-blue-400',
      text: 'text-blue-600',
    },
    {
      id: 6,
      title: 'Awakening',
      date: 'In September',
      time: 'Will be Communicated',
      location: 'Church Auditorium',
      bg: 'bg-green-100',
      border: 'border-green-500',
      text: 'text-green-700',
    },
    {
      id: 7,
      title: 'Kingdom Impact',
      date: 'In October',
      time: 'Will be Communicated',
      location: 'Church Auditorium',
      bg: 'bg-purple-100',
      border: 'border-purple-500',
      text: 'text-purple-700',
    },
    {
      id: 8,
      title: 'Switch Thanksgiving And Awards Night',
      date: '31st December',
      time: 'Will be communicated',
      location: 'Church Auditorium',
      bg: 'bg-amber-100',
      border: 'border-amber-400',
      text: 'text-amber-600',
    },
    {
      id: 9,
      title: 'Turning Point Service',
      date: 'Every Sunday',
      time: '5PM to 7PM',
      location: 'Church Auditorium',
      bg: 'bg-amber-200',
      border: 'border-amber-400',
      text: 'text-amber-600',
    },
  ];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    request: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, phone, request } = form;
    const message = `Hello, I would like to request prayer:\n\nName: ${name}\nPhone: ${phone}\nPrayer Request: ${request}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '233267771616';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[500px] bg-[#f9f9f9] flex flex-col items-center justify-center text-center px-4 pt-32">
        <img
          src={logoImg}
          alt="Royal Chapel Logo"
          className="h-40 w-auto mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-[#740798] leading-tight">
          Welcome to <br />Havilah Royal Community Church
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-xl">
          A place of transformation, growth, and spiritual empowerment.
        </p>
      </div>

      {/* Welcome Section */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#740798] mb-6 leading-snug">
              Welcome to <br /> The Royal Chapel
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A place of transformation, growth, and spiritual empowerment. <br />
              Join us in worship and experience the presence of God in a real and refreshing way.
            </p>
            <p className="text-amber-400 font-semibold text-lg mb-4">– Apostle Ebenezer Ohene Adasi</p>
            <div className="flex items-center justify-center md:justify-start gap-6 text-2xl text-gray-700">
              <a href="https://www.facebook.com/profile.php?id=100080995673061" className="text-[#1877F2] hover:scale-110 transition-transform"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ohene_adasi/" className="text-[#E1306C] hover:scale-110 transition-transform"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@havilahroyal" className="text-black hover:scale-110 transition-transform"><FaTiktok /></a>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={welcomeImg}
              alt="Welcome"
              className="w-full max-w-md mx-auto rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#740798]">
              Events Calendar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className={`rounded-xl border-l-8 ${event.border} shadow-md p-6 ${event.bg}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${event.text}`}>{event.title}</h3>
                <p className="text-sm text-gray-700 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-700 mb-1">🕒 {event.time}</p>
                <p className="text-sm text-gray-700 mb-1">📍 {event.location}</p>
                <p className="text-sm text-gray-600 mt-2">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Prayer */}
      <section
        className="relative w-full text-white py-20"
        style={{
          backgroundImage: `url(${prayerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 z-10 relative backdrop-blur-sm bg-white/10 rounded-lg p-10">
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-widest leading-tight">
              REQUEST PRAYER
            </h2>
          </div>

          <form className="space-y-6 w-full" onSubmit={handleWhatsAppSend}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 rounded border border-white bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your contact number"
                className="w-full p-3 rounded border border-white bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="request" className="block mb-2 text-sm font-medium text-white">
                Prayer Request
              </label>
              <textarea
                id="request"
                rows={5}
                value={form.request}
                onChange={handleChange}
                placeholder="Write your prayer request here..."
                className="w-full p-3 rounded border border-white bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 transition-colors text-white font-semibold py-3 rounded"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
