import React from "react";
import "./Events.css";
import { BiPencil } from "react-icons/bi";
const Event = (props) => {
  const { id, image, description, title } = props.data;
  const handleClick = () => {
    props.deleteEvent(id);
  };

  return (
   

    <div className="Events">
        <div className="Event-title">{title}</div>
        <center> <div className="event-image">
            <img src={image} alt="theevent"  className="image-card" />
        </div></center>
       
        <div className="card-description The-text">{description}</div>
        {localStorage.getItem('token')?
        <BiPencil size="2rem" className="try" onClick={handleClick} />:null}
    </div>
  );
};

export default Event;
