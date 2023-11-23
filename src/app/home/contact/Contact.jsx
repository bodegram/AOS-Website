import React from "react";
import "./contact.css";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contact container">
        <div className="contact-content">
          <div style={{ color: "green", fontWeight: "bold" }}>Contact us</div>
          <div>
            <h2>Get In Touch With Us</h2>
          </div>
          <div
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            cupiditate vero earum tenetur repellat, saepe adipisci porro, eos
            fugit, dignissimos obcaecati ducimus labore est laudantium? Possimus
            numquam vel totam maiores?
          </div>
          <div className="contact-item">
            <div
              style={{
                background: "green",
                padding: "10px",
                borderRadius: "5px",
                height: "55px",
              }}
            >
              <FaLocationDot size={24} color="white" />
            </div>
            <div>
              <div>
                <h4 style={{ color: "green" }}>Our Location</h4>
              </div>
              <div
                style={{ fontSize: "14px", marginTop: "5px", color: "gray" }}
              >
                Accord Estate, Federal University of Agriculture Abeokuta,
                FUNAAB, Alabata, Abeoukuta, Ogun State.
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div
              style={{
                background: "green",
                padding: "10px",
                borderRadius: "5px",
                height: "50px",
              }}
            >
              <FaPhone size={24} color="white" />
            </div>
            <div>
              <div>
                <h4 style={{ color: "green" }}>Phone Number</h4>
              </div>
              <div
                style={{ fontSize: "14px", marginTop: "5px", color: "gray" }}
              >
               +2349155104851, +2348063037831
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div
              style={{
                background: "green",
                padding: "10px",
                borderRadius: "5px",
                height: "50px",
              }}
            >
              <FaEnvelope size={24} color="white" />
            </div>
            <div>
              <div>
                <h4 style={{ color: "green" }}>Email Address</h4>
              </div>
              <div
                style={{ fontSize: "14px", marginTop: "5px", color: "gray" }}
              >
               info@alrecharge.com
              </div>
            </div>
          </div>          
        </div>
        <div className="contact-form">
          <form action="">
            <div className="input-field">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Phone"
                className="form-control"
              />
            </div>
            <div className="input-field">
              <textarea
                name=""
                id=""
                placeholder="Your Message"
                className="text-area"
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
