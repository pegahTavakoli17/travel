import React from "react";
import { Link } from "react-router-dom";
export default function NavLink({ title, path }) {
  return (
    <div>
      <Link
        to={path}
        className="text-white px-3"
        style={{ textDecoration: "none" }}
      >
        {title}
      </Link>
    </div>
  );
}
