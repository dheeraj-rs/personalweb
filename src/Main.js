import React from "react";
import Navbar from "./components/Navbar";
import "./Main.css";
import Home from "./components/Home";
import Works from "./components/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div id="Main-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Main;
