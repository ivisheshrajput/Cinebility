import React from "react";
import BGImage from "../../src/assets/login-bg.jpg";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const languageKey = useSelector((store) => store.language.lang);
  return (
    <>
      <img src={BGImage} alt="" className="h-screen w-screen  absolute" />
      <div className="pt-36 flex justify-center relative">
        <form className="w-1/2 bg-black rounded-md grid grid-cols-12">
          <input
            type="text"
            // placeholder={lang.hindi.gptSearchPlaceholder}
            placeholder={lang[languageKey].gptSearchPlaceholder}
            className="p-2 m-2 col-span-9 rounded-md"
          ></input>
          <button className="bg-customColorBase m-2 col-span-3 rounded-md text-white font-semibold">
            {/* {lang.hindi.search} */}
            {lang[languageKey].search}
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default GptSearch;
