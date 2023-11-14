import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroImg from '../../assets/images/contact.svg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-header">
          <h3>BUY YOUR AIRTIME AT A CHEAPER PRICE</h3>
        </div>
        <div className="hero-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod
          facilis hic! Ex dicta recusandae cupiditate sapiente. In impedit
          provident possimus maiores, necessitatibus quaerat, ipsum aliquam
          nulla cumque tempora aperiam.
        </div>
        <div className="hero-button">
          <div>
            <Link className="hero-btn">
              Get the App{" "}
              <span className="hero-icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div>
            <Link className="more">More</Link>
          </div>
        </div>
        <div className="hero-footer">
          <div>
            <div className="hero-footer-title">4.8</div>
            <div className="hero-footer-text">Rating on Apple Store</div>
          </div>
          <div>
            <div className="hero-footer-title">700k</div>
            <div className="hero-footer-text">Active users</div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="img" />
      </div>
    </div>
  );
}
