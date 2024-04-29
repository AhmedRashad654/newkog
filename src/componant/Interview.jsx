import React, { useEffect, useState } from "react";
import styles from "../componantStyle/Interview.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "../context/Context";
import { Helmet } from "react-helmet-async";
export default function Interview() {
  const [jopValide, setJopValide] = useState([]);
  const [selectQuestion, setSelectQuestion] = useState([]);
  const [selectAnswers, setSelectAnswers] = useState({});
  const { direction } = useUser();
  const [noForm, setNoForm] = useState();
  const [responseUser, setResponseUser] = useState({});
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [disable, setDisable] = useState(true);

  function handlechange(e) {
    setResponseUser((prevState) => {
      if (!prevState.questions) {
        return {
          form: noForm,
          questions: [{ question: e.target.name, answer: e.target.value }],
        };
      }
      const findQuestion = prevState.questions.findIndex(
        (question) => question.question === e.target.name
      );
      if (findQuestion !== -1) {
        const updateQuestions = [...prevState.questions];
        updateQuestions[findQuestion].answer = e.target.value;
        return { form: noForm, questions: updateQuestions };
      } else {
        return {
          form: noForm,
          questions: [
            ...prevState.questions,
            { question: e.target.name, answer: e.target.value },
          ],
        };
      }
    });
  }
  useEffect(() => {
    async function getJopValide() {
      try {
        let request = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/forms/home_forms/"
        );
        let response = await request.json();
        setJopValide(response);
      } catch (error) {
        console.log(error);
      }
    }
    getJopValide();
  }, []);

  async function handleSelectOption(id) {
    setNoForm(id);
    setResponseUser({
      form: id,
      questions: [],
    });
    setDisable(false);
    if (id > 0) {
      try {
        let request = await fetch(
          `https://kog.pythonanywhere.com/api/v1/home/questions/?form=${id}`
        );
        let response = await request.json();
        setSelectQuestion(response);
        setSelectAnswers({});
      } catch (error) {
        console.log(error);
      }
    } else {
      setSelectQuestion([]);
      setSelectAnswers({});
    }
  }

  async function getChoice(id) {
    try {
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/choices/?question=${id}`
      );
      let response = await request.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectQuestion.length > 0) {
      const fetchChoices = async () => {
        const choices = {};
        for (const question of selectQuestion) {
          const response = await getChoice(question.id);
          choices[question.id] = response;
        }
        setSelectAnswers(choices);
      };
      fetchChoices();
    }
  }, [selectQuestion]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoadingSubmit(true);
      const response = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/responses/create_user_response/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
          body: JSON.stringify(responseUser),
        }
      );
      const result = await response.json();
      setLoadingSubmit(false);
      if (result === "form submitted") {
      setDisable(true);
       
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Helmet>
        <title>JOIN TO OUR TEAM</title>
        <meta
          name="description"
          content="The page for applying for jobs on Kamal Othman Group’s website"
        />
      </Helmet>
      <Navbar />
      <form action="" className={styles.Interview} onSubmit={handleSubmit}>
        <div className="sendToBack">
          <div className={styles.one}>
            <label htmlFor="job">
              {direction === "EN" ? "Your Jop" : "الوظيفة"}{" "}
            </label>
            <br />
            <select
              name={direction === "EN" ? "jop" : "الوظيفة"}
              id=""
              onChange={(e) =>
                handleSelectOption(
                  e.target.selectedOptions[0].getAttribute("data-id")
                )
              }
            >
              <option data-id="0">
                {direction === "EN" ? "choose Jop" : "اختر وظيفة"}
              </option>
              {jopValide.map((jop, index) => (
                <option key={index} value={jop.title} data-id={jop.id}>
                  {jop.title}
                </option>
              ))}
            </select>
          </div>
          {selectQuestion.map((question, index) => (
            <div key={index} className={styles.two}>
              <h6 className={styles.h4}>
                {index + 1}-{" "}
                {direction === "EN" ? question.body_en : question.body_ar}
              </h6>
              {question.type === "text" && (
                <textarea
                  name={question.id}
                  placeholder={
                    direction === "EN" ? "Enter Answer" : "ادخل الاجابة"
                  }
                  onChange={handlechange}
                  required
                ></textarea>
              )}
              {question.type === "radio" && (
                <>
                  {selectAnswers[question.id]?.map((answer, answerIndex) => (
                    <div key={answerIndex}>
                      <input
                        type="radio"
                        name={question.id}
                        value={
                          direction === "EN" ? answer.body_en : answer.body_ar
                        }
                        onChange={handlechange}
                        required
                      />
                      <label htmlFor={`answer_${index}`} className={styles.mr}>
                        {direction === "EN" ? answer.body_en : answer.body_ar}
                      </label>
                      <br />
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>

        <button className="btn btn-secondary" disabled={disable}>
          {loadingSubmit ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <>{direction === "EN" ? " submit" : "تقديم"}</>
          )}
        </button>
      </form>
      <Footer />
    </>
  );
}
