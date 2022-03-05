import {useSelector, useDispatch} from "react-redux";
import { setFavoriteItems } from "../store/actions/fav";

function FavCard(props) {
    
    const {cardDetails} = props;

    const favSet = useSelector((state) => state.favs);
    const dispatch = useDispatch();

    const removeFavItem = () => {
        dispatch(setFavoriteItems(favSet.filter((item)=> item.id !== cardDetails.id)));
    }
    

    return (
        <>
            <div className="card" style={{width: "21rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${cardDetails.poster_path}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{ cardDetails.title }</h5>
                    <p className="card-text">{ cardDetails.original_title }</p>
                    <p className="card-text">{ cardDetails.overview }</p>
                    <p className="card-text">Rate: { cardDetails.vote_average }</p>
                    <button type="button" onClick={() => removeFavItem()} className="btn btn-outline-danger"><i className="bi bi-trash-fill"></i></button>
                </div>
            </div>
        </>
    )
}

export default FavCard;