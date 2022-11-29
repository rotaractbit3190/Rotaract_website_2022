import React from "react";
import loader from "./loading-12.gif";
import './Loader.css'
export default function Loader(props) {
  return (
    <div>
      {" "}
      {props.setloader=== true ? (
        <center> <div className="start-loader">
        <div className="main-loader">
          <img src={loader} alt="" srcset="" className="image-loader" />
        </div>
      </div></center>
       
      ) : null}
    </div>
  );
}
