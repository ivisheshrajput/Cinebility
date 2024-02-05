import React, { useRef } from "react";
import BGImage from "../../src/assets/login-bg.jpg";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openAI";

const GptSearch = () => {
  const languageKey = useSelector((store) => store.language.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie from the query:" +
      searchText.current.value +
      ".only give me 5 movie top relatable movie, commas separated like the example given ahead . Example result: Avenger,Iron Man, Ant Man, Sholay, Street";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <>
      <img src={BGImage} alt="" className="h-screen w-screen  absolute" />
      <div className="pt-36 flex justify-center relative">
        <form
          className="w-1/2 bg-black rounded-md grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            // placeholder={lang.hindi.gptSearchPlaceholder}
            placeholder={lang[languageKey].gptSearchPlaceholder}
            className="p-2 m-2 col-span-9 rounded-md"
          ></input>
          <button
            className="bg-customColorBase m-2 col-span-3 rounded-md text-white font-semibold"
            onClick={handleGptSearchClick}
          >
            {/* {lang.hindi.search} */}
            {lang[languageKey].search}
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default GptSearch;
