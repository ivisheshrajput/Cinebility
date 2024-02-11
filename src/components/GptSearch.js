import React, { useRef } from "react";
import BGImage from "../../src/assets/login-bg.jpg";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTION } from "../utils/constants";
import { json } from "react-router-dom";
import { addGPTMovieResult } from "../utils/gptSlice";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GptSearch = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.language.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

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
    if (!gptResults.choices[0]?.message?.content) {
      alert("Result Not Found Might Be API not working of ChatGPT fix OpenAI");
    }
    console.log(gptResults.choices[0]?.message?.content);

    //Give Result like this (Avengers: Endgame, Avengers: Infinity War, The Avengers, Avengers: Age of Ultron, Avengers: Age of Extinction)
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    console.log(gptMovies);
    //Above split will give array of movies by splitting it from "," comma

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //above will run and give 5 result so 5 promise for that we use promise.resolve
    const tmdbResults = await Promise.all(promiseArray);
    //above will resolve all the promise and then give the results and this result will be the search from tmdb api
    console.log(tmdbResults, "xxxxxxx");
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      <img src={BGImage} alt="" className="h-screen w-screen  fixed" />
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
      <div className="relative my-4">
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
