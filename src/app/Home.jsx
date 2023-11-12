import React from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Recharge from '../components/Recharge'
import Hero2 from '../components/Hero2'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Recharge/>
        <Footer/>
        
    </div>
  )
}
