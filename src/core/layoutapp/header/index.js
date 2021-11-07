import React from "react";
import './index.css';
import {NavLink, Link} from 'react-router-dom';
import Logo from "../header/logo.png";



const Header = () => {
    return (
        <header>
            <div className="header-content">
                <Link to= "/" className = "main-link">
                <div className="logo-with-text"><img src = {Logo} alt ="logo" className = "logo"></img>
                   <p>Ukrainian <br/>Sniper School</p></div>
                </Link>

                <nav>
                    <NavLink to="/courses" className="nav-item" activeClassName="nav-item-active">Courses</NavLink>
                    <NavLink to="/about" className="nav-item" activeClassName="nav-item-active">About School</NavLink>
                    <NavLink to="/contact" className="nav-item" activeClassName="nav-item-active">Contact us</NavLink>
                    <NavLink to="/FAQ" className="nav-item" activeClassName="nav-item-active">FAQ</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;