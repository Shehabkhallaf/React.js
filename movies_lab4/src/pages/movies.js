import { useEffect, useState } from "react";
import { axiosInstance } from "../network/network";
import { addORremoveFavourite,changeCount} from "../store/actions/fav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Movies(props) {
  const [movies, setMovies] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axiosInstance
      .get("/popular", {
        params: {
          page: pageNumber,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [pageNumber]);
  const changePageNumer = () => {
    if (pageNumber > 1) {
      setPageNumber(--pageNumber);
    }
  };
  const increasePageNumer = () => {
    setPageNumber(++pageNumber);
  };
  const { movie } = props;
  const fav = useSelector((state) => state.Favourite.favourites);
  let cnt = useSelector((state) => state.Favourite.count);
  const dispatch = useDispatch();
  const addFavourite = (ev, movie) => {
    const newData = [...fav];
    if (!newData.includes(movie)) {
      newData.push(movie);
     
      ev.target.style.color = "yellow";
      dispatch(changeCount(++cnt));
      dispatch(addORremoveFavourite(newData));
      return;
    }
    const editData = newData.filter((data) => data !== movie);
    dispatch(changeCount(--cnt));
    ev.target.style.color ="white";
    dispatch(addORremoveFavourite(editData));
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="col-lg-2" key={movie.id}>
                <button
                  onClick={(event) => addFavourite(event, movie)}
                  className="btn btn-dark"
                >
                  <i className={`fs-3 fa-solid fa-star`}></i>
                </button>
                <div className="card border-0 shadow rounded-3">
                  <Link to={`/movie-details/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="card-img-top"
                      alt=""
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title fs-6">{movie.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-3">
          <Link
            type="button"
            className="btn btn-outline-dark m-5 px-4"
            onClick={changePageNumer}
          >
            Prev
          </Link>
          <Link
            type="button"
            className="btn btn-outline-dark px-4"
            onClick={increasePageNumer}
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
}
