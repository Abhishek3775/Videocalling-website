import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import VideoCall from './VideoCall'
import Home from './Home'
import About from './About'

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
     <Route path='/Home' element={<Home/>}/>
    <Route path='/room/:roomId' element={<VideoCall />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </div>
   
  )
}

export default App
