import React, { useEffect, useState } from 'react'
import style from '../../componantStyle/PartnerDash.module.css'
import { useUser } from '../../context/Context';
import { NavLink } from 'react-router-dom';
import NavbarAdmin from '../../componant/NavbarAdmin';
import { Helmet } from 'react-helmet-async';
export default function PartnerDash() {
  const { direction, allPartner, getAllPartner } = useUser();
  const [ loading, setLoading ] = useState( false );
  const [ deletingID, setDeletingID ] = useState( null );
 
  useEffect(() => {
    getAllPartner();
  }, [getAllPartner]);

  ////////////////function delete user //////////////////
  async function deletePartner(id) {
    try {
      setLoading(true);
      setDeletingID(id);
      await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/partners/${id}/`,
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
      getAllPartner();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/partner</title>
        <meta name="description" content="Dashboard/partner for KOG website" />
      </Helmet>
      <NavbarAdmin />
      <div className={style.PartnerDash}>
        <div className={style.headAllPartner}>
          <NavLink to="/addpartner" className="btn btn-success">
            {direction === "EN" ? "Add New" : "أضافة جديد"}
          </NavLink>
        </div>
        <div className={style.collPartner}>
          {allPartner.map((partner, index) => (
            <div className={style.PartnerDiv} key={index}>
              <img src={partner.image} alt="" />
              <button
                className="btn btn-danger"
                onClick={() => deletePartner(partner.id)}
              >
                {loading && deletingID === partner.id ? (
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
