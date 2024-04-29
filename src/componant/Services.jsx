import React from "react";
import "../componantStyle/Services.css";
import { useUser } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Services() {

  const { direction, services } = useUser();
const navigate = useNavigate()
  return (
    <>
      <div className="allSerices" id="services">
        <div className="allServicesHeadoll">
          <div className="ho">
            <h4>{direction === "EN" ? "services" : "الخدمات"}</h4>
          </div>
          <div className="services">
            {services.length > 0 &&
              services.slice(0, 3).map((servic, index) => (
                <div className="one" key={index}>
                  <div className="contimg">
                    <img src={servic.image} alt="imge" />
                  </div>

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
                    onClick={() => navigate("/ourbusiness")}
                  >
                    {direction === "EN" ? "Read More" : "المزيد"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
