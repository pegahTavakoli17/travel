import React from "react";
import "./Tourism.css";
export default function CardItem({ picSrc, title, text }) {
  return (
    <div className="tourism-card d-flex justify-content-center align-items-center flex-column">
      <img src={picSrc} alt="" className="tourism-card-pic" />
      <span className="text-info pt-1">{title}</span>
      <span className="fs-small pt-3">{text}</span>
    </div>
  );
}
