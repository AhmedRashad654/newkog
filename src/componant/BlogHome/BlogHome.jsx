import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./BlogHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../context/Context";
export default function BlogHome() {
    const { direction, newsLetter } = useUser();
    const [ show, setShow ] = useState( false )

    
  const settings = {
    dots: false,
    infinite: newsLetter.length > 1 ? true : false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 3000,
        },
      },
      {
        breakpoint: 700,
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
    function showtext(itemId) {
      setShow((prevState) => ({
        ...prevState,
        [itemId]: !prevState[itemId],
      }));
    }
  return (
    <div className={style.BlogHome}>
      <h1>{direction === "EN" ? "News Letter" : "اخر الاخبار"}</h1>

      <Slider {...settings}>
        {newsLetter.map((e) => (
          <div
            className={`${style.Blog} ${direction === "AR" ? style.rtl : ""}`}
            key={e.id}
          >
            {direction === "EN" ? (
              <p>
                {show[e.id]
                  ? e.description_en
                  : e.description_en.split(" ").slice(0, 40).join(" ")}
                {e.description_en.split(" ").length > 40 ? (
                  <span
                    style={{
                      color: "gray",
                      textDecoration: "underline",
                      margin: "0 10px",
                    }}
                    onClick={() => showtext(e.id)} 
                  >
                    {show[e.id] ? "show less" : "show more"} 
                  </span>
                ) : (
                  ""
                )}
              </p>
            ) : (
              <p>
                {show[e.id]
                  ? e.description_ar
                  : e.description_ar.split(" ").slice(0, 40).join(" ")}
                {e.description_ar.split(" ").length > 40 ? (
                  <span
                    style={{
                      color: "gray",
                      textDecoration: "underline",
                      margin: "0 10px",
                    }}
                    onClick={() => showtext(e.id)} 
                  >
                    {show[e.id] ? "عرض اقل" : "عرض اكثر"}
                  </span>
                ) : (
                  ""
                )}
              </p>
            )}
            <div className={style.imageButton}>
              <div className={style.text}>
                <img src={e.image} alt="peofile" />
                <h6> {direction === "EN" ? e.title_en : e.title_ar}</h6>
              </div>
              <div className={style.icon}>
                {direction === "EN" ? (
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    style={{ color: "#777", fontSize: "20px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ color: "#777", fontSize: "20px" }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}





// استخدم معرف العنصر لتحديد العنصر المطلوب لتغيير حالة العرض له فقط


// في الخرج map ، قم بتمرير معرف العنصر إلى الدالة showtext







