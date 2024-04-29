import React, { useState } from 'react'
import style from '../../componantStyle/AddAdvertisements.module.css';
import { useUser } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import NavbarAdmin from '../../componant/NavbarAdmin';
import { Helmet } from 'react-helmet-async';
export default function AddAdvertisements() {
  const { direction } = useUser();
    const navigate = useNavigate();
    const [ addAdver, setAddAdver ] = useState({text:"text"});
    const [ errorListSlider, setErrorListSlider ] = useState( null );
  ////////////function handleChange///////////////
  function handleChange(e) {
    setAddAdver((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    }
  /////////handle image////////////////
  const [imageChange, setImageChange] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorBackAdvir, setErrorBackAdvir] = useState(null);
  function handleChangeImage(e) {
    setImageChange(e.target.files[0]);
    }
    ////////////valid Joi///////////////
       function validationSliderDashboard() {
         let schema = Joi.object({
           text: Joi.string().required(),
           text_ar: Joi.string().allow(""),
           text_en: Joi.string().allow(""),
           link: Joi.string()
             .required()
             .messages({
               "string.empty": `${
                 direction === "EN" ? "link is required" : "اللينك مطلوب"
               }`,
               "any.required": `${
                 direction === "EN" ? "link is required" : "اللينك مطلوب"
               }`,
             }),
           valid_from: Joi.date()
             .required()
             .messages({
               "date.empty": `${
                 direction === "EN"
                   ? "start date is required"
                   : "تاريج البداية مطلوب"
               }`,
               "any.required": `${
                 direction === "EN"
                   ? "start date is required"
                   : "تاريج البداية مطلوب"
               }`,
             }),
           valid_to: Joi.date()
             .required()
             .messages({
               "date.empty": `${
                 direction === "EN"
                   ? "end date is required"
                   : "تاريج الانتهاء مطلوب"
               }`,
               "any.required": `${
                 direction === "EN"
                   ? "end date is required"
                   : "تاريج الانتهاء مطلوب"
               }`,
             }),
         });
         return schema.validate(addAdver, { abortEarly: false });
    }
    /////////////////function submit ///////////////////
      async function handleSubmit(e) {
        e.preventDefault();
        let responseValidateSlider = validationSliderDashboard();
        if (responseValidateSlider.error) {
          setErrorListSlider([responseValidateSlider.error.details]);
        } else {
          setErrorListSlider(null);
          const formData = new FormData();
          formData.append("text", addAdver.text);
          formData.append("text_en", addAdver.text_en); 
            formData.append( "text_ar", addAdver.text_ar );
            formData.append( "link", addAdver.link );
            formData.append("valid_from", addAdver.valid_from);
             formData.append("valid_to", addAdver.valid_to);
            formData.append("image", imageChange);
          try {
            setLoading(true);
            const response = await fetch(
              "https://kog.pythonanywhere.com/api/v1/home/sliders/",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "token_access"
                  )}`,
                },
                body: formData,
              }
            );
            const result = await response.json();
            console.log(result);
            setLoading(false);

            if (result.created_at) {
              navigate("/advertisements");
            } else {
              setErrorBackAdvir(result);
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
  return (
    <>
      <Helmet>
        <title>Dashboard/addAdvertisements</title>
        <meta
          name="description"
          content="Dashboard/addAdvertisements for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.AddAdvir}>
        <form className={style.form}>
          {errorListSlider &&
            errorListSlider.map((error, index) => (
              <p key={index} className="alert alert-secondary">
                {error[index].message}
              </p>
            ))}
          <div className={style.headAddAdvir}>
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
              className="btn btn-secondary"
              onClick={() => {
                navigate("/advertisements");
              }}
            >
              {direction === "EN" ? "Back" : "   رجوع"}
            </button>
          </div>
          <div className={style.colladdAdvir}>
            <div className={style.inp}>
              <label htmlFor="image">
                {" "}
                {direction === "EN" ? "Enter image" : "ادخل صورة الاعلان "}{" "}
              </label>
              <br />
              <input
                type="file"
                name="image"
                id="image"
                accept="*/*"
                onChange={handleChangeImage}
                required
              />
              {errorBackAdvir?.image && (
                <p className="error">
                  {direction === "EN" ? "image is required" : "الصورة مطلوبة"}
                </p> /*{errorBackAdvir?.image}*/
              )}
            </div>
            {/* <div className={style.inp}>
            <label htmlFor="text">اسم الخدمة باللغة العربية</label>
            <br />
            <input
              type="text"
              name="title_ar"
              id="title_ar"
              onChange={handleChange}
            />
          </div> */}
            <div className={style.inp}>
              <label htmlFor="text_ar">
                {direction === "EN"
                  ? "Enter text Arabic"
                  : "ادخل النص باللغة العربية"}{" "}
              </label>
              <br />
              <input
                type="text"
                name="text_ar"
                id="text_ar"
                onChange={handleChange}
              />
            </div>
            <div className={style.inp}>
              <label htmlFor="text_en">
                {" "}
                {direction === "EN"
                  ? "Enter text English"
                  : "اخل النص باللغة الانجليزية"}{" "}
              </label>
              <br />
              <input
                type="text"
                name="text_en"
                id="text_en"
                onChange={handleChange}
              />
            </div>
            <div className={style.inp}>
              <label htmlFor="link">
                {" "}
                {direction === "EN" ? "Enter link" : "ادخل اللينك"}
              </label>
              <br />
              <input
                type="text"
                name="link"
                id="link"
                onChange={handleChange}
              />
              {errorBackAdvir?.link && (
                <p className="error">{errorBackAdvir?.link}</p>
              )}
            </div>
            <div className={style.inp}>
              <label htmlFor="valid_from">
                {" "}
                {direction === "EN" ? "valid_from" : "صالح من تاريخ"}
              </label>
              <br />
              <input
                type="date"
                name="valid_from"
                id="valid_from"
                onChange={handleChange}
              />
              {errorBackAdvir?.valid_from && (
                <p className="error">{errorBackAdvir?.valid_from}</p>
              )}
            </div>
            <div className={style.inp}>
              <label htmlFor="valid_to">
                {" "}
                {direction === "EN" ? "valid_to" : "صالح الي تاريخ"}
              </label>
              <br />
              <input
                type="date"
                name="valid_to"
                id="valid_to"
                onChange={handleChange}
              />
              {errorBackAdvir?.valid_to && (
                <p className="error">{errorBackAdvir?.valid_to}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
