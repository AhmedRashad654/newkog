import React from "react";
import style from "./YearsOne.module.css";
import { useUser } from "../../context/Context";
export default function YearsOne({ year, text,img }) {
  const { direction } = useUser();
  return (
    <div className={style.YearsOne}>
      <div className={style.image}>
        <img src={img} alt="years" />
      </div>
      <div className={style.texts}>
        <h1 style={{ textAlign: "end" }}>{year}</h1>
        {direction === "EN" ? (
          <div className={style.after}></div>
        ) : (
          <div className={style.before}></div>
        )}

        <p>{text}</p>
      </div>
    </div>
  );
}
