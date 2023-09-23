import React from "react";
import {
  Hero,
  NewsSection,
  DividerLine,
  MusicSection,
  BrandSlider,
  TourSection,
  PromotionSection,
  ContactForm,
  ScrollToTop,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <NewsSection />
      <DividerLine />
      <MusicSection />
      <BrandSlider />
      <DividerLine />
      <TourSection />
      <DividerLine />
      <PromotionSection />
      <DividerLine />
      <ContactForm />
      <ScrollToTop />
    </>
  );
};

export default Home;
