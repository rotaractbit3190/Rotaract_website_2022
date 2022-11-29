import React from "react";
import "../Events/Events.css";
import Loader from "../loader/Loader";
export default function Modal(props) {
  const {
    
    title,
    loading,
    handleChange,
    handleClick,
    handleFile,
    CreateUpload,
    refClose,
    event,
    refopen,
  
  } = props;
  // const [loading, setloading] = useState(false)
  return (
    <>
      <button
        type="button"
        ref={refopen}
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
                {event}
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
                  {props.name}
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
                <label htmlFor="post">{props.description}</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={handleChange}
                  minLength={3}
                  required
                />
                {props.forbod === 1 ? (
                  <>
                    <label htmlFor="name" className="form-label">
                      Post/Title
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      name="post"
                      id="post"
                      minLength={3}
                      required
                    />
                    <label htmlFor="name" className="form-label">
                      year
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      name="year"
                      id="year"
                      minLength={3}
                      required
                    />
                    <label htmlFor="instagram" className="form-label">
                      Instagram 
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      name="instagram"
                      id="instagram"
                      minLength={3}
                      required
                    />
                    <label htmlFor="linkedin" className="form-label">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      name="linkedin"
                      id="linkedin"
                      minLength={3}
                      required
                    />

                    {/* <label htmlFor="post">Year</label>
                    <div class="input-group mb-3">
                      <select
                        onChange={handleChange}
                        name="year"
                        class="custom-select"
                        id="inputGroupSelect02"
                      >
                        <option selected>Choose...</option>
                        <option value={new Date().getFullYear()}>
                          {new Date().getFullYear()}
                        </option>
                        <option value={new Date().getFullYear() - 1}>
                          {new Date().getFullYear() - 1}
                        </option>
                        <option value={new Date().getFullYear() - 2}>
                          {new Date().getFullYear() - 2}
                        </option>
                      </select>
                      <div class="input-group-append"></div>
                    </div> */}
                  </>
                ) : null}

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

                  <div className="maintainsize">
                    <Loader setloader={loading} />
                  </div>

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
              {props.for}
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  loading === true ||
                  props.testimage === 0 ||
                  props.testlength < 5 ||
                  title.testtitle < 2
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
