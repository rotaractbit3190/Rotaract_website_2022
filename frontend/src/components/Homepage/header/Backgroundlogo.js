import React from "react";
import "./heading.css";
import Deer from "./deer.png";
import ReactTypingEffect from "react-typing-effect";

function heading() {
  return (
    <div className="head">
      <div className="headText">ROTARACT CLUB OF B.I.T</div>
      <div className="typingtextdiv">
      <ReactTypingEffect eraseSpeed={100} typingDelay={500} eraseDelay={2000} speed={100} className="typingtext" text={["SPRINT STRONG STAG"]} />
      </div>
    
      

      <div className="for-deer"></div>
      {/* <img src={Deer} className="deerLogo" alt="deer"/> */}
    </div>
  );
}

export default heading;
