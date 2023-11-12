import React from 'react'
import '../assets/styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <footer>
     <div className='container'>
        <div className="row">
            <div className="col">
                <div className="footer-header">
                    <h6>AOS</h6>
                </div>
            </div>
            <div className="col">
            <div className="footer-header">
                    <h6>PRODUCTS</h6>
            </div>
            <div className="footer-body">
               <div className="footer-item">
                <Link className='footer-link'>AIRTIME TOPUP</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>DATA SUBSCRIPTION</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>CABLE</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>SCRATCH CARDS</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>ELECTRICITY BILLS</Link>    
               </div>
            </div>
            </div>
            <div className="col">
            <div className="footer-header">
                    <h6>COMPANY</h6>
            </div>
            <div className="footer-body">
               <div className="footer-item">
                <Link className='footer-link'>ABOUT US</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>CONTACT</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>PRIVACY POLICIES</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>TERMS & CONDITIONS</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>OUR HISTORY</Link>    
               </div>
            </div>
            </div>
            <div className="col">
            <div className="footer-header">
                    <h6>CUSTOMER</h6>
            </div>
            <div className="footer-body">
               <div className="footer-item">
                <Link className='footer-link'>BEGINNERS</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>AMATEURS</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>VENDORS</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>BULK</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>SINGLE</Link>    
               </div>
            </div>
            </div>
            <div className="col">
            <div className="footer-header">
                    <h6>COMMUNITY</h6>
            </div>
            <div className="footer-body">
               <div className="footer-item">
                <Link className='footer-link'>HELP CENTER</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>PROFESSIONAL</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>FORUM</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>ADVERTISEMENT</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>DEVELOPER CENTER </Link>    
               </div>
            </div>
            </div>
            <div className="col">
            <div className="footer-header">
                    <h6>FOLLOW</h6>
            </div>
            <div className="footer-body">
               <div className="footer-item">
                <Link className='footer-link'>FACEBOOK</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>TWITTER</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>YOUTUBE</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>INSTAGRAM</Link>    
               </div>
               <div className="footer-item">
                <Link className='footer-link'>WHATSAPP</Link>    
               </div>
            </div>
            </div>
        </div>
    </div>
   </footer>
  )
}
