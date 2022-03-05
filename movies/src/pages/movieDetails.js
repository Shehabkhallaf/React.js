import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/network";

export default function MovieDetails() {
  const [movieDetails, setMoviesDitails] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movies/${params.id}`)
      .then((res) => setMoviesDitails(res.data))
      .catch((err) => console.log(err));
    }, [])

  return <div> { movieDetails } </div>;
}
