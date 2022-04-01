import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../../styles/navbar/Navbar.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header" id="nav">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo className="logo" />
          </Link>
    </div>
        </div>
        <div className="links">    
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/" style={{ textDecoration: 'none' }}>Landing</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/gallery" style={{ textDecoration: 'none'}}>Gallery</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/forums" style={{ textDecoration: 'none'}}>Forums</Link>
          </li>
        </ul>
            </div>

        
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>


  );
};

export default Header;