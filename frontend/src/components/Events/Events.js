import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Event from "./Event";
import Modal from "../modal/Modal";
import { Helmet } from "react-helmet-async";

export default function Events(props) {
  const [title, settitle] = useState({ title: "", description: "" });
  const [image, setimage] = useState("");

  const [miniloader, setminiloader] = useState(false)
  const refClose = useRef();
  const initial = [];
  const [content, setcontent] = useState(initial);
  useEffect(() => {
    GetAllData();

    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    settitle({ ...title, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setimage(e.target.files[0]);
    }
  };

  const CreateUpload = (e) => {
    setminiloader(true)
    e.preventDefault();
    try {
      const storage = getStorage();
      console.log("1")
      const storageRef = ref(storage, `Events/${image.name}`);
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
          console.log("2")
        });

        setminiloader(false)
      });
    } catch (e) {
      console.log(e);
    }
  };

  const host = "http://localhost:5000";

  const GetAllData = async (e) => {
    props.loader(true)
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

    setcontent(json);
    console.log(ReverseArray);
    props.loader(false)
  };
  const HandleDelete = async (id) => {
    const response = await fetch(`${host}/Events/deleteEvents/${id}`, {
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
    const response = await fetch(`${host}/Events/addEvent`, {
      method: "POST",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.title,
        description: title.description,
        image: image,
      }),
    });

    const json = await response.json();

    setcontent(content.concat(json));
    
    settitle({ title: "", description: "" });
    
 
    console.log(title);
    refClose.current.click();
    
   
  };

  // const toclose=()=>{
  //   refClose.current.click();
  // }

  return (
    <>
        <Helmet>
        <title>Rotaract Club Of BIT</title>
        <meta
          name="description"
          content="Welcome to the Home page of  the Rotaract Club Of BIT.We strive to do our small part to the society, to make this world a better and happier place to live in."
        />
        <link rel="canonical" href="/Events" />
      </Helmet>
    
     
      <div className="card-start">
        
      <Modal
        handleChange={handleChange}
        handleFile={handleFile}
        CreateUpload={CreateUpload}
        refClose={refClose}
        // toclose={toclose}
        handleClick={handleClick}
        image={image}
        testimage={image.length}
        testlength={title.description.length}
        testtitle={title.title.length}
        title={title}
        loading={miniloader}
        event={"Add an event"}
        name={"Event Name"}
        description={"Event Description"}
        
      />
      
        <div className="flex-box">
          {content.map((e) => {
            return <Event data={e} key={e.id} deleteEvent={HandleDelete} year={e.year} />;
          })}
        </div>
      </div>
    </>
  );
}
