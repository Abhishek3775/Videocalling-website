import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">VideoVibe</h3>
          <p className="text-sm">
            Making video calls vibrant, seamless, and secure. Connect from
            anywhere, anytime.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">HD Video</a></li>
            <li><a href="#" className="hover:text-white transition">Screen Share</a></li>
            <li><a href="#" className="hover:text-white transition">Whiteboard</a></li>
            <li><a href="#" className="hover:text-white transition">Custom Backgrounds</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Subscribe</h4>
          <p className="text-sm mb-3">Stay updated with the latest features and tips.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 px-4 flex flex-col md:flex-row items-center justify-between text-sm max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} VideoVibe. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
