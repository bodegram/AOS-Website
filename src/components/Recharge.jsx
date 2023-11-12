import React from 'react'
import '../assets/styles/Recharge.css'
import { Link } from 'react-router-dom'

export default function Recharge() {
  return (
    <div className='container recharge'>
         <div className="row">
            <div className="col">
                <div className="recharge-title">
                    <h2>How to buy data subscription</h2>
                </div>
                <div className="recharge-body">
                    <Link className='recharge-link'>GET STARTED</Link>
                </div>
            </div>
            <div className="col">
                 <div className="recharge-items">
                    <div className="recharge-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla magnam voluptates dolor, enim explicabo sed architecto tempora recusandae possimus nisi nam ullam nostrum pariatur quidem consequatur quo, in eos unde.
                    </div>
                    <div className="recharge-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla magnam voluptates dolor, enim explicabo sed architecto tempora recusandae possimus nisi nam ullam nostrum pariatur quidem consequatur quo, in eos unde.
                    </div>
                    <div className="recharge-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla magnam voluptates dolor, enim explicabo sed architecto tempora recusandae possimus nisi nam ullam nostrum pariatur quidem consequatur quo, in eos unde.
                    </div>
                    <div className="recharge-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla magnam voluptates dolor, enim explicabo sed architecto tempora recusandae possimus nisi nam ullam nostrum pariatur quidem consequatur quo, in eos unde.
                    </div>
                 </div>
            </div>
         </div>
    </div>
  )
}
