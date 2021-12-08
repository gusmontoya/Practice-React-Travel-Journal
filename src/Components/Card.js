import React from "react"

export default function Card(props) {
    return (
            <div className="card">
                <div className="attraction_profile">
                    <img src={props.imageUrl} className="card--image" alt="location" />
                </div>
                <div className="card--stats">
                    <img src="./assets/3D-red-location.png" className="card--location" alt="location icon" />
                    <a href={props.googleMapsUrl} alt="google maps Url">View on Google Maps</a>
                    <h1>{props.location}</h1>
                    <p><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
                    <span className="gray">({props.description})</span>
                </div>
            </div>
    )
}
