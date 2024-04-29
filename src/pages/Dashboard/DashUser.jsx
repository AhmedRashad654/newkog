import React, {  useState } from "react";
import style from "../../componantStyle/userDash.module.css";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useEffect } from "react";
import { useUser } from "../../context/Context";
import NavbarAdmin from '../../componant/NavbarAdmin'
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
export default function DashUser() {

  const [userDashboaerd, setUserDashboard] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingID, setDeletingID] = useState(null);
  const [loadingDeactive, setloadingDeactive] = useState(false);
  const [loadingActive, setloadingActive] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [deActiveID, setDeActiveID] = useState(null);
  const { direction } = useUser();
  //////////get all user ////////////
  async function getAllUserDashboard() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/accounts/users/"
      );
      let response = await request.json();
      setUserDashboard(response);
      setRecords(response);
    } catch (error) {
      console.log(error);
    }
  }
  /////////////get all user ///////////////////////
  useEffect(() => {
    getAllUserDashboard();
  }, []);
  ///////////////////start///////////////////


  ////////////////function delete user //////////////////
  async function deleteUser(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      await fetch(
        `https://kog.pythonanywhere.com/api/v1/accounts/users/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        }
      );
      setLoading(false);
      setDeletingID(null);
      getAllUserDashboard();
    } catch (error) {
      console.log(error);
    }
  }
  //////////////function deactive user///////////////
  async function deactiveUser(id) {
    try {
      setloadingDeactive(true);
      setDeActiveID(id);
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/accounts/users/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
          body: JSON.stringify({ is_active: false }),
        }
      );
      let response = await request.json();
      setloadingDeactive(false);
      setDeActiveID( null );
      getAllUserDashboard();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  ///////////active user/////////////////////
  async function activeUser(id) {
    try {
      setloadingActive(true);
      setActiveID(id);
      let request = await fetch(
        `https://kog.pythonanywhere.com/api/v1/accounts/users/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
          body: JSON.stringify({ is_active: true }),
        }
      );
      let response = await request.json();
      setloadingActive(false);
      setActiveID( null );
      getAllUserDashboard()
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  //////////////search by name//////////////
  const Filter = (event) => {
    setRecords(
      userDashboaerd.filter(
        ( f ) =>
          
          f.full_name.includes(event.target.value) ||
          f.mobile.includes( event.target.value )
          
      )
    );
  };
  return (
    <>
      <Helmet>
        <title>Dashboard/user</title>
        <meta name="description" content="Dashboard/user for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.allallall}>
        <div className={style.alltable} id="ahmed">
          <div className={style.headAllTable}>
            <NavLink to="/adduser" className="btn btn-success">
              {direction === "EN" ? "Add New" : "   أضافة جديد"}
            </NavLink>
            <input
              type="text"
              placeholder={`${
                direction === "EN"
                  ? "search By Name or phone"
                  : " بحث باستخدام الاسم او رقم الهاتف"
              }`}
              className="form-control"
              onChange={Filter}
            />
          </div>
          <div className="parentTable">
            <table>
              <thead>
                <tr>
                  <th>{direction === "EN" ? "Name" : "الاسم"}</th>
                  <th>{direction === "EN" ? "role" : "الدور"}</th>
                  <th>
                    {" "}
                    {direction === "EN" ? "Phone Nmuber" : "رقم الهاتف "}
                  </th>
                  <th>
                    {" "}
                    {direction === "EN" ? "National_Id" : " الرقم القومي "}
                  </th>
                  <th>{direction === "EN" ? "cv" : "  السيرة الذاتية "}</th>
                  <th>{direction === "EN" ? "deactive" : "تعطيل"}</th>
                  <th>{direction === "EN" ? "delete" : "حذف"}</th>
                </tr>
              </thead>
              <tbody>
                {records.map((userTr, index) => (
                  <tr key={index}>
                    <td>{userTr.full_name}</td>
                    <td>{userTr.role}</td>
                    <td>{userTr.mobile}</td>
                    <td>{userTr.national_id}</td>
                    <td>{(userTr.cv && userTr.cv.slice(-4).toLowerCase() === ".pdf")?   <a
                          href={userTr.cv}
                          style={{ margin: "0 15px" }}
                        >
                          <FontAwesomeIcon
                            icon={faFile}
                            style={{
                              fontSize: "20px",
                            
                            }}
                          />
                        </a>:(direction === "EN"?"Not Add":'لم تتم الاضافة')}</td>
                    <td>
                      {userTr.is_active === true && (
                        <button
                          className="btn btn-warning"
                          onClick={() => deactiveUser(userTr.id)}
                        >
                          {loadingDeactive && deActiveID === userTr.id ? (
                            <div
                              className="spinner-border text-secondary"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <>{direction === "EN" ? "deactive" : "تعطيل"}</>
                          )}
                        </button>
                      )}
                      {userTr.is_active === false && (
                        <button
                          className="btn btn-success"
                          onClick={() => activeUser(userTr.id)}
                        >
                          {loadingActive && activeID === userTr.id ? (
                            <div
                              className="spinner-border text-secondary"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <>{direction === "EN" ? "active" : "تفعيل"}</>
                          )}
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(userTr.id)}
                      >
                        {loading && deletingID === userTr.id ? (
                          <div
                            className="spinner-border text-secondary"
                            role="status"
                          >
                            <span className="sr-only"></span>
                          </div>
                        ) : (
                          <>{direction === "EN" ? "delete" : "حذف"}</>
                        )}
                      </button>
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
