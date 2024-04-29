import React, { useRef, useState } from "react";
import "../componantStyle/Login.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import {useUser} from '../context/Context'
// import { jwtDecode } from "jwt-decode";
import Navbar from "./Navbar";
export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [ errorListLogin, setListErrorLogin ] = useState( null );
  const df = useRef();
  const {direction} = useUser()
  function handleChange(e) {
    setLogin((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  }
  function validateLogin() {
    let Schema = Joi.object({
      email_or_phone: Joi.string()
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "email or phone is required"
              : "  الايميل او رقم الهاتف مطلوب"
          }`,
          "any.required": `${
            direction === "EN"
              ? "email or phone is required"
              : "  الايميل او رقم الهاتف مطلوب"
          }`,
        }),

      password: Joi.string().required().messages({
          "string.empty": `${
            direction === "EN"
              ? "password is required"
              : "  كلمة المرور مطلوبة"
          }`,
          "any.required": `${
             direction === "EN"
              ? "password is required"
              : "  كلمة المرور مطلوبة"
          }`,
        }),
    });
    return Schema.validate(login, { abortEarly: true });
  }
  async function Login(e) {
    e.preventDefault();
    let responseValidateLogin = validateLogin();
    if (responseValidateLogin.error) {
      setListErrorLogin(responseValidateLogin.error.details);
    } else {
      try {
        setLoading( true );
        setListErrorLogin(null)
        const response = await fetch(
          "https://kog.pythonanywhere.com/api/v1/accounts/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
          }
        );
        const result = await response.json();
        setLoading( false );
        setErrorLogin(null)
        if (result.tokens) {
          setErrorLogin(null);
          localStorage.setItem("token_access", result.tokens.access);
          localStorage.setItem( "token_refresh", result.tokens.refresh );
          localStorage.setItem( "roleBycrypt", result.role );
          if (result.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        } else {
          setErrorLogin(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <>
      <Navbar />
      <div className="perantFormLogin">
        <form className="formLogin" onSubmit={Login} ref={df}>
          {errorLogin && (
            <p className="alert alert-secondary">
              {direction === "EN" ? "Incorrect date" : "البيانات غير صحيحة"}
              {/* {errorLogin.non_field_errors} */}
            </p>
          )}
          {errorListLogin &&
            errorListLogin.map((error, index) => (
              <p key={index} className="alert alert-secondary">
                {error.message}
              </p>
            ))}
          <div className="inp">
            <label htmlFor="mobile">
              {direction === "EN"
                ? "email_or_phone"
                : "  الايميل او رقم الهاتف"}
            </label>
       
            <input
              type="string"
              name="email_or_phone"
              className="form-control"
              id="mobile"
              onChange={handleChange}
            />
          </div>
          <div className="inp">
            <label htmlFor="password">
              {direction === "EN" ? "password" : "كلمة المرور"}
            </label>
     
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <button className="btn btn-secondary">
              {loading ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <>{direction === "EN" ? " Login" : "تسجيل"}</>
              )}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/register")}
            >
              {direction === "EN" ? "sign up " : "حساب جديد"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
