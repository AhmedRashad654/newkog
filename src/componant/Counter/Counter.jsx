import React from 'react'
import style from './Counter.module.css'
import { useUser } from '../../context/Context';
export default function Counter() {
  const {direction} = useUser()
  return (
    <div className={style.Counter}>
      <div className={style.groupTextAndPartner}>
        <div className={style.groupText}>
          <span></span>
          <h3>
            {direction === "EN"
              ? "Kamal Osman Collection The most important facts and statistics"
              : "     مجموعة كمال عثمان الحقائق والاحصائيات الرئيسية"}
          </h3>
        </div>

        <div className={style.collallSlick}>
          <div className={style.oneCounter}>
            <h4>60 k</h4>
            {direction === "EN" ? (
              <p>Employees Worldwide</p>
            ) : (
              <p style={{textAlign:'center'}}> الموظفين في جميع <br/>انحاء العالم</p>
            )}
          </div>
          <div className={style.oneCounter}>
            <h4> &gt; 100</h4>
            <p>{direction === "EN" ? "Country Presence" : "الحضور الدولي"}</p>
          </div>
          <div className={style.oneCounter}>
            <h4>$ 7.5 BN</h4>
            <p>{direction === "EN" ? "Total Revenue" : "اجمالي الأيرادات"}</p>
          </div>
          <div className={style.oneCounter}>
            <h4>1952</h4>
            <p>{direction === "EN" ? "Year of Foundation" : "عام التأسيس"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
