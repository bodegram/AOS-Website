import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src='' alt="img" />
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-item">
            <Link className="footer-link">Home</Link>
          </div>
          <div className="footer-item">
            <Link className="footer-link">Features</Link>
          </div>
          <div className="footer-item">
            <Link className="footer-link">Pricing</Link>
          </div>
          <div className="footer-item">
            <Link className="footer-link">Testimonials</Link>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-item">
            <Link className="footer-link"><FaInstagram size={25}/></Link>
          </div>
          <div className="footer-social-item">
            <Link className="footer-link"><FaFacebook size={25}/></Link>
          </div>
          <div className="footer-social-item">
            <Link className="footer-link"><FaTwitter size={25}/></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Copyright 2024 AOS</div>
        <div>
        <Link className="footer-bottom-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
