import React from "react";
import { Benefits, NewCollection, SearchBar, Items, ProductSorting, DividerLine, SpecialOffers, CategorySelector, ScrollToTop } from "../components";


const Store = () => {
  return (
    <>
      <NewCollection />
      <SpecialOffers />
      <DividerLine />
      <SearchBar />
      <ProductSorting />
      <CategorySelector />
      <DividerLine />
      <Items />
      <DividerLine />
      <Benefits />
      <ScrollToTop/>

    </>
  );
};

export default Store;
