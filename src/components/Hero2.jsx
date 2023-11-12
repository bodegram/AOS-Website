import React from 'react'
import '../assets/styles/Hero2.css'
import { Link } from 'react-router-dom'

export default function Hero2() {
  return (
   
       <div className="heroTwo">
         <div className="container">
         <div className="heroTwo-header">
              <h2>Award Winning Vendor</h2>
          </div>
          <div className="heroTwo-body">
            <div>Choose from an unrivaled set of best-in-class website templates. Customize the design to fit your personal style and professional needs.</div>
          </div>
          <div className="heroTwo-footer">
            <div><Link style={{fontWeight: 'bold', color: 'white', marginRight: '10px'}}>CONTINUE</Link></div>
            <div><Link style={{fontWeight: 'bold', color: 'white', marginRight: '10px'}}>LEARN MORE</Link></div>
          </div>
         </div>
       </div>
   
  )
}
