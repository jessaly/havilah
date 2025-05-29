import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';


import prayerImg from '../assets/images/prayer.png';
import welcomeImg from '../assets/images/welcome1.jpg';
import Footer from '../components/Footer';
import secondImg from '../assets/images/home2.jpg';
import thirdImg from '../assets/images/home3.jpg';
import fourthImg from '../assets/images/home4.jpg';
import fifthImg from '../assets/images/home5.jpg';

const Home = () => {
  const images = [secondImg, thirdImg, fourthImg, fifthImg];

  const events = [
    { id: 1, bgColor: "bg-purple-700", title: "Prayer & Praise Night", description: "A powerful evening of worship and intercession." },
    { id: 2, bgColor: "bg-amber-600", title: "Sunday Celebration", description: "Spirit-filled Sunday service at 8:30am." },
    { id: 3, bgColor: "bg-indigo-800", title: "Youth Hangout", description: "Connect, play, and grow together." },
    { id: 4, bgColor: "bg-pink-700", title: "Women's Conference", description: "Empowering women through the Word." },
    { id: 5, bgColor: "bg-green-700", title: "Leadership Summit", description: "Equipping leaders for kingdom impact." },
    { id: 6, bgColor: "bg-blue-900", title: "Bible Study", description: "Dig deeper every Wednesday at 6:30pm." },
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

      
      {/* Hero Slider */}
      <div className="w-full h-[750px]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Welcome Section */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
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
              <a href="#" className="text-[#1877F2] hover:scale-110 transition-transform"><FaFacebookF /></a>
              <a href="#" className="text-[#E1306C] hover:scale-110 transition-transform"><FaInstagram /></a>
              <a href="#" className="text-[#1DA1F2] hover:scale-110 transition-transform"><FaTwitter /></a>
              <a href="#" className="text-[#FF0000] hover:scale-110 transition-transform"><FaYoutube /></a>
            </div>
          </div>

          {/* Right */}
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
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {events.map(({ id, bgColor, title, description }) => (
              <div
                key={id}
                className={`${bgColor} rounded-xl h-64 shadow-lg flex flex-col justify-center items-center p-6 text-white`}
              >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-center">{description}</p>
              </div>
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
