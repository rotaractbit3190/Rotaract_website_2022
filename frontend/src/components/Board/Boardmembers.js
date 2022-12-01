import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import "./Board.css";
import tempimg from "./Akash.jpg";
export default function Boardmembers(props) {
  const HandleDelete = () => {
    props.deleteEvent(props.data.id, props.data.test.year);
  };

  const HandleUpdate = () => {
    props.updateNote(props.data);
    
  };
  return (
    <div className="card-outer">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div className="image-for-div">
              {" "}
              <img
                src={props.data.image}
                alt="Avatar"
                className="image-for-bod"
              />
            </div>
            <div className="Bod-name">
            {props.data.title}
            </div>

            <div className="bod-post">
             {props.data.post}
            </div>
          </div>
          <div class="flip-card-back">
            <p className="quote-class">
            {props.data.description}
             
            </p>
            <div className="bod-socials">
              {" "}
              <a href={props.data.instagram}> <BsInstagram color="white" size={"40px"} className="spacing" /></a>
              <a href={props.data.linkedin}>  <BsLinkedin color="white" size={"40px"} className="spacing" /></a>
             
            
            </div>
            {localStorage.getItem('token')?
            <div><BiPencil size="2rem" className="try" onClick={HandleUpdate} />
            <BsFillTrashFill
              size="2rem"
              className="try"
              onClick={HandleDelete}
            /></div>:null}
            
          </div>
        </div>
      </div>

      {/* {localStorage.getItem("token") ? (
    ) : null} */}
    </div>
  );
}
