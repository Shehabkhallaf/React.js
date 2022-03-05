import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/network";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movieDetails)

  return (
    <>
     <div className="container my-5">
    <div class="card mb-3 shadow">
    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{movieDetails.title}</h5>
      <p className="card-text fs-6">{movieDetails.overview}</p>
      <p className="card-text"><small class="text-muted">popularity: {movieDetails.popularity}</small></p>
    </div>
    </div>
    </div>
    </>
  );
}