import "../Events/Events.css";
import "./Board.css";
import Modal from "../modal/Modal";
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Boardmembers from "./Boardmembers";
import InfiniteScroll from "react-infinite-scroll-component";
import UpdateCard from "./UpdateCard";
export default function Board() {
  const [title, settitle] = useState({
    title: "",
    description: "",
    year: "",
    post: "",
    id: "",
    instagram: "",
    linkedin: "",
  });
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const refClose = useRef();
  const ref1 = useRef(null);
  const initial = [];
  const [miniloader, setminiloader] = useState(false)
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
      
      const storageRef = ref(storage, `Board/${image.name}`);
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
          
        });

        setminiloader(false)
      });
    } catch (e) {
      
    }
  };

  const host = "https://rotaract-2022.vercel.app";
  const theyear = new Date().getFullYear();
  const [currentyear, setcurrentyear] = useState(theyear);
  const [hasmore, sethasmore] = useState(true);
  const GetAllData = async (e) => {
    try {
      const response = await fetch(
        `${host}/rotaract/getallbod/${currentyear}`,
        {
          method: "GET",
          //   real
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      var ReverseArray = [];
      var length = json.length;
      for (var i = length - 1; i >= 0; i--) {
        ReverseArray.push(json[i]);
      }

      setcontent(content.concat(json));
      setcurrentyear(currentyear - 1);
      
      if (currentyear === 2022 || currentyear === "2022") {
        sethasmore(false);
      }
      // 
    } catch (e) {
      
    }
  };
  const updateNote = (random) => {
    ref1.current.click();
    // 
    settitle({
      post: random.post,
      title: random.title,
      description: random.description,
      image: random.image,
      year: random.year,
      id: random.id,
    });

    // 
  };
  const editNote = async (id) => {
    const response = await fetch(`${host}/rotaract/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":
        //  localStorage.getItem('token'),
      },
      body: JSON.stringify({
        post: title.post,
        title: title.title,
        description: title.description,
        image: image,
        year: title.year,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    

    let newcard = JSON.parse(JSON.stringify(content));
    for (let index = 0; index < newcard.length; index++) {
      const element = newcard[index];
      if (element._id === id) {
        element.title = title.title;
        element.description = title.description;
      }
      setcontent(newcard);
    }
  };
  const HandleDelete = async (id, year) => {
    const response = await fetch(`${host}/rotaract/delete/${id}/${year}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    
    const sort = content.filter((e) => {
      return e.id !== id;
    });
    
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
        post: title.post,
        title: title.title,
        description: title.description,
        image: image,
        year: title.year,
        instagram: title.instagram,
        linkedin: title.linkedin,
      }),
    });
    

    const json = await response.json();

    setcontent(content.concat(json));

    settitle({ title: "", description: "" });

    
    refClose.current.click();
  };
  return (
    <>
    <Helmet>
        <title>Rotaract Club Of BIT</title>
        <meta
          name="description"
          content="Welcome to the Home page of  the Rotaract Club Of BIT.We strive to do our small part to the society, to make this world a better and happier place to live in."
        />
        <link rel="canonical" href="/Board" />
      </Helmet>
      <div className="card-start">
        <div className="Our-Board">Board Members</div>
        {localStorage.getItem('token')? <Modal
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
          descriptionbod={title.description}
          loading={miniloader}
          year={title.year}
          event={"Add an member"}
          name={"Name of the Member"}
          description={"Enter the description"}
        />:null}
       
        <UpdateCard
          handleChange={handleChange}
          handleFile={handleFile}
          CreateUpload={CreateUpload}
          refopen={ref1}
          handleClick={handleClick}
          image={image}
          editNote={editNote}
          testimage={image.length}
          testlength={title.description.length}
          testtitle={title.title.length}
          title={title}
          descriptionbod={title.description}
          loading={miniloader}
        />
        <div className="flex-test">
          <InfiniteScroll
            className="for-spacing"
            dataLength={content.length}
            next={() => {
              GetAllData();
              
            }}
            hasMore={hasmore}
            loader={
              <div>
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fedms.punjab.gov.in%2FAccount%2Flogin&psig=AOvVaw27huVbCYpxIL4HPQLLUL4c&ust=1705503147435000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICAlryU4oMDFQAAAAAdAAAAABAQ"
                  alt=""
                  srcSet=""
                />
              </div>
            }
          >
            {content.map((e) => {
              return (
                <Boardmembers
                  data={e}
                  key={e.id}
                  updateNote={updateNote}
                  deleteEvent={HandleDelete}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
