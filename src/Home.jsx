import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-300 to-pink-400 p-4">
      <div className="max-w-xl w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-4">
          Vibrant Video Calls with <span className="text-yellow-200">VideoVibe</span>
        </h1>
        <h5 className="text-white text-sm md:text-base mb-6">
          Experience next-level video calling with neon vibes, crystal-clear quality, <br className="hidden md:inline" />
          and seamless connections.
        </h5>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-xl font-semibold">Welcome!</h2>
          <input
            type="text"
            placeholder="Enter the room ID"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-white bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            onClick={() => navigate(`/room/${input}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
