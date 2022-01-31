import React from "react"
import logo from '../images/airbnb-logo.svg'
import '../styles/NavbarStyles.css'

export default function Navbar(){
    return(
        <div className="navbar-container">
            <img src={logo} alt="airbnb logo" className="navbar-logo"/>
        </div>
    );
}