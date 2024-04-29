import React, { useState } from "react";
import style from "../../componantStyle/TextQuestions.module.css";
import { useUser } from "../../context/Context";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
export default function MultiQuestions() {
  const { direction } = useUser();
  const [question, setQuestion] = useState({
    type: "radio",
    body: "body",
    form: localStorage.getItem("noFormFirst"),
  });
  const [errorListDashboard, setErrorListDashboard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorDashboard, setErrorDashboard] = useState(null);

  const navigate = useNavigate();
  function handleChange(e) {
    setQuestion((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function validationTextAddDashboard() {
    let schema = Joi.object({
      type: Joi.string().required(),
      body: Joi.string().required(),
      body_en: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "question English is required"
              : "السؤال باللغة الانجليزية مطلوب"
          }`,
          "any.required": `${
            direction === "EN"
              ? "question English is required"
              : "السؤال باللغة الانجليزية مطلوب"
          }`,
        }),
      body_ar: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "question Arabic is required"
              : "السؤال باللغة العربية مطلوب"
          }`,
          "any.required": `${
            direction === "EN"
              ? "question Arabic is required"
              : "السؤال باللغة العربية مطلوب"
          }`,
        }),
      form: Joi.number()
        .required()
        .messages({
          "number.empty": `${
            direction === "EN" ? "job number is required" : "رقم الوظيفة مطلوب"
          }`,
          "any.required": `${
            direction === "EN" ? "job number is required" : "رقم الوظيفة مطلوب"
          }`,
        }),
    });
    return schema.validate(question, { abortEarly: false });
  }
  ////////////function submit/////////////
  async function handlesubmit(e) {
    e.preventDefault();
    let responseValidateTextAdd = validationTextAddDashboard();
    if (responseValidateTextAdd.error) {
      setErrorListDashboard([responseValidateTextAdd.error.details]);
    } else {
      setErrorListDashboard(null);
      try {
        //  setAddSuccess( false );
        setLoading(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/questions/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token_access")}`,
            },
            body: JSON.stringify(question),
          }
        );
        const result = await response.json();
        setLoading(false);
        if (result.created_at) {
          //  setAddSuccess(true)
          navigate("/jops/displayquestionform");
        } else {
          setErrorDashboard(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <form className={style.TextQuestions}>
      {errorListDashboard &&
        errorListDashboard.map((error, index) => (
          <p key={index} className="alert alert-secondary">
            {error[index].message}
          </p>
        ))}
  
      <div className={style.headForm}>
        <button className="btn btn-secondary" onClick={handlesubmit}>
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <>{direction === "EN" ? "Add Question" : "أضافة سؤال"} </>
          )}
        </button>
      </div>

      {errorDashboard?.form && (
        <p className="error">{errorDashboard?.form}</p>
      )}
      <label htmlFor="body_ar">
        {" "}
        {direction === "EN"
          ? "Enter Question Arabic"
          : "اكتب السؤال باللغة العربية"}{" "}
      </label>
      <input type="text" name="body_ar" id="body_ar" onChange={handleChange} />
      <label htmlFor="body_en">
        {" "}
        {direction === "EN"
          ? "Enter Question English"
          : "اكتب السؤال باللغة الانجليزية"}{" "}
      </label>
      <input type="text" name="body_en" id="body_en" onChange={handleChange} />
    </form>
  );
}
