import React from 'react'
import style from '../componantStyle/Howweare.module.css'
import { useUser } from '../context/Context';
export default function FirstSectionInOurBusiness() {
    const {direction} = useUser()
  return (
    <div className={style.contactHow}>
      <div className={style.collSecondHowAre}>
        <div className={style.text}>
          <h4 style={{ marginBottom: "15px" }}>
            {direction === "EN" ? " Kamal Othman Group" : "كمال عثمان جروب"}
          </h4>
          {direction === "EN" ? (
            <p>
              Kamal Othman Group represents a local, family-owned conglomerate
              in Egypt, with a large number of employees. Her sporting journey
              began more than 29 years ago at the hands of Kamal Othman, and she
              is proud to run a business across a diverse group of companies. In
              2022, total annual imports exceeded 1 billion pounds.
            </p>
          ) : (
            <p>
              مجموعة كمال عثمان تمثل تكتلًا محليًا مملوكًا عائليًا في مصر، حيث
              يعمل فيها عدد كبير من الموظفين. بدأت رحلتها الرياضية قبل أكثر من
              29 عامًا على يد كمال عثمان، وفخرت بإدارة أعمال.عبر مجموعة متنوعة
              من نوفمبر. في عام 2022، تجاوز إجمالي الواردات السنوية 1 مليار
              جنيه.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
