import React from 'react';
import logo from './assets/earth02.gif';

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="rotating globe" max-witdh="100px"/>
            <p className="title"><span className="bold">My Travel</span> Journal</p>
        </nav>
    )
}