import MovieCard from "./movieCard";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movies";
import { LanguageChanger } from "../language/changeLanguage";


function MovieList() {
    const {language} = useContext(LanguageChanger);
    const cards = useSelector((state)=> state.movies.movies );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(language);
        dispatch(getMovies(language));

    }, [language]);

    return (
        <>
    <div className="container my-5 justify-content-center">
        <div className="row d-flex justify-content-center">
                {cards.map((card) => {
                    return <div className="col-4 my-3" key={card.id}>
                        <MovieCard cardDetails={card}  />
                    </div>
                })}
        </div>
    </div>
            
            
        </>
    )
}

export default MovieList;