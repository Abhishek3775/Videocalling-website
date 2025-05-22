import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-white text-2xl font-extrabold tracking-wide">
        <Link to="/">VideoVibe</Link>
      </div>
      <ul className="flex gap-6 text-white font-semibold text-lg">
        <li>
          <Link to="/home" className="hover:text-yellow-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        </li>
        <li>
          <Link to="/features" className="hover:text-yellow-300 transition">Features</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
