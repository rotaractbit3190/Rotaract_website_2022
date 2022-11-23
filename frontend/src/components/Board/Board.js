import "../Events/Events.css";
import "./Board.css";
import Modal from "../modal/Modal";
import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Boardmembers from "./Boardmembers";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Board() {
  const [title, settitle] = useState({
    title: "",
    description: "",
    year: "",
    post: "",
  });
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const refClose = useRef();
  const initial = [];
  const [content, setcontent] = useState(initial);
  useEffect(() => {
    GetAllData();

    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    settitle({ ...title, [e.target.name]: e.target.value });
    console.log(title);
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
      console.log("1");
      const storageRef = ref(storage, `Board/${image.name}`);
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
          console.log("2");
        });

        // setloading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const host = "http://localhost:5000";
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

      setcontent(content.concat(ReverseArray));
      setcurrentyear(currentyear - 1);
      console.log("concatinated");
      if (currentyear === 2021 || currentyear === "2021") {
        sethasmore(false);
      }
      // console.log(ReverseArray)
    } catch (e) {
      console.log("not foundd");
    }
  };
  const HandleDelete = async (id, collectionname) => {
    const response = await fetch(
      `${host}/rotaract/deleteEvents/${id}/${collectionname}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
        post: title.post,
        title: title.title,
        description: title.description,
        image: image,
        year: title.year,
      }),
    });
    console.log(title.year);

    const json = await response.json();

    setcontent(content.concat(json));

    settitle({ title: "", description: "" });

    console.log(title);
    refClose.current.click();
  };
  return (
    <>
      <div className="card-start">
        <div className="Our-Board">Board Members</div>
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
          descriptionbod={title.description}
          loading={loading}
          year={title.year}
          event={"Add an member"}
          name={"Name of the Member"}
          description={"Enter the description"}
        />
        <div className="flex-test">
          <InfiniteScroll
            className="for-spacing"
            dataLength={content.length}
            next={() => {
              GetAllData();
              console.log("here now");
            }}
            hasMore={hasmore}
            loader={
              <div>
                <img
                  src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=790b7611a667d7fcd301051b1f218cbc69d76e5eaad2334a&rid=giphy.gif&ct=g"
                  alt=""
                  srcset=""
                />
              </div>
            }
          >
            {content.map((e) => {
              return (
                <Boardmembers data={e} key={e.id} deleteEvent={HandleDelete} />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
