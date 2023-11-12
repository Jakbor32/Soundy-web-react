import React from "react";
import { Benefits, NewCollection, SearchBar, Items, ProductSorting, DividerLine, SpecialOffers, ScrollToTop } from "../components";


const Store = () => {
  return (
    <>
      <NewCollection />
      <SpecialOffers />
      <SearchBar />
      <Items />
      <DividerLine />
      <Benefits />
      <ScrollToTop/>

    </>
  );
};

export default Store;
