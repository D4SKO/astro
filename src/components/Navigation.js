import React from 'react'
import logo from "../img/logo.png"

function Navigation() {
  return (
    <header>
        <div className="logo">
            <a href="">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">PLANETAIRE</a></li>
                <li><a href="">CIEL PROFOND</a></li>
                <li><a href="">INSTRUMENTS</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation