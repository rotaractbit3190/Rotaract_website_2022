//use rfc

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//suspense is for lazy loading
import React, { Suspense,useState } from "react";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/Login";

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
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </>
  );
}
