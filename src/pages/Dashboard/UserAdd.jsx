import React, { useState } from "react";
import style from "../../componantStyle/AddUser.module.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useUser } from "../../context/Context";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { Helmet } from "react-helmet-async";

export default function UserAdd() {
  const navigate = useNavigate();
  const [addUser, setAddUser] = useState({ gender: "N", role: "user" });
  const [errorListDashboard, setErrorListDashboard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorDashboard, setErrorDashboard] = useState(null);
    const [nationalId, setNationalId] = useState(false);
  const { direction } = useUser();
  function handleChange(e) {
    setAddUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  /////////handle image////////////////
  const [imageChange, setImageChange] = useState("");
  function handleChangeImage(e) {
    setImageChange(e.target.files[0]);
  }
  function validationRegisterDashboard() {
    let schema = Joi.object({
      full_name: Joi.string()
        .max(240)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "Full name is required" : "الاسم مطلوب"
          }`,
          "string.max": `${
            direction === "EN"
              ? "Full name should not exceed 240 characters"
              : "الاسم يجب الا يتخطي 240 حرف"
          }`,
          "any.required": `${
            direction === "EN" ? "Full name is required" : "الاسم مطلوب"
          }`,
        }),
      email_address: Joi.string()
        .email({ tlds: ["com", "not", "org"] })
        .max(240)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "Email address is required" : "الايميل مطلوب"
          }`,
          "string.email": `${
            direction === "EN" ? "Invalid email format" : "الايميل غير صالح"
          }`,
          "string.max": `${
            direction === "EN"
              ? "Email address should not exceed 240 characters"
              : "الايميل يجب الا يتخطي 240 حرف"
          }`,
          "any.required": `${
            direction === "EN" ? "Email address is required" : "الايميل مطلوب"
          }`,
        }),
      city: Joi.string()
        .max(240)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "city address is required" : " المدينة مطلوبة"
          }`,
          "string.max": `${
            direction === "EN"
              ? "city Name should not exceed 240 characters"
              : "اسم المدينة يجب الا يتخطي 240 حرف"
          }`,
          "any.required": `${
            direction === "EN" ? "city address is required" : " المدينة مطلوبة"
          }`,
        }),
      mobile: Joi.string()
        .min(10)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "phone Number is required" : "رقم الهاتف مطلوب"
          }`,
          "string.min": `${
            direction === "EN"
              ? "phone Number should not be less on 10"
              : "رقم الهاتف يجب الا يقل عن 10 ارقام"
          }`,
          "any.required": `${
            direction === "EN" ? "phone Number is required" : "رقم الهاتف مطلوب"
          }`,
        }),
      whatsapp: Joi.string()
        .min(10)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "whatsApp is required" : "رقم الواتس اب  مطلوب"
          }`,
          "string.min": `${
            direction === "EN"
              ? "whatsApp should not be less on 10"
              : "رقم الواتس اب يجب الا يقل عن 10 ارقام"
          }`,
          "any.required": `${
            direction === "EN" ? "whatsApp is required" : "رقم الواتس اب  مطلوب"
          }`,
        }),
      password: Joi.string()
        .min(8)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN" ? "Password is required" : "كلمة المرور مطلوبة"
          }`,
          "string.min": `${
            direction === "EN"
              ? "Password should be at least 8 characters long"
              : "كلمة المرور يجب الا تقل عن 8"
          }`,
          "any.required": `${
            direction === "EN" ? "Password is required" : "كلمة المرور مطلوبة"
          }`,
        }),
      password2: Joi.string()
        .min(8)
        .valid(Joi.ref("password"))
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "Confirm Password is required"
              : "تاكيد كلمة المرور مطلوبة"
          }`,
          "any.only": `${
            direction === "EN"
              ? "Confirm password must be the same as your password"
              : "تاكيد كلمة المرور يجب ان يكون نفس كلمة المرور"
          }`,
          "any.required": `${
            direction === "EN"
              ? "Confirm Password is required"
              : "تاكيد كلمة المرور مطلوبة"
          }`,
        }),
      national_id: Joi.string()
        .length(14)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "  national_id is required"
              : "   الرقم القومي مطلوب"
          }`,
          "string.length": `${
            direction === "EN"
              ? "  national_id should be contion from 14 number"
              : "الرقم القومي يجب ان يتكون من 14 رقم"
          }`,
          "any.required": `${
            direction === "EN"
              ? "  national_id is required"
              : "   الرقم القومي مطلوب"
          }`,
        }),
      gender: Joi.string().valid("M", "F", "N"),
      role: Joi.string().required(),
    });
    return schema.validate(addUser, { abortEarly: false });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    setNationalId(false);
    let responseValidateRegister = validationRegisterDashboard();
    if (responseValidateRegister.error) {
      setErrorListDashboard([responseValidateRegister.error.details]);
    } else {
      setErrorListDashboard(null);
      const formData = new FormData();
      formData.append("full_name", addUser.full_name);
      formData.append("email_address", addUser.email_address);
      formData.append("city", addUser.city);
      formData.append("mobile", addUser.mobile);
      formData.append("whatsapp", addUser.whatsapp);
      formData.append("password", addUser.password);
      formData.append("password2", addUser.password2);
      formData.append("national_id", addUser.national_id);
      formData.append("gender", addUser.gender);
      formData.append("role", addUser.role);
      formData.append("cv", imageChange);
      try {
        setLoading(true);
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/accounts/register/",
          {
            method: "POST",

            body: formData,
          }
        );
        const result = await response.json();
        setLoading( false );
         if(result["National Id"] && result["National Id"][0] ==="User with same National Id already exist.") {
           setNationalId(true);
         }else if (result.tokens) {
          navigate("/user");
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
        <title>Dashboard/addUser</title>
        <meta name="description" content="Dashboard/addUser for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.collAddUser}>
        <form className={style.form}>
          {errorListDashboard &&
            errorListDashboard.map((error, index) => (
              <p key={index} className="alert alert-secondary">
                {error[index].message}
              </p>
            ))}
          <div className={style.headAddUser}>
            <button className="btn btn-secondary" onClick={handlesubmit}>
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
                navigate("/user");
              }}
            >
              {direction === "EN" ? "Back" : " رجوع"}
            </button>
          </div>
          <div className={style.colladduser}>
            <div className={style.inp}>
              <label htmlFor="full_name">
                {" "}
                {direction === "EN" ? "full_name" : "الاسم"}
              </label>
              <br />
              <input
                type="text"
                name="full_name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className={style.inp}>
              <label htmlFor="email_address">
                {direction === "EN" ? "email_address" : "الايميل"}
              </label>
              <br />
              <input
                type="email"
                name="email_address"
                onChange={handleChange}
              />
              {errorDashboard?.email_address && (
                <p className="error">
                  {" "}
                  {direction === "EN"
                    ? "email is already exists"
                    : "هذا الايميل موجود بالفعل"}
                </p> /*{error?.email_address}و{error?.mobile}تحت */
              )}
            </div>
          </div>
          <div className={style.colladduser}>
            <div className={style.inp}>
              <label htmlFor="city">
                {direction === "EN" ? "city" : "المدينة"}
              </label>
              <br />
              <input type="city" name="city" onChange={handleChange} />
            </div>
            <div className={style.inp}>
              <label htmlFor="mobile">
                {" "}
                {direction === "EN" ? "phone_number" : "رقم الهاتف"}
              </label>
              <br />
              <input
                type="number"
                name="mobile"
                id="mobile"
                onChange={handleChange}
              />
              {errorDashboard?.mobile && (
                <p className="error">
                  {" "}
                  {direction === "EN"
                    ? "phone Number is already exists"
                    : "رقم الهاتف هذا موجود بالفعل"}
                </p>
              )}
            </div>
          </div>
          <div className={style.colladduser}>
            <div className={style.inp}>
              <label htmlFor="whatsشpp">
                {direction === "EN" ? "whatsApp" : "واتساب"}
              </label>
              <br />
              <input
                type="number"
                name="whatsapp"
                id="whatsapp"
                onChange={handleChange}
              />
            </div>
            <div className={style.inp}>
              <label htmlFor="gender">
                {direction === "EN" ? "gender" : "النوع"}
              </label>
              <br />
              <select name="gender" id="gender" onChange={handleChange}>
                <option value="N">N</option>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>
          </div>
          <div className={style.colladduser}>
            <div className={style.inp}>
              <label htmlFor="role">
                {direction === "EN" ? "role" : "الدور"}
              </label>
              <br />
              <select
                name="role"
                id="role"
                className={style.role}
                onChange={handleChange}
              >
                <option value="user">
                  {direction === "EN" ? "user" : "مستخدم"}
                </option>
                <option value="admin">
                  {direction === "EN" ? "admin" : "ادمن"}
                </option>
              </select>
            </div>
            <div className={style.inp}>
              <label htmlFor="password">
                {" "}
                {direction === "EN" ? "password" : "كلمة المرور"}
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.inp}>
            <label htmlFor="password">
              {" "}
              {direction === "EN"
                ? "confirm password"
                : "تاكيد كلمة المرور"}{" "}
            </label>
            <br />
            <input
              type="password"
              name="password2"
              id="password2"
              onChange={handleChange}
            />
          </div>
          <div className={style.inp}>
            <label htmlFor="national_id">
              {direction === "EN" ? "national_id" : "  الرقم القومي"}
            </label>
            <br />
            <input
              type="number"
              name="national_id"
              id="national_id"
              onChange={handleChange}
            />
            {nationalId && (
              <p className="error">
                {direction === "EN"
                  ? "National ID is already exists"
                  : "    ألرقم القومي هذا موجود بالفعل"}
              </p>
            )}
          </div>
          <div className={style.inp}>
            <label htmlFor="cv">
              {direction === "EN" ? "cv (pdf)" : "  السيرة الذاتية (pdf)"}
            </label>
            <br />
            <input type="file" name="cv" id="cv" onChange={handleChangeImage} />
          </div>
        </form>
      </div>
    </>
  );
}
