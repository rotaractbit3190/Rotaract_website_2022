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
import Loader from "./components/loader/Loader";

export default function App() {
  const [checkcursor, setcheckcursor] = useState(true)
  const [loader, setloader] = useState(false)
  const checkcursors=(e)=>{
    setcheckcursor(e)
    

  }
  const setLoading=(isloading)=>{
    setloader(isloading)
  }
 
  const Events = React.lazy(() => {
    return import("./components/Events/Events");
  });
  return (
    <>
      <Router>
        <Suspense>
          <NavBar showcursor={checkcursors}/>
          <Loader setloader={loader}/>
          <Routes>
            <Route path="/" element={<HomePage nocursor={checkcursor} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Board" element={<Board/>} />
         
            <Route path="/Events" element={<Events loader={setLoading} />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </>
  );
}
