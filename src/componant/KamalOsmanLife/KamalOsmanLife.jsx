import React from 'react'
import style from './KamalOsmanLife.module.css'
import { useUser } from '../../context/Context';
import one from '../../image/WhatsApp Image 2024-04-29 at 11.24.17_901a14b9.jpg'
export default function KamalOsmanLife() {
    const {direction} =  useUser()
    return (
      <>
        <div className={ style.KamalOsmanLife }>
          <img src={one} alt="kamalosman" />
          <div className={style.text}>
            <h4>
              {direction === "EN"
                ? "Biography of Kamal Othman"
                : "السيرة الذاتية كمال عثمان"}
            </h4>
            {direction === "EN" ? (
              <p>
                Egyptian businessman Kamal Othman was born in 1963 in Assiut,
                Egypt, and was raised as a pioneer in the world of business
                entrepreneurship. He earned a bachelor's degree in physics from
                Assiut University in 1986, and began his career as a scientific
                assistant at Al-Azhar University.
              </p>
            ) : (
              <p>
                رجل الأعمال المصري كمال عثمان ولد في عام ١٩٦٣ في أسيوط، مصر،
                وتربى كرائد في عالم ريادة الأعمال التجارية. حاز على درجة
                البكالوريوس في الفيزياء من جامعة أسيوط في عام ١٩٨٦، وبدأ مسيرته
                المهنية كمساعد علمي في جامعة الأزهر.
              </p>
            )}
          </div>
        </div>
        <div className={style.KamalOsmanLife1}>
          <div className={style.text}>
            {direction === "EN" ? (
              <p>
                In 1994, he established his own empire and launched Al-Israa
                Company for Oils, Greases, Petroleum Products and
                Transportation. The company specialized in distributing
                automobile oils, and became part of the Kamal Othman Group,
                where it succeeded in achieving wide fame at the local and
                regional levels.
              </p>
            ) : (
              <p>
                في ١٩٩٤، أسس إمبراطوريته الخاصة وأطلق شركة الإسراء للزيوت
                والشحوم والمواد البترولية والنقل. تخصصت الشركة في توزيع زيوت
                السيارات، وأصبحت جزءًا من كمال عثمان جروب، حيث نجحت في تحقيق
                شهرة واسعة على المستوى المحلي والإقليمي.
              </p>
            )}
            {direction === "EN" ? (
              <p>
                The late businessman passed away on September 28, 2012, leaving
                his business legacy to his five children: Mahmoud, Hussam,
                Muhammad, Israa, and Hasnaa, accompanied by their mother,
                Professor Salwa Hussein. The family continued to manage and
                develop the institution, maintaining the path of success and
                progress to achieve its goals and aspirations.
              </p>
            ) : (
              <p>
                رجل الأعمال الراحل وافته المنية في ٢٨ سبتمبر ٢٠١٢، وترك إرثه
                التجاري لأبنائه الخمسة: محمود وحسام ومحمد واسراء وحسناء، برفقة
                والدتهم الاستاذة سلوى حسين. استمرت العائلة في إدارة وتطوير
                المؤسسة، حافظة على مسيرة النجاح والتقدم لتحقيق أهدافها
                وتطلعاتها.
              </p>
            )}
          </div>
        </div>
      </>
    );
}
