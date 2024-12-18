import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
import logo from "./assets/images/logo.png";
import home from "./assets/images/nav/home.png";
import tshirt from "./assets/images/nav/tshirt.png";
import tattoo from "./assets/images/nav/tatto.png";
import insta from "./assets/images/nav/insta.png";

import home_selected from "./assets/images/nav/home_selected.png";
import tshirt_selected from "./assets/images/nav/tshirt_selected.png";
import tattoo_selected from "./assets/images/nav/tatto_selected.png";
import insta_selected from "./assets/images/nav/insta_selected.png";

export default function Navbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    const getNavIcon = (isActive, defaultIcon, selectedIcon) => 
        isActive ? selectedIcon : defaultIcon;

    return (
        <div id="nav">
            <div className="chip">
                <Link to="https://miiree12lb.site/">
                    <img src={logo} alt="logo" width="50" height="50" />
                </Link>
                Designs
            </div>

            {!isMobile && (
                <>
                    <Link to="/designs">Home</Link>
                    <Link to="/tshirts">T-Shirts</Link>
                    <Link to="/tattoos">Tattoos</Link>
                    <Link to="/insta">Insta Covers</Link>
                </>
            )}

            {isMobile && (
                <>
                    <NavLink 
                        to="/designs" 
                        className="nav-icon"
                        isActive={(match) => match?.isExact}
                    >
                        {({ isActive }) => (
                            <img className='nav-icon' src={getNavIcon(isActive, home, home_selected)} alt="home" />
                        )}
                    </NavLink>
                    <NavLink 
                        to="/tshirts" 
                        className="nav-icon"
                        isActive={(match) => match?.isExact}
                    >
                        {({ isActive }) => (
                            <img className='nav-icon' src={getNavIcon(isActive, tshirt, tshirt_selected)} alt="tshirts" />
                        )}
                    </NavLink>
                    <NavLink 
                        to="/tattoos" 
                        className="nav-icon"
                        isActive={(match) => match?.isExact}
                    >
                        {({ isActive }) => (
                            <img className='nav-icon' src={getNavIcon(isActive, tattoo, tattoo_selected)} alt="tattoos" />
                        )}
                    </NavLink>
                    <NavLink 
                        to="/insta" 
                        className="nav-icon"
                        isActive={(match) => match?.isExact}
                    >
                        {({ isActive }) => (
                            <img className='nav-icon' src={getNavIcon(isActive, insta, insta_selected)} alt="insta" />
                        )}
                    </NavLink>
                </>
            )}
        </div>
    );
}
