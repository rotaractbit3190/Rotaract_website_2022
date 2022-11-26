import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import "./Board.css";
import tempimg from './Akash.jpg'
export default function Boardmembers(props) {
  const HandleDelete = () => {
    props.deleteEvent(props.data.id, props.data.year);
  };
  
  const HandleUpdate=()=>{

    props.updateNote(props.data)
    console.log(props.data)
  }
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
            <div className="Bod-name">{props.data.title}</div>
            <div className="bod-post">Web Designer </div>
         
           
          </div>
          <div class="flip-card-back">
           
            <p className="quote-class">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptatum id quidem sunt laudantium quisquam quibusdam hic ex? Vero harum hic placeat illo saepe veniam quas quia adipisci alias sunt."</p>
            <BiPencil size="2rem" className="try" onClick={HandleUpdate} />
            <BsFillTrashFill size="2rem" className="try" onClick={HandleDelete} />
           
            
          </div>
        </div>
      </div>
     

      {/* {localStorage.getItem("token") ? (
      ) : null} */}
    </div>
  );
}
