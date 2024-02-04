import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";
//Above instead of gptReducer or movieReducer and others can also write gptSlice or others
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
});
export default appStore;
