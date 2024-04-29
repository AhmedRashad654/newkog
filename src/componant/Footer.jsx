import React from "react";
import "../componantStyle/Footer.css";
import { useUser } from "../context/Context";
import EnglishAndArabic from "./EnglishAndArabic";
import { Link } from "react-router-dom";
export default function Footer({top}) {
  const { direction } = useUser();
  return (
    <div className="collfooter" style={{marginTop:top}}>
      <div className="footer">
        <div className="second">
          <div className="centerNavbarr">
            <ul>
              <li>
                <Link to="/">{direction === "EN" ? "HOME" : "الرئيسية"}</Link>
              </li>

              <li>
                {" "}
                <Link to="/howweare">
                  {direction === "EN" ? "HOW WE ARE" : "كيف حالنا"}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/ourbusiness">
                  {direction === "EN" ? "OUR BUSINESSES" : "اعمالنا"}
                </Link>
              </li>
              {localStorage.getItem("roleBycrypt") && (
                <li>
                  {" "}
                  <Link to="/interview">
                    {direction === "EN"
                      ? "JOIN TO OUR TEAM"
                      : "انضم الي فريقنا"}
                  </Link>
                </li>
              )}
              {localStorage.roleBycrypt === "admin" && (
                <li>
                  {" "}
                  <Link to="/dashboard">
                    {direction === "EN" ? "DASHBOARD" : "صفحة الادمن"}
                  </Link>
                </li>
              )}
              <li>
                <Link to="/contact">
                  {direction === "EN" ? "CONTACT US" : "تواصل"}
                </Link>
              </li>
              <li>
                <EnglishAndArabic color="#777" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
