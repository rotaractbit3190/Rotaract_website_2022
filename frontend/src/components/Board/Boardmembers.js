import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import "./Board.css";
import tempimg from './Akash.jpg'
export default function Boardmembers(props) {
  const HandleDelete = () => {
    props.deleteEvent(props.data.id, props.data.test.year);
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
            {props.data.test.title? <div className="Bod-name">{props.data.test.title}</div>:null}
           
            <div className="bod-post">{props.data.test.post} </div>
            <div className="bod-socials"> <BsInstagram color="white" size={"40px"} className="spacing" />
            <BsLinkedin color="white" size={"40px"} className="spacing" /></div>
           

         
           
          </div>
          <div class="flip-card-back">
           
            <p className="quote-class">{props.data.test.description}</p>
            
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
