import "./nav.css";

import { Link } from "react-router-dom";
import logo from "./logo.png";
import React from "react";

export default function nav() {
  return (
    <nav>
      <div className="header">
        <div className="innerheader">
          <div className="logo-image">
            <img src={logo} className="logoSize " />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link>Events</Link></li>
            <li><Link>Board</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Join Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
