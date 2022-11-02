//use rfc

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//suspense is for lazy loading
import React, { Suspense } from "react";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/navBar/NavBar";

export default function App() {
  return (
    <>
      <Router>
        <Suspense>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
