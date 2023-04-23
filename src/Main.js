import React from "react";
import Navbar from "./components/Navbar";
import "./Main.css";
import Home from "./components/Home";
import Works from "./components/Works";
function Main() {
  return (
    <div id="Main-container">
      <Navbar />
      <Home />
      <Works/>
    </div>
  );
}
export default Main;
