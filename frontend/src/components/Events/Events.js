import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Event from "./Event";
export default function Events() {
  const [title, settitle] = useState({ title: "", description: "" });
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const refClose = useRef();
  const initial=[]
  const [content, setcontent] = useState(initial)
  useEffect(() => {
  
    GetAllData()
  
  
     // eslint-disable-next-line
  }, [])

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
      const storageRef = ref(storage, `Events/${image.name}`);
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
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
    console.log(sort)
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
   
    refClose.current.click();
    settitle({ title: "", description: "" })
    console.log(title)
   
  };

  return (
    <div className="card-start">
   
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Events
        </button>
      

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add an Event
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <label htmlFor="name" className="form-label">
                  EVENT details
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="title"
                  id="title"
                  minLength={3}
                  required
                />
                <label htmlFor="post">Event description</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={handleChange}
                  minLength={3}
                  required
                />

                <label htmlFor="post">Input file</label>
                <input
                  type="file"
                  onChange={handleFile}
                  accept=".jpg,.png,.jpeg"
                  name="photo"
                  className="form-control"
                  id="photo"
                  minLength={1}
                  required
                />
                <div>
                  <button onClick={CreateUpload}>Upload</button>
                  {/* <Loader isloading={loading} /> */}
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  loading === true ||
                  image.length === 0 ||
                  title.description.length < 5
                  // title.name.length < 2
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="flex-box">
        {content.map((e) => {
          return <Event data={e} key={e.id} deleteEvent={HandleDelete} />;
        })}
      </div>
    </div>
  );
}
