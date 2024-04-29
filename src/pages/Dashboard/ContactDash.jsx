import React, { useEffect, useRef, useState } from "react";
import style from "../../componantStyle/Contact.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/Context";
import NavbarAdmin from "../../componant/NavbarAdmin";
import { Helmet } from "react-helmet-async";
export default function ContactDash() {
  const trName = useRef();
    const { contact, getAllContact ,direction} = useUser();
    const [ loading, setLoading ] = useState( false )
    const [ deletingID, setDeletingID ] = useState( null );
  useEffect(() => {
    getAllContact();
  }, [getAllContact]);
  ////////////////function delete contact //////////////////
  async function deleteContact(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/contacts/${id}/`,
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
      getAllContact();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/contact</title>
        <meta
          name="description"
          content="Dashboard/contact for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.ContactDash}>
        <div className={style.headAllContact}>
          <NavLink to="/addcontact" className="btn btn-success">
            {direction === "EN" ? "AddNew" : " أضافة جديد"}
          </NavLink>
          {/* <input
          type="text"
          placeholder="بحث باستخدام الاسم"
          className="form-control"
          //   onChange={searchByName}
        /> */}
        </div>
        <div className="parentTable">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  {direction === "EN" ? "contact method" : "طريقة التواصل"}
                </th>
                <th>{direction === "EN" ? "value" : "القيمة"}</th>
                <th>{direction === "EN" ? "Delete" : "حذف"}</th>
              </tr>
            </thead>
            <tbody ref={trName}>
              {contact.map((con, index) => (
                <tr key={index}>
                  <td>{con.subject}</td>
                  <td>{con.body}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContact(con.id)}
                    >
                      {loading && deletingID === con.id ? (
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
    </>
  );
}
