import React from "react";
import style from "../../componantStyle/AddQuestions.module.css";
import { useState } from "react";
import MultiQuestions from "./MultiQuestions";
import TextQuestions from "./TextQuestions";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { useUser } from "../../context/Context";
import { Helmet } from "react-helmet-async";
export default function AddQuestions() {
  const [ question, setquestion ] = useState( "" );
  const { direction } = useUser();
  return (
    <>
      <Helmet>
        <title>Dashboard/Jops/addQuestion</title>
        <meta
          name="description"
          content="Dashboard/Jops/addQuestion for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.AddQuestions}>
        <p>{direction === "EN" ? "choose question type" : "اختر نوع السؤال"}</p>
        <p
          className={question === "multi" ? style.check : ""}
          onClick={() => setquestion(() => "multi")}
        >
          {direction === "EN" ? "radio" : " اختار من متعدد"}
        </p>
        <p
          className={question === "text" ? style.check : ""}
          onClick={() => setquestion(() => "text")}
        >
          {direction === "EN" ? "text" : "     مقالي"}
        </p>
        {question === "multi" ? <MultiQuestions /> : ""}
        {question === "text" ? <TextQuestions /> : ""}
      </div>
    </>
  );
}
