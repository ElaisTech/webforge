import React from "react";
import logo from "../img/webforge_logo.png"
import menuicon from '../img/material_menu.png'
import { useState } from "react";


const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const menuextend = () => {
        const navbar = document.getElementById('navbar')
        if (navbar.className === ('nav-menu'))  {
        navbar.className = ('nav-menu-open') 
        } else if (navbar.className === ('nav-menu-open')) {
            navbar.className = ('nav-menu')
        }
    }
    return(
        <div className="header">
            {/* logo */}
            <div>
            <img src={logo} alt="webforge-logo" className="header-logo"/>
            </div>
             {/* logo */}
             
              {/* navbar */}
            <div>
                <ul className='nav-menu' id="navbar">
                    <li className="header-text"> <a href="#">HOME</a></li>
                    <li className="header-text"> <a href="#">I NOSTRI CLIENTI</a></li>
                    <li className="header-text"> <a href="#">CONTATTI</a></li>
                </ul>

            </div>
            {/* navbar */}
            {/* menuicon for mobile */}
            <button onClick={menuextend}><img src={menuicon} alt="material-menu-icon" className="menuicon" /></button>
             
             {/* menuicon for mobile */}
            
        </div>
    )

}

export default Navbar;