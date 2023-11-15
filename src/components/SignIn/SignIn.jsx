import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const handleNameChange = (event) => {
    setAccount({ ...account, name: event.target.value });
  };
  const handleMobileChange = (event) => {
    setAccount({ ...account, mobile: event.target.value });
  };
  const handleEmailChange = (event) => {
    setAccount({ ...account, email: event.target.value });
  };
  const handleSignUp = () => {
    localStorage.setItem("name", account.name);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center signIn-back ">
      <div className="primary-bordered-box mt-4 mb-4 d-flex justify-content-center align-items-center flex-column">
        <img src="travel2.png" alt="" width={50} className="mb-3" />
        <input
          className="signIn-input"
          type="text"
          value={account.name}
          placeholder="نام و نام‌خانوادگی"
          onChange={handleNameChange}
        />
        <input
          className="signIn-input mt-3"
          type="number"
          value={account.mobile}
          placeholder="موبایل"
          onChange={handleMobileChange}
        />
        <input
          className="signIn-input mt-3"
          type="email"
          value={account.email}
          placeholder="ایمیل"
          onChange={handleEmailChange}
        />
        <div className="mt-3">
          <button
            className={` ${
              !account.name || !account.mobile || !account.email
                ? "disabled-btn"
                : "filled-btn-primary"
            } `}
            onClick={handleSignUp}
            disabled={!account.name || !account.mobile || !account.email}
          >
            ثبت‌نام
            <i className="bi bi-box-arrow-in-left mt-1 mr-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
