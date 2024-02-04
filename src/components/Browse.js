import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
