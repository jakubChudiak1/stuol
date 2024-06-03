import React from "react";
import Header from "../components/header/Header";
import LandingSection from "../components/landing_section/LandingSection";
import NotUsSection from "../components/not_us_section/NotUsSection";
import AboutUsSection from "../components/about_us_section/AboutUsSection";
import ContactUsSection from "../components/contact_us_section/ContactUsSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <LandingSection />
      <NotUsSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default Home;
