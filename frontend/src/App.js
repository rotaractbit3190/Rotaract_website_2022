//use rfc

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//suspense is for lazy loading
import React, { Suspense,useState } from "react";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/Login";
import Board from "./components/Board/Board";
import AboutUs from "./components/AboutUs/AboutUs";
import Events from "./components/Events/Events";
import ContactUs from "./components/ContactUs/ContactUs";

export default function App() {
  const [checkcursor, setcheckcursor] = useState(true)
  const checkcursors=(e)=>{
    setcheckcursor(e)
    console.log(e)

  }
  return (
    <>
      <Router>
        <Suspense>
          <NavBar showcursor={checkcursors}/>
          <Routes>
            <Route path="/" element={<HomePage nocursor={checkcursor} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Board" element={<Board/>} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </>
  );
}
