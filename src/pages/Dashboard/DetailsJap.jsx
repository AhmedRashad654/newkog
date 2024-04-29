import React, { useEffect, useState } from "react";
import style from "../../componantStyle/DetailsJop.module.css";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { useUser } from "../../context/Context";
import { Helmet } from "react-helmet-async";
export default function DetailsJap() {
  const navigate = useNavigate();
  const { direction, choiceResponseUser } = useUser();
  const [allFormResponse, setAllFormResponse] = useState([]);
  const [ records, setRecords ] = useState( [] );
  useEffect(() => {
    async function getAllFormResponse() {
      try {
        let request = await fetch(
          `https://kog.pythonanywhere.com/api/v1/home/responses/?form=${localStorage.getItem(
            "idJopResponse"
          )}`
        );
        let response = await request.json();

        setAllFormResponse( response );
        setRecords( response );
      } catch (error) {
        console.log(error);
      }
    }
    getAllFormResponse();
  }, []);
  ////////////function filter///////////
  const filter = ( event ) => {
    setRecords(
      allFormResponse.filter(
        (e) =>
          e.user.mobile.includes(event.target.value) ||
          e.user.full_name.includes(event.target.value)
      )
    );
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/Jops/detailsJop</title>
        <meta
          name="description"
          content="Dashboard/Jops/detailsJop for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.DetailsJap}>
        <div className={style.headresponse}>
          <div className="oneHeadResponse">
            <h4 style={{ display: "inline" }}>
              {direction === "EN" ? "Jop Name : " : "اسم الوظيفة : "}
            </h4>
            <p style={{ display: "inline" }}>
              {localStorage.getItem("nameJopResponse")}
            </p>
          </div>
          <input
            type="text"
            placeholder={`${
              direction === "EN"
                ? "search By phoneNumber"
                : " بحث   باستخدام رقم الهاتف"
            }`}
            className="form-control"
            onChange={filter}
          />
        </div>

        <br />
        <div className="parentTable">
          <div className={style.alltable}>
            <table>
              <thead>
                <tr>
                  {/* <th>idUser</th> */}
                  <th>{direction === "EN" ? "userName" : "اسم المستخدم"}</th>
                  <th>{direction === "EN" ? "mobile" : "رقم الهاتف"}</th>
                  <th>
                    {" "}
                    {direction === "EN" ? "date Created" : "تاريخ الانشاء"}
                  </th>
                  <th>
                    {" "}
                    {direction === "EN"
                      ? "Response Details"
                      : "تفاصيل الرد"}{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.length !== 0 &&
                  records.map((response, index) => {
                    const isUniqueUser = records
                      .slice(0, index)
                      .every(
                        (prevResponse) =>
                          prevResponse.user.id !== response.user.id
                      );
                    if (isUniqueUser) {
                      return (
                        <tr key={index}>
                          {/* <td>{response.user.id}</td> */}

                          <td>{response.user.full_name}</td>
                          <td>{response.user.mobile}</td>
                          <td>{response.created_at}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                choiceResponseUser(response.user.id);
                                navigate("/jops/responseuser");
                              }}
                            >
                              {direction === "EN"
                                ? "Response Details"
                                : "تفاصيل الرد"}
                            </button>
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
