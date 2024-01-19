import React from "react";
import "./ContactUs.css";
import { Helmet } from "react-helmet-async";

import { BiPhoneCall } from "react-icons/bi";
export default function ContactUs() {
  return (
    <>
        <Helmet>
        <title>Rotaract Club Of B.I.T</title>
        <meta
          name="description"
          content="Welcome to the Home page of the Rotaract Club Of B.I.T. We strive to do our small part to the society, to make this world a better and happier place to live in."
        />
        <link rel="canonical" href="/ContactUs" />
      </Helmet>
      <div className="ContactMain">
      <div className="Our-Board the-start">Contact Us</div>
      <div className="for-the-contact">
        <div className="for-the-map">
          <iframe className="for-theese"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2605439614367!2d77.57184291413498!3d12.955172818745439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1669651249269!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="checkrem"
          ></iframe>
          <div className="the-real-names">
            <div className="subname">
              <BiPhoneCall color="white" size={"40px"} className="spacing " />
              <div className="the-actual">
                <div className="The-text check-check">Rtr. DS Prajwal Gowda | President</div>
                <div className="The-text check-check"><a href="tel:+91-9448145109">+91-9448145109</a></div>
              </div>
            </div>
            <div className="subname for-the-p">
              <BiPhoneCall color="white" size={"40px"} className="spacing " />
              <div className="the-actual">
                <div className="The-text check-check">Rtr. Hritika M Kalaria | Vice - President</div>
                <div className="The-text check-check"><a href="tel:+91-7019893552">+91-7019893552</a></div>
              </div>
            </div>
            <div className="subname for-the-p">
              <BiPhoneCall color="white" size={"40px"} className="spacing " />
              <div className="the-actual">
                <div className="The-text check-check">Rtr. Prateek Kota | Secretary</div>
                <div className="The-text check-check"><a href="tel:+91-9019532059">+91-9019532059</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}
