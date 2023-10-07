import React from 'react'
import littlelemon from './littlelemon.png'
import './App.css'
const Nav=()=>{
    return(
        <nav>
            <img src={littlelemon} alt="littlelemon" height="40" width="40"/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;