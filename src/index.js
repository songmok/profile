import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // 1. app 컴포넌트를 React.StrictMode로 감싼다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
