import React, { useEffect} from "react";
import "../componantStyle/Header.css";
import ScrollReveal from "scrollreveal";
import { useUser } from "../context/Context";
import one from '../image/bg-banner.jpg'
import two from '../image/SALES-01.png'
import Slider from "react-slick";

export default function Header() {
    const {direction} = useUser()
    useEffect(() => {
      const scrollRevealOption = {
        distance: "50px",
        origin: "top",
        duration: 1000,
      };
      ScrollReveal().reveal(".maintext h1", { ...scrollRevealOption });
      ScrollReveal().reveal(".maintext h2", {
        ...scrollRevealOption,
        delay: 500,
      });
      ScrollReveal().reveal(".maintext p", {
        ...scrollRevealOption,
        delay: 1000,
      });
    }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  
  };
  return (
    <div className="header">
      <Slider {...settings}>
        <img src={one} alt="oneheader" />
        <img src={two} alt="twoheader" />
      </Slider>
      <div className="maintext">
        <h1>{direction === "EN" ? "Kamal Osman" : " كمال عثمان"}</h1>
        <h2>{direction === "EN" ? "Group" : "جروب"}</h2>
        <p>
          {direction === "EN"
            ? "Our transportation division offers reliable and efficient solutions  for all your transportation needs."
            : "يقدم قسم النقل لدينا خدمات موثوقة لجميع خدمات النقل الخاصة بك"}
        </p>
      </div>
    </div>
  );
}


