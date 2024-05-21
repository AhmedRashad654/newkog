import React, { useEffect, useState } from "react";
import "../componantStyle/Contant.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { useUser } from "../context/Context";


export default function Contant() {
  const [ contact, setContact ] = useState( [] );
  //////////////////
  useEffect(() => {
    async function getAllContact() {
      try {
        let request = await fetch(
          "https://kog.pythonanywhere.com/api/v1/home/contacts/"
        );
        let response = await request.json();
        setContact( response );
      } catch (error) {
        console.log(error);
      }
    }
    getAllContact()
  } );
  const {direction} = useUser()
  return (
    <>
      <Helmet>
        <title>contact us</title>
        <meta
          name="description"
          content="The Contact page of Kamal Othman Group’s website to display the company’s means of communication"
        />
      </Helmet>
      <Navbar />
      <div className="allform">
        <div className="left">
          <div className="head">
            <p>SERVICES</p>
            <h3>Get in touch</h3>
          </div>
          <div className="bottom">
            {contact.map((con, i) => (
              <div className="email3" key={i}>
                <p>
                  {con.subject}:<small>{con.body}</small>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rightContact">
          <div className="oneContact">
            <div className="insideone">
              <label htmlFor="">{direction === "EN" ? "Name" : "الاسم"}</label>
              <input type="text" className="form-control" />
            </div>
            <div className="insideone">
              <label htmlFor="">
                {direction === "EN" ? "Email" : "الايميل"}
              </label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="oneContact">
            <div className="insideone">
              <label htmlFor="">
                {direction === "EN" ? "address" : "العنوان"}
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="insideone">
              <label htmlFor="">
                {direction === "EN" ? "phone" : "رقم الهاتف"}
              </label>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="twoContact">
            <div className="insidetwo">
              <label htmlFor="">
                {direction === "EN" ? "message" : " الرسالة"}
              </label>
              <textarea className="form-control"></textarea>
            </div>
          </div>
          <button className="btn btn-secondary mt-3 d-block">{ direction === "EN"?"send":"ارسال"}</button>
        </div>
      </div>
      <div className="right">
        <div className="map_frame">
          <iframe
            title="kog map"
            width="100%"
            height="300"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%83%D9%85%D8%A7%D9%84%20%D8%B9%D8%AB%D9%85%D8%A7%D9%86%20%D8%AC%D8%B1%D9%88%D8%A8%20kog%20%D9%A4%D9%AB%D9%A9%20(%D9%A1%D9%A5)%20%20%20%D9%85%D8%AA%D8%AC%D8%B1%20%D9%81%D9%8A%20%D8%A3%D8%B3%D9%8A%D9%88%D8%B7+(KOG)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
