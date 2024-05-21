import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./ourBartners.module.css";
import { useUser } from "../../context/Context";
import one from "../../image/lor-logo.svg";

export default function OurBartnerShip() {
  const { direction } = useUser();
  ///////////////////
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 3000,
        },
      },
    ],
  };
  return (
    <div className={style.OurBartnerShip}>
      <div className={style.groupTextAndPartner}>
        <div className={style.groupText}>
          <span></span>
          <p>{direction === "EN" ? "Our global reach" : "انتشارنا العالمي"}</p>
          <h2>
            {direction === "EN"
              ? "Some of our partners are all over the world"
              : "بعض شركاؤنا في جميع انحاء العالم"}
          </h2>
          <h6>
            {direction === "EN"
              ? "We take pride in the long-term relationships we've built with some of the world's leading brands."
              : "نحن نفخر بالعلاقات طويلة الأمد التي بنيناها مع بعض العلامات التجارية الرائدة في العالم."}
          </h6>
        </div>

        <div className={`allslick ${style.collallSlick}`}>
          <Slider {...settings}>
            <img src={one} alt="partner" />
            <img src={one} alt="partner" />
            <img src={one} alt="partner" />
          </Slider>
        </div>
      </div>
    </div>
  );
}
