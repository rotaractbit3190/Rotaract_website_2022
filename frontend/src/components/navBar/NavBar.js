import "./nav.css";

import { Link } from "react-router-dom";
import logo from "./logo.png";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import thelogo from "./logorotaract.png";
import Divider from "../Homepage/divider/Divider";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
export default function NavBar(props) {
  const [sidebar, setsidebar] = useState(false);

  const handleClick = () => {
    setsidebar(true);
    props.showcursor(false);
  };
  const gotop = () => {
    setsidebar(false);
    window.reload();
  };
  const closeClick = () => {
    setsidebar(false);
    props.showcursor(true);
  };
  return (
    <nav>
      <div className="header">
        <div className="innerheader">
          <div className="logo-image">
            <img src={logo} alt="here you go" className="logoSize " />
          </div>
          <div className="burger-name">
            <FiMenu size="2rem" className="try" onClick={handleClick} />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Events">Events</Link>
            </li>
            <li>
              <Link to="Board">Board</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link to="www.google.com">Join Us</Link>
            </li>
          </ul>
        </div>
        {sidebar ? (
          <div className="reactive-header">
            <div className="popout-logo-start">
              <center>
                {" "}
                <img src={thelogo} alt="" className=" popout-logo-start-img" />
              </center>
            </div>
            <Divider />
            <div className="reactive-header-tags">
              <li className="border-trial">
                <Link to="/" className="header-li" onClick={gotop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Events" className="header-li" onClick={gotop}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/Board" className="header-li" onClick={gotop}>
                  Board
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="header-li" onClick={gotop}>
                  Contact Us
                </Link>
              </li>
              <div className="sociala">
                <BsInstagram color="white" size={"30px"} className="spacing" />
                <BsFacebook color="white" size={"30px"} className="spacing" />
                <BsLinkedin color="white" size={"30px"} className="spacing" />
                <GoMail color="white" size={"36px"} className="spacing" />
              </div>
            </div>
          </div>
        ) : null}
        {sidebar ? (
          <div className="background-drawer" onClick={closeClick}></div>
        ) : null}
      </div>
    </nav>
  );
}
