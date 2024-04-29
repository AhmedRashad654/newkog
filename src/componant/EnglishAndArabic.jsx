import React  from 'react'
import { useUser } from '../context/Context'
import style from '../componantStyle/EnglishAndArabic.module.css';
import one from '../image/png-clipart-flag-of-egypt-desktop-google-play-egypt-flag-egypt-thumbnail.png'
import two from '../image/download.png'
export default function EnglishAndArabic({color,dis}) {
    const { arabic,english } = useUser();
  return (
    <div
      className={style.EnglishAndArabic}
      style={{ width: "50px", display: "flex", gap: "10px", height: "30px" }}
    >
      <img
        src={one}
        alt="egypt"
        onClick={() => arabic()}
        style={{ width: "50%" }}
      />
      <img src={two} alt="america" style={{ width: "50%"}} onClick={()=>english()}/>
    </div>
  );
}
