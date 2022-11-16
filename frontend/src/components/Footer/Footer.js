import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <div className="Footer-main">
        <div className="Footer-start">
          <div className="footer-allin">
            <BsInstagram color="white" size={"40px"} className="spacing" />
            <BsFacebook color="white" size={"40px"} className="spacing" />
            <BsLinkedin color="white" size={"40px"} className="spacing" />
          </div>
        </div>
        <div className="copyrights">
          Rotaract Club of BIT,All Rights Reserved @{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
}
