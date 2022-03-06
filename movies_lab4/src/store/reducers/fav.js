import { COUNT_MOVIE, FAVOURIT_MOVIE, COLOR_MOVIE } from "../actions/fav";
const INITIAL_STATE = {
  favourites: [],
  count: 0,
  color: "yellow",
};
export default function Favourit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FAVOURIT_MOVIE:
      return {
        ...state,
        favourites: action.payload,
      };
    case COUNT_MOVIE:
      return {
        ...state,
        count: action.payload,
      };
    case COLOR_MOVIE:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}