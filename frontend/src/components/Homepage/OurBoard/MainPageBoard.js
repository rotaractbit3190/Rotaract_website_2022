import React from "react";
import res from "./image.jpeg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";
import image5 from "./image-5.jpg";
import image6 from "./image-6.jpg";
import imagex from "./imgx.jpg";
import "./MainPageBoard.css";
export default function MainPageBoard() {
  return (
    <>
      <div className="main-one changes-cor">
        Our team for the year {new Date().getFullYear() - 1}-
        {new Date().getFullYear()}
      </div>
      <div
        id="carouselExampleDark"
        class="carousel  slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="6"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="7"
            aria-label="Slide 1"
          ></button>
        </div>
        <center>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={imagex} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image2} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image3} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item " data-bs-interval="2000">
              <img src={res} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image3} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image4} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image5} class="d-block w-50" alt="..." height={600} />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image6} class="d-block w-50" alt="..." height={600} />
            </div>
          </div>
        </center>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
