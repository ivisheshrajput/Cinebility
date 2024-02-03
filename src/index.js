import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //due to this it re render twice abd because of that title and video gets diierent

  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
