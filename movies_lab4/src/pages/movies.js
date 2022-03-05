import { useEffect, useState } from "react";
import { axiosInstance } from "../network/network";
import { Link } from "react-router-dom";


export default function Movies() {
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
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="col-lg-2" key={movie.id}>
                <Link to={`/favorites/${movie.id}`}>
                    <i class="fa-solid fa-star fs-3 d-flex justify-content-center text-decoration-none text-light bg-dark p-2"></i>
                  </Link>
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
