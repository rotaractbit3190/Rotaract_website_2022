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
            <div className="Bod-name">Akash Uday</div>
            <div className="bod-post">Web Designer </div>
         
           
          </div>
          <div class="flip-card-back">
           
            <p className="quote-class">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptatum id quidem sunt laudantium quisquam quibusdam hic ex? Vero harum hic placeat illo saepe veniam quas quia adipisci alias sunt."</p>
            
          </div>
        </div>
      </div>

      {localStorage.getItem("token") ? (
        <BiPencil size="2rem" className="try" onClick={handleClick} />
      ) : null}
    </div>
  );
}
