import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import KamalOsmanLife from "../KamalOsmanLife/KamalOsmanLife";
import SalwaHessainLife from '../SalwaHessainLife/SalwaHessainLife';
export default function DisplayFounders() {
  
  const { id } = useParams()
  return (
    <>
      <Navbar />
      {id === "kamalosman" && <KamalOsmanLife />}
      {id === "salwahessain" &&  <SalwaHessainLife />}
      <Footer />
    </>
  );
}
