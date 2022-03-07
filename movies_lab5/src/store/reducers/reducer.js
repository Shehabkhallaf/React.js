import { combineReducers } from "redux";
import { fav } from "./fav";
import movies from "./movies";

export default combineReducers({
    fav,
    movies
});