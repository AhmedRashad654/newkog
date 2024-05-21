import React from "react";
import style from "./SectionOurValuesHome.module.css";
import { useUser } from "../../context/Context";
export default function SectionOurValuesHome() {
  const { direction } = useUser();
  return (
    <div className={style.collSecondHowAre3}>
      <div className={style.text}>
        <span></span>
        <h4 style={{ fontSize: "20px" }}>
          {direction === "EN" ? " Our Values" : "قيمنا"}
        </h4>
        <h4
          style={{
            marginBottom: "50px",
          }}
        >
          {direction === "EN" ? (
            <p>
              Our broad vision is to be a company that derives its place from
              its updates and its strength from technology, sufficient for
              everyone
            </p>
          ) : (
            <p>
              رويتنا التجارية تتمثل فى ان نكون شركة تستمد مكانتها من الاشخاص
              وقوتها من التكنولوجيا وتكون متاحة للجميع
            </p>
          )}
        </h4>
        <div className={style.nestedThree}>
          <div
            className={`${style.one} ${
              direction === "EN" ? style.borderEnglish : style.borderArabic
            }`}
          >
            <h6>{direction === "EN" ? "Customer first" : "العميل اولا"}</h6>
            {direction === "EN" ? (
              <p>
                The company was founded with the primary goal of making a
                customer's life easier, so we make all our decisions based on
                how well we achieve this goal. Based on our philosophy, we
                always strive to build strong relationships with our customers,
                as establishing good relationships is in the interest of both
                parties. Our customers are partners in our success, and meeting
                their needs and achieving their satisfaction is fundamental to
                our continued success.
              </p>
            ) : (
              <p>
                تأسست الشركة بغرض تسهيل حياة العميل بشكل أساسي، ولذلك نتخذ جميع
                قراراتنا بناءً على مدى تحقيقها لهذا الهدف. بناءً على فلسفتنا
                هذه، نسعى دائمًا لبناء علاقات قوية مع عملائنا، فإقامة علاقات
                جيدة تكون في مصلحة الطرفين. يعتبر عملاؤنا شركاء في نجاحنا،
                ونعتبر تلبية احتياجاتهم وتحقيق رضاهم أمرًا أساسيًا لنجاحنا
                المستمر.
              </p>
            )}
          </div>
          <div
            className={`${style.one} ${
              direction === "EN" ? style.borderEnglish : style.borderArabic
            }`}
          >
            <h6>{direction === "EN" ? "Transparency" : "الشفافية"}</h6>
            {direction === "EN" ? (
              <p>
                We are committed to making transparency a foundation of
                interaction with our clients and team members. We believe in the
                importance of conveying information clearly and honestly,
                whether in dealing with our clients or in interactions within
                our team. Achieving a high level of transparency is essential to
                building relationships based on trust and mutual understanding,
                and is an essential part of our values ​​that we seek to embody
                in all aspects of our business.
              </p>
            ) : (
              <p>
                نحن ملتزمون بجعل الشفافية أساسًا من أسس التفاعل مع عملائنا
                وأعضاء فريقنا. نؤمن بأهمية نقل المعلومات بوضوح وصدق، سواء في
                التعامل مع عملائنا أو في التفاعل داخل فريقنا. يعتبر تحقيق مستوى
                عالٍ من الشفافية أمرًا ضروريًا لبناء علاقات قائمة على الثقة
                والفهم المتبادل، وهو جزء أساسي من قيمنا التي نسعى لتجسيدها في
                جميع جوانب أعمالنا.
              </p>
            )}
          </div>

          <div className={`${style.one}`}>
            <h6>{direction === "EN" ? "Development" : "التطوير"}</h6>
            {direction === "EN" ? (
              <p>
                We always strive to develop the skills of all team members by
                providing an appropriate work environment, and we encourage team
                members to develop their methods of work. We are also interested
                in improving working methods by periodically taking an external
                look, to develop more professional and efficient work
                strategies.
              </p>
            ) : (
              <p>
                {" "}
                نحن نسعى دائماً لتطوير مهارات جميع أفراد الفريق من خلال توفير
                بيئة عمل مناسبة، ونشجع أعضاء الفريق على تطوير أساليبهم في العمل.
                نهتم أيضًا بتحسين طرق العمل من خلال إلقاء نظرة خارجية بشكل دوري،
                لوضع استراتيجيات عمل أكثر احترافية وكفاءة.
              </p>
            )}
          </div>
        </div>
        <div>
          <button>{direction === "EN" ? "Read More" : "اقرا أكثر"}</button>
        </div>
      </div>
    </div>
  );
}
