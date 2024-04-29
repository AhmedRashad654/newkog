import React, { useEffect, useState } from 'react'
import style from "../../componantStyle/Advertisements.module.css"
import { useUser } from '../../context/Context';
import { NavLink } from 'react-router-dom';
import NavbarAdmin from '../../componant/NavbarAdmin';
import { Helmet } from 'react-helmet-async';
export default function Advertisements() {
  const { direction } = useUser();
  const { getAllSlider, allSlider } = useUser();
  const [loading, setLoading] = useState(false);
  const [deletingID, setDeletingID] = useState(null);
  const [loadingDeactive, setloadingDeactive] = useState(false);
  const [ deActiveID, setDeActiveID ] = useState( null );
  const [ loadingActive, setloadingActive ] = useState( false );
  const [ activeID, setActiveID ] = useState( null );
  useEffect(() => {
    getAllSlider();
  }, [getAllSlider]);
  ////////////function delete slider/////////////
  async function deleteSlider(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/sliders/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        }
      );
      await request.json();
      setLoading(false);
      setDeletingID(null);
      getAllSlider();
    } catch (error) {
      console.log(error);
    }
  }
  //////////////function deactive slider///////////////
  async function deactiveSlider(id) {
    try {
      setloadingDeactive(true);
      setDeActiveID(id);
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/sliders/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
          body: JSON.stringify({ active: false }),
        }
      );
      let response = await request.json();
      setloadingDeactive(false);
      setDeActiveID(null);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  ///////////active user/////////////////////
  async function activeSlider(id) {
    try {
      setloadingActive(true);
      setActiveID(id);
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/sliders/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
          body: JSON.stringify({ active: true }),
        }
      );
      let response = await request.json();
      setloadingActive(false);
      setActiveID(null);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/advertisements</title>
        <meta
          name="description"
          content="Dashboard/advertisements for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.Advertisements}>
        <div className={style.headAllAdvertisements}>
          <NavLink to="/addadvertisements" className="btn btn-success">
            {direction === "EN" ? "Add New" : "أضافة جديد"}
          </NavLink>
          {/* <input
          type="text"
          placeholder="بحث باستخدام الاسم"
          className="form-control"
          // onChange={searchByName}
        /> */}
        </div>
        <div className={style.collAdvertisements}>
          {allSlider.map((slider, index) => (
            <div className={style.AdvertisementsDiv} key={index}>
              <img src={slider.image} alt="" />
              <p>
                {slider.text_en !== "undefined" &&
                slider.text_ar !== "undefined"
                  ? direction === "EN"
                    ? slider.text_en
                    : slider.text_ar
                  : ""}
              </p>

              <div className={style.underbottom}>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSlider(slider.id)}
                >
                  {loading && deletingID === slider.id ? (
                    <div
                      className="spinner-border text-secondary"
                      role="status"
                    >
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <>{direction === "EN" ? "delete" : "حذف"}</>
                  )}
                </button>

                {slider.active === true && (
                  <button
                    className="btn btn-warning"
                    onClick={() => deactiveSlider(slider.id)}
                  >
                    {loadingDeactive && deActiveID === slider.id ? (
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      <>{direction === "EN" ? "deactive" : "تعطيل"}</>
                    )}
                  </button>
                )}
                {slider.active === false && (
                  <button
                    className="btn btn-success"
                    onClick={() => activeSlider(slider.id)}
                  >
                    {loadingActive && activeID === slider.id ? (
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      <>{direction === "EN" ? "active" : "تفعيل"}</>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
