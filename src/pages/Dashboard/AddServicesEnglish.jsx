import React, { useState } from "react";
import style from "../../componantStyle/AddServicesEnglish.module.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useUser } from "../../context/Context";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { Helmet } from "react-helmet-async";
export default function AddServicesEnglish() {
  const navigate = useNavigate();
  const [servicesEnglish, setServicesEnglish] = useState({
    title: "title",
    description: "description",
  } );
  /////////handle image////////////////
  const [imageChange, setImageChange] = useState("");
  function handleChangeImage(e) {
    setImageChange(e.target.files[0]);
  }
  const [errorListServices, setErrorListServices] = useState(null);
  const [errorBackServices, setErrorBackServices] = useState(null);
  const [ loadingServices, setLoadingServices ] = useState( false );
  const {direction} = useUser()
  ////////////function handleChange///////////////
  function handleChange(e) {
    setServicesEnglish((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function validationRegister() {
    let schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),

      title_ar: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "service name Arabic is required"
              : " اسم الخدمة باللغة العربية مطلوب"
          }`,

          "any.required": `${
            direction === "EN"
              ? "service name Arabic is required"
              : " اسم الخدمة باللغة العربية مطلوب"
          }`,
        }),
      title_en: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "service name English is required"
              : " اسم الخدمة باللغة الانجليزية مطلوب"
          }`,

          "any.required": `${
            direction === "EN"
              ? "service name English is required"
              : " اسم الخدمة باللغة الانجليزية مطلوب"
          }`,
        }),
      description_ar: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "service description Arabic is required"
              : "    وصف الخدمة باللغة العربية مطلوب"
          }`,

          "any.required": `${
            direction === "EN"
              ? "service description Arabic is required"
              : "    وصف الخدمة باللغة العربية مطلوب"
          }`,
        }),
      description_en: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "service description English is required"
              : "    وصف الخدمة باللغة الانجليزية مطلوب"
          }`,

          "any.required": `${
            direction === "EN"
              ? "service description English is required"
              : "    وصف الخدمة باللغة الانجليزية مطلوب"
          }`,
        }),
    });
    return schema.validate(servicesEnglish, { abortEarly: false });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let responseValidateServices = validationRegister();
    if (responseValidateServices.error) {
      setErrorListServices([responseValidateServices.error.details]);
    } else {
      setErrorListServices(null);
      const formData = new FormData();
      formData.append("title", servicesEnglish.title);
      formData.append("title_en", servicesEnglish.title_en);
      formData.append("description", servicesEnglish.description);
      formData.append( "description_en", servicesEnglish.description_en );
      formData.append("description_ar", servicesEnglish.description_ar);
      formData.append( "title_ar", servicesEnglish.title_ar );
      formData.append("image", imageChange);
      try {
        setLoadingServices(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/services/",
          {
            method: "POST",
            headers: {
             
              Authorization: `Bearer ${localStorage.getItem("token_access")}`,
            },
            body: formData,
          }
        );
        const result = await response.json();
        console.log(result);
        setLoadingServices(false);

        if (result.created_at) {
          navigate("/servies");
        } else {
          setErrorBackServices(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/addServices</title>
        <meta name="description" content="Dashboard/services for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <form className={style.AddServices} encType="multipart/form-data">
        {errorListServices &&
          errorListServices.map((error, index) => (
            <p key={index} className="alert alert-secondary">
              {error[index].message}
            </p>
          ))}
        <div className={style.headAddServices}>
          <button className="btn btn-secondary" onClick={handleSubmit}>
            {loadingServices ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <> {direction === "EN" ? "Add Service" : "اضافة خدمة"}</>
            )}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            {direction === "EN" ? "Back" : " رجوع"}
          </button>
        </div>
        <div className={style.inp}>
          <label htmlFor="image">
            {" "}
            {direction === "EN" ? "choose image" : "اختر صورة"}
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
          {errorBackServices?.image && (
            <p className="error">
              {direction === "EN" ? "image is required" : "الصورة مطلوبة"}
            </p> /*{errorBackServices?.image}*/
          )}
        </div>
        <div className={style.inp}>
          <label htmlFor="title_ar">
            {" "}
            {direction === "EN"
              ? "name services Arabic"
              : "اسم الخدمة باللغة العربية"}
          </label>
          <br />
          <input
            type="text"
            name="title_ar"
            id="title_ar"
            onChange={handleChange}
          />
        </div>
        <div className={style.inp}>
          <label htmlFor="title_en">
            {direction === "EN"
              ? "name services English"
              : "اسم الخدمة باللغة الانجليزية"}{" "}
          </label>
          <br />
          <input
            type="text"
            name="title_en"
            id="title_en"
            onChange={handleChange}
          />
        </div>
        <div className={style.inptextarea}>
          <label htmlFor="description_ar">
            {direction === "EN"
              ? "description service Arabic"
              : "وصف الخدمة باللغة العربية"}{" "}
          </label>
          <br />
          <textarea
            name="description_ar"
            id="description_ar"
            className={style.textarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={style.inptextarea}>
          <label htmlFor="description_en">
            {direction === "EN"
              ? "description service English"
              : "وصف الخدمة باللغة الانجليزية"}{" "}
          </label>
          <br />
          <textarea
            name="description_en"
            id="description_en"
            className={style.textarea}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </>
  );
}
