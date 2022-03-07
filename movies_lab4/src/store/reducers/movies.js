const INITIA_STATE = {
  moviesList: [],
  movieDetails: {},
};

export default function movies(state = INITIA_STATE, action) {
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return {
        ...state,
        moviesList: action.payload,
      };
    case "GET_USER_DETAILS":
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
}
