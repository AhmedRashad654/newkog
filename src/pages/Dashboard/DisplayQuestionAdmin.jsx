import React, { useEffect, useRef, useState } from 'react'
import style from '../../componantStyle/DisplayQuestionAdmin.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/Context';
import NavbarAdmin from '../../componant/NavbarAdmin';
import { Helmet } from 'react-helmet-async';
export default function DisplayQuestionAdmin() {
    const trName = useRef();
    const [ questionAdmin, setQuestionAdmin ] = useState( [] );
  const { direction, addchoice } = useUser()
  const navigate = useNavigate();
    useEffect( () => {
        async function getAllQuestion() {
           let request = await fetch(
             `https://kog.pythonanywhere.com/api/v1/home/questions/?form=${localStorage.getItem(
               "noFormFirst"
             )}`
           ); 
            let response = await request.json();
            setQuestionAdmin( response );
        }
        getAllQuestion();
    },[])
  return (
    <>
      <Helmet>
        <title>Dashboard/Jops/displayQuestion</title>
        <meta
          name="description"
          content="Dashboard/Jops/displayQuestion for KOG website"
        />
      </Helmet>
      <NavbarAdmin />

      <div className={style.allallall}>
        <div className={style.alltable} id="ahmed">
          <div className={style.headAllTable}>
            <NavLink to="/jops/addquetions" className="btn btn-secondary">
              {direction === "EN" ? "AddNew" : "أضافة جديد"}
            </NavLink>
            {/* <input
            type="text"
            placeholder="بحث باستخدام الاسم"
            className="form-control"
            // onChange={searchByName}
          /> */}
          </div>
          <div className="parentTable">
            <table>
              <thead>
                <tr>
                  {/* <th>id</th> */}
                  <th>{direction === "EN" ? "type" : " النوع"}</th>
                  <th> {direction === "EN" ? "question" : "السؤال"}</th>
                  <th> {direction === "EN" ? "Add Choice" : "اضافة اجابة"}</th>
                </tr>
              </thead>
              <tbody ref={trName}>
                {questionAdmin.length !== 0 &&
                  questionAdmin.map((question, index) => (
                    <tr key={index}>
                      {/* <td>{question.id}</td> */}
                      <td>{question.type}</td>
                      <td>
                        {direction === "EN"
                          ? question.body_en
                          : question.body_ar}
                      </td>
                      <td>
                        {question.type === "radio" ? (
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              addchoice(question.id);
                              navigate("/jops/displayquestionform/addchoice");
                            }}
                          >
                            {direction === "EN" ? " Add Choice" : "اضافة اجابة"}
                          </button>
                        ) : (
                          ""
                        )}{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
