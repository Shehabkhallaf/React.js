import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addORremoveFavourite,changeCount } from "../store/actions/fav";
import "./favorites.css";

export default function Favourite() {
  const fav = useSelector((state) => state.Favourite.Favourites);
  let cnt = useSelector((state) => state.Favourite.count);
  const dispatch = useDispatch();

  const removeFavourite = (movie) => {
    const newData = [...fav];
    const editData = newData.filter((data) => data !== movie);
    dispatch(addORremoveFavourite(editData));
    dispatch(changeCount(--cnt));
  };
  return (
    <div id="movies" className=" container-fluid">
      <h1>FAVOURIT_MOVIE</h1>
      <div className="row">
        {fav.map((movie) => {
          return (
            <div key={movie.id} className="col-4">
              <div className="card">
                <button
                  onClick={() => removeFavourite(movie)}
                  className="btn btn-dark"
                >
                  <i className="fa-solid text-danger fa-trash-can"></i>
                </button>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  style={{ maxHeight: 500 }}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="card-text">{movie.title}</p>
                  <p className="card-text">{movie.vote_average}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}