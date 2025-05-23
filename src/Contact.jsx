import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@videovibe.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Neon St, Virtual City, Webland</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                required
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
