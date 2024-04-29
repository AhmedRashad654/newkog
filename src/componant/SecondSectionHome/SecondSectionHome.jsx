import React, { useState } from 'react'
import style from './SecondSectionHome.module.css'
import tree from '../../image/mansour-leadership-lighthouse@2x.png'
import sea from '../../image/mansour-leadership-sea@2x.png'
import { useUser } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
export default function SecondSectionHome() {
    const { direction } = useUser()
      const [position, setPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate()
    /////////////////////

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const dx = clientX - position.x;
    const dy = clientY - position.y;
    const moveX = dx *1.5 / 1;
    const moveY = dy *1.5/ 1;
    setPosition({ x: clientX, y: clientY, moveX, moveY });
  };
  return (
    <div className={style.SecondSectionHome} onMouseMove={handleMouseMove}>
      <div className={style.two}>
        <div className={style.image}>
          <img
            src={tree}
            alt="tree header"
            style={{
              transform: `translate(${position.moveX}px, ${position.moveY}px)`,
            }}
          />
        </div>
        <div className={style.text}>
          <h4 style={{ fontSize: "35px", fontFamily: "Cherry Swash" }}>
            {direction === "EN" ? "Our Businness" : "اعمالنا"}
          </h4>
          {direction === "EN" ? (
            <p>
              Kamal Othman Group represents a local, family-owned conglomerate
              in Egypt, where it operates It has a large number of employees.
              Her sporting journey began more than 29 years ago At the hands of
              Kamal Othman, he takes pride in running a business across a
              variety of broad lines until. In 2022, the total annual broadcast
              will exceed 1 One billion pounds.
            </p>
          ) : (
            <p>
              مجموعة كمال عثمان تمثل تكتلًا محليًا مملوكًا عائليًا في مصر، حيث
              يعمل فيها عدد كبير من الموظفين. بدأت رحلتها الريادية قبل أكثر من
              29 عامًا على يد كمال عثمان، وتفخر بإدارة أعمال ناجحة تمتد عبر
              مجموعة متنوعة من القطاعات. في عام 2022، تجاوزت إجمالي الإيرادات
              السنوية للمجموعة 1 مليار جنيه.
            </p>
          )}
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/ourbusiness")}
          >
            {direction === "EN" ? "Read More" : "قراءة المزيد"}
          </button>
        </div>
      </div>
      <img
        className={style.last}
        src={sea}
        alt="sea"
      />
    </div>
  );
}

