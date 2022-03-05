import { useEffect, useState } from "react";
import MovieDetails from "./movieDetails";
import { axiosInstance } from "../network/network";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies" ,{
          params :{
              limit : "9"
          },
      })
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));

  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
            <MovieDetails />
            {movies.map((movie)=>{
                return (
                    <link to={`/moviedetails/${movie.id}`} key={movie}>
                        <div>{movie}</div>
                    </link>
                )
            })}
            </div>
      </div>
    </div>
  );
}
