import React from "react";
import style from "./SalwaHessainLife.module.css";
import { useUser } from "../../context/Context";
import one from '../../image/WhatsApp Image 2024-04-29 at 11.24.17_c86ef092.jpg'
export default function SalwaHessainLife() {
  const { direction } = useUser();
  return (
    <>
      <div className={style.KamalOsmanLife}>
        <img src={one} alt="kamalosman" />
        <div className={style.text}>
          <h4>
            {direction === "EN"
              ? "Salwa Hussein's biography"
              : "السيرة الذاتية سلوى حسين"}
          </h4>
          {direction === "EN" ? (
            <p>
              Professor Salwa Hussein Abdel Muttalib, wife of businessman Kamal
              Othman, was born in 1974. She earned a bachelor's degree in the
              fundamentals of religion and interpretation, and held a position
              as a teacher at Al-Azhar Al-Sharif. After her husband passed away
              in 2012, she led and supervised the work and development of the
              Kamal Othman Foundation, where she continued to maintain the
              company’s success, development and progress.
            </p>
          ) : (
            <p>
              أستاذة سلوى حسين عبدالمطلب، قرينة رجل الأعمال كمال عثمان، وُلدت في
              عام ١٩٧٤. حازت على درجة الليسانس في أصول الدين والتفسير، وشغلت
              وظيفة معلمة في الأزهر الشريف. بعد رحيل زوجها في عام ٢٠١٢، قادت
              وأشرفت على عمل وتطوير مؤسسة كمال عثمان، حيث استمرت في الحفاظ على
              مسيرة النجاح والتطوير والتقدم للشركة.
            </p>
          )}
          {direction === "EN" ? (
            <p>
              On November 27, 2022, Professor Salwa Hussein Abdel Muttalib
              passed away to God’s mercy, where she completed her husband’s
              vision and mission to the fullest.
            </p>
          ) : (
            <p>
              وفي ٢٧ نوفمبر ٢٠٢٢، انتقلت الاستاذة سلوى حسين عبدالمطلب إلى رحمة
              الله، حيث أكملت رؤية ورسالة زوجها على أكمل وجه.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
