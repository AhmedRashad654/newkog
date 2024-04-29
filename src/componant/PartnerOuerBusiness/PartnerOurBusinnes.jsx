import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './PartnerOut.module.css'
import { useUser } from "../../context/Context";
function PartnerOurBusinnes() {
    const { direction, allPartner } = useUser();
  const settings = {
    dots: false,
    infinite: allPartner.length > 1 ? true : false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <div className={style.allslick}>
      <div className={style.title}>
        <h3>{direction === "EN" ? "Clients" : "العملاء"}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          ipsam qui nesciunt eveniet minima illum!
        </p>
      </div>

      <Slider {...settings}>
        {allPartner.map((par, index) => (
          <img key={index} src={par.image} alt="partner" />
        ))}
      </Slider>
    </div>
  );
}

export default PartnerOurBusinnes;