import React from 'react';
import {
    Link
} from "react-router-dom";
import "../../styles/navbar/Navbar.css";

const Navbar = (address) => {

    return (
        <div className="navbar">
            <Link to="/">Landing</Link>
            <Link to="/gallery">Gallery</Link>
        </div>
    );
}

export default Navbar;
