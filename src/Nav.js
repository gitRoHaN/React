import React from 'react'
import littlelemon from './littlelemon.png'
import './App.css'
import {Link} from 'react-router-dom'
const Nav=()=>{
    
    return(
        <nav>
            <img src={littlelemon} alt="littlelemon" height="40" width="40"/>
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about-me" className="nav-item">AboutUs</Link></li>
                <li><Link to="/review" className="nav-item">Customer Review</Link></li>
                <li><Link to="/reservation" className="nav-item">Reservation</Link></li>
                <li><Link to="/order" className="nav-item">Order-online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;