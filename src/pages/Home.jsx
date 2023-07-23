import React from "react";
import {
  Hero,
  NewsSection,
  DividerLine,
  MusicSection,
  BrandSlider,
  TourSection,
  PromotionsCarousel,
  ContactForm,
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
      <PromotionsCarousel />
      <DividerLine />
      <ContactForm />
    </>
  );
};

export default Home;
