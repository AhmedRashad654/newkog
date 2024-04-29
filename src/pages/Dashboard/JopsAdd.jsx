import React, { useState } from "react";
import style from "../../componantStyle/JopsAdd.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/Context";
import Joi from "joi";
import NavbarAdmin from '../../componant/NavbarAdmin'
import { Helmet } from "react-helmet-async";
export default function JopsAdd() {
  const navigate = useNavigate();
  const { direction } = useUser();
  const [ jopAdd, setJopAdd ] = useState( {} );
   const [errorListDashboard, setErrorListDashboard] = useState(null);
   const [loading, setLoading] = useState(false);
   const [errorDashboard, setErrorDashboard] = useState(null);
   function handleChange(e) {
     setJopAdd((prev) => ({
       ...prev,
       [e.target.name]: e.target.value,
     }));
   }
   function validationJopAddDashboard() {
     let schema = Joi.object({
       title: Joi.string()
         .required()
         .messages({
           "string.empty": `${
             direction === "EN" ? "Name jop is required" : "اسم الوظيفة مطلوب"
           }`,
           "any.required": `${
             direction === "EN" ? "Name jop is required" : "اسم الوظيفة مطلوب"
           }`,
         }),
       valid_to: Joi.date()
         .required()
         .messages({
           "string.empty": `${
             direction === "EN" ? "date jop is required" : " تاريخ انتهاء الوظيفة مطلوب"
           }`,
           "any.required": `${
             direction === "EN" ? "date jop is required" : "تاريخ انتهاء الوظيفة مطلوب"
           }`,
         }),
     });
     return schema.validate(jopAdd, { abortEarly: false });
   }
   async function handlesubmit(e) {
     e.preventDefault();
     let responseValidateJopAdd = validationJopAddDashboard();
     if (responseValidateJopAdd.error) {
       setErrorListDashboard([responseValidateJopAdd.error.details]);
     } else {
       setErrorListDashboard(null);
       try {
         setLoading(true);
         const response = await fetch(
           "https://kog.pythonanywhere.com/api/v1/home/forms/",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token_access")}`,
             },
             body: JSON.stringify(jopAdd),
           }
         );
         const result = await response.json();
         setLoading(false);
         if (result.created_at) {
           navigate("/jops");
         } else {
           setErrorDashboard(result);
         }
       } catch (error) {
         console.error(error);
       }
     }
   }

  return (
    <>
      <Helmet>
        <title>Dashboard/addJops</title>
        <meta name="description" content="Dashboard/addJops for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.allSerAnm}>
        <form className={style.AddServices}>
          {errorListDashboard &&
            errorListDashboard.map((error, index) => (
              <p key={index} className="alert alert-secondary">
                {error[index].message}
              </p>
            ))}
          <div className={style.headAddJop}>
            <button className="btn btn-secondary" onClick={handlesubmit}>
              {loading ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <>{direction === "EN" ? "Add Jop" : "أضافة وظيفة"} </>
              )}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                navigate("/jops");
              }}
            >
              {direction === "EN" ? "Back" : "   رجوع"}
            </button>
          </div>
          <div className={style.inp}>
            <label htmlFor="title">
              {" "}
              {direction === "EN" ? "Enter Jop Name" : "ادخل اسم الوظيفة"}
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
            />
            {errorDashboard?.title && (
              <p className="error">{errorDashboard?.title}</p>
            )}
          </div>
          <div className={style.inp}>
            <label htmlFor="valid_to">
              {" "}
              {direction === "EN" ? "valie_to" : "متاحة الي"}
            </label>
            <br />
            <input
              type="date"
              name="valid_to"
              id="valid_to"
              onChange={handleChange}
            />
            {errorDashboard?.valid_to && (
              <p className="error">{errorDashboard?.valid_to}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
