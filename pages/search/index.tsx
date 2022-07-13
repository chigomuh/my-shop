import React from "react";
import SearchMainContent from "../../components/SearchMainContent";
import Seo from "../../components/Seo";
import data from "../../db/data.json";

const Search = () => {
  return (
    <>
      <Seo title="Product" />
      <SearchMainContent products={data.product} />
    </>
  );
};

export default Search;
