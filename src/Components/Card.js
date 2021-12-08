import React from "react"

export default function Card(props) {
    return (
            <div className="card--container">
                <div className="card--profile">
                    <img src={props.imageUrl} className="card--image" alt="location" />
                </div>
                <div className="card--details">
                    <div className="place--location">
                        {/* <img src="./assets/3D-red-location.png" className="card--location" alt="location icon" /> */}
                        <i className="fas fa-map-marker-alt place--mapicon"></i>
                        <h1 className="location--name">{props.location}</h1>
                        <a className="place--address" href={props.googleMapsUrl} alt="google maps Url">View on Google Maps</a>
                    </div>
                    <div className="card--text">
                        <h2 className="place--name">{props.title}</h2>
                        <p className="place--date"><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
                        <span className="place-description">{props.description}</span>
                    
                    </div>
                </div>
            </div>
    )
}
