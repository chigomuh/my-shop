import React from "react";
import SearchMainContent from "../../components/SearchMainContent";
import data from "../../db/data.json";

const Search = () => {
  return <SearchMainContent products={data.product} />;
};

export default Search;
