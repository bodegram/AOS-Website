import React from 'react'
import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container'>
        <nav>
            <div className="nav-brand">
                <h3>AOS</h3>
            </div>
            <ul className="nav-menu">
                <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
                <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
                <li className='nav-item'><Link to='/services' className='nav-link'>Services</Link></li>
                <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
                <li className='nav-item'><Link to='/contact' className='nav-link'>Login</Link></li>
            </ul>
            <div className="nav-btn">
                <span>menu</span>
            </div>
        </nav>
    </div>
  )
}
