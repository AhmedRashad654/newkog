import React, {  useState } from "react";
import Joi from "joi";
import { useUser } from "../context/Context";
import '../componantStyle/changePassword.css'
import Navbar from "./Navbar";
export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState({});
  const [successChange, setSuccessChange] = useState(null);
  const [errorBack, setErrorBack] = useState(null);
    const [ errorListChange, setErrorListChange ] = useState( null );
  const [ noLogin, setNoLogin ] = useState( null );
  const { direction } = useUser();
  function handleChange(e) {
    setChange((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  /////////////function validation change password///////////////////
  function validateChangePassword() {
    let Schema = Joi.object({
      old_password: Joi.string()
     
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "old_password is required"
              : "  كلمة المرور القديمة مطلوبة"
          }`,
      
          "any.required": `${
            direction === "EN"
              ? "old_password is required"
              : "  كلمة المرور القديمة مطلوبة"
          }`,
        }),
      new_password: Joi.string()
        .min(8)
        .required()
        .messages({
          "string.empty": `${
            direction === "EN"
              ? "new_password is required"
              : "  كلمة المرور الجديدة مطلوبة"
          }`,
          "string.min": `${
            direction === "EN"
              ? "new_Password should be at least 8 characters long"
              : "كلمة المرور الجديدة يجب الا تقل عن 8"
          }`,
          "any.required": `${
            direction === "EN"
              ? "new_password is required"
              : "  كلمة المرور الجديدة مطلوبة"
          }`,
        }),
    });
    return Schema.validate(change, { abortEarly: true });
  }
    /////////////function submit change password///////////////////
   
  async function changePassword(e) {
      e.preventDefault();
            setErrorListChange(null);
      
    let responseValidateChangePassword = validateChangePassword();
    if (responseValidateChangePassword.error) {
      setErrorListChange(responseValidateChangePassword.error.details[0].message);
    } else {
      const storeTokenAccess = localStorage.getItem("token_access");
      const storeTokenRefresh = localStorage.getItem("token_refresh");
        if ( ( storeTokenAccess, storeTokenRefresh ) ) {
            setLoading( true );
            setErrorBack( null );
            setSuccessChange(null)
            const response = await fetch(
              "https://kog.pythonanywhere.com/api/v1/accounts/change-password/",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${storeTokenAccess}`,
                },
                body: JSON.stringify(change),
              }
            );
            let result = await response.json();
            setLoading(false)
            console.log(result);
            if (result.status === "success") {
              setSuccessChange(result.message);
            } else {
              setErrorBack(result);
            }
      } else {
        setNoLogin('you not login')
      }
  
        
    }
  }

  return (
    <>
      <Navbar />
      <div className="perantFormLogin">
        <form className="formLogin" onSubmit={changePassword}>
          {noLogin && (
            <p className="alert alert-secondary">
              {direction === "EN" ? noLogin : "انت لست مسجل"}
            </p>
          )}
          {errorListChange && (
            <p className="alert alert-secondary">{errorListChange}</p>
          )}
          {successChange && (
            <p className="alert bg-success">
              {direction === "EN"
                ? successChange
                : "تم تغيير كلمة المرور بنجاح"}
            </p>
          )}
          {errorBack?.new_password && (
            <p className="alert alert-secondary">
              {errorBack?.new_password[0]}
            </p>
          )}

          {errorBack?.old_password && (
            <p className="alert alert-secondary">
              {direction === "EN"
                ? "old_Password is wrong"
                : "كلمة المرور القديمة خاطئة"}
            </p> /*{errorBack?.old_password}*/
          )}

          <div className="inp">
            <label htmlFor="old_password">
              {direction === "EN" ? "old-password" : "كلمة المرور القديمة"}
            </label>
            <br />
            <input
              type="password"
              name="old_password"
              id="old_password"
              onChange={handleChange}
            />
          </div>
          <div className="inp">
            <label htmlFor="password">
              {direction === "EN" ? "New-password" : "كلمة المرور الجديدة"}
            </label>
            <br />
            <input
              type="password"
              name="new_password"
              id="new_password"
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
                <>
                  {direction === "EN" ? "changePassword" : "تغيير كلمة المرور"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
