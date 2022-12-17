import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import TweetContextProvider from "./components/tweetsContext";
import TestContextProvider from "./components/testContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TestContextProvider>
    <TweetContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TweetContextProvider>
  </TestContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
