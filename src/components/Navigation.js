import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../img/logo.png"

function Navigation() {
  return (
    <header>
        <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <div className="logo">
            <a href="">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/planetaire">PLANETAIRE</NavLink></li>
                <li><a href="">CIEL PROFOND</a></li>
                <li><a href="">INSTRUMENTS</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation