import React, { useContext, useState } from "react";
import style from "../../componantStyle/NewsLetter.module.css";
import { NavLink } from "react-router-dom";
import { ContextUser } from "../../context/Context";
import '../../componantStyle/last.css'
import NavbarAdmin from '../../componant/NavbarAdmin'
import { Helmet } from "react-helmet-async";
import axios from "axios";
export default function NewsLetter() {
     const {
       direction,
       newsLetter,
       recordLettter,
       setRecordLetter,
       getAllNewsLetter,
    } = useContext( ContextUser );
    const [ loadingDelete, setLoadingDelete ] = useState( false )
    const [idDelete,setIdDelete] = useState()
//////////////////////delete services////////////////////////////
    async function deleteLetter( id ) {
        setLoadingDelete(true);
       await axios.delete(
         `https://kog.pythonanywhere.com/api/v1/home/newsletters/${id}`
       ).then( ( result ) => {
           if ( result.status === 204 ) {
               setLoadingDelete(false);
               getAllNewsLetter()
           }
       }).catch((error)=>console.log(error));
   }
      //////////////search by name//////////////
  const Filter = (event) => {
    setRecordLetter(
      newsLetter.filter(
        (f) =>
          f.title_en.includes(event.target.value) ||
          f.title_ar.includes(event.target.value)
      )
    );
  };
  return (
    <>
      <Helmet>
        <title>Dashboard/NewsLetter</title>
        <meta
          name="description"
          content="Dashboard/NewsLetter for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.ServicesDashboard}>
        <div className={style.headServicesDash} id="ahmed">
          <NavLink to="/addnewsletter" className="btn btn-success">
            {direction === "EN" ? "Add New" : "    أضافة جديد"}
          </NavLink>
          <input
            type="text"
            placeholder={
              direction === "EN" ? "search By name" : "بحث باستخدام الاسم"
            }
            className="form-control"
            onChange={Filter}
          />
        </div>
        <div className={style.alltable}>
          {recordLettter &&
            recordLettter.map((e, i) => (
              <div key={i} className={style.firstServices}>
                <img src={e.image} alt="newsLetter" />
                <h4 className="h6">
                  {direction === "EN" ? e.title_en : e.title_ar}
                </h4>
                <p>
                  {direction === "EN" ? e.description_en : e.description_ar}
                </p>
                <button
                  className="btnServ"
                  style={{width:'100%',margin:'0'}}
                  onClick={() => {
                    deleteLetter(e.id);
                    setIdDelete(e.id);
                  }}
                >
                  {loadingDelete && idDelete === e.id ? (
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
