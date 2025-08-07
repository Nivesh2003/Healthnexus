import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Elements/Footer'
import Home from './Components/Home'
import Authpage from './Components/Authpage'
import Navbar from './Elements/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authpage/>} />
          <Route path="/register" element={<Authpage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App