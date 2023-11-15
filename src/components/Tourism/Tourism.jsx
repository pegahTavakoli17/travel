import React from "react";
import "./Tourism.css";
import CentralTourism from "./CentralTourism";
export default function Tourism() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
      <div
        className="tourism-pic d-flex justify-content-center align-items-center w-100"
        style={{ backgroundImage: "url(./tourism.jpg)", objectFit: "contain" }}
      >
        <h1 className="text-white fs-large portal-text text-center p-5">
          پورتال جامع سفر و گردش
        </h1>
      </div>
      <div className="mt-5 w-100">
        <CentralTourism />
      </div>
    </div>
  );
}
