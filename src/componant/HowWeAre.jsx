import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "../context/Context";
import style from "../componantStyle/Howweare.module.css";
import { Helmet } from "react-helmet-async";
import one from '../image/KOG LOGO.png'
import KamalOsmanLife from "./KamalOsmanLife/KamalOsmanLife";
import SalwaHessainLife from "./SalwaHessainLife/SalwaHessainLife";

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
        <div className={style.collSecondHowAre}>
          <div className={style.text}>
            <h4 style={{ marginBottom: "15px" }}>
              {direction === "EN" ? " Kamal Othman Group" : "كمال عثمان جروب"}
            </h4>
            {direction === "EN" ? (
              <p>
                Kamal Othman Group represents a local, family-owned conglomerate
                in Egypt, with a large number of employees. Her sporting journey
                began more than 29 years ago at the hands of Kamal Othman, and
                she is proud to run a business across a diverse group of
                companies. In 2022, total annual imports exceeded 1 billion
                pounds.
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
        <div className={style.collSecondHowAre3}>
          <div className={style.text}>
            <h4
              style={{
                marginBottom: "50px",
                marginTop: "30px",
                borderBottom: "1px solid black",
              }}
            >
              {direction === "EN" ? (
                <p>
                  Our broad vision is to be a company that derives its place
                  from its updates and its strength from technology, sufficient
                  for everyone
                </p>
              ) : (
                <p>
                  رويتنا التجارية تتمثل فى ان نكون شركة تستمد مكانتها من الاشخاص
                  وقوتها من التكنولوجيا وتكون متاحة للجميع
                </p>
              )}
            </h4>
            <h4 style={{ fontSize: "30px" }}>
              {direction === "EN" ? " Our Values" : "قيمنا"}
            </h4>
            <div className={style.nestedThree}>
              <div className={style.one}>
                <h6>{direction === "EN" ? "Customer first" : "العميل اولا"}</h6>
                {direction === "EN" ? (
                  <p>
                    The company was founded with the primary goal of making a
                    customer's life easier, so we make all our decisions based
                    on how well we achieve this goal. Based on our philosophy,
                    we always strive to build strong relationships with our
                    customers, as establishing good relationships is in the
                    interest of both parties. Our customers are partners in our
                    success, and meeting their needs and achieving their
                    satisfaction is fundamental to our continued success.
                  </p>
                ) : (
                  <p>
                    تأسست الشركة بغرض تسهيل حياة العميل بشكل أساسي، ولذلك نتخذ
                    جميع قراراتنا بناءً على مدى تحقيقها لهذا الهدف. بناءً على
                    فلسفتنا هذه، نسعى دائمًا لبناء علاقات قوية مع عملائنا،
                    فإقامة علاقات جيدة تكون في مصلحة الطرفين. يعتبر عملاؤنا
                    شركاء في نجاحنا، ونعتبر تلبية احتياجاتهم وتحقيق رضاهم أمرًا
                    أساسيًا لنجاحنا المستمر.
                  </p>
                )}
              </div>
              <div className={style.one}>
                <h6>{direction === "EN" ? "Transparency" : "الشفافية"}</h6>
                {direction === "EN" ? (
                  <p>
                    We are committed to making transparency a foundation of
                    interaction with our clients and team members. We believe in
                    the importance of conveying information clearly and
                    honestly, whether in dealing with our clients or in
                    interactions within our team. Achieving a high level of
                    transparency is essential to building relationships based on
                    trust and mutual understanding, and is an essential part of
                    our values ​​that we seek to embody in all aspects of our
                    business.
                  </p>
                ) : (
                  <p>
                    نحن ملتزمون بجعل الشفافية أساسًا من أسس التفاعل مع عملائنا
                    وأعضاء فريقنا. نؤمن بأهمية نقل المعلومات بوضوح وصدق، سواء في
                    التعامل مع عملائنا أو في التفاعل داخل فريقنا. يعتبر تحقيق
                    مستوى عالٍ من الشفافية أمرًا ضروريًا لبناء علاقات قائمة على
                    الثقة والفهم المتبادل، وهو جزء أساسي من قيمنا التي نسعى
                    لتجسيدها في جميع جوانب أعمالنا.
                  </p>
                )}
              </div>

              <div className={style.one}>
                <h6>{direction === "EN" ? "Development" : "التطوير"}</h6>
                {direction === "EN" ? (
                  <p>
                    We always strive to develop the skills of all team members
                    by providing an appropriate work environment, and we
                    encourage team members to develop their methods of work. We
                    are also interested in improving working methods by
                    periodically taking an external look, to develop more
                    professional and efficient work strategies.
                  </p>
                ) : (
                  <p>
                    {" "}
                    نحن نسعى دائماً لتطوير مهارات جميع أفراد الفريق من خلال
                    توفير بيئة عمل مناسبة، ونشجع أعضاء الفريق على تطوير أساليبهم
                    في العمل. نهتم أيضًا بتحسين طرق العمل من خلال إلقاء نظرة
                    خارجية بشكل دوري، لوضع استراتيجيات عمل أكثر احترافية وكفاءة.
                  </p>
                )}
              </div>
              <div className={style.one}>
                <h6>{direction === "EN" ? "superiority" : "التفوق"}</h6>
                {direction === "EN" ? (
                  <p>
                    Our work team's motto focuses on excellence and
                    professionalism, as excellence is a solid pillar based on
                    experience, professionalism, and one team spirit. This
                    commitment to excellence appears as a distinctive feature in
                    our history, as we always strive to achieve the desired
                    goals with excellence and excellence.
                  </p>
                ) : (
                  <p>
                    شعار فريق العملنا يركز على التفوق والمهنية، حيث يعتبر التفوق
                    دعامة راسخة تقوم على الخبرة والاحترافية وروح الفريق الواحد.
                    يظهر هذا الالتزام بالتفوق كسمة مميزة في تاريخنا، حيث نسعى
                    دومًا لتحقيق الأهداف المنشودة بتفوق وتميز.
                  </p>
                )}
              </div>
              <div className={style.one}>
                <h6>{direction === "EN" ? "Professionalism" : "ألاحترافية"}</h6>
                {direction === "EN" ? (
                  <p>
                    In our work, professionalism coincides with the great trust
                    that our clients give us. This inspires us to provide
                    services at a high level of professionalism and
                    professionalism, which exceed our customers’ expectations
                    and effectively meet their aspirations.
                  </p>
                ) : (
                  <p>
                    في عملنا، تتلاقى الاحترافية مع الثقة الكبيرة التي يمنحها لنا
                    عملاؤنا. هذا يلهمنا لتقديم خدمات على مستوى عالٍ من
                    الاحترافية والمهنية، تتجاوز توقعات عملائنا وتلبي تطلعاتهم
                    بشكل فعّال.
                  </p>
                )}
              </div>
              <div className={style.one}>
                <h6>{direction === "EN" ? "trust" : "الثقة "}</h6>
                {direction === "EN" ? (
                  <p>
                    We consider trust essential to enhance our credibility with
                    our clients and build long-term relationships.
                  </p>
                ) : (
                  <p>
                    نعتبر الثقة أساسية لتعزيز مصداقيتنا لدى عملائنا ولبناء
                    علاقات طويلة الأمد.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <KamalOsmanLife />
        <SalwaHessainLife />
      </div>

      <Footer />
    </>
  );
}

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia perspiciatis repellendus fuga labore, aspernatur provident? Excepturi voluptatum quisquam quae.
</p>



