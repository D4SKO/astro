import React from 'react'
import logo from "../img/logo.png"

function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="contact">
            <div className="left-side">
                <p>ADRESS</p>
                <p>RUE DU CODE <br />
                52, 1000 BRUXELLES</p>
            </div>
            <div className="right-side">
                <div className="topside">
                    <i className="fa-solid fa-envelope"></i>
                    <p>closetothestars@gmail.com</p>
                </div>
                <div className="bottomside">
                <i className="fa-solid fa-phone"></i>
                <p>04/72.15.45.36</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer