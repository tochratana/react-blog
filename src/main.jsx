import ReactDom from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
