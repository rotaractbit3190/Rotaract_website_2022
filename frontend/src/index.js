import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { storage } from "./firebase";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
