import React from 'react'

import Hero from './components/home/Hero'
import About from './components/home/About'
import Service from './components/home/Service'
import Gallery from './components/home/Gallery'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'
import ColorCollection from './components/home/ColorCollection'
import Navbar from './components/home/Navbar'
import CallIcon from './components/Call'
import WhatsAppIcon from './components/Icon'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <ColorCollection/>
      <Gallery/>
      <Contact/>
      <Footer/>
      <CallIcon/>
      <WhatsAppIcon/>
    </div>
  )
}

export default App