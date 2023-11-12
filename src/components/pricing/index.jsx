import React from "react";
import "./index.css";
import PlayStoreImg from '../../assets/images/playstore.png'
import AppleStoreImg from '../../assets/images/appstore.png'

export default function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="pricing-header">
          <h3>Choose your favourite plan</h3>
        </div>
        <div className="pricing-top">
          <div className="pricing-table">
            <div className="pricing-table-header">
              <div className="pricing-table-header-text">
                <div>Plan</div>
              </div>
              <div className="pricing-table-header-items">
                <div>Basic</div>
                <div>Advance</div>
                <div>Premium</div>
              </div>
            </div>
            <div className="pricing-table-body">
              <div className="pricing-table-body-text">
                <div>Subscription level</div>
              </div>
              <div className="pricing-table-body-items">
                <div>Basic</div>
                <div>Advance</div>
                <div>Premium</div>
              </div>
            </div>
            <div className="pricing-table-body">
              <div className="pricing-table-body-text">
                <div>Subscription level</div>
              </div>
              <div className="pricing-table-body-items">
                <div>Basic</div>
                <div>Advance</div>
                <div>Premium</div>
              </div>
            </div>
            <div className="pricing-table-body">
              <div className="pricing-table-body-text">
                <div>Subscription level</div>
              </div>
              <div className="pricing-table-body-items">
                <div>Basic</div>
                <div>Advance</div>
                <div>Premium</div>
              </div>
            </div>
            <div className="pricing-table-body">
              <div className="pricing-table-body-text">
                <div>Subscription level</div>
              </div>
              <div className="pricing-table-body-items">
                <div>Basic</div>
                <div>Advance</div>
                <div>Premium</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-bottom">
          <div>
            <div className="pricing-bottom-header">
              <h3>Try it right now</h3>
            </div>
            <div className="pricing-bottom-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora             
            </div>
            <div className="pricing-bottom-footer">
              <img src={PlayStoreImg} alt="img" className="pricing-image-one" />
              <img src={AppleStoreImg} alt="img" className="pricing-image-two"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
