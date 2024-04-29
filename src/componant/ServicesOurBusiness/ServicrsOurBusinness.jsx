import React from 'react'
import { useUser } from '../../context/Context';
import style from './ServicesOurBusinness.module.css'
export default function ServicrsOurBusinness() {
    const {direction,services} =  useUser()
    return (
      <>
        <div className={style.allSerices} id="services">
          <div className={style.allServicesHeadoll}>
            <div className={style.ho}>
              <h4>{direction === "EN" ? "services" : "الخدمات"}</h4>
            </div>
            <div className={style.services}>
              {services.map((servic, index) => (
                <div className={style.one} key={index}>
                  <div className={style.contimg}>
                    <img src={servic.image} alt="imge" />
                  </div>

                  <h4 className="h6">
                    {direction === "EN" ? servic.title_en : servic.title_ar}
                  </h4>
                  <p>
                    {direction === "EN"
                      ? servic.description_en
                      : servic.description_ar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}
