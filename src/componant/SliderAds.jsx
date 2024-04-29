import React, {useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../componantStyle/SliderAds.css";
import { useUser } from "../context/Context";
function SliderAds() {
  const [ slide, setSlide ] = useState( [] );
  const { direction } = useUser();
    useEffect( () => {
      async function getAllSlider() {
        try {
            let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/sliders/home_sliders/"
      );
       let response = await request.json();
       setSlide( response );
        } catch ( error ) {
          console.log(error)
       }
      }
      getAllSlider();
  },[])



  const settings = {
    dots: false,
    infinite: slide.length > 1 ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container">
      <div className="title">
        <h2>{ direction === "EN" ? "advertisements" : "الاعلانات" }</h2>{ " " }
      </div>

      <Slider { ...settings }>
        { slide.map( ( e,i ) => (
          <div className="artical" key={i}>
            <a href={ e.link }>
              (
              <img
                className="person-img"
                src={ `https://kog.pythonanywhere.com/${e.image}` }
                alt="from db"
              />
              )
            </a>
            <h4 className={ direction === "EN" ? "e" : "r" }>
              { e.text_en !== "undefined" && e.text_ar !== "undefined"
                ? direction === "EN"
                  ? e.text_en
                  : e.text_ar
                : "" }
            </h4>
          </div>
        ) ) }
      </Slider>
 
    </div>
  )
}
export default SliderAds;

