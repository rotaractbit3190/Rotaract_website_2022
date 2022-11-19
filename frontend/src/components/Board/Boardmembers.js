import React from "react";
import { BiPencil } from "react-icons/bi";
import "./Board.css";
import tempimg from './Akash.jpg'
export default function Boardmembers(props) {
  const handleClick = () => {
    props.deleteEvent(props.id, props.year);
  };

  return (
    <div className="card-outer">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div className="image-for-div"> <img
              src={tempimg}
              alt="Avatar"
              className="image-for-bod"
              
            /></div>
            <div>dd</div>
           
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      {localStorage.getItem("token") ? (
        <BiPencil size="2rem" className="try" onClick={handleClick} />
      ) : null}
    </div>
  );
}
