import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import ImgOne from '../../assets/images/a.webp'
import ImgTwo from '../../assets/images/b.webp'
import ImgThree from '../../assets/images/c.webp'



export default function Services() {
  return (
    <div className='services container'>
        <div className="services-header">
            <h3>Different destinations</h3>
        </div>
       <div className="services-top">
         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus itaque ut nostrum sint cupiditate sapiente reiciendis, saepe impedit earum dolorum molestias minima repellat a blanditiis enim quas commodi ullam.</div>
         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus itaque ut nostrum sint cupiditate sapiente reiciendis, saepe impedit earum dolorum molestias minima repellat a blanditiis enim quas commodi ullam.</div>
         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus itaque ut nostrum sint cupiditate sapiente reiciendis, saepe impedit earum dolorum molestias minima repellat a blanditiis enim quas commodi ullam.</div>
       </div>
       <div className="services-body">
           <div>
             <img src={ImgOne} alt="img" className='services-img' />
             <div className='services-title'><h3>Student</h3></div>
             <div className="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate facilis neque, quia facere dolores id magnam minus placeat exercitationem. Aliquam, error a. Libero recusandae quaerat minima quidem consequuntur obcaecati ipsam!</div>
           </div>
           <div>
             <img src={ImgTwo} alt="img" className='services-img' />
             <div className='services-title'><h3>Student</h3></div>
             <div className="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate facilis neque, quia facere dolores id magnam minus placeat exercitationem. Aliquam, error a. Libero recusandae quaerat minima quidem consequuntur obcaecati ipsam!</div>
           </div>
           <div>
             <img src={ImgThree} alt="img" className='services-img' />
             <div className='services-title'><h3>Student</h3></div>
             <div className="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate facilis neque, quia facere dolores id magnam minus placeat exercitationem. Aliquam, error a. Libero recusandae quaerat minima quidem consequuntur obcaecati ipsam!</div>
           </div>
       </div>
       <div className="services-footer">
          <Link className='services-btn'>View Services</Link>
       </div>
    </div>
  )
}
