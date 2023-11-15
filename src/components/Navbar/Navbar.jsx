import "./Navbar.css";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import Button from "../Button/Button";
import MenuOverLay from "./MenuOverLay";
export default function NavBar() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const location = useLocation();
  const isLoginRoute = location.pathname == "/login";
  const userName = localStorage.getItem("name")
    ? localStorage.getItem("name")
    : "";
  const hasRegister = userName ? true : false;
  const navLinks = [
    { title: "خانه", path: "/" },
    { title: "گردشگری", path: "/tourism" },
    { title: "تورها", path: "/tours" },
  ];
  const handlemobileMenu = () => {
    setOpenedMenu(!openedMenu);
  };
  return (
    <div>
      <div className="navbar bg-info w-100">
        <div className="d-sm-flex d-none justify-content-between w-100 h-100 align-items-center px-3">
          <div className="d-flex align-items-center">
            <img
              src="travel2.png"
              alt="logo"
              className="nav-logo "
              style={{ objectFit: "contain" }}
            />
            {navLinks.map((item, index) => (
              <div key={index}>
                <NavLink title={item.title} path={item.path} />
              </div>
            ))}
          </div>
          <div className="h-100">
            {!isLoginRoute && !hasRegister && (
              <div className="d-flex justify-content-center align-items-start">
                <Button
                  text={"ثبت نام"}
                  to={"login"}
                  style={"btn-primary"}
                  icon={"bi bi-box-arrow-in-left"}
                />
              </div>
            )}
            {hasRegister && (
              <div className="d-flex justify-content-center align-items-center h-100">
                <i className="text-white bi bi-person-circle  fs-medium2 mt-2"></i>
                <span className="text-white fs-small  mr-2">{userName}</span>
              </div>
            )}
          </div>
        </div>
        <div className="d-sm-none d-flex flex-column w-100 h-100 navbar-mobile ">
          <div className="d-flex align-items-center justify-content-between ">
            <i
              onClick={handlemobileMenu}
              className={` text-white p-2  ${
                openedMenu ? "bi bi-x-circle " : "bi bi-list"
              }`}
              style={{ verticalAlign: "middle" }}
            ></i>

            {!openedMenu && (
              <div className="p-2">
                {!isLoginRoute && !hasRegister && (
                  <div className="d-flex justify-content-center align-items-start">
                    <Button
                      text={"ثبت نام"}
                      to={"login"}
                      style={"btn-primary"}
                      icon={"bi bi-box-arrow-in-left"}
                    />
                  </div>
                )}
                {hasRegister && (
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <i className="text-white bi bi-person-circle  fs-medium2 mt-2"></i>
                    <span className="text-white fs-small  mr-2">
                      {userName}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {openedMenu && (
            <div className="w-100 h-100">
              {<MenuOverLay navLinks={navLinks} />}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
