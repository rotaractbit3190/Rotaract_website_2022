import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import pic from '../navBar/logo.png'
import { GoMail } from "react-icons/go";
export default function Footer() {
  return (
    <>
      <div className="Footer-main">

        <div className="Footer-start">
          <div className="containment">   <img src={pic} alt="" srcset="" className="containment-pic" /></div>
       
          <div className="footer-allin" >
            <BsInstagram color="white" size={"40px"} className="spacing" />
            <BsFacebook color="white" size={"40px"} className="spacing" />
            <BsLinkedin color="white" size={"40px"} className="spacing" />
            <GoMail color="white" size={"40px"} className="spacing" />
          </div>
        </div>
        <div className="copyrights">
          Rotaract Club of BIT,All Rights Reserved @{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
}
