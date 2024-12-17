import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/images/logo.png";

export default function Navbar() {
    return (
        <div id="nav">
            <div className="chip">
                <Link to="https://miiree12lb.site/">
                    <img src={logo} alt="logo" width="50" height="50" />
                </Link>
                Designs
            </div>

            <Link to="/designs">Home</Link>
            <Link to="/tshirts">T-Shirts</Link>
            <Link to="/tattoos">Tattoos</Link>
        </div>
    )
}