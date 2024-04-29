import React, { useState } from 'react'
import style from '../../componantStyle/AddPartner.module.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/Context';
import NavbarAdmin from '../../componant/NavbarAdmin';
import { Helmet } from 'react-helmet-async';
export default function AddPartner() {
      /////////handle image////////////////
    const [ imageChange, setImageChange ] = useState( "" );
    const [ errorBackPartner, setErrorBackPartner ] = useState( null )
    const [ loading, setLoading ] = useState( false );
  const navigate = useNavigate();
   const {direction}= useUser()
  function handleChangeImage(e) {
    setImageChange(e.target.files[0]);
    }
    ///////////function Add Partner///////////////
    async function handleSubmit(e) {
      e.preventDefault();
        const formData = new FormData();
        formData.append("image", imageChange);
        try {
          setLoading(true);
          const response = await fetch(
            "https://kog.pythonanywhere.com/api/v1/home/partners/",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token_access")}`,
              },
              body: formData,
            }
          );
          const result = await response.json();
          setLoading(false);

          if (result.created_at) {
              navigate( "/partner" );
              console.log( result );
          } else {
            setErrorBackPartner(result);
          }
        } catch (error) {
          console.error(error);
        }
      
    }
  return (
    <>
      <Helmet>
        <title>Dashboard/addPartner</title>
        <meta name="description" content="Dashboard/addPartner for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.AddPartner}>
        <form className={style.form}>
          <div className={style.headAddPartner}>
            <button className="btn btn-secondary" onClick={handleSubmit}>
              {loading ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <>{direction === "EN" ? "Add" : "اضافة"}</>
              )}
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                navigate("/partner");
              }}
            >
              {direction === "EN" ? "Back" : "   رجوع"}
            </button>
          </div>
          <div className={style.colladdPartner}>
            <div className={style.inp}>
              <label htmlFor="image">
                {" "}
                {direction === "EN" ? "Enter Partner" : "ادخل البارتنر"}{" "}
              </label>
              <br />
              <input
                type="file"
                name="image"
                id="image"
                accept="*/*"
                onChange={handleChangeImage}
                required
                className='form-control'
              />
              {errorBackPartner?.image && (
                <p className="error">
                  {direction === "EN" ? "image is required" : "الصورة مطلوبة"}
                </p> /*{errorBackPartner?.image}*/
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
