import React, { useState } from 'react';

function About(){

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans mt-2">
      {/* Header */}
      <header className="bg-blue-600 text-white bg-gradient-to-br from-red-300 to-pink-400">
        <div className="container flex items-center justify-center mx-auto px-4">
          <p className="mt-2 text-lg">Connecting the world through seamless video calls</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2023, our video calling platform was created to make communication effortless and accessible. 
            We believe in the power of face-to-face interaction, no matter the distance, and our mission is to deliver 
            crystal-clear video and audio experiences to users worldwide.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-blue-600">HD Video & Audio</h3>
              <p className="text-gray-600 mt-2">Enjoy high-definition video and crystal-clear audio for every call.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-blue-600">Secure Calls</h3>
              <p className="text-gray-600 mt-2">End-to-end encryption ensures your conversations stay private.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-blue-600">Cross-Platform</h3>
              <p className="text-gray-600 mt-2">Connect from any device, anywhere, anytime.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Jane Doe', role: 'CEO & Founder', img: 'https://via.placeholder.com/150' },
              { name: 'John Smith', role: 'Lead Developer', img: 'https://via.placeholder.com/150' },
              { name: 'Emily Johnson', role: 'UX Designer', img: 'https://via.placeholder.com/150' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <img src='https://th.bing.com/th/id/OIP.c0GTqHSPgp9rz7Pn2Aw_8wHaF7?rs=1&pid=ImgDetMain' alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-green-600">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Video Calling App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;