import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // 1. app 컴포넌트를 React.StrictMode로 감싼다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
