import React from "react";
import style from "./YearsTwo.module.css";

import { useUser } from "../../context/Context";
export default function YearsTwo({ year, text ,img}) {
  const { direction } = useUser();
  return (
    <div className={style.YearsOne}>
      <div className={style.texts}>
        <h1 style={{ textAlign: "start" }}>{year}</h1>
        {direction === "EN" ? (
          <div className={style.before}></div>
        ) : (
          <div className={style.after}></div>
        )}

        <p>{text}</p>
      </div>
      <div className={style.image}>
        <img src={img} alt="years" />
      </div>
    </div>
  );
}
