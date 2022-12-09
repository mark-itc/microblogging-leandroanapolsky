import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TweetList from "./components/tweetList";
import Input from "./components/input";
import Navbar from "./components/navbar";
import Tweet from "./components/tweet";
import Home from "./components/home";
import Userpage from "./components/userpage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
