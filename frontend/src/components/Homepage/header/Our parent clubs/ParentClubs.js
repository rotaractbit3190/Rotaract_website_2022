import React from "react";
import "./ParentClubs.css";
import "../principal picture/principalpic.css";
import main from "./rotary_international.png";
import second from "./rbse_logo.png";
export default function ParentClubs() {
  return (
    <>
      <div className="main-one">Our Parent Clubs</div>
      <div className="main-parent">
        <a href="https://www.rotary.org/en" target="_blank" rel="noreferrer">
          <div className="child-parent">
            <img src={main} alt="" srcset="" className="the-pic" />
          </div>
        </a>
        <a href="https://www.instagram.com/rotaractbangaloreaagneya/" target="_blank" rel="noreferrer">
          <div className="child-parent-1">
            <img src={second} alt="" className="the-pic" />
          </div>
        </a>
      </div>
    </>
  );
}
