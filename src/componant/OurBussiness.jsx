import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../componantStyle/OurBussiness.css";
import Navbar from "../componant/Navbar";
import Footer from "../componant/Footer";

import { Helmet } from "react-helmet-async";
import Founders from "./Founders/Founders";
import YearsOne from "./Years/YearsOne";
import { useUser } from "../context/Context";
import YearsTwo from "./Years/YearsTwo";
import one from "../image/العناية بالسياره-01.png";
import two from "../image/SALES-01.png";
import three from "../image/our team-01-01.png";
import four from "../image/our service-01.png";
import six from "../image/خدمات الشركات-01.png";
import eight from "../image/البيع الاليكتروني-01.png";
import nine from "../image/WhatsApp Image 2024-04-29 at 11.24.17_901a14b9.jpg";
import FirstSectionInOurBusiness from "./FirstSectionInOurBusiness";
export default function OurBussiness() {
const {direction} = useUser()
 
  return (
    <>
      <Helmet>
        <title>Our Businesses</title>
        <meta
          name="description"
          content="Our business page for Kamal Othman Group’s website to display the company’s work"
        />
      </Helmet>
      <Navbar prop="none" />
      <FirstSectionInOurBusiness/>
    
      <Founders />
      <YearsOne
        img={one}
        year="2024"
        text={
          direction === "EN"
            ? "Allocating KOG AUTO SERVICE as the first affiliated car service center, which creates the company's position in the car service sector and represents a sufficient step towards expansion to new services for the business."
            : "تخصيص KOG AUTO SERVICE كأول مركز خدمة السيارات تابع للمجموعة، مما ينتج مكانة الشركة في قطاع خدمات السيارات ويمثل خطوة كافية نحو التوسع لخدمات جديدة للعمل."
        }
      />
      <YearsTwo
        img={two}
        year="2023"
        text={
          direction === "EN"
            ? "The death of Salwa Hussein and the transfer of company management to Mahmoud Kamal."
            : "وفاة سلوى حسين وانتقال إدارة الشركة إلى محمود كمال."
        }
      />
      <YearsOne
        img={three}
        year="2020"
        text={
          direction === "EN"
            ? "Restructuring the company and changing its name to Kamal Othman Group (KOG) to expand the business scope and strengthen the identity."
            : "إعادة هيكلة الشركة وتغيير اسمها إلى مجموعة كمال عثمان (KOG) لتوسيع نطاق الأعمال وتعزيز الهوية."
        }
      />
      <YearsTwo
        img={four}
        year="2013"
        text={
          direction === "EN"
            ? "Mrs. Salwa Hussein took over the leadership of the company after the death of her husband, Kamal Othman"
            : "تولت السيدة سلوى حسين قيادة الشركة بعد وفاة زوجها كمال عثمان"
        }
      />
      <YearsOne
        img={two}
        year="2012"
        text={
          direction === "EN"
            ? "RThe death of the company's founder, Kamal Othman, and the management of the company is transferred to his sons and daughters."
            : "وفاة مؤسس الشركة كمال عثمان، وانتقال إدارة الشركة إلى أبنائه وبناته."
        }
      />
      <YearsTwo
        img={six}
        year="2010"
        text={
          direction === "EN"
            ? "MAl-Israa Company achieved a prominent position in the oils distribution market, occupying first place in the Upper Egypt region."
            : "تحقيق شركة الإسراء لمكانة مرموقة في سوق توزيع الزيوت، واستحواذها على المرتبة الأولى في منطقة صعيد مصر."
        }
      />
      <YearsOne
        img={two}
        year="1995"
        text={
          direction === "EN"
            ? "Signing partnerships with international companies such as Mobil, Shell, and Total to distribute their products in Egypt."
            : "توقيع شراكات مع شركات عالمية مثل موبيل وشل وتوتال لتوزيع منتجاتها في مصر."
        }
      />
      <YearsTwo
        img={eight}
        year="1994"
        text={
          direction === "EN"
            ? "Establishment of Al-Israa Company for Trade and Distribution in Egypt by Kamal Othman."
            : "  تأسيس شركة الإسراء للتجارة والتوزيع في مصر بواسطة كمال عثمان."
        }
      />
      <YearsOne
        img={nine}
        year="1986"
        text={
          direction === "EN"
            ? "Kamal Othman graduated from the Faculty of Science at Assiut University."
            : "تخرج كمال عثمان من كلية العلوم بجامعة أسيوط."
        }
      />
      <Footer />
    </>
  );
}
