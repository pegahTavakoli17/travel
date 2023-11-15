import React from "react";
import CardItem from "./CardItem";
export default function CentralTourism() {
  const cards = [
    {
      picSrc: "https://cdn.hamgardi.com/Static/Img/internal/compare.png",
      title: "دانستنی‌ها",
      text: "معرفی جذابیت‌های ایران و جهان",
    },
    {
      picSrc: "https://cdn.hamgardi.com/Static/Img/internal/compare.png",
      title: "جستجوی پیشرفته",
      text: "جستجوی تمام مقاصد سفرهای شما",
    },
    {
      picSrc: "https://cdn.hamgardi.com/Static/Img/internal/compare.png",
      title: "راهنمای جامع گردش و تفریح",
      text: "راهنمای سفر به شهرهای ایران و جهان",
    },
  ];
  return (
    <div className=" w-100 d-flex justify-content-center align-items-center flex-column">
      <span className="text-center px-2" style={{ fontSize: "22px" }}>
        بهترین راهنمای ایرانگردی، جهانگردی، خرید بلیط هواپیما، راهنمای اخذ ویزا،
        رزرو هتل و مکان‌های اقامتی، مکان‌های گردشگری
      </span>

      <div className="w-100 d-flex justify-content-center align-items-center mt-5 flex-row">
        <div className=" d-flex flex-column flex-sm-row">
          {cards.map((card, index) => {
            return (
              <div className=" p-3" key={index}>
                <CardItem
                  key={index}
                  picSrc={card.picSrc}
                  text={card.text}
                  title={card.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
