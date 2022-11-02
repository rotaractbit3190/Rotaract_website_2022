import React from "react";
import './heading.css';
import Deer  from './deer.png';

function heading(){
    return(
        <div className="head">
            <h1 className="headText">ROTARACT CLUB OF B.I.T</h1>
            <img src={Deer} className="deerLogo" alt="deer"/>
        </div>
    );
}

export default heading;