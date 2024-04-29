// import React, { useState } from 'react'
// import style from '../../componantStyle/AddServicesArabic.module.css'
// import { useNavigate } from 'react-router-dom';
// import Joi from 'joi';
// export default function AddServicesArabic() {
//   const navigate = useNavigate();
  // const [servicesArabic, setServicesArabic] = useState({
  //   title: "title",
  //   description: "description",
  // });
  // const [imageChange, setImageChange] = useState("");
  // function handleChangeImage(e) {
  //   setImageChange(e.target.files[0]);
  // }
  // const [errorListServices, setErrorListServices] = useState(null);
  // const [errorBackServices, setErrorBackServices] = useState(null);
  // const [loadingServices, setLoadingServices] = useState(false);
  ////////////function handleChange///////////////
  // function handleChange(e) {
  //   setServicesArabic((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // }
  // console.log(servicesArabic)
  // function validationRegister() {
  //   let schema = Joi.object({
  //     title: Joi.string().required(),
  //     description: Joi.string().required(),
  //     title_ar: Joi.string().required(),
  //     description_ar: Joi.string().required(),
  //   });
  //   return schema.validate(servicesArabic, { abortEarly: false });
  // }
  //  async function handleSubmit(e) {
  //    e.preventDefault();
  //    let responseValidateServices = validationRegister();
  //    if (responseValidateServices.error) {
  //      setErrorListServices([responseValidateServices.error.details]);
  //    } else {
      //  setErrorListServices(null);
      //  const formData = new FormData();
      //  formData.append("title", servicesArabic.title);
      //  formData.append("title_en", servicesArabic.title_ar);
      //  formData.append("description", servicesArabic.description);
      //  formData.append("description_en", servicesArabic.description_ar);
      //  formData.append("image", imageChange);
      //  try {
      //    setLoadingServices(true);
      //    const response = await fetch(
      //      "https://kog.pythonanywhere.com/api/v1/home/services/",
      //      {
      //        method: "POST",
      //        headers: {
      //          Authorization: `Bearer ${localStorage.getItem("token_access")}`,
      //        },
      //        body: formData,
      //      }
      //    );
  //        const result = await response.json();
  //        console.log(result);
  //        setLoadingServices(false);

  //        if (result.created_at) {
  //          navigate("/dashboard/servies");
  //        } else {
  //          setErrorBackServices(result);
  //        }
  //      } catch (error) {
  //        console.error(error);
  //      }
  //    }
  //  }
  // return (
    // <form className={style.AddServices}>
    //   {errorListServices &&
    //     errorListServices.map((error, index) => (
    //       <p key={index} className="alert alert-warning">
    //         {error[index].message}
    //       </p>
    //     ))}
      // <div className={style.headAddServices}>
      //   <button className="btn btn-secondary" onClick={handleSubmit}>
      //     {" "}
        //   {loadingServices ? (
        //     <div className="spinner-border text-secondary" role="status">
        //       <span className="sr-only"></span>
        //     </div>
        //   ) : (
        //     "أضافة خدمة"
        //   )}{" "}
        // </button>
        // <button
        //   to="/dashboard/addjops"
        //   className="btn btn-success"
        //   onClick={() => {
        //     navigate(-1);
        //   }}
        // >
        //   رجوع
        // </button>
      // </div>
      // <div className={style.inp}>
      //   <label htmlFor="image">اختر الصورة</label>
      //   <br />
      //   <input
      //     type="file"
      //     name="image"
      //     id="image"
      //     onChange={handleChangeImage}
      //   />
      //   {errorBackServices?.image && (
      //     <p className="error">{errorBackServices?.image}</p>
      //   )}
      // </div>
      // <div className={style.inp}>
      //   <label htmlFor="title_ar">اسم الخدمة باللغة العربية</label>
      //   <br />
      //   <input
      //     type="text"
      //     name="title_ar"
      //     id="title_ar"
      //     onChange={handleChange}
      //   />
      // </div>

      // <div className={style.inptextarea}>
      //   <label htmlFor="description_ar">وصف الخدمة باللغة العربية</label>
      //   <br />
      //   <textarea
      //     name="description_ar"
      //     id="description_ar"
      //     className={style.textarea}
      //     onChange={handleChange}
      //   ></textarea>
      // </div>
//     </form>
//   );
// }
