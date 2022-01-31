import React from 'react'
import '../styles/CardStyles.css'
import starImg from '../images/star.png'

export default function Card(props){

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className='card-container'>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require("../images/" + props.img)} className='card-image'/>
            <div className='card-stats'>
                <img src={starImg} className='card-star-rating'/>
                <span className='card-rating'>{props.rating}</span>
                <span className='card-subdetails'>({props.reviewCount}) • {props.location}</span>
            </div>
            
            <p className='card-title'>{props.title}</p>
            <p className='card-pricing'><strong>From ${props.price}</strong> / person</p>

        </div>
    );
}