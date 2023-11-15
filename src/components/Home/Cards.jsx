import React from "react";
import SingleCard from "./SingleCard";
function Cards() {
  const firstMainCards = [
    {
      src: "./9.jpg",
      text: "دیدن آبشار ناشناخته در دل جنگل های آمازون",
      label: "ناشناخته‌ها",
      path: "/",
    },
    {
      src: "./8.jpg",
      text: "کویری زیبا در قلب ایران",
      label: "کویری",
      path: "/",
    },
  ];
  const secondMainCards = [
    {
      src: "./1.jpg",
      text: "آرامشی عمیق در رشته کوه های آلپ",
      label: "لاکچری",
      path: "/",
    },
    {
      src: "./2.jpg",
      text: "سفری خاطره انگیز در جزایر کارائیب",
      label: "لاکچری",
      path: "/",
    },
    {
      src: "./6.jpg",
      text: "تجربه ای متفاوت از گردش در یک شهر",
      label: "ناشناخته‌ها",
      path: "/",
    },
  ];
  return (
    <div className="w-100 h-100 ">
      <h1 className="text-center my-3 font-weight-bold">مقاصد برتر</h1>
      <div className="d-flex flex-wrap justify-content-center text-center ">
        {firstMainCards.map((card, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="col-sm-6 col-12  p-3" key={index}>
                <SingleCard
                  key={index}
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-wrap justify-content-center text-center ">
        {secondMainCards.map((card, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="col-sm-4 col-12  p-3 " key={index}>
                <SingleCard
                  key={index}
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
