import React from "react";
import "./Footer.css";
function Footer() {
  const aboutUs = ["موقعیت‌های شغلی", "تماس با ما", "همکاری با ما"];
  const guide = ["نقشه سایت", "سوال‌های متداول", "حریم شخصی"];
  const reserve = ["رزرو هتل", "رزرو بلیط هواپیما", "رزرو بلیط قطار "];
  const socialMedia = [
    { name: "اینستاگرام", icon: "bi bi-instagram" },
    { name: "تلگرام", icon: "bi bi-telegram" },
    { name: "توییتر", icon: "bi bi-twitter" },
  ];
  return (
    <div className=" footer-page w-100 p-5 d-flex justify-content-center align-items-center w-100 flex-column flex-sm-row footer-container col-12">
      <div className="d-flex flex-column align-items-center col-12 col-md-3 col-lg-3 mr-lg-4">
        <h5 className="fs-medium" style={{ fontWeight: 700 }}>
          درباره ما
        </h5>
        <div className="fs-small  d-flex flex-column align-items-center">
          {aboutUs.map((item, index) => {
            return (
              <div className="mt-2" key={index}>
                <i className="bi bi-circle-fill me-2 text-info "></i>

                <span className="mr-1 footer-text">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center me-lg-1 mr-lg-1 col-12 col-md-3 col-lg-3 mt-4 mt-sm-0">
        <h5 className="fs-medium" style={{ fontWeight: 700 }}>
          راهنما
        </h5>
        <div className="d-flex flex-column align-items-center ">
          {guide.map((item, index) => {
            return (
              <div className="fs-small mt-2" key={index}>
                <i className="bi bi-circle-fill me-2 text-info "></i>
                <span className="mr-1 footer-text">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-column  align-items-center mr-lg-1 col-12 col-md-3 col-lg-3 mt-4 mt-sm-0">
        <h5 className="fs-medium" style={{ fontWeight: 700 }}>
          رزرو
        </h5>
        <div className="d-flex flex-column align-items-center">
          {reserve.map((item, index) => {
            return (
              <div key={index} className="mt-2 fs-small">
                <i className="bi bi-circle-fill me-2 text-info "></i>
                <span className="mr-1 footer-text">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mr-lg-1 col-12 col-md-3 col-lg-3 mt-4 mt-sm-0">
        <h5 className="fs-medium" style={{ fontWeight: 700 }}>
          شبکه‌های اجتماعی
        </h5>
        <div className="d-flex flex-column align-items-center">
          {socialMedia.map((item, index) => {
            return (
              <div className="mt-2 fs-small" key={index}>
                <i className={`${item.icon} text-info`}></i>
                <span className="mr-1 footer-text"> {item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
