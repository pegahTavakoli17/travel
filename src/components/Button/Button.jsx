import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text, to, style, icon, disabled, method }) {
  const styles = ["btn-primary", "btn-orange", "filled-btn-primary"];
  const buttonStyle = styles.includes(style) ? style : styles[0];
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <button
        className={`btn rounded-lg d-flex justify-content-center align-items-center ${buttonStyle} `}
        disabled={disabled}
        onClick={method}
      >
        <span> {text}</span>
        {icon && <i className={`icon mr-1 ${icon}`}></i>}
      </button>
    </Link>
  );
}
