import React from "react";
import style from "./Founders.module.css";
import { useUser } from "../../context/Context";
import one from "../../image/WhatsApp Image 2024-04-29 at 11.24.17_901a14b9.jpg";
import two from "../../image/WhatsApp Image 2024-04-29 at 11.24.17_c86ef092.jpg";
import { useNavigate } from "react-router-dom";

export default function Founders() {
  const { direction } = useUser();
  const navigate = useNavigate()
  return (
    <>
      <div className={style.Founders}>
        <div className={style.text}>
          <h4>
            {direction === "EN"
              ? "Founders or board members of the kamal osman Group"
              : "المؤسسون او اعضاء مجموعة كمال عثمان"}
          </h4>
        </div>
        <div className={style.allPicture}>
          <div
            className={style.picture}
            onClick={() => navigate("/displayFounder/kamalosman")}
          >
            <img src={one} alt="founders" />
            <h4>
              {direction === "EN" ? "Mr. Kamal Osman" : "مستر /  كمال عثمان"}
            </h4>
            <p>
              {direction === "EN"
                ? "Founder — Deceased in 1976"
                : "ألمؤسس - المتوفي عام 1976"}
            </p>
          </div>
          <div
            className={style.picture}
            onClick={() => navigate("/displayFounder/salwahessain")}
          >
            <img src={two} alt="founders" />
            <h4>
              {direction === "EN" ? "Mr. Salwa Hessain" : "مستر /  سلوي حسين"}
            </h4>
            <p>
              {direction === "EN"
                ? "Founder — Deceased in 1976"
                : "ألمؤسس - المتوفي عام 1976"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
