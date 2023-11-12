import React from 'react'
import '../assets/styles/Hero.css'
import {TypeAnimation} from 'react-type-animation'

export default function Hero() {
    const image = require('../assets/images/c.avif')
  return (
    <div className='container'>
        <div className="hero">
            <div className="row">
                <div className="col">
                   <div className="hero-title">
                    <h5>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                    </h5>
                   </div>
                   <div className="hero-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur debitis explicabo perspiciatis tempora praesentium voluptatibus corporis natus consectetur. Laboriosam, non? Commodi quisquam, nobis libero earum vel autem odio deleniti!
                   </div>
                   <div className="hero-btn">
                    <button>SIGN UP</button>
                   </div>
                </div>
                <div className="col">
                    <div className="hero-img">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
