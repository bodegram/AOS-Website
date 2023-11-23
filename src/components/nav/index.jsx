import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const NavMenu = () => {
    setShowMenu(true);
  };

  const CloseNavMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav>
      <div className="nav-brand">
        <div>
          <h3>AL Recharge</h3>
        </div>
      </div>
      <ul className={showMenu ? "nav-menu" : "nav-menu nav-hide"}>
        <li className="nav-item menu-header">
          <h3 className="menu-header-text">AL Recharge</h3>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About AL Recharge</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact us</Link>
        </li>
      </ul>
      <div className="nav-btn">
        <Link className="nav-button">Get App</Link>
      </div>
      <div className="nav-menu-btn">
        <span>
          {showMenu ? (
            <FaTimes size={23} onClick={CloseNavMenu} />
          ) : (
            <FaBars size={23} onClick={NavMenu} />
          )}
        </span>
      </div>
    </nav>
  );
}
