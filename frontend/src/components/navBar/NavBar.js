import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import logo from "./logo.png";
import thelogo from "./logorotaract.png";
import Divider from "../Homepage/divider/Divider";
import "./nav.css";

export default function NavBar(props) {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleClick = () => {
    setSidebar(true);
    props.showcursor(false);
  };

  const gotop = () => {
    setSidebar(false);
  };

  const closeClick = () => {
    setSidebar(false);
    props.showcursor(true);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
      } else {
        document.querySelector(".header").style.top = "-65px"; // Adjust this value to match your navbar height
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <nav>
      <div className="header">
        <div className="innerheader">
          <div className="logo-image">
            <img src={logo} alt="here you go" className="logoSize" />
          </div>
          <div className="burger-name">
            <FiMenu size="2rem" className="try" onClick={handleClick} />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={gotop}>Home</Link>
            </li>
            <li>
              <Link to="Events" onClick={gotop}>Events</Link>
            </li>
            <li>
              <Link to="Board" onClick={gotop}>Board</Link>
            </li>
            <li>
              <Link to="/magazine">VRINDA</Link>
            </li>
            <li>
              <Link to="/ContactUs" onClick={gotop}>Contact</Link>
            </li>
            {localStorage.getItem("token") ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : null}
            <li>
              <a href="https://forms.gle/VTqs2wZoS9GdEvTq6" target="_blank" rel="noopener noreferrer">Join Us</a>
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
                <Link to="/magazine">VRINDA</Link>
              </li>
              <li>
                <Link to="/ContactUs" className="header-li" onClick={gotop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/VTqs2wZoS9GdEvTq6"
                  className="header-li"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={gotop}
                >
                  Join Us
                </a>
              </li>
              <div className="sociala">
                <a href="https://www.instagram.com/rotaractclubofbit/" target="blank">
                  {" "}
                  <BsInstagram color="white" size={"30px"} className="spacing" />
                </a>
                <a href="https://twitter.com/RotaractBIT">
                  <BsTwitter color="white" size={"30px"} className="spacing" />
                </a>
                <a href="https://www.linkedin.com/company/rotaractclubofbit/mycompany/">
                  <BsLinkedin color="white" size={"30px"} className="spacing" />
                </a>

                <a href="mailto:bitrotaract@gmail.com">
                  {" "}
                  <GoMail color="white" size={"36px"} className="spacing" />
                </a>
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
