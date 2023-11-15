import React from "react";
import "./Home.css";
import Button from "../Button/Button";
export default function CentralHome() {
  return (
    <div className="home-center">
      <video src="main.mp4" className="home-video" autoPlay loop muted></video>
      <div className="search-box d-flex justify-content-center align-items-center text-center mx-auto">
        <div className="input-group d-flex justify-content-center">
          <input
            type="text"
            placeholder="جستجوی مکان، کشور، شهر..."
            className="searchbox-input"
          />
          <div className="input-group-append">
            <Button icon={"bi bi-search"} style={"btn-orange"} />
          </div>
        </div>
      </div>
    </div>
  );
}
