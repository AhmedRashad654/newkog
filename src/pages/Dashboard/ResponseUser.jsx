import React, { useEffect, useState } from "react";
import style from "../../componantStyle/ResponseUser.module.css";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { useUser } from "../../context/Context";
import { Helmet } from "react-helmet-async";
export default function ResponseUser() {
  const { direction } = useUser();
  const [ responseDetails, setResponseDetails ] = useState( [] );
  const [ questionLast, setQustionLast ] = useState( [] );
  useEffect(() => {
    async function getResponse() {
      try {
        let request = await fetch(
          `https://kog.pythonanywhere.com/api/v1/home/responses/?user=${localStorage.getItem(
            "idResponseUser"
          )}&form=${localStorage.getItem("idJopResponse")}`
        );
        let response = await request.json();
        setResponseDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    getResponse();
  }, [] );
  useEffect( () => {
      async function getQuestion() {
        try {
          let request = await fetch(
            `https://kog.pythonanywhere.com/api/v1/home/questions/?form=${localStorage.getItem(
              "idJopResponse"
            )}`
          );
          let response = await request.json();
          setQustionLast(response);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      getQuestion();
  },[])
  return (
    <>
      <Helmet>
        <title>Dashboard/Jops/responseUser</title>
        <meta
          name="description"
          content="Dashboard/Jops/responseUser for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.ResponseUser}>
        <h4 className="h6">
          {" "}
          {direction === "EN"
            ? "Response User on Questions"
            : "رد المستخدم علي الاسئلة"}
        </h4>
        <div className={style.response}>
          <h4 style={{ display: "inline" }} className="h6">
            {direction === "EN" ? "UserName : " : "اسم المستخدم : "}
          </h4>

          <p style={{ display: "inline" }}>
            {responseDetails[0]?.user.full_name}
          </p>
        </div>
        <div className={style.response}>
          <h4 style={{ display: "inline" }} className="h6">
            {direction === "EN" ? "phone Number : " : " رقم الهاتف : "}
          </h4>
          <p style={{ display: "inline" }}>{responseDetails[0]?.user.mobile}</p>
        </div>
        <hr />
        {responseDetails.map((res, index) => (
          <div key={index}>
            <div className={style.response}>
              <h4 style={{ display: "inline" }} className="h6">
                {direction === "EN" ? "question : " : "  السؤال : "}
              </h4>
              {questionLast.map((ques) =>
                ques.id === res.question ? (
                  <p key={index} style={{ display: "inline" }}>
                    {direction === "EN" ? ques.body_en : ques.body_ar}
                  </p>
                ) : (
                  ""
                )
              )}
            </div>
            <div className={style.response}>
              <h4 style={{ display: "inline" }} className="h6">
                {direction === "EN" ? "answer : " : "  الاجابة : "}
              </h4>
              <p style={{ display: "inline" }}>{res.answer}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
