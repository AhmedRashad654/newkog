import React, { useEffect, useState } from "react";
import style from "../../componantStyle/ServicesDashboard.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/Context";
import '../../componantStyle/last.css'
import NavbarAdmin from '../../componant/NavbarAdmin'
import { Helmet } from "react-helmet-async";
export default function ServicesDashboard() {
  const { direction } = useUser();
  const [ loading, setLoading ] = useState( false );
  const [ deletingID, setDeletingID ] = useState( false );
  const [ servicesDashboaed, setServicesDashboard ] = useState( [] );
  const [records,setRecords]  =useState([])


  ///////////////get Services /////////////
   async function getAllServicesDashboard() {
     try {
       let request = await fetch(
         "https://kog.pythonanywhere.com/api/v1/home/services/"
       );
       let response = await request.json();
       setServicesDashboard(response);
       setRecords(response);
     } catch (error) {
       console.log(error);
     }
   }


  /////////////
  useEffect( () => {
    getAllServicesDashboard();
  }, [ ] )
  
//////////////////////delete services////////////////////////////
  async function deleteServices( id ) {
    try {
      setLoading(true);
     setDeletingID(id);
       await fetch(
      `https://kog.pythonanywhere.com/api/v1/home/services/${id}/`,
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
       getAllServicesDashboard();
    } catch ( error ) {
      console.log( error );
    }
 
  }
  const Filter = ( event ) => {
    setRecords(
      servicesDashboaed.filter(
        (f) =>
          f.title_en.includes(event.target.value) ||
          f.title_ar.includes(event.target.value)
      )
    );
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/services</title>
        <meta name="description" content="Dashboard/services for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.ServicesDashboard}>
        <div className={style.headServicesDash} id="ahmed">
          <NavLink to="/addservices" className="btn btn-success">
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
          {records.map((servic, index) => (
            <div className={style.firstServices} key={index}>
              <img src={servic.image} alt="" />
              <h4 className="h6">
                {direction === "EN" ? servic.title_en : servic.title_ar}
              </h4>
              <p>
                {direction === "EN"
                  ? servic.description_en
                  : servic.description_ar}
              </p>
              <button
                className="btnServ"
                style={{width:'100%',margin:'0'}}
                onClick={() => deleteServices(servic.id)}
              >
                {" "}
                {loading && deletingID === servic.id ? (
                  <div className="spinner-border text-secondary" role="status">
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
