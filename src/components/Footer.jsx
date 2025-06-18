import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
          
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-xl font-bold mb-2">The Royal Chapel</h2>
            <p>Transforming lives through Christ.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/events" className="hover:text-blue-600">Events</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* Worship Times */}
          <div>
            <h3 className="font-semibold mb-2">Worship Times</h3>
            <ul className="space-y-1">
              <li>Saturdays: 8AM to 10:30AM</li>
              <li>Wednesdays: 6PM to 8:30PM</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-3 text-gray-500 text-lg">
              <a href="https://www.facebook.com/profile.php?id=61575177340157" target='_blank' className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://www.instagram.com/havilahroyal/"  target='_blank' className="hover:text-pink-500"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@havilahroyal" target='_blank' className="hover:text-black-400"><FaTiktok /></a>
              <a href="https://www.youtube.com/@havilahroyal" target='_blank' className="hover:text-red-600"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">
          &copy; {new Date().getFullYear()} The Royal Chapel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
