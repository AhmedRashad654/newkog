import React from "react";
import Navbar from "../componant/Navbar";
import Header from "../componant/Header";
import Services from "../componant/Services";
import AutoPlay from "../componant/AutoPlay";
import SliderAds from "../componant/SliderAds";
import Footer from "../componant/Footer";
import { Helmet } from "react-helmet-async";
import FirstAboutCompany from "../componant/FirstAboutCompany";
import SecondSectionHome from "../componant/SecondSectionHome/SecondSectionHome";
import BlogHome from "../componant/BlogHome/BlogHome";
import OurBartnerShip from "../componant/OurBartnersShipSection/OurBartnerShip";
import Counter from "../componant/Counter/Counter";
import SectionOurValuesHome from "../componant/SectionOurValuesHome/SectionOurValuesHome";
export default function HomePage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title>KOG</title>
        <meta
          name="description"
          content="The home page of the Kamal Othman Group website"
        />
      </Helmet>
      <Navbar prop="none" />
      <Header />
      <SecondSectionHome />
      <Services />
      <FirstAboutCompany />
      <AutoPlay />
      <BlogHome />
      <SliderAds />
      <SectionOurValuesHome />

      <Counter />
      <OurBartnerShip />
      <Footer />
    </div>
  );
}
