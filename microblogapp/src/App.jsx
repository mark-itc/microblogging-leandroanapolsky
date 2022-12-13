import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TweetList from "./components/tweetList";
import Input from "./components/input";
import Navbar from "./components/navbar";
import Tweet from "./components/tweet";
import Home from "./components/views/home";
import Userpage from "./components/views/userpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userpage" element={<Userpage />} />
      </Routes>
    </div>
  );
}

export default App;
