import React, { useEffect,useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../../componantStyle/JopsDash.module.css";
import { useUser } from "../../context/Context"
import NavbarAdmin from '../../componant/NavbarAdmin'
import { Helmet } from "react-helmet-async";
export default function JopsDash() {
  const navigate = useNavigate();
  const { direction, valueIdForm, choiceJopResponse } = useUser();
  const [ formAdmin, setFormAdmin ] = useState( [] );
  const [ records, setRecords ] = useState( [] );
  const [ loadingDelete, setLoadingDelete ] = useState( false );
  const [ deletingID, setDeletingID ] = useState( null );

  //////////////get form admin/////////////
    async function getFormAdmin() {
      try {
        let request = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/forms/"
        );
        let response = await request.json();
        setFormAdmin( response );
        setRecords(response)
      } catch (error) {
        console.log(error);
      }
    }
  useEffect(() => {
    getFormAdmin();
  }, [] );
  ///////////delete Form////////////
  async function deleteForm(id) {
    try {
         setLoadingDelete(true);
         setDeletingID(id);
       await fetch(
        `https://kog.pythonanywhere.com/api/v1/home/forms/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        }
      );
      setLoadingDelete(false);
      setDeletingID( null );
      getFormAdmin()
    } catch ( error ) {
      console.log( error );
    }
  }
  //////////search By Title/////////////
  const Filter = ( event ) => {
    setRecords( formAdmin.filter( f => f.title.includes( event.target.value ) ) );
  }
  return (
    <>
      <Helmet>
        <title>Dashboard/Jops</title>
        <meta
          name="description"
          content="Dashboard/Jops for KOG website"
        />
      </Helmet>
      <NavbarAdmin />
      <div className={style.allallall}>
        <div className={style.headJop}>
          <NavLink to="/addjops" className="btn btn-secondary">
            {direction === "EN" ? "Add Jop" : " أضافة وظيفة"}
          </NavLink>
          <input
            type="text"
            placeholder={
              direction === "EN" ? "search By Name" : "بحث باستخدام الاسم"
            }
            className="form-control"
            onChange={Filter}
          />
        </div>
        <div className={style.alltable}>
          <div className="parentTable">
            <table>
              <thead>
                <tr>
                  {/* <th>id</th> */}
                  <th>{direction === "EN" ? "Jop Name" : " اسم الوظيفة"}</th>
                  <th>
                    {direction === "EN" ? "created Date" : "    تاريخ الانشاء"}
                  </th>
                  <th>
                    {direction === "EN" ? "valid_to" : "    تاريخ الانتهاء"}
                  </th>
                  <th>{direction === "EN" ? "Response " : "     رد  "}</th>
                  <th>{direction === "EN" ? "Delete " : "     حذف  "}</th>
                </tr>
              </thead>
              <tbody>
                {records.map((form, index) => (
                  <tr key={index}>
                    {/* <td
                  onClick={() => {
                    valueIdForm(form.id);
                    navigate("/dashboard/jops/displayquestionform");
                  }}
                >
                  {form.id}
                </td> */}
                    <td
                      onClick={() => {
                        valueIdForm(form.id);
                        navigate("/jops/displayquestionform");
                      }}
                    >
                      {" "}
                      {form.title}
                    </td>
                    <td>{form.created_at}</td>
                    <td>{form.valid_to}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          choiceJopResponse(form.id, form.title);
                          navigate("/jops/detailsjop");
                        }}
                      >
                        {direction === "EN" ? "Response " : "رد "}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteForm(form.id)}
                      >
                        {loadingDelete && deletingID === form.id ? (
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
