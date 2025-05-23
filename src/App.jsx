import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import VideoCall from './VideoCall'
import Home from './Home'
import About from './About'
import Features  from './Features'
import Footer from './Footer'
import ContactUs from './Contact'

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomId' element={<VideoCall />} />
    <Route path="/about" element={<About />} />
    <Route path="/features" element={<Features/>} />
    <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </div>
   
  )
}

export default App
