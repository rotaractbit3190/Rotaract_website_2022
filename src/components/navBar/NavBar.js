
import "./nav.css";


import React from 'react'

export default function nav() {
  return (
    <div className="navFix">
    <nav>
      <ul>
        {/* <li><img src={logo} className="logoSize left"/></li> */}
        <li className="right">
          <a class="active" href="#home">
            CONTACT
          </a>
        </li>
        <li className="right">
          <a href="#news">EVENTS</a>
        </li>
        <li className="right">
          <a href="#contact">ABOUT</a>
        </li>
        <li className="right">
          <a href="#about">HOME</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
