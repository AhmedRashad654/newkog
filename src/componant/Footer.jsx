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
             <div className="rightFooter">
            <div className="map_framej">
              <iframe
                title="kog map"
                width="100%"
                height="200"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%83%D9%85%D8%A7%D9%84%20%D8%B9%D8%AB%D9%85%D8%A7%D9%86%20%D8%AC%D8%B1%D9%88%D8%A8%20kog%20%D9%A4%D9%AB%D9%A9%20(%D9%A1%D9%A5)%20%20%20%D9%85%D8%AA%D8%AC%D8%B1%20%D9%81%D9%8A%20%D8%A3%D8%B3%D9%8A%D9%88%D8%B7+(KOG)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
       
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
