import React from "react";
import NavLink from "./NavLink";
export default function MenuOverLay({ navLinks }) {
  return (
    <div className="d-flex flex-column h-100 w-100 text-center">
      {navLinks.map((item, index) => (
        <div key={index} className="py-2">
          <NavLink title={item.title} path={item.path} />
        </div>
      ))}
    </div>
  );
}
