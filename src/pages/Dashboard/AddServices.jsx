import React from "react";
import style from "../../componantStyle/AddServices.module.css";
// import { useNavigate } from "react-router-dom";
// import AddServicesArabic from "./AddServicesArabic";
import AddServicesEnglish from "./AddServicesEnglish";
export default function AddServices() {
  // const [typeServices, setTypeServices] = useState("");
  // const navigate = useNavigate();


  return (
    <div className={style.collanimate}>
          <AddServicesEnglish />
    </div>
  );
}
