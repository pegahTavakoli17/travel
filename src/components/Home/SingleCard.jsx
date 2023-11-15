import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function SingleCard({ src, text, label, path }) {
  const badgeStyle =
    label == "ناشناخته‌ها"
      ? "badge-info"
      : label == "کویری"
      ? "badge-warning"
      : label == "لاکچری"
      ? "badge-danger"
      : "";
  return (
    <Link className="card" to={path}>
      <figure className="card-img ">
        <img src={src} alt="" className="card-img" />
        <span className={`badge card-badge p-2 ${badgeStyle}`}>{label}</span>
      </figure>
      <span className="text-secondary text-center">{text}</span>
    </Link>
  );
}

export default SingleCard;
