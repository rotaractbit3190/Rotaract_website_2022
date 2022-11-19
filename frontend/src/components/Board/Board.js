import '../Events/Events.css'
import Modal from '../modal/Modal'
import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function Board() {
  const [title, settitle] = useState({ title: "", description: "",year:"" });
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const refClose = useRef();
  const initial = [];
  const [content, setcontent] = useState(initial);
  // useEffect(() => {
  //   GetAllData();

  //   // eslint-disable-next-line
  // }, []);

  const handleChange = (e) => {
    settitle({ ...title, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setimage(e.target.files[0]);
    }
  };

  const CreateUpload = (e) => {
    e.preventDefault();
    try {
      const storage = getStorage();
      console.log("1")
      const storageRef = ref(storage, `Board/${image.name}`);
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
          console.log("2")
        });

        // setloading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const host = "http://localhost:5000";

  const GetAllData = async (e) => {
    const response = await fetch(`${host}/Events/getalldata`, {
      method: "GET",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    var ReverseArray = [];
    var length = json.length;
    for (var i = length - 1; i >= 0; i--) {
      ReverseArray.push(json[i]);
    }

    setcontent(ReverseArray);
    console.log(ReverseArray);
  };
  const HandleDelete = async (id,collectionname) => {
    const response = await fetch(`${host}/rotaract/deleteEvents/${id}/${collectionname}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    const sort = content.filter((e) => {
      return e.id !== id;
    });
    console.log(sort);
    setcontent(sort);
  };
  const handleClick = async (e) => {
    const response = await fetch(`${host}/rotaract/adddata`, {
      method: "POST",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:title.name,
        title: title.title,
        description: title.description,
        image: image,
        year:title.year
      }),
    });

    const json = await response.json();

    setcontent(content.concat(json));
    
    settitle({ title: "", description: "" });
    
 
    console.log(title);
    refClose.current.click();
    
   
  };
  return (
    <>
    <div className="card-start">
          <Modal
        handleChange={handleChange}
        handleFile={handleFile}
        CreateUpload={CreateUpload}
        refClose={refClose}
        forbod={1}
        // toclose={toclose}
        handleClick={handleClick}
        image={image}
        testimage={image.length}
        testlength={title.description.length}
        testtitle={title.title.length}
        title={title}
        loading={loading}
        year={title.year}
        event={"Add an event"}
      />
      </div>
    </>
  )
}
