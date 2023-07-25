import {IMG_CDN_URL} from "../config"
import React from 'react'
const RestrautCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestrautCard