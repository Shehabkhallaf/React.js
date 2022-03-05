import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/network";

export default function MovieDetails() {
  const [movieeDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movieeDetails)

  return (
    <>
     <div className="container my-5">
    <div class="card mb-3 shadow">
    <img src={`https://image.tmdb.org/t/p/w500/${movieeDetails.poster_path}`} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{movieeDetails.title}</h5>
      <p className="card-text fs-6">{movieeDetails.overview}</p>
      <p className="card-text"><small class="text-muted">popularity: {movieeDetails.popularity}</small></p>
    </div>
    </div>
    </div>
    </>
  );
}