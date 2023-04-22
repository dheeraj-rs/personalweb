import React from "react";
import "./styles/Home.css";
import profile from './assets/profilebg.jpg'
function Home() {
  return (
    <div className="home">
      <div className="home-black-div">
        <div className="home-img-div">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="head-txt-container">
        <p className="home-head-txt main-head">I'm Dheeráj</p>
        <p className="home-head-txt sub-head">A Product</p>
        <p className="home-head-txt sub-head">Developer</p>
        <p className="home-head-txt sub-head2">based in India.</p>
        <p className="home-head-txt bottom-head">I'm probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.</p>
      </div>
    </div>
  );
}

export default Home;
