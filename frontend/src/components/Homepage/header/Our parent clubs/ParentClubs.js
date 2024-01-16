import React,{useEffect} from "react";
import "./ParentClubs.css";
import "../principal picture/principalpic.css";
import main from "./rotary_international.png";
import second from "./rbse_logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ParentClubs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });


}, []);
  return (
    <>
      <div className="main-one">Our Parent Clubs</div>
      <div className="main-parent" data-aos="fade-up">
        <a href="https://www.rotary.org/en" target="_blank" rel="noreferrer">
          <div className="child-parent">
            <img src={main} alt="" srcset="" className="the-pic" />
          </div>
        </a>
        <a href="https://www.instagram.com/rotaryaagneya?igsh=aTYxOWY3aDllMjFw" target="_blank" rel="noreferrer">
          <div className="child-parent-1">
            <img src={second} alt="" className="the-pic" />
          </div>
        </a>
      </div>
    </>
  );
}
