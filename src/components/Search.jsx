import React, { useEffect } from "react";
import { CITIES_API_URL, options } from "../utils/constants";

const Search = () => {
  const getCititesData = async () => {
    try {
      const response = await fetch(CITIES_API_URL, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCititesData();
  }, []);

  return <div>Search</div>;
};

export default Search;
