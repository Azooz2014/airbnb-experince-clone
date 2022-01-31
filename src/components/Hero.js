import React from "react"
import '../styles/HeroStyles.css'
import gridPhoto from '../images/photo-grid.png'

export default function Hero(){
    return(
        <div className="hero-container">
            <img src={gridPhoto} className="hero-image"/>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    );
}