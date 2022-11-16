import React from "react";
import "./heading.css";
import Deer from "./deer.png";
import ReactTypingEffect from "react-typing-effect";

function heading(props) {
  return (
    <div className="head">
      <div className="headText">ROTARACT CLUB OF B.I.T</div>
      <div className="typingtextdiv">
        {props.check ?( <ReactTypingEffect
            eraseSpeed={100}
            typingDelay={500}
            cursor={false}
            eraseDelay={2000}
            speed={100}
            className="typingtext"
            text={["SPRINT STRONG STAG"]}
          />):null}
      </div>

      <div className="for-deer"></div>
      {/* <img src={Deer} className="deerLogo" alt="deer"/> */}
    </div>
  );
}

export default heading;
