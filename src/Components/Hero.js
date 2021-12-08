import React from 'react';
import backgroundVideo from '../Components/assets/clouds-01.mp4';


export default function Hero(){
    return(
        <video autoPlay loop muted id='video' className="video">
            <source src={backgroundVideo} type='video/mp4' className="video-src"/>
        </video>
    )
}