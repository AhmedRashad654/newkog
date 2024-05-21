import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "../context/Context";
import style from "../componantStyle/Howweare.module.css";
import { Helmet } from "react-helmet-async";
import one from '../image/KOG LOGO.png'


export default function HowWeAre() {
  const { direction } = useUser();
  ////////scroll revel/////////////
  return (
    <>
      <Helmet>
        <title>HOW WE ARE</title>
        <meta
          name="description"
          content="How We Are page of Kamal Othman Group’s website to introduce the nature of the company"
        />
      </Helmet>
      <Navbar prop="none" />
      <div className={style.contactHow}>
       
        <div className={style.collSecondHowAre2}>
          <img src={one} alt="logoCompany" />
          <div className={style.collText}>
            <div className={style.text}>
              {direction === "EN" ? (
                <p>
                  We at Kamal Othman Group are proud of our long history of
                  managing business efficiently and effectively. We manage our
                  successful operations across several different sectors, and
                  are always keen to look for opportunities to expand our
                  activities to meet market and customer needs.
                </p>
              ) : (
                <p>
                  نحن في مجموعة كمال عثمان نفتخر بتاريخنا الطويل في إدارة
                  الأعمال بكفاءة وفعالية. ندير عملياتنا الناجحة عبر عدة قطاعات
                  مختلفة، ونحرص دائمًا على البحث عن فرص توسيع نشاطاتنا لتلبية
                  احتياجات السوق والعملاء.
                </p>
              )}
            </div>
            <div className={style.text}>
              {direction === "EN" ? (
                <p>
                  With our long-term partnerships, we collaborate with some of
                  the world's leading brands, such as ExxonMobil, Total and
                  Shell, reflecting our commitment to achieving the highest
                  levels of quality and sustainability. These international
                  relations contribute to strengthening our position as a major
                  player in the business arena.
                </p>
              ) : (
                <p>
                  مع شراكاتنا الطويلة الأمد، نقوم بالتعاون مع بعض العلامات
                  التجارية العالمية الرائدة، مثل اكسون موبيل وتوتال وشل، مما
                  يعكس التزامنا بتحقيق أعلى مستويات الجودة والاستدامة. تلك
                  العلاقات الدولية تسهم في تعزيز مكانتنا كلاعب رئيسي في ساحة
                  الأعمال.
                </p>
              )}
            </div>
          </div>
        </div>
    
      
      
      </div>

      <Footer />
    </>
  );
}

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia perspiciatis repellendus fuga labore, aspernatur provident? Excepturi voluptatum quisquam quae.
</p>



