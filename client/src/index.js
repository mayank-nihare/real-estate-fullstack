import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// Learn more: https://bit.ly/CRA-vitals
