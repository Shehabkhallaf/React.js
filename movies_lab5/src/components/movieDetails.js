import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneMovie } from "../store/actions/movies";
import { useDispatch, useSelector } from "react-redux";

function MovieDetails() {
    const movieDetails = useSelector((state)=> state.movies.movie);
    const dispatch = useDispatch();
    const param = useParams();
    useEffect(() => {
        dispatch(getOneMovie(param.id))

    }, [])
    return (
        <>
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movieDetails.poster_path})`,backgroundPostion:"bottom",backgroundSize:"cover",backgroundAttachment: "fixed",height:"100%"}}>
        <div className="container">
            <div className="row">
            <div className="bg-transparent my-5">
                <div className="row g-0 my-5 rounded">
                    <div className="col-md-3">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light h-100" style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
                            <h1 className="card-title my-4">{movieDetails.title}</h1>
                            <p className="card-text h4 mb-5">{movieDetails.overview}</p>
                            <p className="card-text mb-2">{movieDetails.original_title}</p>
                            <p className="card-text mb-2">Rate: {movieDetails.vote_average}</p>
                            <p className="card-text mb-2">Votes: {movieDetails.vote_count}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
         </>
    )
}

export default MovieDetails;