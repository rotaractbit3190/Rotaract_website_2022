import React from 'react'

export default function UpdateCard(props) {
    const {
        image,
        title,
        loading,
        handleChange,
        handleClick,
        handleFile,
        CreateUpload,
        refClose,
        event,
        refopen,
        editNote 
      
      } = props;

      const updatethecard=()=>{
        editNote(title.id)
      }
  return (
   
    <>
    <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          ref={refopen}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
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
                  Edit
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                <div className="modal-body">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="title"
                  id="title"
                  minLength={3}
                  required
                  value={title.title || ""}
                />
                <label htmlFor="post">description</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={handleChange}
                  minLength={3}
                  required
                  value={title.description ||""}
                />
               
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
                  value={title.post ||""}
                />
                    <label htmlFor="post">Year</label>
                    <div class="input-group mb-3">
                      <select onChange={handleChange} name="year"  class="custom-select" id="inputGroupSelect02">
                        <option defaultValue>Choose...</option>
                        <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                        <option value={(new Date().getFullYear() - 1)}>
                          {(new Date().getFullYear() - 1)}
                        </option>
                        <option value= {new Date().getFullYear() - 2}>
                          {new Date().getFullYear() - 2}
                        </option>
                      </select>
                      <div class="input-group-append"></div>
                    </div>
                  </>
                

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
              </div>
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
                  // disabled={
                  // //   loading === true ||
                  // // props.testimage === 0 ||
                  // // props.testlength < 5 ||
                  // // title.testtitle < 2
                  // }
                  type="button"
                  onClick={ updatethecard }
                  className="btn btn-primary"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
